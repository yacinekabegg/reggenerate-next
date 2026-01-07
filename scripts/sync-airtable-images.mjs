import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import path from "path";
import Airtable from "airtable";

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;
const TABLE = process.env.AIRTABLE_TABLE_NAME || "Posts";
const VIEW = process.env.AIRTABLE_VIEW_NAME || "PublishedView";
const CLIENTS_TABLE =
  process.env.AIRTABLE_CLIENTS_TABLE_NAME || "ClientsProductsPublished";
const CLIENTS_VIEW =
  process.env.AIRTABLE_CLIENTS_VIEW_NAME || "Grid view";

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  console.log("⛔ No Airtable credentials. Skipping image sync.");
  process.exit(0);
}

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
const BLOG_OUTPUT_DIR = path.join(process.cwd(), "public", "blog-covers");
const CLIENTS_OUTPUT_DIR = path.join(
  process.cwd(),
  "public",
  "clients-products"
);
const SUPPORTED_IMAGE_EXTS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"];

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function download(url, filePath) {
  const res = await fetch(url);
  if (!res.ok) {
    console.log(`❌ Failed to download ${url} (${res.status})`);
    return;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filePath, buffer);
  console.log(`✓ Saved: ${filePath}`);
}

function isTruthy(val) {
  if (typeof val === "boolean") return val;
  if (typeof val === "number") return val === 1;
  if (typeof val === "string") {
    const normalized = val.trim().toLowerCase();
    return (
      normalized === "1" ||
      normalized === "true" ||
      normalized === "oui" ||
      normalized === "on"
    );
  }
  return false;
}

function extractExtension(filename) {
  if (!filename) return ".png";
  const cleaned = filename.split("?")[0] || filename;
  const dot = cleaned.lastIndexOf(".");
  if (dot === -1) return ".png";
  const ext = cleaned.slice(dot).toLowerCase();
  return SUPPORTED_IMAGE_EXTS.includes(ext) ? ext : ".png";
}

function removeExistingVariants(dir, recordId) {
  for (const ext of SUPPORTED_IMAGE_EXTS) {
    const candidate = path.join(dir, `${recordId}${ext}`);
    if (fs.existsSync(candidate)) {
      fs.unlinkSync(candidate);
    }
  }
}

async function syncBlogCovers() {
  console.log("🔄 Sync Airtable cover images -> public/blog-covers ...");
  await ensureDir(BLOG_OUTPUT_DIR);

  // 1) On récupère tous les posts actifs
  const records = await base(TABLE)
    .select({
      view: VIEW,
      fields: ["Slug", "CoverImage"],
      pageSize: 100,
    })
    .all();

  // Ensemble des slugs actifs (pour le nettoyage)
  const activeSlugs = new Set();

  // 2) On télécharge / met à jour les images pour chaque slug actif
  for (const rec of records) {
    const fields = rec.fields;
    const slug = fields["Slug"];

    if (!slug || typeof slug !== "string") {
      console.log(`⚠️ Skip record ${rec.id} (no Slug)`);
      continue;
    }

    activeSlugs.add(slug);

    const attachments = fields["CoverImage"];
    if (!Array.isArray(attachments) || !attachments[0] || !attachments[0].url) {
      console.log(`⚠️ No CoverImage for slug=${slug}`);
      continue;
    }

    const imgUrl = attachments[0].url;
    const dest = path.join(BLOG_OUTPUT_DIR, `${slug}.png`);

    try {
      await download(imgUrl, dest);
    } catch (err) {
      console.log(`❌ Error processing slug=${slug}`, err);
    }
  }

  // 3) Nettoyage : on supprime les .png dont le slug n'est plus actif
  const existingFiles = fs.readdirSync(BLOG_OUTPUT_DIR);

  for (const file of existingFiles) {
    if (!file.endsWith(".png")) continue;

    const basename = file.replace(/\.png$/, "");
    if (!activeSlugs.has(basename)) {
      const toRemove = path.join(BLOG_OUTPUT_DIR, file);
      fs.unlinkSync(toRemove);
      console.log(`🧹 Removed unused cover: ${file}`);
    }
  }

  console.log("✨ Blog covers sync completed.");
}

async function syncClientProductImages() {
  console.log("🔄 Sync Airtable client images -> public/clients-products ...");
  await ensureDir(CLIENTS_OUTPUT_DIR);

  const records = await base(CLIENTS_TABLE)
    .select({
      view: CLIENTS_VIEW,
      fields: ["Active", "Image"],
      pageSize: 100,
    })
    .all();

  const activeIds = new Set();

  for (const rec of records) {
    const fields = rec.fields;
    const isActive = isTruthy(fields["Active"]);
    if (!isActive) continue;

    activeIds.add(rec.id);
    const attachments = fields["Image"];
    if (!Array.isArray(attachments) || !attachments[0] || !attachments[0].url) {
      console.log(`⚠️ No Image attachment for client product ${rec.id}`);
      continue;
    }

    const first = attachments[0];
    const ext = extractExtension(first.filename || first.url);
    const imgUrl = first.url;
    const dest = path.join(CLIENTS_OUTPUT_DIR, `${rec.id}${ext}`);

    try {
      removeExistingVariants(CLIENTS_OUTPUT_DIR, rec.id);
      await download(imgUrl, dest);
    } catch (err) {
      console.log(`❌ Error processing client product ${rec.id}`, err);
    }
  }

  const existingFiles = fs.existsSync(CLIENTS_OUTPUT_DIR)
    ? fs.readdirSync(CLIENTS_OUTPUT_DIR)
    : [];

  for (const file of existingFiles) {
    const ext = path.extname(file).toLowerCase();
    if (!SUPPORTED_IMAGE_EXTS.includes(ext)) continue;
    const basename = path.basename(file, ext);
    if (!activeIds.has(basename)) {
      const toRemove = path.join(CLIENTS_OUTPUT_DIR, file);
      fs.unlinkSync(toRemove);
      console.log(`🧹 Removed unused client image: ${file}`);
    }
  }

  console.log("✨ Client products sync completed.");
}

async function syncImages() {
  await syncBlogCovers();
  await syncClientProductImages();
}

syncImages().catch((e) => {
  console.error("❌ Fatal error:", e);
  process.exit(1);
});

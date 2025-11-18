import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import path from "path";
import Airtable from "airtable";

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;
const TABLE = process.env.AIRTABLE_TABLE_NAME || "Posts";
const VIEW = process.env.AIRTABLE_VIEW_NAME || "PublishedView";

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  console.log("⛔ No Airtable credentials. Skipping image sync.");
  process.exit(0);
}

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
const OUTPUT_DIR = path.join(process.cwd(), "public", "blog-covers");

async function ensureDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
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

async function syncImages() {
  console.log("🔄 Sync Airtable cover images -> public/blog-covers ...");
  await ensureDir();

  // 1) On récupère tous les posts actifs
  const records = await base(TABLE)
    .select({
      view: VIEW,
      fields: ["Slug", "CoverImage"],
      pageSize: 100,
    })
    .all();

  const activeSlugs = new Set<string>();

  // 2) On télécharge / met à jour les images pour chaque slug actif
  for (const rec of records) {
    const fields = rec.fields as Record<string, unknown>;
    const slug = fields["Slug"];

    if (!slug || typeof slug !== "string") {
      console.log(`⚠️ Skip record ${rec.id} (no Slug)`);
      continue;
    }

    activeSlugs.add(slug);

    const attachments = fields["CoverImage"] as Array<{ url?: string }> | undefined;
    if (!Array.isArray(attachments) || !attachments[0]?.url) {
      console.log(`⚠️ No CoverImage for slug=${slug}`);
      continue;
    }

    const imgUrl = attachments[0].url as string;
    const dest = path.join(OUTPUT_DIR, `${slug}.png`);

    try {
      await download(imgUrl, dest);
    } catch (err) {
      console.log(`❌ Error processing slug=${slug}`, err);
    }
  }

  // 3) Nettoyage : on supprime les .png dont le slug n'est plus actif
  const existingFiles = fs.readdirSync(OUTPUT_DIR);

  for (const file of existingFiles) {
    if (!file.endsWith(".png")) continue;

    const basename = file.replace(/\.png$/, "");
    if (!activeSlugs.has(basename)) {
      const toRemove = path.join(OUTPUT_DIR, file);
      fs.unlinkSync(toRemove);
      console.log(`🧹 Removed unused cover: ${file}`);
    }
  }

  console.log("✨ Sync completed.");
}

syncImages().catch((e) => {
  console.error("❌ Fatal error:", e);
  process.exit(1);
});
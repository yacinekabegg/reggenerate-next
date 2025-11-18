import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import path from "path";
import Airtable from "airtable";
import fetch from "node-fetch";

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
    console.log(`❌ Failed to download ${url}`);
    return;
  }

  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(buffer));
  console.log(`✓ Saved: ${filePath}`);
}

async function syncImages() {
  console.log("🔄 Sync Airtable cover images...");

  await ensureDir();

  const records = await base(TABLE)
    .select({
      view: VIEW,
      fields: ["Slug", "CoverImage"],
      pageSize: 100,
    })
    .all();

  for (const rec of records) {
    const fields = rec.fields;
    const slug = fields["Slug"];

    if (!slug) continue;

    const attachments = fields["CoverImage"];
    if (!attachments || !Array.isArray(attachments) || !attachments[0]?.url) {
      console.log(`⚠️ No image for slug=${slug}`);
      continue;
    }

    const imgUrl = attachments[0].url;
    const dest = path.join(OUTPUT_DIR, `${slug}.png`);

    try {
      await download(imgUrl, dest);
    } catch (err) {
      console.log(`❌ Error processing slug=${slug}`, err);
    }
  }

  console.log("✨ Sync completed.");
}

syncImages();

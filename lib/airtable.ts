// lib/airtable.ts
import "server-only";
import Airtable, { Attachment, FieldSet, Records, Record as ATRecord } from "airtable";

export type Category = "all" | "innovation" | "sante" | "marche" | "technique" | "beaute";

export type ArticleCard = {
  href: string;
  image: string;
  label: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  category: Category;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  html: string;
  categoryLabel: string;
  categoryColor?: string;
  coverUrl?: string;
  publishedAt?: string;
  readMinutes?: number;
};

// ---------- ENV & BASE ----------
const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;
if (!AIRTABLE_API_KEY) throw new Error("Missing env AIRTABLE_API_KEY");
if (!AIRTABLE_BASE_ID) throw new Error("Missing env AIRTABLE_BASE_ID");

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

// NOTE: ces valeurs peuvent être des noms ("Site internet Reggenerate", "PublishedView")
// ou des IDs ("tblXXXX", "viwXXXX").
const TABLE = process.env.AIRTABLE_TABLE_NAME || "Posts";
const VIEW = process.env.AIRTABLE_VIEW_NAME || "PublishedView";

// ---------- HELPERS ----------
function formatDateFR(d?: string | Date) {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

function markdownToHtml(md: string) {
  const esc = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
  return md
    .split(/\n{2,}/)
    .map((p) => `<p>${esc(p).replace(/\n/g, "<br/>")}</p>`)
    .join("\n");
}

function words(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function firstAttachmentUrl(val: unknown): string | undefined {
  const arr = val as Attachment[] | undefined;
  return Array.isArray(arr) && arr[0]?.url ? arr[0].url : undefined;
}

function singleSelectToString(val: unknown): string {
  // suivant la config, Airtable renvoie parfois juste le "name" (string) ou un objet {name}
  if (typeof val === "string") return val;
  if (val && typeof val === "object" && "name" in (val as Record<string, unknown>)) {
    const name = (val as { name?: string }).name;
    return name ?? "";
  }
  return "";
}

function getString(rec: ATRecord<FieldSet>, field: string, fallback = ""): string {
  const v = rec.get(field);
  return typeof v === "string" ? v : fallback;
}

function getNumber(rec: ATRecord<FieldSet>, field: string): number | undefined {
  const v = rec.get(field);
  const n = typeof v === "number" ? v : Number.isFinite(Number(v)) ? Number(v) : NaN;
  return Number.isFinite(n) ? (n as number) : undefined;
}

// ---------- LISTE (/blog) ----------
export async function fetchArticlesFromAirtable(): Promise<ArticleCard[]> {
  const records: Records<FieldSet> = await base(TABLE).select({ view: VIEW, pageSize: 100 }).all();

  return records.map((r) => {
    const slug = getString(r, "Slug");
    const cover = firstAttachmentUrl(r.get("CoverImage"));
    const label = getString(r, "CategoryLabel", "Article");
    const title = getString(r, "Title");
    const excerpt = getString(r, "Excerpt");
    const catRaw = singleSelectToString(r.get("Category"));
    const category = (["innovation", "sante", "marche", "technique", "beaute"].includes(catRaw)
      ? catRaw
      : "innovation") as Category;
    const readMin = getNumber(r, "ReadMinutes");
    const publishedAt = r.get("PublishedAt") as string | Date | undefined;

    return {
      href: `/blog/${slug}`,
      image: cover || "/images/hero-blog.png",
      label,
      title,
      date: formatDateFR(publishedAt),
      read: readMin ? `${readMin} min` : "4 min",
      excerpt,
      category,
    };
  });
}

// ---------- ARTICLE (/blog/[slug]) ----------
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const recs: Records<FieldSet> = await base(TABLE)
    .select({
      view: VIEW,
      maxRecords: 1,
      filterByFormula: `{Slug} = "${slug}"`,
    })
    .all();

  if (!recs.length) return null;
  const r = recs[0];

  const rawContent = getString(r, "Content", "");
  const contentType = getString(r, "ContentType", "markdown").toLowerCase();
  const html = contentType === "html" ? rawContent : markdownToHtml(rawContent);

  const cover = firstAttachmentUrl(r.get("CoverImage"));
  const explicitRead = getNumber(r, "ReadMinutes");
  const computedRead = explicitRead ?? Math.max(1, Math.round(words(rawContent) / 200));

  return {
    id: r.id,
    slug,
    title: getString(r, "Title", ""),
    excerpt: getString(r, "Excerpt", ""),
    html,
    categoryLabel: getString(r, "CategoryLabel", "Article"),
    categoryColor: getString(r, "CategoryColor", "#2eb2a4"),
    coverUrl: cover,
    publishedAt: formatDateFR(r.get("PublishedAt") as string | Date | undefined),
    readMinutes: computedRead,
  };
}

// ---------- SLUGS (SSG) ----------
export async function fetchAllSlugs(): Promise<string[]> {
  const recs: Records<FieldSet> = await base(TABLE)
    .select({ view: VIEW, fields: ["Slug"], pageSize: 100 })
    .all();
  return recs.map((r) => getString(r, "Slug")).filter(Boolean);
}
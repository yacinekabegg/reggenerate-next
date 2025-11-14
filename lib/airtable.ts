import "server-only";
import Airtable from "airtable";

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

if (!AIRTABLE_API_KEY) throw new Error("Missing env AIRTABLE_API_KEY");
if (!AIRTABLE_BASE_ID) throw new Error("Missing env AIRTABLE_BASE_ID");

// Categories
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

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
const TABLE = process.env.AIRTABLE_TABLE_NAME || "Posts";
const VIEW  = process.env.AIRTABLE_VIEW_NAME || "PublishedView";

// ------- helpers -------
function formatDateFR(d?: string | Date) {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

function words(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

/** Single select → string */
function singleSelectToString(val: unknown): string {
  if (typeof val === "string") return val;
  if (val && typeof val === "object" && "name" in (val as Record<string, unknown>)) {
    const name = (val as { name?: string }).name;
    return name ?? "";
  }
  return "";
}

function mapCategoryToSlug(val: unknown): Category {
  const raw = (typeof val === "string" ? val : singleSelectToString(val)).trim();
  const lower = raw
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " et ")
    .toLowerCase();

  const MAP: Record<string, Category> = {
    "eggspertise technique": "technique",
    "sante et bien-etre": "sante",
    "marche et tendances": "marche",
    "innovations": "innovation",
    "beaute peau et cheveux": "beaute",
    "technique": "technique",
    "sante": "sante",
    "marche": "marche",
    "innovation": "innovation",
    "beaute": "beaute",
  };
  if (MAP[lower]) return MAP[lower];

  if (lower.includes("tech")) return "technique";
  if (lower.includes("sante") || lower.includes("bien etre")) return "sante";
  if (lower.includes("tendance") || lower.includes("marche")) return "marche";
  if (lower.includes("innov")) return "innovation";
  if (lower.includes("beaute") || lower.includes("cheveu")) return "beaute";
  return "innovation";
}

function decodeHtmlEntities(s: string): string {
  return s
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x3C;/gi, "<")
    .replace(/&#x3E;/gi, ">")
    .replace(/&#x26;/gi, "&")
    .replace(/&#x22;/gi, '"')
    .replace(/&#x27;/gi, "'");
}

// ------- LIST (/blog) -------
export async function fetchArticlesFromAirtable(): Promise<ArticleCard[]> {
  const records = await base(TABLE).select({ view: VIEW, pageSize: 100 }).all();

  return records.map((r) => {
    const f = r.fields as Record<string, unknown>;
    const slug = (f["Slug"] as string) || "";
    const coverArr = Array.isArray(f["CoverImage"]) ? (f["CoverImage"] as Array<{ url?: string }>) : [];
    const cover = coverArr[0]?.url;

    const label = (f["CategoryLabel"] as string) || "Article";
    const title = (f["Title"] as string) || "";
    const excerpt = (f["Excerpt"] as string) || "";

    const cat = mapCategoryToSlug(f["CategoryLabel"]);
    const readMin = (f["ReadMinutes"] as number | undefined);
    const publishedAt = f["PublishedAt"] as string | Date | undefined;

    return {
      href: `/blog/${slug}`,
      image: cover || "/images/hero-blog.png",
      label,
      title,
      date: formatDateFR(publishedAt),
      read: readMin ? `${readMin} min` : "4 min",
      excerpt,
      category: cat,
    };
  });
}

// ------- ARTICLES (/blog/[slug]) -------
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const recs = await base(TABLE).select({
    view: VIEW,
    maxRecords: 1,
    filterByFormula: `{Slug} = "${slug}"`,
  }).all();

  if (!recs.length) return null;
  const r = recs[0];
  const f = r.fields as Record<string, unknown>;

  const rawContent = (f["Content"] as string) || "";
  // 🔒 On considère TOUT comme du HTML (et on décode si nécessaire)
  const html = decodeHtmlEntities(rawContent);

  const coverArr = Array.isArray(f["CoverImage"]) ? (f["CoverImage"] as Array<{ url?: string }>) : [];
  const cover = coverArr[0]?.url;

  const explicitRead = Number(f["ReadMinutes"]);
  const computedRead = Number.isFinite(explicitRead) && explicitRead > 0
    ? explicitRead
    : Math.max(1, Math.round(words(rawContent) / 200));

  return {
    id: r.id,
    slug,
    title: (f["Title"] as string) || "",
    excerpt: (f["Excerpt"] as string) || "",
    html, 
    categoryLabel: (f["CategoryLabel"] as string) || "Article",
    categoryColor: (f["CategoryColor"] as string) || "#2eb2a4",
    coverUrl: cover,
    publishedAt: formatDateFR(f["PublishedAt"] as string | Date | undefined),
    readMinutes: computedRead,
  };
}

// ------- SLUGS (SSG) -------
export async function fetchAllSlugs(): Promise<string[]> {
  const recs = await base(TABLE).select({ view: VIEW, fields: ["Slug"], pageSize: 100 }).all();
  return recs
    .map(r => (r.fields as Record<string, unknown>)["Slug"] as string)
    .filter(Boolean);
}
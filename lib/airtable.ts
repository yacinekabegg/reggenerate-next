import "server-only";
import fs from "fs";
import path from "path";
import Airtable from "airtable";

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

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
  /** Date ISO brute (AAAA-MM-JJ), pour les données structurées */
  publishedAtISO?: string;
  readMinutes?: number;
};

function makeBase(): Airtable.Base | null {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) return null;
  try {
    return new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
  } catch {
    return null;
  }
}

const TABLE = process.env.AIRTABLE_TABLE_NAME || "Posts";
const VIEW = process.env.AIRTABLE_VIEW_NAME || "PublishedView";

// Publication programmée : un article actif n'apparaît qu'à partir de sa date
// "PublishedAt" (ou tout de suite s'il n'en a pas). Le site étant reconstruit
// chaque matin, il suffit de cocher "Active" et de mettre une date future.
const SCHEDULED = "OR({PublishedAt} = BLANK(), NOT(IS_AFTER({PublishedAt}, TODAY())))";


// Couverture : public/blog-covers/{slug}.png si l'image a été synchronisée depuis
// Airtable, sinon image générique (évite une image cassée sur les articles sans couverture).
const DEFAULT_COVER = "/images/hero-blog.png";
function coverFor(slug: string): string {
  if (!slug) return DEFAULT_COVER;
  const file = path.join(process.cwd(), "public", "blog-covers", `${slug}.png`);
  return fs.existsSync(file) ? `/blog-covers/${slug}.png` : DEFAULT_COVER;
}

// Auteur affiché et déclaré aux moteurs : les articles publiés à partir du
// 1er novembre 2026 sont signés par Chloé Vernet ; les plus anciens restent
// attribués à Circul'Egg.
export const ARTICLE_AUTHOR = {
  name: "Chloé Vernet",
  jobTitle: "Sales & Marketing Manager",
};
const AUTHOR_FROM = "2026-11-01";
export function authorFor(publishedAtISO?: string) {
  return publishedAtISO && publishedAtISO >= AUTHOR_FROM ? ARTICLE_AUTHOR : undefined;
}

// ------- helpers -------
function formatDateFR(d?: string | Date) {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
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
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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
  const base = makeBase();
  if (!base) return [];

  const records = await base(TABLE)
    .select({ view: VIEW, pageSize: 100, filterByFormula: SCHEDULED })
    .all();

  return records.map((r) => {
    const f = r.fields as Record<string, unknown>;
    const slug = (f["Slug"] as string) || "";

    const cover = coverFor(slug);

    const label = (f["CategoryLabel"] as string) || "Article";
    const title = (f["Title"] as string) || "";
    const excerpt = (f["Excerpt"] as string) || "";

    const cat = mapCategoryToSlug(f["CategoryLabel"]);
    const readMin = f["ReadMinutes"] as number | undefined;
    const publishedAt = f["PublishedAt"] as string | Date | undefined;

    return {
      href: `/blog/${slug}`,
      image: cover,
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
  const base = makeBase();
  if (!base) return null;

  const recs = await base(TABLE)
    .select({
      view: VIEW,
      maxRecords: 1,
      filterByFormula: `AND({Slug} = "${slug}", ${SCHEDULED})`,
    })
    .all();

  if (!recs.length) return null;
  const r = recs[0];
  const f = r.fields as Record<string, unknown>;

  const rawContent = (f["Content"] as string) || "";
  // 🔒 On considère TOUT comme du HTML (et on décode si nécessaire)
  const html = decodeHtmlEntities(rawContent);

  const cover = coverFor(slug);

  const explicitRead = Number(f["ReadMinutes"]);
  const computedRead =
    Number.isFinite(explicitRead) && explicitRead > 0
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
    publishedAtISO: typeof f["PublishedAt"] === "string" ? (f["PublishedAt"] as string) : undefined,
    readMinutes: computedRead,
  };
}

// ------- SLUGS (SSG) -------
export async function fetchAllSlugs(): Promise<string[]> {
  const base = makeBase();
  if (!base) return [];

  const recs = await base(TABLE)
    .select({ view: VIEW, fields: ["Slug"], pageSize: 100, filterByFormula: SCHEDULED })
    .all();

  return recs
    .map((r) => (r.fields as Record<string, unknown>)["Slug"] as string)
    .filter(Boolean);
}

// ------- MÉTA DES ARTICLES PUBLIÉS (sitemap, llms.txt) -------
export type PublishedMeta = { slug: string; title: string; excerpt: string; publishedAtISO?: string };
export async function fetchPublishedMeta(): Promise<PublishedMeta[]> {
  const base = makeBase();
  if (!base) return [];
  const recs = await base(TABLE)
    .select({
      view: VIEW,
      fields: ["Slug", "Title", "Excerpt", "PublishedAt"],
      pageSize: 100,
      filterByFormula: SCHEDULED,
    })
    .all();
  return recs
    .map((r) => {
      const f = r.fields as Record<string, unknown>;
      return {
        slug: (f["Slug"] as string) || "",
        title: (f["Title"] as string) || "",
        excerpt: (f["Excerpt"] as string) || "",
        publishedAtISO: typeof f["PublishedAt"] === "string" ? (f["PublishedAt"] as string) : undefined,
      };
    })
    .filter((p) => p.slug);
}

// lib/airtable.ts
import "server-only";
import Airtable from "airtable";

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME, AIRTABLE_VIEW_NAME } = process.env;

// 👉 Gardes (erreurs claires au lieu de crash opaque)
if (!AIRTABLE_API_KEY) {
  throw new Error("Missing env AIRTABLE_API_KEY");
}
if (!AIRTABLE_BASE_ID) {
  throw new Error("Missing env AIRTABLE_BASE_ID");
}

// Catégories que tu utilises dans la page liste
export type Category = "all" | "innovation" | "sante" | "marche" | "technique" | "beaute";

export type ArticleCard = {
  href: string;      // /blog/slug
  image: string;     // URL cover
  label: string;     // pastille
  title: string;
  date: string;      // "14 nov. 2025"
  read: string;      // "5 min"
  excerpt: string;
  category: Category;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  html: string;               // contenu rendu côté serveur
  categoryLabel: string;
  categoryColor?: string;
  coverUrl?: string;
  publishedAt?: string;
  readMinutes?: number;
};

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID!);

const TABLE = process.env.AIRTABLE_TABLE_NAME || "Posts";
const VIEW  = process.env.AIRTABLE_VIEW_NAME || "PublishedView";

// --- helpers ---
function formatDateFR(d?: string | Date) {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

// Markdown minimal (tu peux switcher vers 'marked' pour un rendu complet)
function markdownToHtml(md: string) {
  const esc = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]!));
  return md
    .split(/\n{2,}/)
    .map(p => `<p>${esc(p).replace(/\n/g, "<br/>")}</p>`)
    .join("\n");
}
function words(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

// --- LISTE (/blog) ---
export async function fetchArticlesFromAirtable(): Promise<ArticleCard[]> {
  const records = await base(TABLE).select({ view: VIEW, pageSize: 100 }).all();

  return records.map((r) => {
    const f = r.fields as any;
    const slug = f["Slug"] as string;
    const cover = Array.isArray(f["CoverImage"]) && f["CoverImage"][0]?.url;
    const label = (f["CategoryLabel"] as string) || "Article";
    const title = (f["Title"] as string) || "";
    const excerpt = (f["Excerpt"] as string) || "";
    const cat = ((f["Category"] as string) || "innovation") as Category; // si tu as un champ Category
    const readMin = f["ReadMinutes"] as number | undefined;
    const publishedAt = f["PublishedAt"] as string | undefined;

    return {
      href: `/blog/${slug}`,
      image: cover || "/images/hero-blog.png",
      label,
      title,
      date: formatDateFR(publishedAt),
      read: readMin ? `${readMin} min` : "4 min",
      excerpt,
      category: ["innovation","sante","marche","technique","beaute"].includes(cat) ? cat : "innovation",
    };
  });
}

// --- ARTICLE (/blog/[slug]) ---
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const recs = await base(TABLE).select({
    view: VIEW,                // <-- ne retourne QUE les Active=checked
    maxRecords: 1,
    filterByFormula: `{Slug} = "${slug}"`,
  }).all();

  if (!recs.length) return null;
  const r = recs[0];
  const f = r.fields as any;

  const rawContent = (f["Content"] as string) || "";
  const contentType = ((f["ContentType"] as string) || "markdown").toLowerCase();
  const html = contentType === "html" ? rawContent : markdownToHtml(rawContent);

  const cover = Array.isArray(f["CoverImage"]) && f["CoverImage"][0]?.url;
  const rm = Number(f["ReadMinutes"]) || Math.max(1, Math.round(words(rawContent) / 200)); // ~200wpm

  return {
    id: r.id,
    slug,
    title: (f["Title"] as string) || "",
    excerpt: (f["Excerpt"] as string) || "",
    html,
    categoryLabel: (f["CategoryLabel"] as string) || "Article",
    categoryColor: (f["CategoryColor"] as string) || "#2eb2a4",
    coverUrl: cover,
    publishedAt: formatDateFR(f["PublishedAt"] as string | undefined),
    readMinutes: rm,
  };
}

// --- SLUGS pour SSG ---
export async function fetchAllSlugs(): Promise<string[]> {
  const recs = await base(TABLE).select({ view: VIEW, fields: ["Slug"], pageSize: 100 }).all();
  return recs.map(r => (r.fields as any)["Slug"]).filter(Boolean);
}
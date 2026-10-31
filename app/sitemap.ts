import type { MetadataRoute } from "next";
import { fetchPublishedMeta, type PublishedMeta } from "@/lib/airtable";
import {
  DRAFT_BLOG_SLUGS,
  PAGES,
  PAGES_EN,
  SITE_UPDATED,
  SITE_URL,
  STATIC_BLOG_ARTICLES,
} from "@/lib/seo";

export const dynamic = "force-static";

// Plan du site pour Google : pages principales (français et anglais, avec
// leurs correspondances hreflang), articles codés en dur publiés, et articles
// Airtable de la vue publiée (relu à chaque reconstruction du site).
function alternates(fr?: string, en?: string) {
  const languages: Record<string, string> = {};
  if (fr) languages.fr = `${SITE_URL}${fr}`;
  if (en) languages.en = `${SITE_URL}${en}`;
  if (fr) languages["x-default"] = `${SITE_URL}${fr}`;
  return Object.keys(languages).length > 1 ? { languages } : undefined;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Date fixe pour les pages principales : un lastmod qui change à chaque
  // reconstruction quotidienne n'aurait aucun sens pour Google.
  const updated = new Date(SITE_UPDATED);
  const main = [
    [PAGES.home, PAGES_EN.home],
    [PAGES.ingredient, PAGES_EN.ingredient],
    [PAGES.readyToMarket, PAGES_EN.readyToMarket],
    [PAGES.clients, PAGES_EN.clients],
    [PAGES.blog, PAGES_EN.blog],
  ];
  const legal = [
    [PAGES.mentionsLegales, PAGES_EN.mentionsLegales],
    [PAGES.cgu, PAGES_EN.cgu],
    [PAGES.confidentialite, PAGES_EN.confidentialite],
  ];

  const staticSlugs = new Set(STATIC_BLOG_ARTICLES.map((a) => a.slug));
  let frPosts: PublishedMeta[] = [];
  let enPosts: PublishedMeta[] = [];
  try {
    [frPosts, enPosts] = await Promise.all([fetchPublishedMeta("fr"), fetchPublishedMeta("en")]);
  } catch {
    frPosts = [];
    enPosts = [];
  }
  const blogPosts = frPosts.filter(
    (p) => !staticSlugs.has(p.slug) && !DRAFT_BLOG_SLUGS.includes(p.slug),
  );
  // slug français → slug anglais
  const enBySlug: Record<string, string> = {};
  for (const p of enPosts) if (p.translationOf) enBySlug[p.translationOf] = p.slug;

  const pagePair = (
    [fr, en]: (typeof main)[number],
    changeFrequency: "weekly" | "yearly",
    priority: number,
  ) =>
    [
      { url: `${SITE_URL}${fr.path}`, lastModified: updated, changeFrequency, priority, alternates: alternates(fr.path, en.path) },
      { url: `${SITE_URL}${en.path}`, lastModified: updated, changeFrequency, priority: Math.max(0.1, priority - 0.1), alternates: alternates(fr.path, en.path) },
    ] as MetadataRoute.Sitemap;

  return [
    ...main.flatMap((pair) => pagePair(pair, "weekly", pair[0].path === "/" ? 1 : 0.8)),
    ...STATIC_BLOG_ARTICLES.map((a) => ({
      url: `${SITE_URL}/blog/${a.slug}`,
      lastModified: new Date(a.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.publishedAtISO ? new Date(p.publishedAtISO) : updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: alternates(`/blog/${p.slug}`, enBySlug[p.slug] ? `/en/blog/${enBySlug[p.slug]}` : undefined),
    })),
    ...enPosts.map((p) => ({
      url: `${SITE_URL}/en/blog/${p.slug}`,
      lastModified: p.publishedAtISO ? new Date(p.publishedAtISO) : updated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: alternates(p.translationOf ? `/blog/${p.translationOf}` : undefined, `/en/blog/${p.slug}`),
    })),
    ...legal.flatMap((pair) => pagePair(pair, "yearly", 0.1)),
  ];
}

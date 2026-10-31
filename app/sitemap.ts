import type { MetadataRoute } from "next";
import { fetchPublishedMeta, type PublishedMeta } from "@/lib/airtable";
import { DRAFT_BLOG_SLUGS, PAGES, SITE_UPDATED, SITE_URL, STATIC_BLOG_ARTICLES } from "@/lib/seo";

export const dynamic = "force-static";

// Plan du site pour Google : pages principales, articles codés en dur publiés,
// et articles Airtable de la vue publiée (relu à chaque reconstruction du site).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Date fixe pour les pages principales : un lastmod qui change à chaque
  // reconstruction quotidienne n'aurait aucun sens pour Google.
  const updated = new Date(SITE_UPDATED);
  const main = [PAGES.home, PAGES.ingredient, PAGES.readyToMarket, PAGES.clients, PAGES.blog];
  const legal = [PAGES.mentionsLegales, PAGES.cgu, PAGES.confidentialite];

  const staticSlugs = new Set(STATIC_BLOG_ARTICLES.map((a) => a.slug));
  let airtablePosts: PublishedMeta[] = [];
  try {
    airtablePosts = await fetchPublishedMeta();
  } catch {
    airtablePosts = [];
  }
  const blogPosts = airtablePosts.filter(
    (p) => !staticSlugs.has(p.slug) && !DRAFT_BLOG_SLUGS.includes(p.slug),
  );

  return [
    ...main.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: updated,
      changeFrequency: "weekly" as const,
      priority: p.path === "/" ? 1 : 0.8,
    })),
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
    })),
    ...legal.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: updated,
      changeFrequency: "yearly" as const,
      priority: 0.1,
    })),
  ];
}

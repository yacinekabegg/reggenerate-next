import type { MetadataRoute } from "next";
import { fetchAllSlugs } from "@/lib/airtable";
import { DRAFT_BLOG_SLUGS, PAGES, SITE_URL, STATIC_BLOG_ARTICLES } from "@/lib/seo";

export const dynamic = "force-static";

// Plan du site pour Google : pages principales, articles codés en dur publiés,
// et articles Airtable de la vue publiée (relu à chaque reconstruction du site).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const main = [PAGES.home, PAGES.ingredient, PAGES.readyToMarket, PAGES.clients, PAGES.blog];
  const legal = [PAGES.mentionsLegales, PAGES.cgu, PAGES.confidentialite];

  const staticSlugs = new Set(STATIC_BLOG_ARTICLES.map((a) => a.slug));
  let airtableSlugs: string[] = [];
  try {
    airtableSlugs = await fetchAllSlugs();
  } catch {
    airtableSlugs = [];
  }
  const blogSlugs = airtableSlugs.filter(
    (s) => !staticSlugs.has(s) && !DRAFT_BLOG_SLUGS.includes(s),
  );

  return [
    ...main.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p.path === "/" ? 1 : 0.8,
    })),
    ...STATIC_BLOG_ARTICLES.map((a) => ({
      url: `${SITE_URL}/blog/${a.slug}`,
      lastModified: new Date(a.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legal.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.1,
    })),
  ];
}

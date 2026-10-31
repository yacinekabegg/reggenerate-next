import { fetchArticlesFromAirtable } from "@/lib/airtable";
import BlogPageClient from "./BlogPageClient";

import { PAGES_EN, pageMetadataEn } from "@/lib/seo";

export const metadata = pageMetadataEn(PAGES_EN.blog);

export const revalidate = 3600;
export const dynamic = "force-static";

export default async function BlogPageEn() {
  const articles = await fetchArticlesFromAirtable("en");
  return <BlogPageClient articles={articles} />;
}

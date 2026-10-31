import { fetchArticlesFromAirtable } from "@/lib/airtable";
import BlogPageClient from "./BlogPageClient";

import { PAGES, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(PAGES.blog);

export const revalidate = 3600;        // filet si pas de webhook
export const dynamic = "force-static"; // SSG

export default async function BlogPage() {
  const articles = await fetchArticlesFromAirtable();
  return <BlogPageClient articles={articles} />;
}
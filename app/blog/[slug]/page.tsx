// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { fetchPostBySlug, fetchAllSlugs } from "@/lib/airtable";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export const dynamic = "force-static";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return notFound();

  return (
    <BlogArticleLayout
      title={post.title}
      categoryLabel={post.categoryLabel}
      categoryColor={post.categoryColor}
      date={post.publishedAt}
      readingTime={post.readMinutes ? `${post.readMinutes}` : undefined}
      coverImage={post.coverUrl || "/images/hero-blog.png"}
    >
      <div
        className="prose prose-lg max-w-none prose-headings:text-[#4e53a3] prose-a:underline prose-a:decoration-[#2eb2a4]"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </BlogArticleLayout>
  );
}

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

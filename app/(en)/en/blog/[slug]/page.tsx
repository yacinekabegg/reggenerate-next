// app/(en)/en/blog/[slug]/page.tsx : article du blog anglais (Airtable, Lang = en)
import { notFound } from "next/navigation";
import { fetchPostBySlug, fetchAllSlugs, authorFor, authorLine } from "@/lib/airtable";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLdFromHtml, pageMetadataEn } from "@/lib/seo";

export const dynamic = "force-static";
export const dynamicParams = false;

export default async function PostPageEn({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug, "en");
  if (!post) return notFound();

  const path = `/en/blog/${slug}`;
  const author = authorFor(post.publishedAtISO);
  const faq = faqJsonLdFromHtml(post.html);
  const structured: object[] = [
    articleJsonLd({
      title: post.title,
      description: post.excerpt,
      path,
      image: post.coverUrl,
      datePublished: post.publishedAtISO,
      author,
      locale: "en",
    }),
    breadcrumbJsonLd(post.title, path, "en"),
  ];
  if (faq) structured.push(faq);

  return (
    <>
    <JsonLd data={structured} />
    <BlogArticleLayout
      locale="en"
      title={post.title}
      categoryLabel={post.categoryLabel}
      categoryColor={post.categoryColor}
      date={post.publishedAt}
      readingTime={post.readMinutes ? `${post.readMinutes}` : undefined}
      author={authorLine("en", post.publishedAtISO)}
      coverImage={post.coverUrl || "/images/hero-blog.png"}
    >
      <div
        className="prose prose-lg max-w-none prose-headings:text-[#4e53a3] prose-a:underline prose-a:decoration-[#2eb2a4]"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </BlogArticleLayout>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug, "en");
  if (!post) return {};
  const path = `/en/blog/${slug}`;
  const description = post.excerpt || undefined;
  return pageMetadataEn(
    {
      title: `${post.title} | Reggenerate™`,
      description: description ?? "",
      path,
      alt: post.translationOf ? `/blog/${post.translationOf}` : undefined,
    },
    {
      description,
      openGraph: {
        title: post.title,
        description,
        url: path,
        type: "article",
        publishedTime: post.publishedAtISO,
        images: post.coverUrl ? [post.coverUrl] : ["/images/blog-hero.png"],
      },
    },
  );
}

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs("en");
  return slugs.map((slug) => ({ slug }));
}

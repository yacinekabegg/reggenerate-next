// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { fetchPostBySlug, fetchAllSlugs, fetchTranslationMap, authorFor } from "@/lib/airtable";
import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLdFromHtml, pageMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const dynamicParams = false; // seules les URLs listées par generateStaticParams seront générées

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return notFound();

  const path = `/blog/${slug}`;
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
    }),
    breadcrumbJsonLd(post.title, path),
  ];
  if (faq) structured.push(faq);

  return (
    <>
    <JsonLd data={structured} />
    <BlogArticleLayout
      title={post.title}
      categoryLabel={post.categoryLabel}
      categoryColor={post.categoryColor}
      date={post.publishedAt}
      readingTime={post.readMinutes ? `${post.readMinutes}` : undefined}
      author={author ? `${author.name}, ${author.jobTitle} chez Circul'Egg` : undefined}
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

// Title, description et canonical propres à chaque article, tirés des champs Airtable.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return {};
  const path = `/blog/${slug}`;
  const description = post.excerpt || undefined;
  // Version anglaise de l'article, si elle existe (balise hreflang)
  const enSlug = (await fetchTranslationMap())[slug];
  return pageMetadata(
    {
      title: `${post.title} | Reggenerate™`,
      description: description ?? "",
      path,
      alt: enSlug ? `/en/blog/${enSlug}` : undefined,
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
  const slugs = await fetchAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

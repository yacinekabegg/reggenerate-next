import { notFound } from "next/navigation";
import { fetchPostBySlug, fetchAllSlugs } from "@/lib/airtable";
import { SiteHeader } from "@/components/redesign/SiteHeader";
import { ScrollReveal } from "@/components/redesign/ScrollReveal";
import { BlogArticleLayout } from "@/components/redesign/blog/BlogArticleLayout";
import { ContactSection } from "@/components/redesign/ContactSection";
import { RedesignFooter } from "@/components/redesign/sections/RedesignFooter";

export const dynamic = "force-static";
export const dynamicParams = false;

export default async function PostNouveauPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return notFound();

  return (
    <div className="redesign">
      <ScrollReveal />
      <SiteHeader />
      <BlogArticleLayout
        title={post.title}
        categoryLabel={post.categoryLabel}
        date={post.publishedAt}
        readingTime={post.readMinutes ? `${post.readMinutes}` : undefined}
        coverImage={post.coverUrl || "/images/hero-blog.png"}
      >
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogArticleLayout>
      <ContactSection />
      <RedesignFooter />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

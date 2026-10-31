import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { STATIC_BLOG_ARTICLES, articleJsonLd, pageMetadata } from "@/lib/seo";

const article = STATIC_BLOG_ARTICLES[0];
const path = `/blog/${article.slug}/`;

export const metadata: Metadata = pageMetadata(
  { title: `${article.title} | Reggenerate™`, description: article.description, path },
  {
    openGraph: {
      title: article.title,
      description: article.description,
      url: path,
      type: "article",
      publishedTime: article.datePublished,
      images: [article.image],
    },
  },
);

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleJsonLd({ ...article, path })} />
      {children}
    </>
  );
}

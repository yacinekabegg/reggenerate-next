import { Footer } from "@/components/Footer";
import React from "react";

type BlogArticleLayoutProps = {
  title: string;
  categoryLabel: string;
  categoryColor?: string; // hex or css color
  date?: string;
  readingTime?: string; // e.g. "5 min"
  coverImage: string; // url to hero image
  children: React.ReactNode;
  showFooter?: boolean;
};

export function BlogArticleLayout({
  title,
  categoryLabel,
  categoryColor = "#2eb2a4",
  date,
  readingTime,
  coverImage,
  children,
  showFooter = true,
}: BlogArticleLayoutProps) {
  return (
    <main className="pt-16">
      {/* Hero image with category badge */}
      <section
        className="relative h-[450px] bg-cover bg-center py-12 text-white"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="relative z-[1] w-full pr-8 text-right">
          <div
            className="mx-auto mb-4 inline-block rounded-[20px] border-2 bg-white/90 px-4 py-2"
            style={{ borderColor: categoryColor, color: categoryColor }}
          >
            <span className="text-[0.9rem] font-bold">{categoryLabel}</span>
          </div>
        </div>
        {/* <div className="absolute inset-0 bg-black/40" aria-hidden="true" /> */}
      </section>

      {/* Title + meta + content card */}
      <section className="bg-[#e8f6f4] px-8 py-8">
        <div className="w-full px-6 text-left">
          <h1 className="mx-auto mb-2 w-full text-[1.9rem] font-extrabold leading-tight text-[#4e53a3] md:text-[2.5rem]">
            {title}
          </h1>
          {(date || readingTime) && (
            <p className="text-[#4e53a3]">
              {date}
              {date && readingTime ? " • " : ""}
              {readingTime ? `${readingTime} de lecture` : ""}
            </p>
          )}
        </div>

        <article className="py-8">
          <div className="w-full px-6">
            <div
              className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-2"
              style={{ borderColor: categoryColor }}
            >
              {children}
            </div>
          </div>
        </article>
      </section>

      {showFooter && <Footer />}
    </main>
  );
}


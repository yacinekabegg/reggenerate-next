import { Footer } from "@/components/Footer";
import React from "react";

type BlogArticleLayoutProps = {
  title: string;
  categoryLabel: string;
  categoryColor?: string; 
  date?: string;
  readingTime?: string; 
  coverImage: string; 
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
              {readingTime ? `${readingTime} min de lecture` : ""}
            </p>
          )}
        </div>

        <article className="py-8">
          <div className="w-full px-6">
            <div
              className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-2"
              style={{ borderColor: categoryColor }}
            >
              {/* ✅ Wrapper typographique : applique le style aux balises HTML venant d’Airtable */}
              <div
                className="
                  prose max-w-none
                  text-[#4e53a3]

                  /* TITRES */
                  prose-headings:text-[#4e53a3]
                  prose-headings:font-extrabold
                  prose-h2:text-[1.5rem] prose-h2:font-extrabold prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-[1.25rem] prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-2

                  /* PARAGRAPHES — 0 MARGE */
                  prose-p:text-[1.05rem]
                  prose-p:leading-8
                  prose-p:text-[#4e53a3]
                  [&_p]:mt-0
                  [&_p]:mb-0

                  /* LISTES */
                  prose-ul:pl-6 prose-ol:pl-6
                  prose-li:my-2 prose-li:text-[#4e53a3]

                  /* PUCE UL EN VIOLET */
                  prose-ul:marker:text-[#4e53a3]

                  /* NUMÉROS OL EN GRAS + VIOLET */
                  [&_ol>li]:marker:text-[#4e53a3]
                  [&_ol>li]:marker:font-extrabold

                  /* STRONG */
                  prose-strong:font-extrabold
                  prose-strong:text-[#4e53a3]

                  /* LIENS — MAINTENANT VIOLETS + UNDERLINE VIOLET */
                  prose-a:text-[#4e53a3]
                  prose-a:underline
                  prose-a:decoration-[#4e53a3]
                  prose-a:underline-offset-2
                  hover:prose-a:text-[#2eb2a4] /* si tu veux hover violet foncé, je peux le changer */
                  
                  /* IMAGES */
                  prose-img:rounded-2xl
                "
              >
                {children}
              </div>
            </div>
          </div>
        </article>
      </section>

      {showFooter && <Footer />}
    </main>
  );
}
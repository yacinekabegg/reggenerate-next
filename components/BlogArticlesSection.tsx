"use client";

import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "@/lib/blogArticles";

export function BlogArticlesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-left">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-bold">
            <span className="text-[#f3d86b]">Breaking</span>{" "}
            <span className="text-[#4e53a3]">Eggs</span>
          </h2>
          <p className="mt-3 text-lg font-semibold text-[#2eb2a4]">
            Blog & Actualités
          </p>
        </div>

        <div className="space-y-8">
          {blogArticles.slice(0, 3).map((article) => (
            <article
              key={article.href}
              className="rounded-[16px] border-2 border-[#4e53a33f] bg-white p-8 shadow-[0_6px_18px_rgba(78,83,163,0.08)]"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                <div className="h-[150px] w-full overflow-hidden rounded-[12px] bg-[#f0f0f0] md:h-[150px] md:w-[200px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[1.35rem] font-bold leading-snug text-[#4e53a3]">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#2eb2a4]">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.href}
                    className="mt-6 inline-flex font-semibold text-[#2eb2a4]"
                  >
                    Lire la suite →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-[10px] bg-[#2eb2a4] px-8 py-3 font-['League_Spartan','Roboto',Arial,sans-serif] text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-[#4e53a3] hover:shadow-[0_12px_30px_rgba(78,83,163,0.25)]"
          >
            Voir tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

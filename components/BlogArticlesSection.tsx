"use client";

import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "10 astuces naturelles pour améliorer votre santé articulaire",
    excerpt:
      "Comment maintenir une mobilité articulaire optimale avec des solutions naturelles et des ingrédients innovants...",
    href: "#",
    image: {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      alt: "Santé articulaire",
    },
  },
  {
    title: "La membrane d'œuf, nouvelle révolution ?",
    excerpt:
      "Découvrez comment la membrane d'œuf transforme le monde des compléments alimentaires avec ses propriétés uniques...",
    href: "#",
    image: {
      src: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop&crop=center",
      alt: "Membrane d'œuf",
    },
  },
  {
    title: "Compléments alimentaires : les tendances 2025",
    excerpt:
      "Sourcing durable, ingrédients upcyclés, galéniques premium... Ce qui fera la différence sur les étals cette année.",
    href: "#",
    image: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&crop=center",
      alt: "Compléments alimentaires",
    },
  },
];

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
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-[16px] border-2 border-[#4e53a33f] bg-white p-8 shadow-[0_6px_18px_rgba(78,83,163,0.08)]"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                <div className="h-[150px] w-full overflow-hidden rounded-[12px] bg-[#f0f0f0] md:h-[150px] md:w-[200px]">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
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

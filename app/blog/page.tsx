"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

type Category = "all" | "innovation" | "sante" | "marche" | "technique" | "beaute";

const articles = [
  {
    category: "sante" as const,
    href: "/blog/10-astuces-naturelles-sante-articulaire",
    title: "10 astuces naturelles pour améliorer votre santé articulaire",
    date: "15 Janvier 2025",
    read: "5 min",
    excerpt:
      "Comment maintenir une mobilité articulaire optimale avec des solutions naturelles et des ingrédients innovants...",
    label: "SANTÉ & BIEN-ÊTRE",
    labelColor: "#2eb2a4",
    badge: "🥚",
    image: "/images/article-1.png",
  },
  {
    category: "technique" as const,
    href: "/blog/membrane-nouvelle-revolution",
    title: "La membrane d’oeuf, nouvelle révolution",
    date: "15 Février 2025",
    read: "3 min",
    excerpt:
      "Découvrez comment la membrane d'œuf transforme le monde des compléments alimentaires avec ses propriétés uniques...",
    label: "EGGSPERTISE TECHNIQUE",
    labelColor: "#FF6B6B",
    badge: "📈",
    image: "/images/article-2.png",
  },
  {
    category: "marche" as const,
    href: "/blog/tendances-2024",
    title: "Les Tendances Compléments Alimentaires 2024",
    date: "15 Mars 2025",
    read: "8 min",
    excerpt:
      "Analyse des nouvelles tendances du marché : du naturel au personnalisé, découvrez ce qui va marquer 2024...",
    label: "MARCHÉ & TENDANCES",
    labelColor: "#90EE90",
    badge: "🦴",
    image: "/images/article-3.png",
  },
  {

    category: "beaute" as const,
    href: "/blog/molecules-indispensables-belle-peau",
    title: "3 molécules indispensables pour une belle peau",
    date: "15 Avril 2025",
    read: "5 min",
    excerpt:
      "Dès 25 ans, les réserves en collagène, acide hyaluronique et élastine diminuent, entraînant le vieillissement de la peau. Mais à quoi servent ces molécules et comment contrer ce phénomène ?",
    label: "BEAUTÉ PEAU & CHEVEUX",
    labelColor: "#87CEEB",
    badge: "🧪",
    image: "/images/article-4.png",
  },
  {
    category: "innovation" as const,
    href: "/blog/produits-revolution-marche",
    title: "Ces 5 produits qui révolutionnent totalement le marché",
    date: "15 Mai 2025",
    read: "8 min",
    excerpt:
      "Dans cet océan de compléments alimentaires, cinq produits surgissent tel un raz-de-marée, déferlant avec une innovation qui fait grand bruit. Découvrez pourquoi ils captivent autant.",
    label: "INNOVATIONS",
    labelColor: "#FF69B4",
    badge: "✨",
    image: "/images/article-5.png",
  },
  {
    category: "technique" as const,
    href: "/blog/collagene-marche-vraiment",
    title: "Le Collagène ça marche vraiment ?",
    date: "15 Juin 2025",
    read: "8 min",
    excerpt:
      "Le collagène n’est pas efficace, le corps ne l’absorbe pas, c’est dangereux, c’est marketing...on répond à toutes les objections sur le collagène et on lève le voile sur cet ingrédient hyper tendance.",
    label: "EGGSPERTISE TECHNIQUE",
    labelColor: "#8B4513",
    badge: "📋",
    image: "/images/article-6.png",
  },
];

export default function BlogPage() {
  const [category, setCategory] = useState<Category>("all");
  const filtered = articles.filter((a) => category === "all" || a.category === category);

  const catBtn = (cat: Category, text: string) => (
    <button
      type="button"
      key={cat + text}
      onClick={() => setCategory(cat)}
      className={
        "inline-flex w-full items-center justify-center rounded-full border-2 px-8 py-4 font-['League_Spartan',Arial,sans-serif] text-[0.95rem] font-extrabold uppercase tracking-wide transition " +
        (category === cat
          ? "border-[#2eb2a4] bg-[#2eb2a4] text-white"
          : "border-[#2eb2a4] bg-white text-[#2eb2a4] hover:bg-[#e8f6f4]")
      }
    >
      {text}
    </button>
  );

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className=" bg-white w-full">
        <div className="relative  h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px] w-full">
          <Image
            src="/images/blog-hero.png"
            alt="Œuf cassé sur fond blanc"
            fill
            className="object-contain object-center"
            priority
          />
          {/* Badge aligné au container */}
          <div className="absolute inset-0">
            <div className="mx-auto max-w-[1400px] px-6 pt-6 flex justify-center items-center">
              <div className="flex justify-center items-center h-10 w-fit gap-3 rounded-full border-2 border-[#2eb2a4] bg-white/95 px-4">
                <Image src="/images/blog-icon.png" alt="Blog" width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="font-['League_Spartan',Arial,sans-serif] text-[0.95rem] leading-[32px] relative top-[1px] whitespace-nowrap font-extrabold tracking-wide text-[#2eb2a4]">
                  EXPERTISE & INNOVATION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {catBtn("all", "TOUS")}
            {catBtn("technique", "EGGSPERTISE TECHNIQUE")}
            {catBtn("sante", "SANTÉ & BIEN-ÊTRE")}
            {catBtn("marche", "MARCHÉ & TENDANCES")}
            {catBtn("innovation", "INNOVATIONS")}
            {catBtn("beaute", "BEAUTÉ PEAU & CHEVEUX")}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-[#e2f6f4] py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          

          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <article key={a.href} className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition">
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image src={a.image} alt={a.title} fill className="object-cover" />
                  <div className="absolute right-4 top-4 rounded-[20px] bg-white/90 px-3 py-1 text-[0.8rem] font-semibold text-[#2eb2a4] border border-[#2eb2a4]">
                    {a.label}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-[1.4rem] font-bold text-[#4e53a3]">{a.title}</h3>
                  <div className="mb-4 flex items-center gap-4 text-[0.9rem] text-[#4e53a3]">
                    <span>{a.date}</span>
                    <span>•</span>
                    <span>{a.read} de lecture</span>
                  </div>
                  
                  <p className="mb-6 text-[#2eb2a4]">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link href={a.href} className="rounded bg-[#2eb2a4] px-4 py-2 font-semibold text-white">
                      Lire l&apos;article
                    </Link>
                    {/* tags omitted for brevity */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        imageSrc="/images/circulegg-team.jpg"
        imageAlt="Circul'Egg – Équipe"
      />
            <Footer />
    </main>
  );
}

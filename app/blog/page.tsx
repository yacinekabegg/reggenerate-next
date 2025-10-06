"use client";

import Link from "next/link";
import { useState } from "react";

type Category = "all" | "innovation" | "sante" | "marche" | "technique";

const articles = [
  {
    category: "innovation" as const,
    href: "/blog/innovation-membrane-oeuf",
    title: "L'Innovation Révolutionnaire de la Membrane d'Œuf",
    date: "15 Janvier 2024",
    read: "5 min",
    excerpt:
      "Découvrez comment la membrane d'œuf transforme le monde des compléments alimentaires avec ses propriétés uniques et ses bénéfices cliniquement prouvés.",
    label: "INNOVATION",
    labelColor: "#2eb2a4",
    badge: "🥚",
  },
  {
    category: "marche" as const,
    href: "/blog/tendances-2024",
    title: "Les Tendances Compléments Alimentaires 2024",
    date: "10 Janvier 2024",
    read: "7 min",
    excerpt:
      "Analyse des nouvelles tendances du marché des compléments alimentaires : du naturel au personnalisé, découvrez ce qui va marquer 2024.",
    label: "MARCHÉ",
    labelColor: "#FF6B6B",
    badge: "📈",
  },
  {
    category: "sante" as const,
    href: "/blog/mobilite-articulaire",
    title: "Mobilité Articulaire : Solutions Naturelles",
    date: "5 Janvier 2024",
    read: "6 min",
    excerpt:
      "Comment maintenir une mobilité articulaire optimale avec des solutions naturelles et des ingrédients innovants comme la membrane d'œuf.",
    label: "SANTÉ",
    labelColor: "#90EE90",
    badge: "🦴",
  },
  {
    category: "technique" as const,
    href: "/blog/guide-formulation",
    title: "Guide de Formulation avec Reggenerate™",
    date: "1 Janvier 2024",
    read: "8 min",
    excerpt:
      "Conseils techniques et bonnes pratiques pour intégrer efficacement Reggenerate™ dans vos formulations.",
    label: "TECHNIQUE",
    labelColor: "#87CEEB",
    badge: "🧪",
  },
  {
    category: "sante" as const,
    href: "/blog/beaute-nutricosmetique",
    title: "Beauté de l'Intérieur : Nutricosmétique",
    date: "28 Décembre 2023",
    read: "4 min",
    excerpt:
      "Comment les compléments alimentaires révolutionnent la beauté en agissant de l'intérieur pour des résultats durables et naturels.",
    label: "SANTÉ",
    labelColor: "#FF69B4",
    badge: "✨",
  },
  {
    category: "technique" as const,
    href: "/blog/reglementation-2024",
    title: "Réglementation Compléments Alimentaires 2024",
    date: "20 Décembre 2023",
    read: "6 min",
    excerpt:
      "Mise à jour sur les nouvelles réglementations européennes et leurs impacts sur l'industrie des compléments alimentaires.",
    label: "TECHNIQUE",
    labelColor: "#8B4513",
    badge: "📋",
  },
];

export default function BlogPage() {
  const [category, setCategory] = useState<Category>("all");
  const filtered = articles.filter((a) => category === "all" || a.category === category);

  const catBtn = (cat: Category, text: string, style?: string) => (
    <button
      key={cat}
      onClick={() => setCategory(cat)}
      className={
        "rounded-full px-6 py-3 font-semibold transition-all border-2 " +
        (category === cat
          ? "border-[#2eb2a4] bg-[#2eb2a4] text-white"
          : "border-[#e5e5e5] bg-white text-[#666]")
      }
    >
      {text}
    </button>
  );

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="mt-16 bg-gradient-to-br from-[#2eb2a4] to-[#4e53a3] py-12 text-white">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="mx-auto mb-4 inline-block rounded-[20px] bg-white/20 px-4 py-2">
            <span className="text-[0.9rem] font-medium">📚 Expertise & Innovation</span>
          </div>
          <h1 className="mb-2 text-[3rem] font-bold">Blog Reggenerate™</h1>
          <p className="mx-auto max-w-[600px] text-[1.2rem] opacity-90">
            Découvrez les dernières innovations, tendances et expertises dans le monde des compléments alimentaires
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#f8f9fa] py-6">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {catBtn("all", "Tous")}
            {catBtn("innovation", "Innovation")}
            {catBtn("sante", "Santé & Bien-être")}
            {catBtn("marche", "Marché & Tendances")}
            {catBtn("technique", "Technique")}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-[#fafafa] py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 text-center">
            <h2 className="text-[2.5rem] font-bold text-[#1a1a1a]">Nos Derniers Articles</h2>
            <p className="mx-auto max-w-[600px] text-[1.1rem] text-[#666]">
              Expertise, innovation et actualités du monde des compléments alimentaires
            </p>
          </div>

          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <article key={a.href} className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition">
                <div className="relative flex h-[200px] items-center justify-center"
                  style={{ background: a.labelColor.includes("#FF") ? a.labelColor : undefined }}>
                  <div className="text-[3rem]">{a.badge}</div>
                  <div className="absolute right-4 top-4 rounded-[20px] bg-white/90 px-3 py-1 text-[0.8rem] font-semibold" style={{ color: a.labelColor }}>
                    {a.label}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4 text-[0.9rem] text-[#666]">
                    <span>{a.date}</span>
                    <span>•</span>
                    <span>{a.read} de lecture</span>
                  </div>
                  <h3 className="mb-3 text-[1.4rem] font-bold text-[#1a1a1a]">{a.title}</h3>
                  <p className="mb-6 text-[#666]">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link href={a.href} className="rounded bg-[#2eb2a4] px-4 py-2 font-semibold text-white">
                      Lire l'article
                    </Link>
                    {/* tags omitted for brevity */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter cta (button triggers Tally modal; can be wired later) */}
      <section className="bg-gradient-to-br from-[#2eb2a4] to-[#4e53a3] py-16 text-white">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <h2 className="mb-4 text-[2.5rem] font-bold">Inscription à la newsletter !</h2>
          <p className="mb-8 text-[1.1rem] opacity-90">
            Déjà 1 500 professionnels nous font confiance.
          </p>
          <button className="rounded bg-white px-6 py-3 font-semibold text-[#2eb2a4]">Inscrivez-vous</button>
        </div>
      </section>
    </main>
  );
}



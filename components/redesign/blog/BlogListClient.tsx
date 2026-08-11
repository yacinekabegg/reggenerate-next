"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ArticleCard, Category } from "@/lib/airtable";
import { Highlight } from "../Highlight";
import { TabPills } from "../TabPills";
import { Button } from "../Button";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "technique", label: "Eggspertise technique" },
  { key: "sante", label: "Santé & bien-être" },
  { key: "marche", label: "Marché & tendances" },
  { key: "innovation", label: "Innovations" },
  { key: "beaute", label: "Beauté peau & cheveux" },
];

function ArticleCardItem({ a }: { a: ArticleCard }) {
  return (
    <article
      className="hover-lift"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--white)",
        border: "1px solid var(--line)",
        borderRadius: "16px",
        boxShadow: "var(--shadow-card)",
        overflow: "hidden",
      }}
    >
      <div className="hover-zoom-frame relative" style={{ aspectRatio: "16/10", background: "var(--cream)" }}>
        <Image src={a.image} alt={a.title} fill className="object-cover" />
        <span
          style={{
            position: "absolute",
            right: "14px",
            top: "14px",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(247,244,235,.92)",
            border: "1px solid var(--teal)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "12px",
            color: "var(--teal-deep)",
          }}
        >
          {a.label}
        </span>
      </div>

      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "20px", lineHeight: 1.2, color: "var(--ink)", margin: 0 }}>
          {a.title}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--muted)" }}>{a.date}</span>
          <span style={{ color: "var(--line)" }}>·</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--muted)" }}>{a.read} de lecture</span>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "14.5px", lineHeight: 1.6, color: "var(--body-ink)", margin: "14px 0 0", flex: 1 }}>
          {a.excerpt}
        </p>
        <div style={{ marginTop: "18px" }}>
          <Link href={a.href} style={{ textDecoration: "none" }}>
            <Button size="sm" chevron>
              Lire l&apos;article
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BlogListClient({ articles }: { articles: ArticleCard[] }) {
  const [category, setCategory] = useState<Category>("all");
  const filtered = articles.filter((a) => category === "all" || a.category === category);

  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--cream)" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-10%",
            top: "-12%",
            width: "48%",
            height: "60%",
            borderRadius: "var(--egg-radius)",
            background: "var(--teal)",
            opacity: 0.1,
            transform: "rotate(7deg)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "clamp(140px,16vw,180px) 32px 72px", textAlign: "center" }} data-reveal>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--fs-display-xl)",
              lineHeight: 1.06,
              letterSpacing: "-.02em",
              color: "var(--ink)",
              margin: "0 auto",
              maxWidth: "18ch",
            }}
          >
            Le blog Circul&apos;<Highlight>Egg</Highlight>.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--fs-lede)",
              lineHeight: 1.6,
              color: "var(--body-ink)",
              margin: "20px auto 0",
              maxWidth: "44em",
            }}
          >
            Science, marché, formulation — tout ce que nos eggsperts apprennent en travaillant la membrane d&apos;œuf.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 32px" }}>
          <TabPills tabs={CATEGORIES} active={category} onChange={setCategory} />
        </div>
      </section>

      <section style={{ background: "var(--cream)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px 88px" }} data-reveal>
          {filtered.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "28px" }}>
              {filtered.map((a) => (
                <ArticleCardItem key={a.href} a={a} />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--muted)" }}>
              Aucun article dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

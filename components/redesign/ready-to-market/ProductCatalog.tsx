"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../Button";
import { Highlight } from "../Highlight";
import {
  readyToMarketProducts,
  type RTMForm,
  type RTMBenefit,
} from "@/lib/readyToMarketProducts";

const FORM_OPTIONS: { key: RTMForm; label: string; icon: "package" }[] = [
  { key: "gelules", label: "Gélules", icon: "package" },
  { key: "comprime", label: "Comprimés", icon: "package" },
  { key: "poudre", label: "Poudres", icon: "package" },
  { key: "gummies", label: "Gummies", icon: "package" },
  { key: "barres", label: "Barres", icon: "package" },
];

const BENEFIT_OPTIONS: { key: RTMBenefit; label: string; icon: "sparkles" | "shield" }[] = [
  { key: "beauty", label: "Beauté de la peau", icon: "sparkles" },
  { key: "joints", label: "Santé des articulations", icon: "shield" },
];

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 20px",
        borderRadius: "999px",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "14px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background .2s cubic-bezier(.22,.61,.36,1), border-color .2s cubic-bezier(.22,.61,.36,1), color .2s cubic-bezier(.22,.61,.36,1)",
        border: `1.5px solid ${active ? "var(--teal)" : "var(--line)"}`,
        background: active ? "var(--teal)" : "var(--white)",
        color: active ? "#fff" : "var(--body-ink)",
      }}
    >
      {label}
    </button>
  );
}

function ProductCard({ p, index }: { p: (typeof readyToMarketProducts)[number]; index: number }) {
  const specs: [string, string][] = [
    ["Galénique", p.galenique],
    ["Bienfaits", p.bienfaits],
    ["Arôme", p.aroma],
    ["Formulation", p.formulation],
    ["MOQ", p.moq],
  ];
  return (
    <article
      className="hover-lift"
      data-reveal
      data-reveal-delay={(index % 3) * 80}
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
      <div className="hover-zoom-frame relative" style={{ aspectRatio: "4/3", background: "var(--cream)" }}>
        <Image src={p.image} alt={p.imageAlt} fill className="object-cover" />
      </div>

      <div style={{ padding: "24px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "20px", lineHeight: 1.15, color: "var(--ink)", margin: 0 }}>
          {p.title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", fontStyle: "italic", color: "var(--teal-deep)", margin: "6px 0 0" }}>
          {p.subtitle}
        </p>

        <dl style={{ margin: "18px 0 0", display: "flex", flexDirection: "column", gap: "7px" }}>
          {specs.map(([label, value]) => (
            <div key={label} style={{ display: "flex", gap: "6px", fontSize: "13px", lineHeight: 1.5 }}>
              <dt style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--ink)", flex: "none" }}>{label} :</dt>
              <dd style={{ fontFamily: "var(--font-body)", color: "var(--body-ink)", margin: 0 }}>{value}</dd>
            </div>
          ))}
        </dl>

        <div style={{ marginTop: "auto", paddingTop: "22px" }}>
          <Button href="#contact" chevron style={{ width: "100%", justifyContent: "center" }}>
            Demander un échantillon
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ProductCatalog() {
  const [forms, setForms] = useState<RTMForm[]>([]);
  const [benefits, setBenefits] = useState<RTMBenefit[]>([]);

  const toggle = <T,>(list: T[], value: T, setList: (v: T[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const visible = readyToMarketProducts.filter(
    (p) => (forms.length === 0 || forms.includes(p.form)) && (benefits.length === 0 || benefits.includes(p.benefit))
  );

  return (
    <section style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 32px" }} data-reveal>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--fs-display-md)",
            lineHeight: 1.1,
            letterSpacing: "-.02em",
            color: "var(--ink)",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "22ch",
          }}
        >
          De quoi rêvez-vous pour votre <Highlight>futur produit</Highlight> ?
        </h2>

        <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "18px", alignItems: "center" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {FORM_OPTIONS.map((o) => (
              <FilterChip key={o.key} label={o.label} active={forms.includes(o.key)} onClick={() => toggle(forms, o.key, setForms)} />
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {BENEFIT_OPTIONS.map((o) => (
              <FilterChip key={o.key} label={o.label} active={benefits.includes(o.key)} onClick={() => toggle(benefits, o.key, setBenefits)} />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {visible.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--muted)", marginTop: "48px" }}>
            Aucun produit ne correspond à cette combinaison — essayez d&apos;enlever un filtre.
          </p>
        )}
      </div>
    </section>
  );
}

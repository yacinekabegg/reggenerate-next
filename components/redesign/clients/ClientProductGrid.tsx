"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ClientProduct } from "@/lib/clientProducts";
type IconRef = { src: string; alt: string };

function galeniqueIcon(g: string): IconRef | null {
  const key = g.toLowerCase();
  if (key.includes("gélule") || key.includes("gelule")) return { src: "/redesign/icons/pill.png", alt: "Gélules" };
  if (key.includes("poudre")) return { src: "/redesign/icons/powder.png", alt: "Poudre" };
  if (key.includes("comprim")) return { src: "/redesign/icons/capsules.png", alt: "Comprimés" };
  if (key.includes("gumm")) return { src: "/redesign/icons/gummies.png", alt: "Gummies" };
  if (key.includes("barre")) return { src: "/redesign/icons/bars.png", alt: "Barre" };
  if (key.includes("vinaigrette") || key.includes("liquide")) return { src: "/redesign/icons/drink.png", alt: "Liquide" };
  if (key.includes("gommage")) return { src: "/redesign/icons/gommage.png", alt: "Gommage" };
  return null;
}

function benefitIcons(b: string): IconRef[] {
  const lower = b.toLowerCase();
  const arr: IconRef[] = [];
  if (lower.includes("articulation")) arr.push({ src: "/redesign/icons/knuckle.png", alt: "Santé des articulations" });
  if (lower.includes("beauté") || lower.includes("peau")) arr.push({ src: "/redesign/icons/skin-beauty.png", alt: "Beauté de la peau" });
  return arr;
}

function iconsFor(p: ClientProduct): IconRef[] {
  const icons: IconRef[] = [];
  if (p.galenique.toLowerCase().includes("gommage")) {
    icons.push({ src: "/redesign/icons/soap.png", alt: "Savon" });
    icons.push({ src: "/redesign/icons/gommage.png", alt: "Gommage" });
  } else {
    const g = galeniqueIcon(p.galenique);
    if (g) icons.push(g);
  }
  icons.push(...benefitIcons(p.bienfaits));
  return icons;
}

function ClientCard({ p, index }: { p: ClientProduct; index: number }) {
  const icons = iconsFor(p);

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

      <div style={{ padding: "22px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "flex-start", gap: "8px" }}>
          {icons.map((ic, idx) => (
            <span
              key={ic.src + idx}
              style={{ position: "relative", width: "40px", height: "40px", flex: "none", borderRadius: "50%", overflow: "hidden" }}
            >
              <Image src={ic.src} alt={ic.alt} fill style={{ objectFit: "cover" }} />
            </span>
          ))}
        </div>

        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "19px", lineHeight: 1.15, color: "var(--ink)", margin: "14px 0 0" }}>
          {p.title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", fontStyle: "italic", color: "var(--teal-deep)", margin: "6px 0 0" }}>
          {p.brand}
        </p>

        <dl style={{ margin: "16px 0 0", display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", gap: "6px", fontSize: "13px", lineHeight: 1.5 }}>
            <dt style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--ink)", flex: "none" }}>Galénique :</dt>
            <dd style={{ fontFamily: "var(--font-body)", color: "var(--body-ink)", margin: 0 }}>{p.galenique}</dd>
          </div>
          <div style={{ display: "flex", gap: "6px", fontSize: "13px", lineHeight: 1.5 }}>
            <dt style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--ink)", flex: "none" }}>Bienfaits :</dt>
            <dd style={{ fontFamily: "var(--font-body)", color: "var(--body-ink)", margin: 0 }}>{p.bienfaits}</dd>
          </div>
          <div style={{ display: "flex", gap: "6px", fontSize: "13px", lineHeight: 1.5 }}>
            <dt style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--ink)", flex: "none" }}>Formulation :</dt>
            <dd style={{ fontFamily: "var(--font-body)", color: "var(--body-ink)", margin: 0 }}>{p.formulation}</dd>
          </div>
        </dl>

        <div style={{ marginTop: "auto", paddingTop: "20px" }}>
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "13px 26px",
              borderRadius: "999px",
              background: "var(--teal)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              transition: "background .18s cubic-bezier(.22,.61,.36,1)",
            }}
          >
            Voir le produit
          </a>
        </div>
      </div>
    </article>
  );
}

function PageButton({
  children,
  active,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-current={active ? "page" : undefined}
      style={{
        minWidth: "40px",
        height: "40px",
        padding: "0 14px",
        borderRadius: "999px",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "14px",
        border: `1.5px solid ${active ? "var(--teal)" : "var(--line)"}`,
        background: active ? "var(--teal)" : "var(--white)",
        color: disabled ? "var(--muted)" : active ? "#fff" : "var(--body-ink)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
}

export function ClientProductGrid({ products }: { products: ClientProduct[] }) {
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const [page, setPage] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const qp = parseInt(searchParams.get("page") ?? "1", 10);
    const next = Number.isNaN(qp) ? 1 : Math.min(totalPages, Math.max(1, qp));
    setPage((prev) => (prev !== next ? next : prev));
  }, [searchParams, totalPages]);

  useEffect(() => {
    const current = parseInt(searchParams.get("page") ?? "1", 10);
    const canonical = Number.isNaN(current) ? 1 : current;
    if (canonical === page) return;
    const sp = new URLSearchParams(searchParams.toString());
    if (page === 1) sp.delete("page");
    else sp.set("page", String(page));
    const q = sp.toString();
    router.push(q ? `${pathname}?${q}` : pathname, { scroll: false });
  }, [page, pathname, router, searchParams]);

  const sectionRef = useRef<HTMLElement>(null);
  const prevPageRef = useRef(page);

  // Scroll back to the top of this section whenever the page actually
  // changes — comparing against the last-seen value (rather than a
  // "first render" flag) so it stays correct under React Strict Mode's
  // double effect invocation in dev, and never fires on initial load
  // (including arriving directly on a URL like ?page=3).
  useEffect(() => {
    if (prevPageRef.current === page) return;
    prevPageRef.current = page;
    const el = sectionRef.current;
    if (!el) return;
    const headerOffset = 96;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, [page]);

  const start = (page - 1) * pageSize;
  const visible = products.slice(start, start + pageSize);

  return (
    <section ref={sectionRef} style={{ background: "var(--cream)", borderTop: "1px solid var(--line)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 32px" }} data-reveal>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--fs-display-md)",
              lineHeight: 1.15,
              letterSpacing: "-.02em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Zoom sur les produits pondus par nos clients.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "var(--body-ink)", margin: "12px 0 0" }}>
            On apporte l&apos;œuf, et nos clients font éclore les plus belles innovations de demain.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "24px" }}>
          {visible.map((p, i) => (
            <ClientCard key={p.title + i} p={p} index={i} />
          ))}
        </div>

        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "44px" }}>
            <PageButton onClick={() => setPage((v) => Math.max(1, v - 1))} disabled={page === 1}>
              ‹
            </PageButton>
            {Array.from({ length: totalPages }).map((_, i) => (
              <PageButton key={i} active={i + 1 === page} onClick={() => setPage(i + 1)}>
                {i + 1}
              </PageButton>
            ))}
            <PageButton onClick={() => setPage((v) => Math.min(totalPages, v + 1))} disabled={page === totalPages}>
              ›
            </PageButton>
          </div>
        )}
      </div>
    </section>
  );
}

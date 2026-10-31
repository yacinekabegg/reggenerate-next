"use client";

import { ContactSection } from "@/components/en/ContactSection";
import { Footer } from "@/components/en/Footer";
import type { ClientProduct } from "@/lib/clientProducts";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Display-only translation of the French Airtable values (`galenique`, `bienfaits`).
// Lookup is case-insensitive and falls back to the original value when unknown.
const GALENIQUE_EN: Record<string, string> = {
  "gélules": "Capsules",
  "gelules": "Capsules",
  "gélule": "Capsule",
  "gelule": "Capsule",
  "capsules": "Capsules",
  "comprimés": "Tablets",
  "comprimes": "Tablets",
  "comprimé": "Tablet",
  "comprime": "Tablet",
  "poudre": "Powder",
  "poudres": "Powders",
  "gummies": "Gummies",
  "gummy": "Gummy",
  "barre": "Bar",
  "barres": "Bars",
  "vinaigrette": "Vinaigrette",
  "gommage": "Scrub",
  "savon": "Soap",
  "liquide": "Liquid",
  "stick": "Stick",
  "sticks": "Sticks",
  "sachet": "Sachet",
  "sachets": "Sachets",
  "ampoules": "Ampoules",
  "crème": "Cream",
  "creme": "Cream",
  "gel": "Gel",
  "boisson": "Drink",
  "shot": "Shot",
  "shots": "Shots",
};

const BIENFAITS_EN: Record<string, string> = {
  "articulations": "Joints",
  "articulation": "Joints",
  "santé des articulations": "Joint health",
  "confort articulaire": "Joint comfort",
  "beauté de la peau": "Skin beauty",
  "beauté": "Beauty",
  "peau": "Skin",
  "cheveux": "Hair",
  "cheveu": "Hair",
  "ongles": "Nails",
  "peau & articulations": "Skin & Joints",
  "articulations & peau": "Joints & Skin",
  "peau, cheveux & ongles": "Skin, hair & nails",
  "peau, cheveux et ongles": "Skin, hair & nails",
  "beauté globale peau, cheveu & ongles": "Overall beauty: skin, hair & nails",
  "anti-âge": "Anti-aging",
  "anti-age": "Anti-aging",
  "anti-âge & articulation": "Anti-aging & Joints",
  "anti-âge & articulations": "Anti-aging & Joints",
  "mobilité": "Mobility",
  "souplesse": "Flexibility",
  "confort": "Comfort",
  "éclat": "Radiance",
  "fermeté": "Firmness",
  "élasticité": "Elasticity",
  "hydratation": "Hydration",
  "sport": "Sport",
  "récupération": "Recovery",
};

const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

// Exact match first; otherwise translate part by part ("Peau & Articulations", "Beauté, Articulations").
// If any part is unknown, the original value is returned untouched.
function translateWith(dict: Record<string, string>, value: string): string {
  const key = normalize(value);
  if (!key) return value;
  if (dict[key]) return dict[key];
  const parts = value.split(/(\s*[&,+\/]\s*)/);
  if (parts.length < 3) return value;
  let ok = true;
  const out = parts.map((part, i) => {
    if (i % 2 === 1) return part; // separator
    const hit = dict[normalize(part)];
    if (!hit) ok = false;
    return hit ?? part;
  });
  return ok ? out.join("") : value;
}

const translateGalenique = (g: string) => translateWith(GALENIQUE_EN, g);
const translateBienfaits = (b: string) => translateWith(BIENFAITS_EN, b);

export default function ClientsPageClient({ products }: { products: ClientProduct[] }) {
  const pageSize = 6;
  const totalCards = products.length;
  const totalPages = Math.max(1, Math.ceil(totalCards / pageSize));
  const [page, setPage] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(totalCards, start + pageSize - 1);
  const visibleProducts = products.slice(Math.max(0, start - 1), Math.max(0, end));

  const galeniqueIcon = (g: string) => {
    const key = g.toLowerCase();
    if (key.includes("gélule") || key.includes("gelule")) return { src: "/images/pill.png", alt: "Capsules" };
    if (key.includes("poudre")) return { src: "/images/powder.png", alt: "Powder" };
    if (key.includes("comprim")) return { src: "/images/capsules.png", alt: "Tablets" };
    if (key.includes("gumm")) return { src: "/images/gummies.png", alt: "Gummies" };
    if (key.includes("barre")) return { src: "/images/bars.png", alt: "Bar" };
    if (key.includes("vinaigrette") || key.includes("liquide")) return { src: "/images/drink.png", alt: "Liquid" };
    if (key.includes("gommage")) return { src: "/images/gommage.png", alt: "Scrub" };
    return null;
  };

  const benefitIcons = (b: string) => {
    const lower = b.toLowerCase();
    const arr: { src: string; alt: string }[] = [];
    if (lower.includes("articulation")) arr.push({ src: "/images/knuckle.png", alt: "Joint health" });
    if (lower.includes("beauté") || lower.includes("peau")) arr.push({ src: "/images/skin-beauty.png", alt: "Skin beauty" });
    return arr;
  };

  const iconsFor = (p: ClientProduct) => {
    const icons: { src: string; alt: string }[] = [];
    if (p.galenique.toLowerCase().includes("gommage")) {
      icons.push({ src: "/images/soap.png", alt: "Soap" });
      icons.push({ src: "/images/gommage.png", alt: "Scrub" });
    } else {
      const g = galeniqueIcon(p.galenique);
      if (g) icons.push(g);
    }
    icons.push(...benefitIcons(p.bienfaits));
    return icons;
  };

  useEffect(() => {
    const qpRaw = searchParams.get("page");
    const qp = qpRaw ? parseInt(qpRaw, 10) : 1;
    const next = Number.isNaN(qp) ? 1 : Math.min(totalPages, Math.max(1, qp));
    setPage((prev) => (prev !== next ? next : prev));
  }, [searchParams, totalPages]);

  useEffect(() => {
    const currentRaw = searchParams.get("page");
    const current = currentRaw ? parseInt(currentRaw, 10) : 1;
    const canonical = Number.isNaN(current) ? 1 : current;
    if (canonical === page) return;

    const sp = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      sp.delete("page");
    } else {
      sp.set("page", String(page));
    }
    const q = sp.toString();
    router.push(q ? `${pathname}?${q}` : pathname, { scroll: false });
  }, [page, pathname, router, searchParams]);

  return (
    <main className="pt-16">
      <section className="relative h-[360px] w-full md:h-[520px]">
        <Image src="/images/hero-clients.svg" alt="Ready-to-Market products" fill priority />
        <div className="absolute inset-0">
          <div className="mx-auto flex max-w-[1400px] justify-center px-6 pt-6">
            <div className="flex w-fit items-center gap-1 sm:gap-2 rounded-full border border-[#2eb2a4] sm:border-2 bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2">
              <Image src="/images/rocket.png" alt="Rocket" width={40} height={40} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              <span className="font-['League_Spartan',Arial,sans-serif] text-[0.8rem] sm:text-[0.95rem] font-extrabold tracking-normal sm:tracking-wide text-[#2eb2a4] whitespace-nowrap">
                PRODUCTS ALREADY ON THE MARKET
              </span>
            </div>
          </div>
          <h1 className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-24 sm:bottom-22 md:bottom-32 lg:bottom-28 lg:mb-2 z-10 text-center font-['League_Spartan',Arial,sans-serif] text-[1.6rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold w-full">
            <span className="text-[#2eb2a4]">
              Our <span className="text-[#f3d86b]">EGG</span>
              <span className="text-[#2eb2a4]">ceptional</span> clients
            </span>
          </h1>
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-4 md:bottom-8 z-10 w-full max-w-[1100px] px-4 sm:px-6">
            <p className="text-center text-white text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-snug sm:leading-normal md:leading-relaxed drop-shadow-md">
              Finding the right ingredient is a bit like looking for your soulmate: you need that little “something extra” that makes all the
              difference. 71 brands have already found the right ingredient with Reggenerate™. Each for a different reason, whether its quality, its
              patent or its ease of use, but all with the same clear conclusion: it was the right one, at the right time.
            </p>
          </div>
        </div>
      </section>

      <div className="md:hidden px-6 pb-4 text-center">
        <h1 className="font-['League_Spartan',Arial,sans-serif] text-[1.9rem] font-extrabold">
          <span className="text-[#2eb2a4]">
            Our <span className="text-[#f3d86b]">EGG</span>
            <span className="text-[#2eb2a4]">ceptional</span> clients
          </span>
        </h1>
        <p className="mt-2 font-['Roboto',Arial,sans-serif] text-[#2eb2a4] text-[0.95rem] leading-normal">
          Finding the right ingredient is a bit like looking for your soulmate: you need that little “something extra” that makes all the difference.
          71 brands have already found the right ingredient with Reggenerate™. Each for a different reason, whether its quality, its patent or its
          ease of use, but all with the same clear conclusion: it was the right one, at the right time.
        </p>
      </div>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[1.7rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold leading-tight text-[#4e53a3]">
            A closer look at the products <span className="text-[#f3d86b]">laid</span> by our clients
          </h2>
          <p className="mt-2 text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] leading-relaxed text-[#2eb2a4]">
            We bring the egg, and our clients hatch tomorrow&apos;s finest innovations.
          </p>
        </div>
      </section>

      <section className="bg-[#eaf6f4] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "71+", l: "Partner brands" },
              { v: "108+", l: "Products formulated" },
              { v: "15+", l: "Eggsport countries" },
              { v: "100%", l: "customer satisfaction" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center justify-center py-2">
                <div className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[#4e53a3] text-[3rem] sm:text-[3.6rem] md:text-[4rem] lg:text-[4.5rem] font-extrabold leading-none">
                  {s.v}
                </div>
                <div className="mt-3 text-[#2eb2a4] text-[1.1rem] sm:text-[1.2rem] font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-16 pb-4">
        <div className="mx-auto max-w-[1400px] px-6 text-center flex flex-col justify-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[1.7rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold leading-tight text-[#2eb2a4]">
            In France, but also <span className="text-[#f3d86b]">Egg</span>sported abroad ✈️
          </h2>
          <div className="mx-auto mt-6 w-full max-w-[800px]">
            <Image
              src="/images/clients-map.png"
              alt="Map of our clients in France and abroad"
              width={600}
              height={400}
              sizes="(min-width: 1280px) 800px, (min-width: 768px) 75vw, 95vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[#e8f6f4] pb-12 pt-16">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <div className="grid grid-cols-1 space-y-16 md:space-y-0 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
            {visibleProducts.map((p, i) => {
              const icons = iconsFor(p);
              return (
                <div key={p.title + i} className="relative flex flex-col rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 h-[600px]">
                  <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                    {icons.map((ic, idx) => (
                      <span key={ic.src + idx} className={"relative size-24" + (idx > 0 ? " -ml-10" : "")}>
                        <Image src={ic.src} alt={ic.alt} fill className="object-contain p-2" />
                      </span>
                    ))}
                  </div>
                  <div className="relative h-[260px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2 shrink-0">
                    <Image src={p.image} alt={p.imageAlt} fill className="object-cover" />
                  </div>
                  <div className="mt-4 flex flex-col h-full">
                    <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">{p.title}</h3>
                    <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">{p.brand}</p>
                    <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                      <p className="m-0">
                        <span className="font-semibold text-[#4e53a3]">Dosage form</span>: {translateGalenique(p.galenique)}
                      </p>
                      <p className="m-0">
                        <span className="font-semibold text-[#4e53a3]">Benefits</span>: {translateBienfaits(p.bienfaits)}
                      </p>
                      <p className="m-0">
                        <span className="font-semibold text-[#4e53a3]">Formulation</span>: {p.formulation}
                      </p>
                    </div>
                    <div className="mt-auto p-3 text-center">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#2eb2a4] px-5 py-3 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2 cursor-pointer"
                      >
                        View product
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((pVal) => Math.max(1, pVal - 1))}
              disabled={page === 1}
              className={[
                "rounded-md px-4 py-2 font-['League_Spartan',Arial,sans-serif] text-sm font-bold",
                page === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#4e53a3] text-white hover:opacity-90",
              ].join(" ")}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = n === page;
              return (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={[
                    "size-10 rounded-md font-['League_Spartan',Arial,sans-serif] text-sm font-extrabold",
                    active ? "bg-[#2eb2a4] text-white" : "bg-white text-[#2eb2a4] border border-[#2eb2a4] hover:bg-[#eaf6f4]",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {n}
                </button>
              );
            })}
            <button
              onClick={() => setPage((pVal) => Math.min(totalPages, pVal + 1))}
              disabled={page === totalPages}
              className={[
                "rounded-md px-4 py-2 font-['League_Spartan',Arial,sans-serif] text-sm font-bold",
                page === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#4e53a3] text-white hover:opacity-90",
              ].join(" ")}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <ContactSection imageSrc="/images/circulegg-team.jpg" imageAlt="Circul'Egg team" />
      <Footer />
    </main>
  );
}

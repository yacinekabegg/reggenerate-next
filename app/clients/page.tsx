"use client";

import { Footer } from "@/components/Footer";
import Image from "next/image";
import { ContactSection } from "@/components/ContactSection";
import { clientProducts, type ClientProduct } from "@/lib/clientProducts";
import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function ClientsPageInner() {
  const pageSize = 6;
  const totalCards = clientProducts.length;
  const totalPages = Math.ceil(totalCards / pageSize);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(totalCards, start + pageSize - 1);
  const visibleProducts = clientProducts.slice(start - 1, end);

  const galeniqueIcon = (g: string) => {
    const key = g.toLowerCase();
    if (key.includes("gélule")) return { src: "/images/pill.png", alt: "Gélules" };
    if (key.includes("poudre")) return { src: "/images/powder.png", alt: "Poudre" };
    if (key.includes("comprim")) return { src: "/images/capsules.png", alt: "Comprimés" };
    if (key.includes("gumm")) return { src: "/images/gummies.png", alt: "Gummies" };
    if (key.includes("barre")) return { src: "/images/bars.png", alt: "Barre" };
    if (key.includes("vinaigrette")) return { src: "/images/drink.png", alt: "Liquide" };
    if (key.includes("gommage")) return { src: "/images/gommage.png", alt: "Gommage" };
    return null;
  };

  const benefitIcons = (b: string) => {
    const lower = b.toLowerCase();
    const arr: { src: string; alt: string }[] = [];
    if (lower.includes("articulation")) arr.push({ src: "/images/knuckle.png", alt: "Santé des articulations" });
    if (lower.includes("beauté") || lower.includes("peau")) arr.push({ src: "/images/skin-beauty.png", alt: "Beauté de la peau" });
    return arr;
  };

  const iconsFor = (p: ClientProduct) => {
    const icons: { src: string; alt: string }[] = [];
    // Special case: gommage shows two icons (soap + gommage) in original
    if (p.galenique.toLowerCase().includes("gommage")) {
      icons.push({ src: "/images/soap.png", alt: "Savon" });
      icons.push({ src: "/images/gommage.png", alt: "Gommage" });
    } else {
      const g = galeniqueIcon(p.galenique);
      if (g) icons.push(g);
    }
    icons.push(...benefitIcons(p.bienfaits));
    return icons;
  };

  // Sync page state from URL (?page=)
  useEffect(() => {
    const qpRaw = searchParams.get("page");
    const qp = qpRaw ? parseInt(qpRaw, 10) : 1;
    const next = Number.isNaN(qp) ? 1 : Math.min(totalPages, Math.max(1, qp));
    setPage((prev) => (prev !== next ? next : prev));
  }, [searchParams, totalPages]);

  // Sync URL when page changes (avoid ?page=1)
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
    router.push(q ? `${pathname}?${q}` : pathname, { scroll: true });
  }, [page, pathname, router, searchParams]);
  
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[360px] w-full md:h-[520px]">
        <Image
          src="/images/hero-clients.svg"
          alt="Produits Ready-to-Market"
          fill
          priority
        />
        {/* Badge aligné au container */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-[1400px] px-6 pt-6 flex justify-center">
            <div className="flex w-fit items-center gap-1 sm:gap-2 rounded-full border border-[#2eb2a4] sm:border-2 bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2">
              <Image src="/images/rocket.png" alt="Rocket" width={40} height={40} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              <span className="font-['League_Spartan',Arial,sans-serif] text-[0.8rem] sm:text-[0.95rem] font-extrabold tracking-normal sm:tracking-wide text-[#2eb2a4] whitespace-nowrap">
                PRODUITS DÉJÀ SUR LE MARCHÉ
              </span>
            </div>
            
          </div>
          {/* Titre en overlay absolute (desktop) */}
          <h1 className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-24 sm:bottom-22 md:bottom-32 lg:bottom-28 lg:mb-2 z-10 text-center font-['League_Spartan',Arial,sans-serif] text-[1.6rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold w-full">
            <span className="text-[#2eb2a4]">Nos clients <span className="text-[#f3d86b]">EGG</span><span className="text-[#2eb2a4]">ceptionnels</span></span>
          </h1>
          {/* Texte descriptif en overlay absolute (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-4 md:bottom-8 z-10 w-full max-w-[1100px] px-4 sm:px-6">
            <p className="text-center text-white text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-snug sm:leading-normal md:leading-relaxed drop-shadow-md">
              Trouver le bon ingrédient, c’est un peu comme chercher l’âme sœur : il faut ce petit “plus” qui fait la différence. 71 marques ont déjà trouvé le bon ingrédient avec Reggenerate™. Chacune pour une raison différente — sa qualité, son brevet, sa facilité d’usage —mais toutes pour la même évidence : c’était le bon, au bon moment.
            </p>
          </div>
        </div>
      </section>

      {/* Titre + texte sous l'image (mobile) */}
      <div className="md:hidden px-6 pb-4 text-center">
        <h1 className="font-['League_Spartan',Arial,sans-serif] text-[1.9rem] font-extrabold">
          <span className="text-[#2eb2a4]">Nos clients <span className="text-[#f3d86b]">EGG</span><span className="text-[#2eb2a4]">ceptionnels</span></span>
        </h1>
        <p className="mt-2 font-['Roboto',Arial,sans-serif] text-[#2eb2a4] text-[0.95rem] leading-normal">
          Trouver le bon ingrédient, c’est un peu comme chercher l’âme sœur : il faut ce petit “plus” qui fait la différence. 71 marques ont déjà trouvé le bon ingrédient avec Reggenerate™. Chacune pour une raison différente — sa qualité, son brevet, sa facilité d’usage —mais toutes pour la même évidence : c’était le bon, au bon moment.
        </p>
      </div>

      {/* Zoom – titre + sous-titre */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[1.7rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold leading-tight text-[#4e53a3]">
            Zoom sur les produits <span className="text-[#f3d86b]">pondus</span> par nos clients
          </h2>
          <p className="mt-2 text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] leading-relaxed text-[#2eb2a4]">
            On apporte l’œuf, et nos clients font éclore les plus belles innovations de demain.
          </p>
        </div>
      </section>

      {/* Stats – KPIs */}
      <section className="bg-[#eaf6f4] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "60+", l: "Marques partenaires" },
              { v: "71+", l: "Produits formulés" },
              { v: "15+", l: "Pays d’eggsport" },
              { v: "100%", l: "satisfaction client" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center justify-center py-2">
                <div className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[#4e53a3] text-[3rem] sm:text-[3.6rem] md:text-[4rem] lg:text-[4.5rem] font-extrabold leading-none">
                  {s.v}
                </div>
                <div className="mt-3 text-[#2eb2a4] text-[1.1rem] sm:text-[1.2rem] font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients map */}
      <section className="bg-white pt-16 pb-4">
        <div className="mx-auto max-w-[1400px] px-6 text-center flex flex-col justify-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[1.7rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold leading-tight text-[#2eb2a4]">
            En France mais aussi à l&apos;<span className="text-[#f3d86b]">Egg</span>sport ✈️
          </h2>
          <div className="mx-auto mt-6 w-full max-w-[800px]">
            <Image
              src="/images/clients-map.png"
              alt="Carte des clients en France et à l'international"
              width={600}
              height={400}
              sizes="(min-width: 1280px) 800px, (min-width: 768px) 75vw, 95vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Clients products */}
      <section className="bg-[#e8f6f4] pb-12 pt-16">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <div className="grid grid-cols-1 space-y-16 md:space-y-0 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
            {visibleProducts.map((p, i) => {
              const icons = iconsFor(p);
              const imgH = p.tall ? "h-[280px]" : "h-[240px]";
              return (
                <div key={p.title + i} className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4">
                  <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                    {icons.map((ic, idx) => (
                      <span key={ic.src + idx} className={"relative size-24" + (idx > 0 ? " -ml-10" : "") }>
                        <Image src={ic.src} alt={ic.alt} fill className="object-contain p-2" />
                      </span>
                    ))}
                  </div>
                  <div className={`relative ${imgH} w-[85%] mx-auto overflow-hidden rounded-xl mt-2`}>
                    <Image src={p.image} alt={p.imageAlt} fill className="object-cover" />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">{p.title}</h3>
                    <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">{p.brand}</p>
                    <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                      <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : {p.galenique}</p>
                      <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : {p.bienfaits}</p>
                      <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : {p.formulation}</p>
                    </div>
                    <div className="mt-4 p-3 text-center">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2"
                      >
                        Voir le produit
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Pagination controls */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={[
                "rounded-md px-4 py-2 font-['League_Spartan',Arial,sans-serif] text-sm font-bold",
                page === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#4e53a3] text-white hover:opacity-90",
              ].join(" ")}
            >
              Précédent
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
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={[
                "rounded-md px-4 py-2 font-['League_Spartan',Arial,sans-serif] text-sm font-bold",
                page === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#4e53a3] text-white hover:opacity-90",
              ].join(" ")}
            >
              Suivant
            </button>
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

export default function ClientsPage() {
  return (
    <Suspense fallback={null}>
      <ClientsPageInner />
    </Suspense>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

type Trend = {
  title: string;
  icon: string;
  alt: string;
  badge: string;
  badgeClass: string;
  labelColor: string;
  paragraphs: string[];
  defaultOpen?: boolean;
};

const trends: Trend[] = [
  {
    title: "Beauté de la peau & des cheveux",
    icon: "/images/7.png",
    alt: "Beauté de la peau & des cheveux",
    badge: "3e segment",
    badgeClass: "bg-[#2eb2a4]",
    labelColor: "#2eb2a4",
    paragraphs: [
      "<span class='label'>Classement :</span> 3e segment des compléments alimentaires en Europe, et le plus dynamique en lancements (+24% de nouveaux produits entre 2020 et 2024) [1].",
      "<span class='label'>Tendances :</span> La demande se concentre sur des ingrédients naturels, durables et upcyclés : 72% des consommateurs européens préfèrent des actifs d’origine naturelle [2]. Le collagène, l’élastine et l’acide hyaluronique sont perçus comme les plus efficaces pour la peau et les cheveux [3].",
      "<span class='label'>Marché :</span> ~2,6 Md€ en Europe (2023), croissance +7%/an (CAGR 2024-2031) [3].",
    ],
    defaultOpen: true,
  },
  {
    title: "Santé des articulations",
    icon: "/images/8.png",
    alt: "Santé des articulations",
    badge: "4e segment",
    badgeClass: "bg-[#4e53a3]",
    labelColor: "#4e53a3",
    paragraphs: [
      "<span class='label'>Classement :</span> 4e segment en Europe, en croissance régulière grâce à une base fidèle et un rajeunissement de la cible [4].",
      "<span class='label'>Tendances :</span> Forte attente pour des solutions biosourcées et traçables en remplacement des glucosamines/chondroïtines animales classiques [6]. Le collagène, l’acide hyaluronique et les combinaisons avec glucosamine/chondroïtine sont parmi les actifs les plus demandés [7].",
      "<span class='label'>Marché :</span> ~1,0 Md€ en Europe (2023), croissance +6,8%/an (CAGR 2024-2030) [6].",
    ],
  },
  {
    title: "Performance & récupération sportive",
    icon: "/images/9.png",
    alt: "Performance & récupération sportive",
    badge: "2e segment",
    badgeClass: "bg-[#f3763e]",
    labelColor: "#f3763e",
    paragraphs: [
      "<span class='label'>Classement :</span> 2e segment en Europe, derrière les vitamines & minéraux, et celui qui croît le plus vite en volume [7].",
      "<span class='label'>Tendances :</span> Les sportifs recherchent des ingrédients multi-bénéfices : récupération articulaire, élasticité et réduction des douleurs post-effort. Le collagène et l’acide hyaluronique sont de plus en plus utilisés pour la récupération musculaire et l’élasticité. Les produits durables et décarbonés gagnent en popularité auprès des consommateurs jeunes [11].",
      "<span class='label'>Marché :</span> ~8,1 Md€ en Europe (2023), croissance +7,8%/an (CAGR 2023-2030) [9].",
    ],
  },
];

export function MarketTrendsSection() {
  const [open, setOpen] = useState(() =>
    trends.map((trend) => !!trend.defaultOpen),
  );

  const toggle = (index: number) => {
    setOpen((state) =>
      state.map((value, i) => (i === index ? !value : value)),
    );
  };

  return (
    <section id="tendances" className="bg-white py-12 sm:py-24 text-[#2eb2a4]">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-extrabold text-[#2eb2a4]">
          Répondez aux Tendances du <span className="text-[#f9df79]">Marché</span>
        </h2>
        <p className="mx-auto mb-12 mt-6 max-w-[800px] text-center text-lg leading-relaxed text-[#2eb2a4]">
          Investissez dans l&apos;avenir de la nutrition avec nos solutions adaptées aux besoins émergents de vos clients.
        </p>

        <div className="mx-auto mb-6 max-w-[980px] rounded-[18px] border-2 border-[#2eb2a4] px-5 py-4">
          {trends.map((trend, index) => {
            const isOpen = open[index];
            return (
              <div
                key={trend.title}
                className="grid grid-cols-[126px_1fr] items-stretch gap-4 border-t border-dashed border-[#2eb2a4] py-5 first:border-t-0 max-md:grid-cols-1"
              >
                <div className="flex h-[126px] w-[126px] items-center justify-center self-center justify-self-center max-md:mx-auto max-md:mb-4 max-md:h-[110px] max-md:w-[110px]">
                  <Image
                    src={trend.icon}
                    alt={trend.alt}
                    width={126}
                    height={126}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className={`grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 rounded-lg py-1 text-left transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2eb2a4] max-md:grid-cols-1 max-md:gap-2`}
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-xl font-extrabold uppercase leading-snug text-[#2eb2a4]">
                      {trend.title}
                    </h3>
                    <span
                      className={`rounded-[10px] px-2 py-1 text-sm font-extrabold uppercase text-white ${trend.badgeClass} max-md:mt-1 max-md:justify-self-start`}
                    >
                      {trend.badge}
                    </span>
                    <span className="rounded-full bg-[#2eb2a4] px-3 py-[6px] text-xs font-extrabold uppercase text-white max-md:hidden">
                      {isOpen ? "Voir moins" : "Voir plus"}
                    </span>
                  </button>

                  <div className="mt-3">
                    <button
                      type="button"
                      className="rounded-full bg-[#2eb2a4] px-3 py-[6px] text-xs font-extrabold uppercase text-white md:hidden"
                      onClick={() => toggle(index)}
                    >
                      {isOpen ? "Voir moins" : "Voir plus"}
                    </button>
                  </div>

                  <div className={`mt-4 space-y-2 ${isOpen ? "" : "hidden"}`}>
                    {trend.paragraphs.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-base leading-relaxed text-[#2eb2a4]"
                        dangerouslySetInnerHTML={{
                          __html: paragraph.replace(
                            /class='label'/g,
                            `class='label' style='color:${trend.labelColor}'`,
                          ),
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mb-7 max-w-[980px] text-sm text-slate-500">
          <span className="font-bold text-[#2eb2a4]">Sources :</span> [1] Innova Market Insights 2024 – Nutraceuticals Europe • [2] Nutraceuticals Europe 2024 – Préférences ingrédients naturels (72% des consommateurs) • [3] Vantage/Euromonitor • [4] Grand View Research 2024 • [6] Collagène/HA Market Europe • [7] Sports Nutrition Europe 2024 • [9] Euromonitor 2024.
        </div>

        <div className="flex justify-center">
          <a
            href="/ingredient"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#2eb2a4] px-6 py-3 text-lg font-bold text-white shadow-[0_6px_18px_rgba(46,178,164,0.25)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(46,178,164,0.3)]"
          >
            Je cherche un ingrédient dans ces tendances &gt;
          </a>
        </div>
      </div>
    </section>
  );
}

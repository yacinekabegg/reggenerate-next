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
    title: "Skin & hair beauty",
    icon: "/images/7.png",
    alt: "Skin & hair beauty",
    badge: "3rd segment",
    badgeClass: "bg-[#2eb2a4]",
    labelColor: "#2eb2a4",
    paragraphs: [
      "<span class='label'>Ranking:</span> 3rd largest dietary supplement segment in Europe, and the most dynamic in terms of launches (+24% new products between 2020 and 2024) [1].",
      "<span class='label'>Trends:</span> Demand is focused on natural, sustainable and upcycled ingredients: 72% of European consumers prefer actives of natural origin [2]. Collagen, elastin and hyaluronic acid are perceived as the most effective for skin and hair [3].",
      "<span class='label'>Market:</span> ~€2.6 billion in Europe (2023), growth of +7%/year (CAGR 2024-2031) [3].",
    ],
    defaultOpen: true,
  },
  {
    title: "Joint health",
    icon: "/images/8.png",
    alt: "Joint health",
    badge: "4th segment",
    badgeClass: "bg-[#4e53a3]",
    labelColor: "#4e53a3",
    paragraphs: [
      "<span class='label'>Ranking:</span> 4th largest segment in Europe, growing steadily thanks to a loyal base and a younger target audience [4].",
      "<span class='label'>Trends:</span> Strong demand for biosourced, traceable solutions to replace conventional animal-derived glucosamine/chondroitin [6]. Collagen, hyaluronic acid and combinations with glucosamine/chondroitin are among the most sought-after actives [7].",
      "<span class='label'>Market:</span> ~€1.0 billion in Europe (2023), growth of +6.8%/year (CAGR 2024-2030) [6].",
    ],
  },
  {
    title: "Sports performance & recovery",
    icon: "/images/9.png",
    alt: "Sports performance & recovery",
    badge: "2nd segment",
    badgeClass: "bg-[#f3763e]",
    labelColor: "#f3763e",
    paragraphs: [
      "<span class='label'>Ranking:</span> 2nd largest segment in Europe, behind vitamins & minerals, and the fastest growing in volume [7].",
      "<span class='label'>Trends:</span> Athletes are looking for multi-benefit ingredients: joint recovery, elasticity and reduced post-exercise pain. Collagen and hyaluronic acid are increasingly used for muscle recovery and elasticity. Sustainable, low-carbon products are gaining popularity among younger consumers [11].",
      "<span class='label'>Market:</span> ~€8.1 billion in Europe (2023), growth of +7.8%/year (CAGR 2023-2030) [9].",
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
          Respond to <span className="text-[#f9df79]">Market</span> Trends
        </h2>
        <p className="mx-auto mb-12 mt-6 max-w-[800px] text-center text-lg leading-relaxed text-[#2eb2a4]">
          Invest in the future of nutrition with our solutions tailored to your customers&apos; emerging needs.
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
                      {isOpen ? "See less" : "See more"}
                    </span>
                  </button>

                  <div className="mt-3">
                    <button
                      type="button"
                      className="rounded-full bg-[#2eb2a4] px-3 py-[6px] text-xs font-extrabold uppercase text-white md:hidden"
                      onClick={() => toggle(index)}
                    >
                      {isOpen ? "See less" : "See more"}
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
          <span className="font-bold text-[#2eb2a4]">Sources:</span> [1] Innova Market Insights 2024, Nutraceuticals Europe • [2] Nutraceuticals Europe 2024, natural ingredient preferences (72% of consumers) • [3] Vantage/Euromonitor • [4] Grand View Research 2024 • [6] Collagen/HA Market Europe • [7] Sports Nutrition Europe 2024 • [9] Euromonitor 2024.
        </div>

        <div className="flex justify-center">
          <a
            href="/en/ingredient"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#2eb2a4] px-6 py-3 text-lg font-bold text-white shadow-[0_6px_18px_rgba(46,178,164,0.25)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(46,178,164,0.3)]"
          >
            I&apos;m looking for an ingredient in these trends &gt;
          </a>
        </div>
      </div>
    </section>
  );
}

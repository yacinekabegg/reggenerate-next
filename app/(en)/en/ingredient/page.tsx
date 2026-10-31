"use client";

import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/en/Footer";
import { ContactSection } from "@/components/en/ContactSection";

type TabKey = "composition" | "bienfaits" | "science" | "sourcing" | "specifications" | "qualite";

const tabs: { key: TabKey; label: string }[] = [
  { key: "composition", label: "Composition" },
  { key: "bienfaits", label: "Benefits" },
  { key: "science", label: "Science" },
  { key: "sourcing", label: "Sourcing" },
  { key: "specifications", label: "Specifications" },
  { key: "qualite", label: "Quality" },
];

export default function IngredientPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("composition");
  const [benefitView, setBenefitView] = useState<"peau" | "articulations">("peau");
  const [hoveredSpecIdx, setHoveredSpecIdx] = useState<number | null>(null);



  const tabButtonClass = (key: TabKey) =>
    [
      "flex-none md:flex-1 whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4 text-[0.95rem] sm:text-[1.1rem] font-semibold transition-all border-b-4",
      key === activeTab
        ? "text-[#f3d86b] border-[#f3d86b]"
        : "text-[#2eb2a4] border-transparent hover:text-[#2eb2a4]/80",
    ].join(" ");

  return (
    <main className="min-h-screen pt-16">
      {/* Hero split */}
      <section className="relative bg-white w-full">
        <div className="mx-auto flex min-h-[400px] w-full flex-col md:flex-row">
          {/* Left side */}
          <div className="flex items-center justify-center bg-[#2eb2a4] p-4 w-full md:w-2/3">
            <div className="w-full max-w-[600px] text-center">
              <div className="mb-8 inline-block rounded-full bg-white px-6 py-3 font-['League_Spartan',Arial,sans-serif] text-[1rem] font-semibold uppercase text-[#2eb2a4]">
                OUR ALL-IN-ONE INGREDIENT
              </div>
              <div className="mb-2">
                <Image
                  src="/images/47.png"
                  alt="REGGENERATE™ BY circul'egg"
                  width={1200}
                  height={400}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="m-0 text-[1.25rem] leading-[1.6] text-white">
                collagen x elastin x hyaluronic acid -...
              </p>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative min-h-[300px] w-full md:w-1/3">
            <Image
              src="/images/48.png"
              alt="Eggshell membrane composition"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-wrap items-center justify-between gap-8">
            {[
              { src: "/images/49.png", title: "Low dosage", desc: "300 mg" },
              { src: "/images/50.png", title: "Neutral taste", desc: "easy to mask" },
              { src: "/images/51.png", title: "Proven & Patented", desc: "clinical studies available" },
              { src: "/images/52.png", title: "Eco-friendly", desc: "clean, upcycled, biosourced" },
              { src: "/images/5.png", title: "Versatile", desc: "capsules, gummies, bars,..." },
            ].map((f) => (
              <div key={f.title} className="min-w-[200px] flex-1 text-center">
                <div className="mb-6 flex justify-center">
                  <Image src={f.src} alt={f.title} width={80} height={80} className="h-20 w-20 object-contain text-[#2eb2a4]" />
                </div>
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.5rem] font-semibold text-[#2eb2a4]">
                  {f.title}
                </h3>
                <p className="m-0 font-['Roboto',Arial,sans-serif] text-[1rem] text-[#2eb2a4]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-[#e8f4f8] py-12">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="max-w-[800px]">
            <h2 className="font-['League_Spartan',Arial,sans-serif] text-[2.5rem] font-bold text-[#4e53a3]">
              Reggenerate<sup className="text-[0.6em]">™</sup>
            </h2>
            <p className="mb-6 font-['Roboto',Arial,sans-serif] text-[1.1rem] italic text-[#4e53a3]">[rɪˈdʒɛnəreɪt]</p>
            <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.5rem] font-semibold text-[#2eb2a4]">
              A Circul&apos;Egg brand
            </h3>
            <p className="m-0 font-['Roboto',Arial,sans-serif] text-[1.1rem] leading-[1.6] text-[#2eb2a4]">
              It is a patented eggshell membrane, naturally rich in collagen, hyaluronic acid and
              elastin. Obtained through a 100% mechanical, eco-responsible process (Clean Label), it upcycles eggshells
              from egg-breaking plants, while preserving their natural qualities and with no added chemicals.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-[#fafafa] pt-12 pb-0 sm:pb-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div
              className="mb-8 -mx-4 flex flex-nowrap items-stretch gap-2 overflow-x-auto border-b-2 border-[#e5e5e5] px-4 sm:mx-0 sm:px-0"
              role="tablist"
            >{
              tabs.map((t) => (
                <button
                  key={t.key}
                  className={tabButtonClass(t.key)}
                  onClick={() => setActiveTab(t.key)}
                  role="tab"
                  aria-selected={activeTab === t.key}
                >
                  {t.label}
                </button>
              ))
            }</div>

            {/* Composition */}
            {(
              <div hidden={activeTab !== "composition"} className="mx-auto max-w-[900px] text-center">
                <h2 className="mb-12 font-['League_Spartan',Arial,sans-serif] text-[2.5rem] font-semibold text-[#4e53a3]">
                  A synergy of recognized bioactive molecules...
                </h2>

                {/* Simple static bars (no canvas) */}
                <div className="py-8 sm:py-12">
                  {/* Horizontal scroll wrapper on small screens */}
                  <div className="-mx-4 overflow-x-auto px-4 overscroll-x-contain">
                    <div className="relative h-[320px] sm:h-[400px] min-w-[560px] sm:min-w-0">
                      {/* Y scale */}
                      <div className="absolute left-0 top-0 flex h-[280px] sm:h-[350px] flex-col justify-between text-[#2eb2a4] text-xs sm:text-base">
                        {[25, 20, 15, 10, 5, 0].map((v) => (
                          <span key={v}>{v}%</span>
                        ))}
                      </div>
                      {/* Bars */}
                      <div className="relative ml-[48px] sm:ml-[60px] h-[280px] sm:h-[350px]">
                        <div className="relative h-full px-6 sm:px-8">
                          <div className="absolute bottom-0 left-6 sm:left-8 flex h-full items-end gap-6 sm:gap-16">
                            {[
                              { label: "Elastin", value: 25, color: "#2eb2a4", text: "25%" },
                              { label: "Collagen", value: 22, color: "#4e53a3", text: "22%" },
                              { label: "GAGs*", value: 4, color: "#f3d86b", text: "4%", dark: true },
                              { label: "Hyaluronic acid", value: 3, color: "#e67e22", text: "3%" },
                              { label: "Glucosamine", value: 2, color: "#666", text: "2%" },
                            ].map((b) => (
                              <div
                                key={b.label}
                                className="relative flex w-14 sm:w-16 md:w-20 items-center justify-center rounded-t-md"
                                style={{ height: `${Math.max(b.value * 14, 40)}px`, background: b.color }}
                              >
                                <span className={(b.dark ? "text-[#333]" : "text-white") + " text-[0.85rem] sm:text-base font-semibold"}>
                                  {b.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Labels aligned with bars */}
                      <div className="relative ml-[48px] sm:ml-[60px] mt-6">
                        <div className="flex items-start justify-start gap-6 sm:gap-16 pl-6 sm:pl-8 text-center text-[#2eb2a4] text-xs sm:text-base">
                          {["Elastin", "Collagen", "GAGs*", "Hyaluronic acid", "Glucosamine"].map((l) => (
                            <span key={l} className="w-14 sm:w-16 md:w-20 font-semibold">
                              {l}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-8 border-t border-[#e5e5e5] pt-6 text-left text-[#4e53a3]">
                        <p className="text-sm sm:text-base font-medium">*Sulfated glycosaminoglycans: chondroitin, dermatan sulfate, keratan sulfate</p>
                        <p className="text-sm sm:text-base font-medium">Assay method validated and certified by Université Bretagne Sud (UBS)</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            )}

            {/* Benefits */}
            {(
              <div hidden={activeTab !== "bienfaits"} className="mx-auto max-w-[900px]">
                <div className="mb-12 text-center">
                  <h2 className="font-['League_Spartan',Arial,sans-serif] text-[2.5rem] font-semibold text-[#4e53a3]">
                    ....For amplified benefits on the
                    <button className="mx-2 underline text-[#2eb2a4]" onClick={() => setBenefitView("peau")}>skin</button>
                    ... and on the
                    <button className="mx-2 underline text-[#2eb2a4]" onClick={() => setBenefitView("articulations")}>joints</button>
                  </h2>
                </div>
                <>
                  <div hidden={benefitView !== "peau"} className="text-center">
                    <Image src="/images/schema-peau-bienfaits.png" alt="Diagram of the benefits for the skin" width={900} height={600} className="mx-auto h-auto w-full rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.06)]" />
                  </div>
                  <div hidden={benefitView !== "articulations"} className="text-center">
                    <Image src="/images/bienfaits-articulations.png" alt="Diagram of the benefits for the joints (temporary)" width={900} height={600} className="mx-auto h-auto w-full rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.06)]" />
                  </div>
                </>
              </div>
            )}

            {/* Science */}
            {(
              <div hidden={activeTab !== "science"} className="mx-auto max-w-[1100px] text-center">
                <h2 className="mb-2 font-['League_Spartan',Arial,sans-serif] text-[2.5rem] font-bold text-[#4e53a3]">
                  16 scientific studies
                </h2>
                <p className="mb-8 font-['Roboto',Arial,sans-serif] text-[1.05rem] text-[#2eb2a4]">
                  demonstrate the <span className="font-semibold">unique performance</span> of eggshell membrane:
                </p>
                <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
                  {["Efficacy", "Absorption", "Safety"].map((l) => (
                    <span
                      key={l}
                      className="rounded-md bg-[#f3d86b] px-4 py-2 text-[0.9rem] font-['League_Spartan',Arial,sans-serif] font-bold uppercase tracking-wide text-white"
                    >
                      {l}
                    </span>
                  ))}
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                    {/* Proprietary studies */}
                    <div className="flex flex-col items-center">
                      <div className="text-[3.5rem] font-extrabold leading-none text-[#4e53a3]">2</div>
                      <div className="mt-3 h-[3px] w-16 bg-[#4e53a3]" />
                      <div className="mt-4">
                        <div className="text-[0.85rem] font-bold uppercase tracking-wide text-[#4e53a3]">Proprietary studies</div>
                        <ul className="mt-2 space-y-1 text-left text-[0.95rem] leading-snug text-[#2eb2a4]">
                          <li>- 1 consumer study on skin beauty</li>
                          <li>- 1 ex vivo study on skin explants</li>
                        </ul>
                      </div>
                    </div>

                    {/* In vitro studies */}
                    <div className="flex flex-col items-center">
                      <div className="text-[3.5rem] font-extrabold leading-none text-[#4e53a3]">3</div>
                      <div className="mt-3 h-[3px] w-16 bg-[#4e53a3]" />
                      <div className="mt-4">
                        <div className="text-[0.85rem] font-bold uppercase tracking-wide text-[#4e53a3]">In vitro studies</div>
                        <ul className="mt-2 space-y-1 text-left text-[0.95rem] leading-snug text-[#2eb2a4]">
                          <li>- 2 on anti-inflammatory and antioxidant effects</li>
                          <li>- 1 on anti-aging efficacy</li>
                          <li>- 1 on toxicity</li>
                        </ul>
                      </div>
                    </div>

                    {/* In vivo studies */}
                    <div className="flex flex-col items-center">
                      <div className="text-[3.5rem] font-extrabold leading-none text-[#4e53a3]">3</div>
                      <div className="mt-3 h-[3px] w-16 bg-[#4e53a3]" />
                      <div className="mt-4">
                        <div className="text-[0.85rem] font-bold uppercase tracking-wide text-[#4e53a3]">In vivo studies</div>
                        <ul className="mt-2 space-y-1 text-left text-[0.95rem] leading-snug text-[#2eb2a4]">
                          <li>- 1 on digestibility and absorption</li>
                          <li>- 1 on anti-aging efficacy</li>
                          <li>- 1 on toxicity</li>
                        </ul>
                      </div>
                    </div>

                    {/* Clinical studies */}
                    <div className="flex flex-col items-center">
                      <div className="text-[3.5rem] font-extrabold leading-none text-[#4e53a3]">8</div>
                      <div className="mt-3 h-[3px] w-16 bg-[#4e53a3]" />
                      <div className="mt-4">
                        <div className="text-[0.85rem] font-bold uppercase tracking-wide text-[#4e53a3]">Clinical studies</div>
                        <ul className="mt-2 space-y-1 text-left text-[0.95rem] leading-snug text-[#2eb2a4]">
                          <li>- 3 on skin beauty</li>
                          <li>- 5 on joints</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Efficacy in numbers */}
                <div className="mt-14">
                  <h2 className="mb-8 text-center font-['League_Spartan',Arial,sans-serif] text-[2.5rem] font-bold text-[#4e53a3]">
                    Efficacy in numbers...
                  </h2>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Skin beauty card */}
                    <div className="relative overflow-hidden rounded-2xl border border-[#d9f2ee] bg-white p-6 md:p-8 shadow-sm">
                      <div className="absolute left-0 top-0 h-full w-3 rounded-l-2xl bg-[#2eb2a4]" aria-hidden />
                      <h4 className="mb-6 font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold uppercase tracking-wide text-[#2eb2a4]">
                        Skin beauty
                      </h4>

                      {/* Stat rows */}
                      {[
                        { pct: 78, text: (
                          <>
                            of women noticed improved skin <span className="font-semibold text-[#2eb2a4]">firmness</span> and a
                            <span className="font-semibold text-[#2eb2a4]"> brighter complexion</span> after just 2 months of supplementation.
                          </>
                        ) },
                        { pct: 76, text: (
                          <>
                            of women noticed improved skin <span className="font-semibold text-[#2eb2a4]">elasticity</span> after just 2 months of supplementation.
                          </>
                        ) },
                        { pct: 71, text: (
                          <>
                            of women noticed <span className="font-semibold text-[#2eb2a4]">better hydrated skin</span> from the 1st month.
                          </>
                        ) },
                        { pct: 60, text: (
                          <>
                            of women noticed <span className="font-semibold text-[#2eb2a4]">more supple skin</span> from the 1st month.
                          </>
                        ) },
                      ].map((row) => (
                        <div key={row.pct} className="flex items-center gap-4 border-b border-[#e5e5e5] py-4 last:border-b-0">
                          {/* Percentage ring */}
                          <div className="relative h-16 w-16 shrink-0 rounded-full" style={{ background: `conic-gradient(#2eb2a4 0% ${row.pct}%, #e5e7eb ${row.pct}% 100%)` }}>
                            <div className="absolute inset-1 rounded-full bg-white" />
                            <div className="absolute inset-0 flex items-center justify-center font-['League_Spartan',Arial,sans-serif] text-[0.95rem] font-bold text-[#2eb2a4]">
                              {row.pct}%
                            </div>
                          </div>
                          <p className="m-0 text-left font-['Roboto',Arial,sans-serif] text-[0.98rem] leading-snug text-[#4e53a3]">
                            {row.text}
                          </p>
                        </div>
                      ))}

                    </div>

                    {/* Joint health card */}
                    <div className="relative overflow-hidden rounded-2xl border border-[#d9f2ee] bg-white p-6 md:p-8 shadow-sm">
                      <div className="absolute right-0 top-0 h-full w-3 rounded-r-2xl bg-[#2eb2a4]" aria-hidden />
                      <h4 className="mb-6 font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold uppercase tracking-wide text-[#2eb2a4]">
                        Joint health
                      </h4>

                      {[
                        {
                          sign: "-51.9%",
                          text: (
                            <>
                              in <span className="font-semibold text-[#2eb2a4]">pain</span> within 30 days
                              <span className="ml-1 italic text-[#4e53a3]/70">(Gil-Quintana et al., 2018)</span>
                            </>
                          ),
                        },
                        {
                          sign: "+48%",
                          text: (
                            <>
                              improvement in <span className="font-semibold text-[#2eb2a4]">joint function</span> within 30 days, with results from day 3
                              <span className="ml-1 italic text-[#4e53a3]/70">(Gil-Quintana et al., 2018)</span>
                            </>
                          ),
                        },
                        {
                          sign: "-35%",
                          text: (
                            <>
                              in <span className="font-semibold text-[#2eb2a4]">joint stiffness</span> within 30 days, with effects from day 10
                              <span className="ml-1 italic text-[#4e53a3]/70">(Eskiyurt N et al., 2019)</span>
                            </>
                          ),
                        },
                        {
                          sign: "+56.3%",
                          text: (
                            <>
                              improvement in <span className="font-semibold text-[#2eb2a4]">sports recovery</span>
                              <span className="ml-1 italic text-[#4e53a3]/70">(Ruff KJ et al., 2018)</span>
                            </>
                          ),
                        },
                      ].map((it) => (
                        <div key={it.sign} className="flex items-start gap-4 border-b border-[#e5e5e5] py-4 last:border-b-0">
                          {/* Bars icon */}
                          <div className="mt-1 flex h-10 items-end gap-[3px]">
                            <div className="h-8 w-2 rounded bg-[#2eb2a4]" />
                            <div className="h-7 w-2 rounded bg-[#9bd9d3]" />
                            <div className="h-6 w-2 rounded bg-[#bfe8e4]" />
                            <div className="h-5 w-2 rounded bg-[#d9f2ee]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start gap-2">
                              <span className="-rotate-3 rounded bg-[#2eb2a4] px-2 py-0.5 text-[0.9rem] font-bold text-white">
                                {it.sign}
                              </span>
                              <p className="m-0 text-left font-['Roboto',Arial,sans-serif] text-[0.98rem] leading-snug text-[#4e53a3]">
                                {it.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                    {/* Consumer study note under the left card */}
                    <p className="text-left text-[0.85rem] italic text-[#2eb2a4]">*Circul&apos;Egg consumer study, 2024</p>
                  </div>
                  <div className="mt-8 text-center">
                    <button className="inline-block rounded-md bg-[#4e53a3] px-6 py-3 font-['League_Spartan',Arial,sans-serif] font-bold text-white shadow-sm">
                      Request the full studies &gt;
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Sourcing */}
            {(
              <div hidden={activeTab !== "sourcing"} className="mx-auto max-w-[1200px] px-4 sm:px-6">
                <Image
                  src="/images/sourcing.png"
                  alt="Sourcing - Circul'egg supply chain"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.06)]"
                  priority
                />

                {/* CSR commitment blocks */}
                <div className="mt-10 space-y-6 md:space-y-8">
                  {/* Carbon footprint */}
                  <div className="rounded-2xl bg-[#2eb2a4] p-6 text-white shadow-sm md:p-8 max-w-[75ch]">
                    <div className="flex items-center gap-5">
                      <Image src="/images/65.png" alt="Carbon footprint" width={100} height={100} className="h-28 w-28 object-contain" />
                      <div>
                        <div className="font-['League_Spartan',Arial,sans-serif] text-[1.6rem] font-extrabold">Reduced carbon footprint</div>
                        <p className="mt-1 text-[1rem] leading-snug opacity-95">
                          5 times lower than marine collagen<br />
                          10 times lower than bovine collagen
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Full traceability */}
                  <div className="rounded-2xl bg-[#e67e22] p-6 text-white shadow-sm md:p-8 max-w-[75ch] md:ml-auto">
                    <div className="flex items-center justify-between gap-5">
                      <div className="max-w-[820px]">
                        <div className="font-['League_Spartan',Arial,sans-serif] text-[1.6rem] font-extrabold">Full traceability</div>
                        <p className="mt-1 text-[1rem] leading-snug opacity-95">
                          Batch tracking from the farm to the finished product. Certificates of analysis provided for every batch.
                        </p>
                      </div>
                      <Image src="/images/66.png" alt="Traceability" width={100} height={100} className="hidden h-28 w-28 shrink-0 object-contain sm:block" />
                    </div>
                  </div>

                  {/* CSR commitment */}
                  <div className="rounded-2xl bg-[#f9df79] p-6 text-white shadow-sm md:p-8 max-w-[75ch]">
                    <div className="flex items-center gap-5">
                      <Image src="/images/67.png" alt="CSR commitment" width={100} height={100} className="h-28 w-28 object-contain" />
                      <div className="max-w-[820px]">
                        <div className="font-['League_Spartan',Arial,sans-serif] text-[1.6rem] font-extrabold">CSR commitment</div>
                        <p className="mt-1 text-[1rem] leading-snug opacity-95">
                          A mission-driven company, local and 100% electric, that creates value for farmers and egg-breaking plants.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Specifications */}
            {(
              <div hidden={activeTab !== "specifications"} className="mx-auto max-w-[1100px] px-4 sm:px-6">
                <div className="relative rounded-2xl border-2 border-[#4e53a3] bg-[#fafafa] p-5 pt-10 sm:p-6 sm:pt-12">
                  {/* Title set into the border */}
                  <div className="absolute -top-4 left-6 right-4 z-10 flex items-center gap-3">
                    <span className="shrink-0 bg-[#fafafa] px-2 font-['League_Spartan',Arial,sans-serif] text-[1.3rem] font-extrabold text-[#4e53a3]">
                      Product description
                    </span>
                  </div>

                  <p className=" text-[0.98rem] leading-snug text-[#2eb2a4]">
                    Natural, biosourced protein powder made from eggshells. This product is suitable for
                    nutraceutical applications, at a daily dose of 300mg.
                  </p>
                </div>

                {/* Active components of the product */}
                <div className="relative mt-8 rounded-2xl border-2 border-[#4e53a3] bg-[#fafafa] p-5 pt-10 sm:p-6 sm:pt-12">
                  {/* Title set into the border */}
                  <div className="absolute -top-4 left-6 right-4 z-10 flex items-center gap-3">
                    <span className="shrink-0 bg-[#fafafa] px-2 font-['League_Spartan',Arial,sans-serif] text-[1.3rem] font-extrabold text-[#4e53a3]">
                      Active components of the product
                    </span>
                  </div>

                  {/* Chart */}
                  <div className="mt-2 overflow-x-auto">
                    <div className="grid min-w-[640px] grid-cols-[230px_1fr] items-stretch gap-x-4">
                      {/* Labels aligned per row */}
                      <div className="relative h-[300px] py-4">
                        <div className="flex h-full flex-col gap-2 text-right text-[0.95rem] font-medium text-[#2eb2a4]">
                          <div className="flex h-12 items-center justify-end">Proteins (Kjeldahl)*</div>
                          <div className="flex h-12 items-center justify-end">Collagen (Colorimetry)*</div>
                          <div className="flex h-12 items-center justify-end">Elastin (Colorimetry)*</div>
                          <div className="flex h-12 items-center justify-end">Total GAGs** (USP26)*</div>
                          <div className="flex h-12 items-center justify-end">Of which hyaluronic acid (HPLC‑ECD)*</div>
                        </div>
                      </div>

                      {/* Bars area with vertical gridlines */}
                      <div className="relative">
                        <div className="relative h-[300px] overflow-visible rounded-md bg-white p-4">
                          {/* vertical gridlines every 20% aligned to inner padding */}
                          <div className="pointer-events-none absolute left-4 right-4 top-4 bottom-4 rounded-md bg-[linear-gradient(to_right,rgba(78,83,163,0.15)_1px,transparent_1px)] [background-size:20%_100%]" />

                          {/* Bars stack */}
                          <div className="relative flex h-full flex-col gap-2">
                          {/* Proteins 80% */}
                          <div
                            className="relative h-12 cursor-default"
                            style={{ width: '80%' }}
                            onMouseEnter={() => setHoveredSpecIdx(0)}
                            onMouseLeave={() => setHoveredSpecIdx(null)}
                          >
                            <div className={"absolute inset-0 rounded-r-lg bg-[#2eb2a4]" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 0 ? " opacity-30" : "") } />
                            <span className={"absolute right-2 top-1/2 -translate-y-1/2 rounded bg-[#2eb2a4] px-2 py-1 text-sm font-semibold text-white" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 0 ? " opacity-30" : "")}>≥ 80%</span>
                            {hoveredSpecIdx === 0 && (
                              <div className="pointer-events-none absolute -right-2 top-1/2 z-20 -translate-y-1/2 translate-x-full ml-2 rounded-md bg-[#1f2937] px-3 py-2 text-xs font-semibold text-white shadow-xl whitespace-nowrap min-w-[220px]">
                                <div>Proteins (Kjeldahl)*</div>
                                <div className="opacity-90">Series 1: ≥ 80%</div>
                              </div>
                            )}
                          </div>
                          {/* Collagen 22% */}
                          <div
                            className="relative h-12 cursor-default"
                            style={{ width: '22%' }}
                            onMouseEnter={() => setHoveredSpecIdx(1)}
                            onMouseLeave={() => setHoveredSpecIdx(null)}
                          >
                            <div className={"absolute inset-0 rounded-r-lg bg-[#e67e22]" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 1 ? " opacity-30" : "") } />
                            <span className={"absolute right-2 top-1/2 -translate-y-1/2 rounded bg-[#e67e22] px-2 py-1 text-sm font-semibold text-white" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 1 ? " opacity-30" : "")}>≥ 22%</span>
                            {hoveredSpecIdx === 1 && (
                              <div className="pointer-events-none absolute -right-2 top-1/2 z-20 -translate-y-1/2 translate-x-full ml-4 rounded-md bg-[#1f2937] px-3 py-2 text-xs font-semibold text-white shadow-xl whitespace-nowrap min-w-[220px]">
                                <div>Collagen (Colorimetry)*</div>
                                <div className="opacity-90">Series 1: ≥ 22%</div>
                              </div>
                            )}
                          </div>
                          {/* Elastin 25% */}
                          <div
                            className="relative h-12 cursor-default"
                            style={{ width: '25%' }}
                            onMouseEnter={() => setHoveredSpecIdx(2)}
                            onMouseLeave={() => setHoveredSpecIdx(null)}
                          >
                            <div className={"absolute inset-0 rounded-r-lg bg-[#f3d86b]" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 2 ? " opacity-30" : "") } />
                            <span className={"absolute right-2 top-1/2 -translate-y-1/2 rounded bg-[#f3d86b] px-2 py-1 text-sm font-semibold text-[#333]" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 2 ? " opacity-30" : "")}>≥ 25%</span>
                            {hoveredSpecIdx === 2 && (
                              <div className="pointer-events-none absolute -right-2 top-1/2 z-20 -translate-y-1/2 translate-x-full ml-2 rounded-md bg-[#1f2937] px-3 py-2 text-xs font-semibold text-white shadow-xl whitespace-nowrap min-w-[220px]">
                                <div>Elastin (Colorimetry)*</div>
                                <div className="opacity-90">Series 1: ≥ 25%</div>
                              </div>
                            )}
                          </div>
                          {/* GAGs 5% */}
                          <div
                            className="relative h-12 cursor-default"
                            onMouseEnter={() => setHoveredSpecIdx(3)}
                            onMouseLeave={() => setHoveredSpecIdx(null)}
                          >
                            <div className={"h-full rounded-r-lg bg-[#4e53a3]" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 3 ? " opacity-30" : "")} style={{ width: '5%' }} />
                            <div className="pointer-events-none absolute left-[5%] top-1/2 -translate-y-1/2 ml-2 flex items-center">
                              <span className={"rounded bg-[#4e53a3] px-2 py-1 text-sm font-semibold text-white" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 3 ? " opacity-30" : "")}>≥ 5%</span>
                              {hoveredSpecIdx === 3 && (
                                <div className="ml-2 rounded-md bg-[#1f2937] px-3 py-2 text-xs font-semibold text-white shadow-xl whitespace-nowrap z-20 min-w-[220px]">
                                  <div>Total GAGs** (USP26)*</div>
                                  <div className="opacity-90">Series 1: ≥ 5%</div>
                                </div>
                              )}
                            </div>
                          </div>
                          {/* HA 3% */}
                          <div
                            className="relative h-12 cursor-default"
                            onMouseEnter={() => setHoveredSpecIdx(4)}
                            onMouseLeave={() => setHoveredSpecIdx(null)}
                          >
                            <div className={"h-full rounded-r-lg bg-[#333]" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 4 ? " opacity-30" : "")} style={{ width: '3%' }} />
                            <div className="pointer-events-none absolute left-[3%] top-1/2 -translate-y-1/2 ml-2 flex items-center">
                              <span className={"rounded bg-[#333] px-2 py-1 text-sm font-semibold text-white" + (hoveredSpecIdx !== null && hoveredSpecIdx !== 4 ? " opacity-30" : "")}>≥ 3%</span>
                              {hoveredSpecIdx === 4 && (
                                <div className="ml-2 rounded-md bg-[#1f2937] px-3 py-2 text-xs font-semibold text-white shadow-xl whitespace-nowrap z-20 min-w-[220px]">
                                  <div>Of which hyaluronic acid (HPLC‑ECD)*</div>
                                  <div className="opacity-90">Series 1: ≥ 3%</div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* X-axis ticks positioned under gridlines */}
                        <div className="pointer-events-none absolute -bottom-2 left-4 right-4 h-5 text-[0.75rem] font-semibold text-[#4e53a3]/70">
                          {[
                            { label: '≥ 0%', pos: '0%' },
                            { label: '≥ 20%', pos: '20%' },
                            { label: '≥ 40%', pos: '40%' },
                            { label: '≥ 60%', pos: '60%' },
                            { label: '≥ 80%', pos: '80%' },
                          ].map((t, i) => (
                            <span
                              key={t.label}
                              className={"absolute bottom-0 " + (i === 0 ? "-translate-x-0" : "-translate-x-1/2")}
                              style={{ left: t.pos }}
                            >
                              {t.label}
                            </span>
                          ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mt-3 space-y-1 text-[0.85rem] text-[#2eb2a4]">
                    <p className="m-0">*All measurements are performed by a COFRAC-accredited third-party laboratory or a university partner</p>
                    <p className="m-0">**GAGs: chondroitin sulfate, keratan sulfate, dermatan sulfate, heparan sulfate</p>
                  </div>
                </div>

                {/* Physico-chemical properties */}
                <div className="relative mt-8 rounded-2xl border-2 border-[#4e53a3] bg-[#fafafa] p-5 pt-10 sm:p-6 sm:pt-12">
                  {/* Title set into the border */}
                  <div className="absolute -top-4 left-6 right-4 z-10 flex items-center gap-3">
                    <span className="shrink-0 bg-[#fafafa] px-2 font-['League_Spartan',Arial,sans-serif] text-[1.3rem] font-extrabold text-[#4e53a3]">
                      Physico-chemical properties
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {[
                      { icon: "/images/70.png", title: "Appearance", desc: (
                        <>
                          Off-white, CIE colorimetry<br />L*a*b* 91/1/12.5
                        </>
                      ) },
                      { icon: "/images/71.png", title: "Taste", desc: "Neutral" },
                      { icon: "/images/72.png", title: "Particle size - D50", desc: (
                        <>
                          180µm ± 20µm* or<br />
                          &lt;100µm*
                        </>
                      ) },
                      { icon: "/images/72.png", title: "Particle size - D90", desc: (
                        <>
                          420µm ± 20µm* or<br />
                          &lt;250µm*
                        </>
                      ) },
                      { icon: "/images/73.png", title: "Bulk density", desc: "> 0.32 g/cm3" },
                      { icon: "/images/73.png", title: "Tapped density", desc: "> 0.4 g/cm3" },
                      { icon: "/images/74.png", title: "Aw", desc: "< 0.4" },
                      { icon: "/images/75.png", title: "pH", desc: "8.1" },
                    ].map((it) => (
                      <div key={it.title} className="flex flex-col items-center gap-2 rounded-2xl bg-white/70 p-4 text-center">
                        <Image src={it.icon} alt={it.title} width={64} height={64} className="h-20 w-20 object-contain" />
                        <div className="font-['League_Spartan',Arial,sans-serif] text-[1.05rem] font-extrabold text-[#4e53a3]">{it.title}</div>
                        <div className="text-[0.95rem] leading-snug text-[#2eb2a4]">{it.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 text-[0.8rem] text-[#2eb2a4]">
                    <span className="italic">* Indicative measurements, varying by batch; target values available on request.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quality */}
            {(
              <div hidden={activeTab !== "qualite"} className="mx-auto max-w-[1100px] px-4 sm:px-6 text-center">
                <h2 className="mb-8 font-['League_Spartan',Arial,sans-serif] text-[2.2rem] font-extrabold text-[#4e53a3]">
                  Certifications & Compliance
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Certified egg-breaking plants */}
                  <div className="flex items-start justify-center md:h-[420px] md:justify-start">
                    <Image
                      src="/images/casseries-certifiees.png"
                      alt="Logos of the certified egg-breaking plants"
                      width={520}
                      height={420}
                      className="block h-auto w-full max-w-full sm:max-w-[520px] object-contain object-top"
                    />
                  </div>

                  {/* Certified product */}
                  <div className="flex items-start justify-center md:h-[420px] md:justify-start">
                    <Image
                      src="/images/produit-certifie.png"
                      alt="Logos of the certified product"
                      width={520}
                      height={420}
                      className="block h-auto w-full max-w-full sm:max-w-[520px] object-contain object-top"
                    />
                  </div>
                </div>

                {/* Regulatory status */}
                <div className="mt-4 text-left">
                  <h3 className="mb-2 font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3]">
                    Regulatory status
                  </h3>
                  <p className="m-0 max-w-[900px] text-[0.98rem] leading-snug text-[#2eb2a4]">
                    Our products comply with the following regulations: Regulation (EC) No 853/2004 (egg products),
                    not a Novel Food (EU No 2015/2283), HACCP standard, health approval.
                  </p>
                </div>

                {/* CTA Row */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  {[{ t: 'Technical data sheet' }, { t: "Certificates of analysis" }, { t: 'Certifications' }].map((b) => (
                    <button
                      key={b.t}
                      className="rounded-md bg-[#4e53a3] px-5 py-3 font-['League_Spartan',Arial,sans-serif] text-[0.95rem] font-bold text-white shadow-[0_3px_8px_rgba(0,0,0,0.12)]"
                    >
                      {b.t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactSection
        imageSrc="/images/circulegg-team.jpg"
        imageAlt="Circul'Egg team"
      />

      <Footer />
    </main>
  );
}

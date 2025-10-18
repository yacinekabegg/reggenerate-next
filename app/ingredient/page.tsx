"use client";

import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/Footer";

type TabKey = "composition" | "bienfaits" | "science" | "sourcing" | "specifications" | "qualite";

const tabs: { key: TabKey; label: string }[] = [
  { key: "composition", label: "Composition" },
  { key: "bienfaits", label: "Bienfaits" },
  { key: "science", label: "Science" },
  { key: "sourcing", label: "Sourcing" },
  { key: "specifications", label: "Spécifications" },
  { key: "qualite", label: "Qualité" },
];

export default function IngredientPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("composition");
  const [benefitView, setBenefitView] = useState<"peau" | "articulations">("peau");
  const [hoveredSpecIdx, setHoveredSpecIdx] = useState<number | null>(null);

  

  const tabButtonClass = (key: TabKey) =>
    [
      "flex-1 px-6 py-4 text-[1.1rem] font-semibold transition-all border-b-4",
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
                NOTRE INGRÉDIENT TOUT-EN-UN
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
                collagène x élastine x acide hyaluronique -...
              </p>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative min-h-[300px] w-full md:w-1/3">
            <Image
              src="/images/48.png"
              alt="Composition de la membrane d'œuf"
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
              { src: "/images/49.png", title: "Posologie faible", desc: "300 mg" },
              { src: "/images/50.png", title: "Goût neutre", desc: "facilement masquable" },
              { src: "/images/51.png", title: "Prouvé & Breveté", desc: "études cliniques disponibles" },
              { src: "/images/52.png", title: "Écologique", desc: "clean, upcyclé, biosourcé" },
              { src: "/images/5.png", title: "Versatile", desc: "gélules, gummies, barres,..." },
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
              Marque de Circul&apos;Egg
            </h3>
            <p className="m-0 font-['Roboto',Arial,sans-serif] text-[1.1rem] leading-[1.6] text-[#2eb2a4]">
              Il s&apos;agit d&apos;une membrane de coquille d&apos;œuf brevetée, naturellement riche en collagène, acide hyaluronique et
              élastine. Obtenu via un procédé 100% mécanique et écoresponsable (Clean Label), il valorise les coquilles
              d&apos;œufs issues des casseries, tout en conservant leurs qualités naturelles et sans ajout de produits chimiques.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-[#fafafa] py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8 flex border-b-2 border-[#e5e5e5]">{
              tabs.map((t) => (
                <button key={t.key} className={tabButtonClass(t.key)} onClick={() => setActiveTab(t.key)}>
                  {t.label}
                </button>
              ))
            }</div>

            {/* Composition */}
            {activeTab === "composition" && (
              <div className="mx-auto max-w-[900px] text-center">
                <h2 className="mb-12 font-['League_Spartan',Arial,sans-serif] text-[2.5rem] font-semibold text-[#4e53a3]">
                  Une synergie de molécules bioactives reconnues...
                </h2>

                {/* Simple static bars (no canvas) */}
                <div className="py-12">
                  <div className="relative h-[400px]">
                    {/* Y scale */}
                    <div className="absolute left-0 top-0 flex h-[350px] flex-col justify-between text-[#2eb2a4]">
                      {[25, 20, 15, 10, 5, 0].map((v) => (
                        <span key={v}>{v}%</span>
                      ))}
                    </div>
                    {/* Bars */}
                    <div className="relative ml-[60px] h-[350px]">
                      <div className="relative h-full px-8">
                        <div className="absolute bottom-0 left-8 flex h-full items-end gap-16">
                          {[
                            { label: "Élastine", value: 25, color: "#2eb2a4", text: "25%" },
                            { label: "Collagène", value: 22, color: "#4e53a3", text: "22%" },
                            { label: "GAGs*", value: 4, color: "#f3d86b", text: "4%", dark: true },
                            { label: "Acide hyaluronique", value: 3, color: "#e67e22", text: "3%" },
                            { label: "Glucosamine", value: 2, color: "#666", text: "2%" },
                          ].map((b) => (
                            <div key={b.label} className="relative flex w-20 items-center justify-center rounded-t-md"
                              style={{ height: `${Math.max(b.value * 14, 40)}px`, background: b.color }}>
                              <span className={b.dark ? "text-[#333] font-semibold" : "text-white font-semibold"}>{b.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Labels aligned with bars */}
                    <div className="relative ml-[60px] mt-6">
                      <div className="flex items-start justify-start gap-16 pl-8 text-center text-[#2eb2a4]">
                        {["Élastine", "Collagène", "GAGs*", "Acide hyaluronique", "Glucosamine"].map((l) => (
                          <span key={l} className="w-20 font-semibold">
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 border-t border-[#e5e5e5] pt-6 text-left text-[#4e53a3]">
                      <p className="font-medium">*Glucosaminoglycanes sulfatés : chondroitine, dermatane sulfate, kératane sulfatée</p>
                      <p className="font-medium">Méthode de dosage validée et certifiée par l&apos;Université Bretagne Sud (UBS)</p>
                    </div>
                  </div>
                </div>

                
              </div>
            )}

            {/* Bienfaits */}
            {activeTab === "bienfaits" && (
              <div className="mx-auto max-w-[900px]">
                <div className="mb-12 text-center">
                  <h2 className="font-['League_Spartan',Arial,sans-serif] text-[2.5rem] font-semibold text-[#4e53a3]">
                    ....Pour des bienfaits décuplés sur la
                    <button className="mx-2 underline text-[#2eb2a4]" onClick={() => setBenefitView("peau")}>peau</button>
                    ... et sur les
                    <button className="mx-2 underline text-[#2eb2a4]" onClick={() => setBenefitView("articulations")}>articulations</button>
                  </h2>
                </div>
                {benefitView === "peau" ? (
                  <div className="text-center">
                    <Image src="/images/schema-peau-bienfaits.png" alt="Schéma des bienfaits sur la peau" width={900} height={600} className="mx-auto h-auto w-full rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.06)]" />
                  </div>
                ) : (
                  <div className="text-center">
                    <Image src="/images/48.png" alt="Schéma des bienfaits sur les articulations (temporaire)" width={900} height={600} className="mx-auto h-auto w-full rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.06)]" />
                    <p className="mt-4 font-['Roboto',Arial,sans-serif] italic text-[#666]">Schéma temporaire - En attente du nouveau visuel pour les articulations</p>
                  </div>
                )}
              </div>
            )}

            {/* Science */}
            {activeTab === "science" && (
              <div className="mx-auto max-w-[1100px] text-center">
                <h2 className="mb-2 font-['League_Spartan',Arial,sans-serif] text-[2.5rem] font-bold text-[#4e53a3]">
                  16 études scientifiques
                </h2>
                <p className="mb-8 font-['Roboto',Arial,sans-serif] text-[1.05rem] text-[#2eb2a4]">
                  démontrent la <span className="font-semibold">performance unique</span> de la membrane de coquille d&apos;œuf :
                </p>
                <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
                  {["Efficacité", "Assimilation", "Sécurité"].map((l) => (
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
                    {/* Études propriétaires */}
                    <div className="flex flex-col items-center">
                      <div className="text-[3.5rem] font-extrabold leading-none text-[#4e53a3]">2</div>
                      <div className="mt-3 h-[3px] w-16 bg-[#4e53a3]" />
                      <div className="mt-4">
                        <div className="text-[0.85rem] font-bold uppercase tracking-wide text-[#4e53a3]">Études propriétaires</div>
                        <ul className="mt-2 space-y-1 text-left text-[0.95rem] leading-snug text-[#2eb2a4]">
                          <li>- 1 étude consommateur sur la beauté de la peau</li>
                          <li>- 1 étude ex-vivo sur explant de peau</li>
                        </ul>
                      </div>
                    </div>

                    {/* Études in vitro */}
                    <div className="flex flex-col items-center">
                      <div className="text-[3.5rem] font-extrabold leading-none text-[#4e53a3]">3</div>
                      <div className="mt-3 h-[3px] w-16 bg-[#4e53a3]" />
                      <div className="mt-4">
                        <div className="text-[0.85rem] font-bold uppercase tracking-wide text-[#4e53a3]">Études in vitro</div>
                        <ul className="mt-2 space-y-1 text-left text-[0.95rem] leading-snug text-[#2eb2a4]">
                          <li>- 2 sur l&apos;effet anti-inflammatoire et anti-oxydant</li>
                          <li>- 1 sur l&apos;efficacité anti-âge</li>
                          <li>- 1 sur la toxicité</li>
                        </ul>
                      </div>
                    </div>

                    {/* Études in vivo */}
                    <div className="flex flex-col items-center">
                      <div className="text-[3.5rem] font-extrabold leading-none text-[#4e53a3]">3</div>
                      <div className="mt-3 h-[3px] w-16 bg-[#4e53a3]" />
                      <div className="mt-4">
                        <div className="text-[0.85rem] font-bold uppercase tracking-wide text-[#4e53a3]">Études in vivo</div>
                        <ul className="mt-2 space-y-1 text-left text-[0.95rem] leading-snug text-[#2eb2a4]">
                          <li>- 1 sur la digestibilité et l&apos;assimilation</li>
                          <li>- 1 sur l&apos;efficacité anti-âge</li>
                          <li>- 1 sur la toxicité</li>
                        </ul>
                      </div>
                    </div>

                    {/* Études cliniques */}
                    <div className="flex flex-col items-center">
                      <div className="text-[3.5rem] font-extrabold leading-none text-[#4e53a3]">8</div>
                      <div className="mt-3 h-[3px] w-16 bg-[#4e53a3]" />
                      <div className="mt-4">
                        <div className="text-[0.85rem] font-bold uppercase tracking-wide text-[#4e53a3]">Études cliniques</div>
                        <ul className="mt-2 space-y-1 text-left text-[0.95rem] leading-snug text-[#2eb2a4]">
                          <li>- 3 sur la beauté de la peau</li>
                          <li>- 5 sur les articulations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Une efficacité chiffrée */}
                <div className="mt-14">
                  <h2 className="mb-8 text-center font-['League_Spartan',Arial,sans-serif] text-[2.5rem] font-bold text-[#4e53a3]">
                    Une efficacité chiffrée...
                  </h2>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Carte Beauté de la peau */}
                    <div className="relative overflow-hidden rounded-2xl border border-[#d9f2ee] bg-white p-6 md:p-8 shadow-sm">
                      <div className="absolute left-0 top-0 h-full w-3 rounded-l-2xl bg-[#2eb2a4]" aria-hidden />
                      <h4 className="mb-6 font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold uppercase tracking-wide text-[#2eb2a4]">
                        Beauté de la peau
                      </h4>

                      {/* Lignes de stats */}
                      {[
                        { pct: 78, text: (
                          <>
                            des femmes ont constaté une amélioration de la <span className="font-semibold text-[#2eb2a4]">fermeté</span> de leur peau et un
                            <span className="font-semibold text-[#2eb2a4]"> teint plus lumineux</span> dès 2 mois de cure.
                          </>
                        ) },
                        { pct: 76, text: (
                          <>
                            des femmes ont constaté une amélioration de <span className="font-semibold text-[#2eb2a4]">l&apos;élasticité</span> de leur peau dès 2 mois de cure.
                          </>
                        ) },
                        { pct: 71, text: (
                          <>
                            des femmes ont constaté <span className="font-semibold text-[#2eb2a4]">une peau mieux hydratée</span> dès le 1er mois.
                          </>
                        ) },
                        { pct: 60, text: (
                          <>
                            des femmes ont constaté <span className="font-semibold text-[#2eb2a4]">une peau plus souple</span> dès le 1er mois.
                          </>
                        ) },
                      ].map((row) => (
                        <div key={row.pct} className="flex items-center gap-4 border-b border-[#e5e5e5] py-4 last:border-b-0">
                          {/* Anneau pourcentage */}
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

                    {/* Carte Santé articulaire */}
                    <div className="relative overflow-hidden rounded-2xl border border-[#d9f2ee] bg-white p-6 md:p-8 shadow-sm">
                      <div className="absolute right-0 top-0 h-full w-3 rounded-r-2xl bg-[#2eb2a4]" aria-hidden />
                      <h4 className="mb-6 font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold uppercase tracking-wide text-[#2eb2a4]">
                        Santé articulaire
                      </h4>

                      {[
                        {
                          sign: "-51,9%",
                          text: (
                            <>
                              de <span className="font-semibold text-[#2eb2a4]">douleur</span> en 30 jours
                              <span className="ml-1 italic text-[#4e53a3]/70">(Gil-Quintana et al., 2018)</span>
                            </>
                          ),
                        },
                        {
                          sign: "+48%",
                          text: (
                            <>
                              d&apos;amélioration de la <span className="font-semibold text-[#2eb2a4]">fonction articulaire</span> en 30 jours, avec des résultats dès le 3ᵉ jour
                              <span className="ml-1 italic text-[#4e53a3]/70">(Gil-Quintana et al., 2018)</span>
                            </>
                          ),
                        },
                        {
                          sign: "-35%",
                          text: (
                            <>
                              de <span className="font-semibold text-[#2eb2a4]">raideur articulaire</span> en 30 jours, avec des effets dès le 10ᵉ jour
                              <span className="ml-1 italic text-[#4e53a3]/70">(Eskiyurt N et al., 2019)</span>
                            </>
                          ),
                        },
                        {
                          sign: "+56,3%",
                          text: (
                            <>
                              d&apos;amélioration de la <span className="font-semibold text-[#2eb2a4]">récupération sportive</span>
                              <span className="ml-1 italic text-[#4e53a3]/70">(Ruff KJ et al., 2018)</span>
                            </>
                          ),
                        },
                      ].map((it) => (
                        <div key={it.sign} className="flex items-start gap-4 border-b border-[#e5e5e5] py-4 last:border-b-0">
                          {/* Icône barres */}
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
                    {/* Note étude consommateur sous la carte gauche */}
                    <p className="text-left text-[0.85rem] italic text-[#2eb2a4]">*Étude consommateur Circul&apos;Egg 2024</p>
                  </div>
                  <div className="mt-8 text-center">
                    <button className="inline-block rounded-md bg-[#4e53a3] px-6 py-3 font-['League_Spartan',Arial,sans-serif] font-bold text-white shadow-sm">
                      Demander les études complètes &gt;
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Sourcing */}
            {activeTab === "sourcing" && (
              <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
                <Image
                  src="/images/sourcing.png"
                  alt="Sourcing - chaîne d'approvisionnement Circul'egg"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.06)]"
                  priority
                />

                {/* Blocs d'engagements RSE */}
                <div className="mt-10 space-y-6 md:space-y-8">
                  {/* Empreinte carbone */}
                  <div className="rounded-2xl bg-[#2eb2a4] p-6 text-white shadow-sm md:p-8 max-w-[75ch]">
                    <div className="flex items-center gap-5">
                      <Image src="/images/65.png" alt="Empreinte carbone" width={100} height={100} className="h-28 w-28 object-contain" />
                      <div>
                        <div className="font-['League_Spartan',Arial,sans-serif] text-[1.6rem] font-extrabold">Empreinte carbone diminuée</div>
                        <p className="mt-1 text-[1rem] leading-snug opacity-95">
                          5 fois plus faible que celle du collagène marin<br />
                          10 fois plus faible que celle du collagène bovin
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Traçabilité complète */}
                  <div className="rounded-2xl bg-[#e67e22] p-6 text-white shadow-sm md:p-8 max-w-[75ch] md:ml-auto">
                    <div className="flex items-center justify-between gap-5">
                      <div className="max-w-[820px]">
                        <div className="font-['League_Spartan',Arial,sans-serif] text-[1.6rem] font-extrabold">Traçabilité complète</div>
                        <p className="mt-1 text-[1rem] leading-snug opacity-95">
                          Suivi de lot de l&apos;élevage au produit fini. Certificats d&apos;analyse fournis pour chaque batch.
                        </p>
                      </div>
                      <Image src="/images/66.png" alt="Traçabilité" width={100} height={100} className="hidden h-28 w-28 shrink-0 object-contain sm:block" />
                    </div>
                  </div>

                  {/* Démarche RSE */}
                  <div className="rounded-2xl bg-[#f9df79] p-6 text-white shadow-sm md:p-8 max-w-[75ch]">
                    <div className="flex items-center gap-5">
                      <Image src="/images/67.png" alt="Démarche RSE" width={100} height={100} className="h-28 w-28 object-contain" />
                      <div className="max-w-[820px]">
                        <div className="font-['League_Spartan',Arial,sans-serif] text-[1.6rem] font-extrabold">Démarche RSE</div>
                        <p className="mt-1 text-[1rem] leading-snug opacity-95">
                          Une entreprise à mission, locale et 100% électrique, qui valorise éleveurs et casseries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Specifications */}
            {activeTab === "specifications" && (
              <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
                <div className="relative rounded-2xl border-2 border-[#4e53a3] bg-[#fafafa] p-5 pt-10 sm:p-6 sm:pt-12">
                  {/* Titre intégré à la bordure */}
                  <div className="absolute -top-4 left-6 right-4 z-10 flex items-center gap-3">
                    <span className="shrink-0 bg-[#fafafa] px-2 font-['League_Spartan',Arial,sans-serif] text-[1.3rem] font-extrabold text-[#4e53a3]">
                      Description du produit
                    </span>
                  </div>

                  <p className=" text-[0.98rem] leading-snug text-[#2eb2a4]">
                    Protéine en poudre naturelle et biosourcée, élaborée à partir de coquilles d&apos;œufs. Ce produit permet
                    l&apos;application dans le domaine nutraceutique, pour une dose journalière de 300mg.
                  </p>
                </div>

                {/* Éléments actifs du produits */}
                <div className="relative mt-8 rounded-2xl border-2 border-[#4e53a3] bg-[#fafafa] p-5 pt-10 sm:p-6 sm:pt-12">
                  {/* Titre intégré à la bordure */}
                  <div className="absolute -top-4 left-6 right-4 z-10 flex items-center gap-3">
                    <span className="shrink-0 bg-[#fafafa] px-2 font-['League_Spartan',Arial,sans-serif] text-[1.3rem] font-extrabold text-[#4e53a3]">
                      Éléments actifs du produits
                    </span>
                  </div>

                  {/* Chart */}
                  <div className="mt-2 grid grid-cols-[230px_1fr] items-stretch gap-x-4">
                    {/* Labels aligned per row */}
                    <div className="relative h-[300px] py-4">
                      <div className="flex h-full flex-col gap-2 text-right text-[0.95rem] font-medium text-[#2eb2a4]">
                        <div className="flex h-12 items-center justify-end">Protéines (Kjeldahl)*</div>
                        <div className="flex h-12 items-center justify-end">Collagène (Colorimétrie)*</div>
                        <div className="flex h-12 items-center justify-end">Élastine (Colorimétrie)*</div>
                        <div className="flex h-12 items-center justify-end">GAGs** totaux (USP26)*</div>
                        <div className="flex h-12 items-center justify-end">Dont Acide hyaluronique (HPLC‑ECD)*</div>
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
                                <div>Protéines (Kjeldahl)*</div>
                                <div className="opacity-90">Série 1: ≥ 80%</div>
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
                                <div>Collagène (Colorimétrie)*</div>
                                <div className="opacity-90">Série 1: ≥ 22%</div>
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
                                <div>Élastine (Colorimétrie)*</div>
                                <div className="opacity-90">Série 1: ≥ 25%</div>
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
                                  <div>GAGs** totaux (USP26)*</div>
                                  <div className="opacity-90">Série 1: ≥ 5%</div>
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
                                  <div>Dont Acide hyaluronique (HPLC‑ECD)*</div>
                                  <div className="opacity-90">Série 1: ≥ 3%</div>
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

                  {/* Notes */}
                  <div className="mt-3 space-y-1 text-[0.85rem] text-[#2eb2a4]">
                    <p className="m-0">*Toutes les mesures sont réalisées par un organisme tiers accrédité COFRAC ou un partenaire universitaire</p>
                    <p className="m-0">**GAGs : chondroïtine sulfate, kératane sulfate, dermatane sulfate, héparane sulfate</p>
                  </div>
                </div>

                {/* Propriétés physico-chimiques */}
                <div className="relative mt-8 rounded-2xl border-2 border-[#4e53a3] bg-[#fafafa] p-5 pt-10 sm:p-6 sm:pt-12">
                  {/* Titre intégré à la bordure */}
                  <div className="absolute -top-4 left-6 right-4 z-10 flex items-center gap-3">
                    <span className="shrink-0 bg-[#fafafa] px-2 font-['League_Spartan',Arial,sans-serif] text-[1.3rem] font-extrabold text-[#4e53a3]">
                      Propriétés physico-chimiques
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {[
                      { icon: "/images/70.png", title: "Apparence", desc: (
                        <>
                          Blanc cassé – Colorimétrie CIE<br />L*a*b* 91/1/12,5
                        </>
                      ) },
                      { icon: "/images/71.png", title: "Goût", desc: "Neutre" },
                      { icon: "/images/72.png", title: "Granulométrie - D50", desc: (
                        <>
                          180µm ± 20µm* ou<br />
                          &lt;100µm*
                        </>
                      ) },
                      { icon: "/images/72.png", title: "Granulométrie - D90", desc: (
                        <>
                          420µm ± 20µm* ou<br />
                          &lt;250µm*
                        </>
                      ) },
                      { icon: "/images/73.png", title: "Densité non tapée", desc: "> 0,32 g/cm3" },
                      { icon: "/images/73.png", title: "Densité tapée", desc: "> 0,4 g/cm3" },
                      { icon: "/images/74.png", title: "Aw", desc: "< 0,4" },
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
                    <span className="italic">* Mesures indicatives selon lots; valeurs cibles disponibles sur demande.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Qualité */}
            {activeTab === "qualite" && (
              <div className="mx-auto max-w-[1100px] px-4 sm:px-6 text-center">
                <h2 className="mb-8 font-['League_Spartan',Arial,sans-serif] text-[2.2rem] font-extrabold text-[#4e53a3]">
                  Certifications & Conformités
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Casseries certifiées */}
                  <div>
                    <Image
                      src="/images/casseries-certifiees.png"
                      alt="Logos des casseries certifiées"
                      width={520}
                      height={420}
                      className="mx-auto h-auto w-full max-w-[520px] object-contain"
                    />
                  </div>

                  {/* Produit certifié */}
                  <div>
                    <Image
                      src="/images/produit-certifie.png"
                      alt="Logos du produit certifié"
                      width={520}
                      height={420}
                      className="mx-auto h-auto w-full max-w-[520px] object-contain"
                    />
                  </div>
                </div>

                {/* Statut réglementaire */}
                <div className="mt-10 text-left">
                  <h3 className="mb-2 font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3]">
                    Statut réglementaire
                  </h3>
                  <p className="m-0 max-w-[900px] text-[0.98rem] leading-snug text-[#2eb2a4]">
                    Nos produits sont conformes aux réglementations suivantes : Règlement (CE) N° 853/2004 (ovoproduits),
                    n&apos;est pas Novel Food (EU N° 2015/2283), Norme HACCP, Agrément sanitaire.
                  </p>
                </div>

                {/* CTA Row */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  {[{ t: 'Fiche technique' }, { t: "Certificats d'analyse" }, { t: 'Certifications' }].map((b) => (
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

      {/* Contact */}
      <section id="contact" className="bg-[#fafafa] py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-12 text-center">
            <h2 className="text-[2.5rem] font-bold text-[#1a1a1a]">Contactez Notre Équipe</h2>
            <p className="mx-auto max-w-[800px] text-[1.1rem] text-[#666]">
              Pour toute demande, utilisez le formulaire à gauche ou nos contacts à droite.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6">
              {/* Keep iframe embed only (no dynamic loader script needed) */}
              <iframe
                src="https://tally.so/embed/3lxroW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height={820}
                frameBorder={0}
                title="Registration form"
              />
            </div>
            <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6">
              <h3 className="mb-4 text-[1.5rem] font-bold text-[#1a1a1a]">Contact de notre CEO - Yacine Kabeche</h3>
              <div className="mb-8 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-[1.5rem]">📧</span>
                  <div>
                    <h4 className="mb-1 font-semibold text-[#1a1a1a]">Email</h4>
                    <p className="m-0 text-[#666]">yacine.kabeche@circulegg.fr</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[1.5rem]">📞</span>
                  <div>
                    <h4 className="mb-1 font-semibold text-[#1a1a1a]">Téléphone</h4>
                    <p className="m-0 text-[#666]">+33684159719</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[1.5rem]">🌍</span>
                  <div>
                    <h4 className="mb-1 font-semibold text-[#1a1a1a]">Adresses</h4>
                    <p className="m-0 text-[#666]">Usine : 21 Rue Charles Lindbergh, 35150 Janzé<br />Bureau : 14 rue Soleillet, 75020 Paris</p>
                  </div>
                </div>
              </div>
              <div className="rounded bg-[#f8f9fa] p-4">
                <h4 className="mb-2 font-semibold text-[#1a1a1a]">Délai de réponse</h4>
                <p className="m-0 text-[#666]">Notre équipe vous répond sous 48h ouvrées sinon on vous doit un cadeau !</p>
              </div>
              <div className="mt-8 text-center">
                <Image
                  src="/images/Mon image ChatGPT.jpg"
                  alt="Reggenerate - Image ChatGPT"
                  width={1200}
                  height={800}
                  className="mx-auto h-auto w-full rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

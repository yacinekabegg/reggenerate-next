"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type TabKey = "composition" | "bienfaits" | "sourcing" | "specifications" | "qualite";

const tabs: { key: TabKey; label: string }[] = [
  { key: "composition", label: "Composition" },
  { key: "bienfaits", label: "Bienfaits" },
  { key: "sourcing", label: "Sourcing" },
  { key: "specifications", label: "Spécifications" },
  { key: "qualite", label: "Qualité" },
];

export default function IngredientPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("composition");
  const [benefitView, setBenefitView] = useState<"peau" | "articulations">("peau");

  // Scroll to top on tab change for better UX
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const tabButtonClass = (key: TabKey) =>
    [
      "flex-1 px-6 py-4 text-[1.1rem] font-semibold transition-all border-b-4",
      key === activeTab
        ? "text-[#f3d86b] border-[#f3d86b]"
        : "text-[#2eb2a4] border-transparent hover:text-[#2eb2a4]/80",
    ].join(" ");

  return (
    <main className="pb-20 pt-16">
      {/* Hero split */}
      <section className="relative mt-16 bg-white">
        <div className="mx-auto flex min-h-[400px] w-full max-w-[1400px] flex-col md:flex-row">
          {/* Left side */}
          <div className="flex items-center justify-center bg-[#2eb2a4] p-4 md:w-[600px]">
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
          <div className="relative min-h-[300px] flex-1">
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
                  <Image src={f.src} alt={f.title} width={80} height={80} className="h-20 w-20 object-contain" />
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
              Reggenerate<sup className="text-[0.6em] align-super">™</sup>
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
                    {/* Labels */}
                    <div className="relative ml-[60px] mt-6 px-8">
                      <div className="relative">
                        <div className="absolute left-8 top-0 grid w-[520px] grid-cols-5 text-center text-[#2eb2a4]">
                          {["Élastine", "Collagène", "GAGs*", "Acide hyaluronique", "Glucosamine"].map((l) => (
                            <span key={l} className="font-semibold">
                              {l}
                            </span>
                          ))}
                        </div>
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
                    <Image src="/images/schema-peau-bienfaits.png" alt="Schéma des bienfaits sur la peau" width={900} height={600} className="mx-auto h-auto w-full" />
                  </div>
                ) : (
                  <div className="text-center">
                    <Image src="/images/48.png" alt="Schéma des bienfaits sur les articulations (temporaire)" width={900} height={600} className="mx-auto h-auto w-full" />
                    <p className="mt-4 font-['Roboto',Arial,sans-serif] italic text-[#666]">Schéma temporaire - En attente du nouveau visuel pour les articulations</p>
                  </div>
                )}
              </div>
            )}

            {/* Sourcing */}
            {activeTab === "sourcing" && (
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-8 flex items-center gap-2 text-[1.5rem] font-bold text-[#1a1a1a]"><span>🌿</span>Sourcing Responsable</h3>
                  <div className="flex flex-col gap-8">
                    {[
                      { t: "Origine des Membranes", d: "Membranes d'œufs issues d'élevages en plein air, collectées auprès de partenaires certifiés bien-être animal." },
                      { t: "Processus Breveté", d: "Extraction enzymatique douce préservant l'intégrité des peptides bioactifs. Zéro solvant chimique." },
                      { t: "Traçabilité Complète", d: "Suivi de lot de l'élevage au produit fini. Certificats d'analyse fournis pour chaque batch." },
                    ].map((card) => (
                      <div key={card.t} className="rounded-xl border border-[#e5e5e5] bg-white p-6">
                        <h4 className="mb-2 font-semibold text-[#1a1a1a]">{card.t}</h4>
                        <p className="m-0 text-[#666]">{card.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-8 text-[1.5rem] font-bold text-[#1a1a1a]">Impact Environnemental</h3>
                  <div className="flex flex-col gap-8">
                    <div className="rounded-2xl border-0 bg-gradient-to-br from-[#90EE90] to-[#98FB98] p-8 text-center text-[#1a1a1a]">
                      <div className="text-[3rem] font-bold">90%</div>
                      <div className="text-[1.1rem] font-semibold">Réduction carbone</div>
                      <div className="mt-2 text-[0.9rem] opacity-80">vs collagène marin</div>
                    </div>
                    <div className="rounded-2xl border-0 bg-gradient-to-br from-[#98FB98] to-[#90EE90] p-8 text-center text-[#1a1a1a]">
                      <div className="text-[3rem] font-bold">100%</div>
                      <div className="text-[1.1rem] font-semibold">Valorisation co-produits</div>
                      <div className="mt-2 text-[0.9rem] opacity-80">économie circulaire</div>
                    </div>
                    <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 text-center">
                      <button className="rounded bg-[#2eb2a4] px-6 py-3 font-semibold text-white">Économie Circulaire</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Specifications */}
            {activeTab === "specifications" && (
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                <div className="md:col-span-1">
                  <h3 className="mb-8 text-[1.5rem] font-bold text-[#1a1a1a]">Certifications & Conformités</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {["Halal", "Non-OGM", "Kosher", "HACCP", "Végétarien", "ISO 22000"].map((l) => (
                      <div key={l} className="rounded-xl border border-[#e5e5e5] bg-white p-6 text-center">
                        <h4 className="mb-1 font-semibold text-[#1a1a1a]">{l}</h4>
                        <span className="text-[0.9rem] font-semibold text-[#2eb2a4]">{l === "Non-OGM" ? "Garanti" : l === "Végétarien" ? "Validé" : "Certifié"}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1">
                  <h3 className="mb-8 text-[1.5rem] font-bold text-[#1a1a1a]">Statut Réglementaire</h3>
                  <div className="flex flex-col gap-4">
                    {["Novel Food approuvé EU", "GRAS status USA", "Santé Canada approuvé", "Conforme ANVISA Brésil"].map((t) => (
                      <div key={t} className="flex items-center gap-3 rounded border border-[#e5e5e5] bg-white p-4">
                        <span className="text-[1.1rem] text-[#2eb2a4]">✅</span>
                        <span className="font-medium text-[#1a1a1a]">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1">
                  <h3 className="mb-8 text-[1.5rem] font-bold text-[#1a1a1a]">Documentation</h3>
                  <div className="flex flex-col gap-4">
                    {["Dossier réglementaire complet", "Certificats d'analyse", "Études de sécurité"].map((t) => (
                      <div key={t} className="flex items-center gap-3 rounded border border-[#e5e5e5] bg-white p-4">
                        <span className="text-[1.1rem] text-[#2eb2a4]">📄</span>
                        <span className="font-medium text-[#1a1a1a]">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Qualité */}
            {activeTab === "qualite" && (
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-8 text-[1.5rem] font-bold text-[#1a1a1a]">Contrôle Qualité</h3>
                  <div className="rounded-xl border border-[#e5e5e5] bg-white p-6">
                    <div className="flex flex-col gap-4">
                      {["Tests microbiologiques", "Analyses physico-chimiques", "Contrôle métaux lourds", "Tests de stabilité"].map((t) => (
                        <div key={t} className="flex items-center gap-3 rounded border border-[#e0f7f5] bg-[#f8fffe] p-4">
                          <span className="text-[1.1rem] text-[#2eb2a4]">🔬</span>
                          <span className="font-medium text-[#1a1a1a]">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-8 text-[1.5rem] font-bold text-[#1a1a1a]">Certifications</h3>
                  <div className="flex flex-col gap-4">
                    {["ISO 22000", "HACCP", "Halal", "Kosher"].map((t) => (
                      <div key={t} className="flex items-center gap-3 rounded border border-[#e5e5e5] bg-white p-4">
                        <span className="text-[1.1rem] text-[#2eb2a4]">✅</span>
                        <span className="font-medium text-[#1a1a1a]">{t}</span>
                      </div>
                    ))}
                  </div>
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
    </main>
  );
}



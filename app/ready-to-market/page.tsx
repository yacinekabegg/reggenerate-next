"use client";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function ReadyToMarket() {
  const [activeForms, setActiveForms] = useState<string[]>([]);
  const [activeBenefits, setActiveBenefits] = useState<string[]>([]);
  const gelulesOnly = activeForms.includes('gelules');
  const comprimeOnly = activeForms.includes('comprime');
  const poudreOnly = activeForms.includes('poudre');
  const gummiesOnly = activeForms.includes('gummies');
  const barresOnly = activeForms.includes('barres');
  const beautyOnly = activeBenefits.includes('beauty');
  const jointsOnly = activeBenefits.includes('joints');
  const benefitsFilterEmpty = activeBenefits.length === 0;
  const formsFilterEmpty = activeForms.length === 0;

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[380px] w-full md:h-[520px]">
        <Image
          src="/images/products.svg"
          alt="Produits Ready-to-Market"
          fill
          priority
        />
        {/* Badge aligné au container */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-[1400px] px-6 pt-6 flex justify-center">
            <div className="flex w-fit items-center gap-2 rounded-full border-2 border-[#2eb2a4] bg-white/95 px-4 py-2">
              <Image src="/images/rocket.png" alt="Rocket" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="font-['League_Spartan',Arial,sans-serif] text-[0.95rem] font-extrabold tracking-wide text-[#2eb2a4]">
                PRODUITS READY-TO-MARKET
              </span>
            </div>
          </div>
          {/* Titre en overlay absolute */}
          <h1 className="absolute left-1/2 -translate-x-1/2 bottom-24 sm:bottom-22 md:bottom-32 lg:bottom-28 lg:mb-2 z-10 text-center font-['League_Spartan',Arial,sans-serif] text-[1.6rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold w-full">
            <span className="text-[#2eb2a4]">Notre gamme </span>
            <span className="text-[#2eb2a4]">EGG</span>
            <span className="text-[#f3d86b]">spress</span>
            <span className="text-[#2eb2a4]"> Launch</span>
          </h1>
          {/* Texte descriptif en overlay absolute */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-4 md:bottom-8 z-10 w-full max-w-[1100px] px-4 sm:px-6">
            <p className="text-center text-white text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-snug sm:leading-normal md:leading-relaxed drop-shadow-md">
              Nos eggspperts en formulation chez Circul&apos;Egg ont développé des formules intégrant Reggenerate™ en partenariat
              avec <span className="font-extrabold">126 façonniers</span> certifiés rigoureusement sélectionnés. Il n&apos;y a plus qu&apos;à commander votre formule
              préférée !
            </p>
          </div>
          
        </div>
      </section>

      {/* Choix du futur produit */}
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <h2 className="mb-8 text-center font-['League_Spartan',Arial,sans-serif] text-[2.2rem] md:text-[2.6rem] font-extrabold text-[#4e53a3]">
            De quoi rêvez‑vous pour votre futur produit ?
          </h2>
          {/* Ligne 1: formes galéniques */}
          <div className="mb-6 flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <div className="font-['Roboto',Arial,sans-serif] text-[#4e53a3] font-semibold text-center md:text-right md:pr-4">
              J’ai envie de :
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { t: 'Gélules', icon: '/images/icon-5.png' },
                { t: 'Comprimés', icon: '/images/icon-4.png' },
                { t: 'Poudres', icon: '/images/icon-1.png' },
                { t: 'Gummies', icon: '/images/icon-2.png' },
                { t: 'Barres', icon: '/images/icon-7.png' },
              ].map((c) => {
                const base =
                  "inline-flex items-center rounded-full border-2 border-[#2eb2a4] pl-4 pr-8 font-['League_Spartan',Arial,sans-serif] font-bold text-[1rem] " +
                  ((c.t === 'Gélules' && gelulesOnly) || (c.t === 'Comprimés' && comprimeOnly) || (c.t === 'Poudres' && poudreOnly) || (c.t === 'Gummies' && gummiesOnly) || (c.t === 'Barres' && barresOnly)
                    ? "bg-[#e8f6f4] text-[#2eb2a4]"
                    : "text-[#2eb2a4] hover:bg-[#e8f6f4]");
                const content = (
                  <>
                    <Image src={c.icon} alt={c.t} width={52} height={52} className="shrink-0 size-12 md:size-14 object-contain mr-2" />
                    {c.t.toUpperCase()}
                  </>
                );
                if (c.t === 'Gélules') {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={gelulesOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes('gelules') ? prev.filter((k) => k !== 'gelules') : [...prev, 'gelules']
                          );
                        }}
                        className={base}
                      >
                        {content}
                      </button>
                      {gelulesOnly && (
                        <button
                          type="button"
                          aria-label="Désactiver le filtre Gélules"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveForms((prev) => prev.filter((k) => k !== 'gelules'));
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                            <path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                }
                if (c.t === 'Comprimés') {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={comprimeOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes('comprime') ? prev.filter((k) => k !== 'comprime') : [...prev, 'comprime']
                          );
                        }}
                        className={base}
                      >
                        {content}
                      </button>
                      {comprimeOnly && (
                        <button
                          type="button"
                          aria-label="Désactiver le filtre Comprimés"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveForms((prev) => prev.filter((k) => k !== 'comprime'));
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                            <path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                }
                if (c.t === 'Poudres') {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={poudreOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes('poudre') ? prev.filter((k) => k !== 'poudre') : [...prev, 'poudre']
                          );
                        }}
                        className={base}
                      >
                        {content}
                      </button>
                      {poudreOnly && (
                        <button
                          type="button"
                          aria-label="Désactiver le filtre Poudres"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveForms((prev) => prev.filter((k) => k !== 'poudre'));
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                            <path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                }
                if (c.t === 'Gummies') {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={gummiesOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes('gummies') ? prev.filter((k) => k !== 'gummies') : [...prev, 'gummies']
                          );
                        }}
                        className={base}
                      >
                        {content}
                      </button>
                      {gummiesOnly && (
                        <button
                          type="button"
                          aria-label="Désactiver le filtre Gummies"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveForms((prev) => prev.filter((k) => k !== 'gummies'));
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                            <path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                }
                if (c.t === 'Barres') {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={barresOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes('barres') ? prev.filter((k) => k !== 'barres') : [...prev, 'barres']
                          );
                        }}
                        className={base}
                      >
                        {content}
                      </button>
                      {barresOnly && (
                        <button
                          type="button"
                          aria-label="Désactiver le filtre Barres"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveForms((prev) => prev.filter((k) => k !== 'barres'));
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                            <path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                }
                return (
                  <span key={c.t} className={base}>
                    {content}
                  </span>
                );
              })}
            </div>
          </div>
          {/* Ligne 2: bénéfices */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <div className="font-['Roboto',Arial,sans-serif] text-[#4e53a3] font-semibold text-center md:text-right md:pr-4">
              Bienfaits souhaités :
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Beauté de la peau */}
              <div className="relative inline-block">
                <button
                  type="button"
                  aria-pressed={beautyOnly}
                  onClick={() => {
                    setActiveBenefits((prev) =>
                      prev.includes('beauty') ? prev.filter((k) => k !== 'beauty') : [...prev, 'beauty']
                    );
                  }}
                  className={"inline-flex items-center rounded-full border-2 border-[#2eb2a4] pl-4 pr-8 font-['League_Spartan',Arial,sans-serif] font-bold text-[1rem] " + (beautyOnly ? "bg-[#e8f6f4] text-[#2eb2a4]" : "text-[#2eb2a4] hover:bg-[#e8f6f4]")}
                >
                  <Image src="/images/icon-3.png" alt="Beauté de la peau" width={52} height={52} className="shrink-0 size-12 md:size-14 object-contain" />
                  BEAUTÉ DE LA PEAU
                </button>
                {beautyOnly && (
                  <button
                    type="button"
                    aria-label="Désactiver le filtre Beauté de la peau"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBenefits((prev) => prev.filter((k) => k !== 'beauty'));
                    }}
                    className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                  >
                    <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
              {/* Santé des articulations */}
              <div className="relative inline-block">
                <button
                  type="button"
                  aria-pressed={jointsOnly}
                  onClick={() => {
                    setActiveBenefits((prev) =>
                      prev.includes('joints') ? prev.filter((k) => k !== 'joints') : [...prev, 'joints']
                    );
                  }}
                  className={"inline-flex items-center rounded-full border-2 border-[#2eb2a4] pl-4 pr-8 font-['League_Spartan',Arial,sans-serif] font-bold text-[1rem] " + (jointsOnly ? "bg-[#e8f6f4] text-[#2eb2a4]" : "text-[#2eb2a4] hover:bg-[#e8f6f4]")}
                >
                  <Image src="/images/icon-8.png" alt="Santé des articulations" width={52} height={52} className="shrink-0 size-12 md:size-14 object-contain" />
                  SANTÉ DES ARTICULATIONS
                </button>
                {jointsOnly && (
                  <button
                    type="button"
                    aria-label="Désactiver le filtre Santé des articulations"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBenefits((prev) => prev.filter((k) => k !== 'joints'));
                    }}
                    className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                  >
                    <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
              {/* Les deux ! */}
              {/* <span className="inline-flex items-center rounded-full border-2 border-[#2eb2a4] pl-4 pr-8 font-['League_Spartan',Arial,sans-serif] font-bold text-[#2eb2a4] text-[1rem] hover:bg-[#e8f6f4] cursor-pointer">
                <span className="flex items-center">
                  <Image src="/images/icon-3.png" alt="Beauté" width={52} height={52} className="shrink-0 size-12 md:size-14 object-contain" />
                  <Image src="/images/icon-8.png" alt="Articulations" width={52} height={52} className="shrink-0 size-12 md:size-14 object-contain" />
                </span>
                LES DEUX !
              </span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Cartes produits (RTM) */}
      <section className="bg-[#e8f6f4] pb-12 pt-16">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            {(((formsFilterEmpty || activeForms.includes('gelules'))) && (benefitsFilterEmpty || beautyOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/joeufnesse.svg" alt="Coquille de j'oeufnesse" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Coquille de j’oeufnesse
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Ta peau mérite un petit coup de n’oeuf !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : 60 gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Elasticité – Fermeté – Éclat</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : —</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Probiotiques, Acérola, Zinc</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 500 pots</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Card 2 */}
            {(((formsFilterEmpty || activeForms.includes('comprime'))) && (benefitsFilterEmpty || beautyOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/capsules.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/eggstrajeunesse.svg" alt="Eggstra Jeunesse" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Eggstra Jeunesse
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Ta peau a bien besoin d’un petit coup de poule !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : 60 comprimés</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Elasticité – Fermeté – Éclat</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : Tropical</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Coenzyme Q10, acérola</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 2500 pots</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Card 3 */}
            {(((formsFilterEmpty || activeForms.includes('poudre'))) && (benefitsFilterEmpty || beautyOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/powder.png" alt="Poudres" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/vieenrose.svg" alt="La Vie en Rose Oeuf" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  La Vie en Rose Oeuf
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">La beauté en poudre par eggcellence !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Pot 105g / Stick 3,5g</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Elasticité – Fermeté – Éclat</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : Cerise</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Pétales de rose, Grenade, Acérola</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 1666 pots</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}
            
            {/* Card 4 */}
            {(((formsFilterEmpty || activeForms.includes('gelules'))) && (benefitsFilterEmpty || jointsOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/pouleauxoeufsdor.svg" alt="La Poule Aux Oeufs d’or" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  La Poule Aux Oeufs d’or
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Un trésor pour les articulations pondu par la nature !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : 60 gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Souplesse - Mobilité - Confort</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : —</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Curcuma, Vitamine D</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 500 pots</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Card 5 */}
            {(((formsFilterEmpty || activeForms.includes('comprime'))) && (benefitsFilterEmpty || jointsOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/capsules.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/boswegg.svg" alt="Bosw’Egg" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Bosw’Egg
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">{`Douleurs articulaires ? Croque, c'est réglé.`}</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : 90 comprimés</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Souplesse - Mobilité - Confort</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : Cerise</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Boswellia, Vitamine C</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 1666 pots</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Card 6 */}
            {(((formsFilterEmpty || activeForms.includes('poudre'))) && (benefitsFilterEmpty || jointsOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/powder.png" alt="Poudres" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/egglixir.svg" alt="L'Egglixir" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  {`L'Egglixir`}               
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">La beauté en poudre par eggcellence !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Pot 105g / Stick 3,5g</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Souplesse - Mobilité - Confort</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : Mojito</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Bambou, Prêle des champs</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 1666 pots</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Card 7 */}
            {(((formsFilterEmpty || activeForms.includes('gummies'))) && (benefitsFilterEmpty || jointsOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/gummies.png" alt="Gummies" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/commenoeuf.svg" alt="Comme n'œuf !" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  {`Comme n'œuf !`}
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Une reggenerescence cutanée ultra-vitaminée !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : 60 gummies</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Elasticité - Fermeté - Eclat</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : Fraise</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Vitamine C</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 120 pots</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Card 8 */}
            {(((formsFilterEmpty || activeForms.includes('comprime'))) && (benefitsFilterEmpty || jointsOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/capsules.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/yenapasdoeufcommelui.svg" alt="Y’en a pas d’oeuf comme lui" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  {`Y’en a pas d’œuf comme lui`}
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Ta peau mérite un peu d’egg-clat !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : 60 comprimés bicouches</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Elasticité - Fermeté - Eclat</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : Cerise</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Probiotiques, Vitamine C</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 5000 pots</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Card 9 */}
            {(((formsFilterEmpty || activeForms.includes('poudre'))) && (benefitsFilterEmpty || beautyOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/powder.png" alt="Poudres" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/eggsplosif.svg" alt="L'Eggsplosif" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  {`L'Eggsplosif`}            
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Une eggsplosion de saveur au service de la peau !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Stick de 2g</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Souplesse - Mobilité - Confort</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : Framboise</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Vitamine C</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 4666 boîtes de 30 sticks</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Card 10 */}
            {(((formsFilterEmpty || activeForms.includes('barres'))) && (benefitsFilterEmpty || beautyOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/bars.png" alt="Barres" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/barre-noisette.svg" alt="Barre collagéniale noisette" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Barre collagéniale noisette
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Délici-oeuf-sement saine et eggceptionnelle pour votre peau !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : barre de 40g</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Elasticité - Fermeté - Eclat</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : Noisette</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Vitamine C, Vitamine E, Calcium, Phosophore</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 4000 barres</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Card 11 */}
            {(((formsFilterEmpty || activeForms.includes('barres'))) && (benefitsFilterEmpty || beautyOnly)) && (
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/bars.png" alt="Barres" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl mt-2">
                <Image src="/images/barre-choco.svg" alt="Barre collagéniale choco" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Barre collagéniale choco
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Délici-oeuf-sement saine et eggceptionnelle pour votre peau !</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : barre de 36g</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Elasticité - Fermeté - Eclat</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Arôme</span> : Chocolat - graine de courges torréfiées</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™, Vitamines A, B1, B2, B3, B5, B6, B8, B9,  B12, C, E</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">MOQ</span> : dès 1000 pots</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white">
                    Demander un échantillon 🤩
                  </button>
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
      <Footer/>
    </main>
  );
}

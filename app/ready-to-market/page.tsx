"use client";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import Image from "next/image";
import { useState } from "react";
import {
  readyToMarketProducts,
  type ReadyToMarketProduct,
  type RTMForm,
  type RTMBenefit,
} from "@/lib/readyToMarketProducts";

export default function ReadyToMarket() {
  const [activeForms, setActiveForms] = useState<string[]>([]);
  const [activeBenefits, setActiveBenefits] = useState<string[]>([]);
  const gelulesOnly = activeForms.includes("gelules");
  const comprimeOnly = activeForms.includes("comprime");
  const poudreOnly = activeForms.includes("poudre");
  const gummiesOnly = activeForms.includes("gummies");
  const barresOnly = activeForms.includes("barres");
  const beautyOnly = activeBenefits.includes("beauty");
  const jointsOnly = activeBenefits.includes("joints");
  const benefitsFilterEmpty = activeBenefits.length === 0;
  const formsFilterEmpty = activeForms.length === 0;

  const formIcon = (f: RTMForm) => {
    switch (f) {
      case "gelules":
        return { src: "/images/pill.png", alt: "Gélules" };
      case "comprime":
        return { src: "/images/capsules.png", alt: "Comprimés" };
      case "poudre":
        return { src: "/images/powder.png", alt: "Poudres" };
      case "gummies":
        return { src: "/images/gummies.png", alt: "Gummies" };
      case "barres":
        return { src: "/images/bars.png", alt: "Barres" };
    }
  };

  const benefitIcon = (b: RTMBenefit) => {
    switch (b) {
      case "beauty":
        return { src: "/images/skin-beauty.png", alt: "Beauté de la peau" };
      case "joints":
        return { src: "/images/knuckle.png", alt: "Santé des articulations" };
    }
  };

  const visibleProducts: ReadyToMarketProduct[] = readyToMarketProducts.filter(
    (p) =>
      (formsFilterEmpty || activeForms.includes(p.form)) &&
      (benefitsFilterEmpty || activeBenefits.includes(p.benefit))
  );

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[380px] w-full md:h-[520px] object-cover">
        <Image
          src="/images/hero-products.svg"
          alt="Produits Ready-to-Market"
          fill
          priority
        />
        {/* Badge aligné au container */}
        <div className="absolute inset-0">
          <div className="mx-auto flex max-w-[1400px] justify-center px-6 pt-6">
            <div className="flex w-fit items-center gap-1 rounded-full border border-[#2eb2a4] bg-white/95 px-3 py-1.5 sm:gap-2 sm:border-2 sm:px-4 sm:py-2">
              <Image
                src="/images/rocket.png"
                alt="Rocket"
                width={40}
                height={40}
                className="h-8 w-8 object-contain sm:h-10 sm:w-10"
              />
              <span className="font-['League_Spartan',Arial,sans-serif] whitespace-nowrap text-[0.8rem] font-extrabold tracking-normal text-[#2eb2a4] sm:text-[0.95rem] sm:tracking-wide">
                PRODUITS READY-TO-MARKET
              </span>
            </div>
          </div>
          {/* Titre en overlay absolute (desktop) */}
          <h1 className="font-['League_Spartan',Arial,sans-serif] absolute left-1/2 bottom-24 z-10 hidden w-full -translate-x-1/2 text-center text-[1.6rem] font-extrabold sm:bottom-22 sm:text-[1.9rem] md:bottom-32 md:block md:text-[2.4rem] lg:bottom-28 lg:mb-2 lg:text-[2.8rem]">
            <span className="text-[#2eb2a4]">Notre gamme </span>
            <span className="text-[#2eb2a4]">EGG</span>
            <span className="text-[#f3d86b]">spress</span>
            <span className="text-[#2eb2a4]"> Launch</span>
          </h1>
          {/* Texte descriptif en overlay absolute (desktop) */}
          <div className="absolute left-1/2 bottom-4 z-10 hidden w-full max-w-[1100px] -translate-x-1/2 px-4 sm:bottom-4 sm:px-6 md:bottom-8 md:block">
            <p className="text-center text-[0.9rem] leading-snug text-white drop-shadow-md sm:text-[0.95rem] sm:leading-normal md:text-[1.05rem] md:leading-relaxed">
              Nos eggspperts en formulation chez Circul&apos;Egg ont développé
              des formules intégrant Reggenerate™ en partenariat avec{" "}
              <span className="font-extrabold">126 façonniers</span> certifiés
              rigoureusement sélectionnés. Il n&apos;y a plus qu&apos;à
              commander votre formule préférée !
            </p>
          </div>
        </div>
      </section>

      {/* Titre + texte sous l'image (mobile) */}
      <div className="px-6 pb-4 text-center md:hidden">
        <h1 className="font-['League_Spartan',Arial,sans-serif] text-[1.9rem] font-extrabold">
          <span className="text-[#2eb2a4]">Notre gamme </span>
          <span className="text-[#2eb2a4]">EGG</span>
          <span className="text-[#f3d86b]">spress</span>
          <span className="text-[#2eb2a4]"> Launch</span>
        </h1>
        <p className="mt-2 font-['Roboto',Arial,sans-serif] text-[0.95rem] leading-normal text-[#2eb2a4]">
          Nos eggspperts en formulation chez Circul&apos;Egg ont développé des
          formules intégrant Reggenerate™ en partenariat avec{" "}
          <span className="font-extrabold">126 façonniers</span> certifiés
          rigoureusement sélectionnés. Il n&apos;y a plus qu&apos;à commander
          votre formule préférée !
        </p>
      </div>

      {/* Choix du futur produit */}
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <h2 className="mb-8 text-center font-['League_Spartan',Arial,sans-serif] text-[1.5rem] font-extrabold text-[#4e53a3] md:text-[2.6rem]">
            De quoi rêvez-vous pour votre futur produit ?
          </h2>
          {/* Ligne 1: formes galéniques */}
          <div className="mb-6 flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <div className="font-['Roboto',Arial,sans-serif] text-center font-semibold text-[#4e53a3] md:pr-4 md:text-right">
              J’ai envie de :
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { t: "Gélules", icon: "/images/icon-5.png" },
                { t: "Comprimés", icon: "/images/icon-4.png" },
                { t: "Poudres", icon: "/images/icon-1.png" },
                { t: "Gummies", icon: "/images/icon-2.png" },
                { t: "Barres", icon: "/images/icon-7.png" },
              ].map((c) => {
                const base =
                  "inline-flex items-center rounded-full border-2 border-[#2eb2a4] pl-4 pr-8 font-['League_Spartan',Arial,sans-serif] font-bold text-[1rem] " +
                  ((c.t === "Gélules" && gelulesOnly) ||
                  (c.t === "Comprimés" && comprimeOnly) ||
                  (c.t === "Poudres" && poudreOnly) ||
                  (c.t === "Gummies" && gummiesOnly) ||
                  (c.t === "Barres" && barresOnly)
                    ? "bg-[#e8f6f4] text-[#2eb2a4]"
                    : "text-[#2eb2a4] hover:bg-[#e8f6f4]");
                const content = (
                  <>
                    <Image
                      src={c.icon}
                      alt={c.t}
                      width={52}
                      height={52}
                      className="mr-2 size-12 shrink-0 object-contain md:size-14"
                    />
                    {c.t.toUpperCase()}
                  </>
                );
                if (c.t === "Gélules") {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={gelulesOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes("gelules")
                              ? prev.filter((k) => k !== "gelules")
                              : [...prev, "gelules"]
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
                            setActiveForms((prev) =>
                              prev.filter((k) => k !== "gelules")
                            );
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 3l6 6M9 3l-6 6"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                }
                if (c.t === "Comprimés") {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={comprimeOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes("comprime")
                              ? prev.filter((k) => k !== "comprime")
                              : [...prev, "comprime"]
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
                            setActiveForms((prev) =>
                              prev.filter((k) => k !== "comprime")
                            );
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 3l6 6M9 3l-6 6"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                }
                if (c.t === "Poudres") {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={poudreOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes("poudre")
                              ? prev.filter((k) => k !== "poudre")
                              : [...prev, "poudre"]
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
                            setActiveForms((prev) =>
                              prev.filter((k) => k !== "poudre")
                            );
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 3l6 6M9 3l-6 6"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                }
                if (c.t === "Gummies") {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={gummiesOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes("gummies")
                              ? prev.filter((k) => k !== "gummies")
                              : [...prev, "gummies"]
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
                            setActiveForms((prev) =>
                              prev.filter((k) => k !== "gummies")
                            );
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 3l6 6M9 3l-6 6"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  );
                }
                if (c.t === "Barres") {
                  return (
                    <div key={c.t} className="relative inline-block">
                      <button
                        type="button"
                        aria-pressed={barresOnly}
                        onClick={() => {
                          setActiveForms((prev) =>
                            prev.includes("barres")
                              ? prev.filter((k) => k !== "barres")
                              : [...prev, "barres"]
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
                            setActiveForms((prev) =>
                              prev.filter((k) => k !== "barres")
                            );
                          }}
                          className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 3l6 6M9 3l-6 6"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
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
            <div className="font-['Roboto',Arial,sans-serif] text-center font-semibold text-[#4e53a3] md:pr-4 md:text-right">
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
                      prev.includes("beauty")
                        ? prev.filter((k) => k !== "beauty")
                        : [...prev, "beauty"]
                    );
                  }}
                  className={
                    "inline-flex items-center rounded-full border-2 border-[#2eb2a4] pl-4 pr-8 font-['League_Spartan',Arial,sans-serif] font-bold text-[1rem] " +
                    (beautyOnly
                      ? "bg-[#e8f6f4] text-[#2eb2a4]"
                      : "text-[#2eb2a4] hover:bg-[#e8f6f4]")
                  }
                >
                  <Image
                    src="/images/icon-3.png"
                    alt="Beauté de la peau"
                    width={52}
                    height={52}
                    className="size-12 shrink-0 object-contain md:size-14"
                  />
                  BEAUTÉ DE LA PEAU
                </button>
                {beautyOnly && (
                  <button
                    type="button"
                    aria-label="Désactiver le filtre Beauté de la peau"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBenefits((prev) =>
                        prev.filter((k) => k !== "beauty")
                      );
                    }}
                    className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 3l6 6M9 3l-6 6"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
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
                      prev.includes("joints")
                        ? prev.filter((k) => k !== "joints")
                        : [...prev, "joints"]
                    );
                  }}
                  className={
                    "inline-flex items-center rounded-full border-2 border-[#2eb2a4] pl-4 pr-8 font-['League_Spartan',Arial,sans-serif] font-bold text-[1rem] " +
                    (jointsOnly
                      ? "bg-[#e8f6f4] text-[#2eb2a4]"
                      : "text-[#2eb2a4] hover:bg-[#e8f6f4]")
                  }
                >
                  <Image
                    src="/images/icon-8.png"
                    alt="Santé des articulations"
                    width={52}
                    height={52}
                    className="size-12 shrink-0 object-contain md:size-14"
                  />
                  SANTÉ DES ARTICULATIONS
                </button>
                {jointsOnly && (
                  <button
                    type="button"
                    aria-label="Désactiver le filtre Santé des articulations"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBenefits((prev) =>
                        prev.filter((k) => k !== "joints")
                      );
                    }}
                    className="absolute -top-2 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2eb2a4] shadow"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 3l6 6M9 3l-6 6"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cartes produits (RTM) */}
      <section className="bg-[#e8f6f4] pb-12 pt-16">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {visibleProducts.map((p) => {
              const icForm = formIcon(p.form);
              const icBenefit = benefitIcon(p.benefit);
              return (
                <div
                  key={p.id}
                  className="relative mt-6 flex flex-col rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 md:h-[650px]"
                >
                  {/* Badges icônes en haut à gauche */}
                  <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                    <span className="relative size-24">
                      <Image
                        src={icForm.src}
                        alt={icForm.alt}
                        fill
                        className="object-contain p-2"
                      />
                    </span>
                    <span className="relative -ml-10 size-24">
                      <Image
                        src={icBenefit.src}
                        alt={icBenefit.alt}
                        fill
                        className="object-contain p-2"
                      />
                    </span>
                  </div>

                  {/* Image produit – ne se fait pas écraser */}
                  <div className="relative mt-2 h-[260px] w-full overflow-hidden rounded-xl shrink-0">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Zone texte + bouton */}
                  <div className="mt-4 flex flex-col flex-1">
                    <h3 className="font-['League_Spartan',Arial,sans-serif] text-center text-[1.25rem] font-extrabold text-[#4e53a3]">
                      {p.title}
                    </h3>
                    <p className="mb-4 text-center font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4]">
                      {p.subtitle}
                    </p>

                    <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                      <p className="m-0">
                        <span className="font-semibold text-[#4e53a3]">
                          Galénique
                        </span>{" "}
                        : {p.galenique}
                      </p>
                      <p className="m-0">
                        <span className="font-semibold text-[#4e53a3]">
                          Bienfaits
                        </span>{" "}
                        : {p.bienfaits}
                      </p>
                      <p className="m-0">
                        <span className="font-semibold text-[#4e53a3]">
                          Arôme
                        </span>{" "}
                        : {p.aroma}
                      </p>
                      <p className="m-0">
                        <span className="font-semibold text-[#4e53a3]">
                          Formulation
                        </span>{" "}
                        : {p.formulation}
                      </p>
                      <p className="m-0">
                        <span className="font-semibold text-[#4e53a3]">
                          MOQ
                        </span>{" "}
                        : {p.moq}
                      </p>
                    </div>

                    <div className="mt-auto rounded-xl p-3 text-center">
                      <a
                        href="#contact"
                        className="rounded-full bg-[#2eb2a4] px-5 py-3 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-4 decoration-2"
                      >
                        Demander un échantillon 🤩
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection
        imageSrc="/images/circulegg-team.jpg"
        imageAlt="Circul'Egg – Team"
      />
      <Footer />
    </main>
  );
}
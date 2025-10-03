"use client";

import Image from "next/image";

const bulletItems = [
  "Fiche technique détaillée (solubilité, granulométrie)",
  "Guide formulation (compatibilité, pH, température)",
  "Certificats (ISO, HACCP, Attestations Qualité)",
  "Informations réglementaires : Allégations EFSA",
  "Études scientifiques",
];

export function TechnicalDocsSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#e8f4f8_0%,#d1e7dd_100%)] py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto grid max-w-[1000px] gap-10 md:grid-cols-[2fr_1px_1fr] md:gap-12">
          <div>
            <h2 className="mb-8 text-[2.2rem] font-bold leading-snug text-[#4a2c7a]">
              La Documentation technique complète
            </h2>
            <ul className="space-y-6">
              {bulletItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[1.1rem] font-medium text-[#2eb2a4]"
                >
                  <span className="mt-[2px] text-[1.2rem] text-[#28a745]">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block bg-[#4a2c7a]" aria-hidden />

          <div className="text-center">
            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
              <Image
                src="/images/16.png"
                alt="Document"
                width={80}
                height={80}
                className="h-20 w-auto object-contain"
              />
              <span className="absolute bottom-2 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#28a745] text-[10px] text-white">
                ✓
              </span>
            </div>

            <h3 className="mb-4 text-[1.8rem] font-bold text-[#4a2c7a]">
              Pack Documentaire
            </h3>
            <p className="mb-8 text-[1.1rem] leading-snug text-[#2eb2a4]">
              Tout ce dont vous avez besoin pour formuler
            </p>

            <button
              data-tally-open="3lxroW"
              data-tally-layout="modal"
              data-tally-align-left="1"
              data-tally-hide-title="1"
              data-tally-overlay="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              data-tally-auto-close="2000"
              data-tally-form-events-forwarding="1"
              className="mx-auto inline-flex cursor-pointer items-center gap-2 rounded-[8px] bg-[#4a2c7a] px-8 py-3 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(74,44,122,0.22)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(74,44,122,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a2c7a]"
            >
              <span className="text-[1.4rem]">⬇️</span>
              Télécharger le Pack
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

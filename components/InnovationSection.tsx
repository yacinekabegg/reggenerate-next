"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function InnovationSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const sizeCta = () => {
      const card = cardRef.current;
      const btn = ctaRef.current;
      const container = containerRef.current;
      if (!card || !btn || !container) return;

      const cardWidth = card.getBoundingClientRect().width;
      const containerWidth = container.getBoundingClientRect().width;
      let target = Math.round((cardWidth * 4) / 3);
      target = Math.max(260, Math.min(target, containerWidth - 48));
      btn.style.width = `${target}px`;
    };

    sizeCta();
    window.addEventListener("resize", sizeCta);
    return () => window.removeEventListener("resize", sizeCta);
  }, []);

  return (
    <section id="produit" className="bg-[#eaf6f4] py-24">
      <div ref={containerRef} className="mx-auto max-w-[1400px] px-6">
        <div className="text-center">
          <h2 className="mb-6 font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-extrabold text-[#4e53a3]">
            Une Innovation au service de vos Projets
          </h2>
          <p className="mx-auto mb-16 max-w-[800px] text-lg leading-relaxed text-[#2eb2a4]">
            Notre technologie brevetée transforme les déchets d’aujourd’hui en ingrédients de demain
            à haute valeur ajoutée pour vos projets nutraceutiques, food et cosmétiques.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div className="group relative overflow-hidden rounded-[20px] border-2 border-[#4e53a340] bg-white p-8 shadow-[0_6px_18px_rgba(78,83,163,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#4e53a3] to-[#2eb2a4] transition-transform duration-300 group-hover:scale-x-100" />
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center">
              <Image
                src="/images/4.png"
                alt="Icône procédé breveté & clean label"
                width={72}
                height={72}
                className="h-18 w-18 object-contain"
              />
            </div>
            <h3 className="mb-3 text-center text-xl font-extrabold tracking-[0.2px] text-[#4e53a3]">
              PROCÉDÉ BREVETÉ &<br /> CLEAN LABEL
            </h3>
            <p className="text-center text-base leading-relaxed text-[#2eb2a4]">
              Un processus de séparation et de purification mécanique unique sans aucun solvant chimique
              et protégé par un brevet préservant l’intégrité naturelle des biomolécules d’intérêt.
            </p>
          </div>

          <div
            ref={cardRef}
            className="group relative overflow-hidden rounded-[20px] border-2 border-[#4e53a340] bg-white p-8 shadow-[0_6px_18px_rgba(78,83,163,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#4e53a3] to-[#2eb2a4] transition-transform duration-300 group-hover:scale-x-100" />
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center">
              <Image
                src="/images/comprimé-violet.svg"
                alt="Icône performance galénique"
                width={72}
                height={72}
                className="h-18 w-18 object-contain"
              />
            </div>
            <h3 className="mb-3 text-center text-xl font-extrabold tracking-[0.2px] text-[#4e53a3]">
              PERFORMANCE<br /> GALÉNIQUE
            </h3>
            <p className="text-center text-base leading-relaxed text-[#2eb2a4]">
              Compatible avec toutes les formes galéniques grâce à sa faible posologie et son goût neutre.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-[20px] border-2 border-[#4e53a340] bg-white p-8 shadow-[0_6px_18px_rgba(78,83,163,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#4e53a3] to-[#2eb2a4] transition-transform duration-300 group-hover:scale-x-100" />
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center">
              <Image
                src="/images/6.png"
                alt="Icône efficacité cliniquement prouvée"
                width={72}
                height={72}
                className="h-18 w-18 object-contain"
              />
            </div>
            <h3 className="mb-3 text-center text-xl font-extrabold tracking-[0.2px] text-[#4e53a3]">
              EFFICACITÉ CLINIQUEMENT<br /> PROUVÉE
            </h3>
            <p className="text-center text-base leading-relaxed text-[#2eb2a4]">
              Des études cliniques solides à l’appui de son efficacité et des garanties qualités grâce à nos
              certifications (ISO, HACCP).
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            ref={ctaRef}
            href="/ingredient"
            className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-[#4e53a3] px-6 py-3 text-center text-xl font-bold text-white shadow-[0_6px_18px_rgba(78,83,163,0.2)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(78,83,163,0.25)]"
          >
            <span className="text-2xl">➡️</span>
            Accéder à la Page Notre Ingrédient &gt;
          </a>
        </div>
      </div>
    </section>
  );
}

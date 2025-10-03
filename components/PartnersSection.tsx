"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type PartnerCard = {
  icon: string;
  alt: string;
  title: ReactNode;
  description: string;
};

const partners: PartnerCard[] = [
  {
    icon: "/images/5.png",
    alt: "Façonnage multi-galénique",
    title: <>Façonnage multi-galénique</>,
    description:
      "Gélules, comprimés, poudres, boissons, barres, cosmétiques... Notre ingrédient s’adapte à vos idées les plus eggcentriques.",
  },
  {
    icon: "/images/18.png",
    alt: "Eggsperts du façonnage",
    title: (
      <>
        Vos <span className="text-[#f3d86b]">Egg</span>sperts du façonnage pré-sélectionnés
      </>
    ),
    description:
      "Nous sélectionnons pour vous les partenaires les plus réactifs et adaptés (MOQ flexibles, rapidité, prix compétitifs). Plus besoin de comparer, on l’a déjà fait. Un vrai gain de temps !",
  },
  {
    icon: "/images/19.png",
    alt: "Eggspress Launch",
    title: (
      <>
        Nos produits <span className="text-[#f3d86b]">Egg</span>spress Launch
      </>
    ),
    description:
      "Formules prêtes à l’emploi avec Reggenerate™ intégré, testées et validées par nos experts. Vous n’avez qu’à appuyer sur le bouton pour lancer la production ! Fini les développements interminables et coûteux.",
  },
];

export function PartnersSection() {
  return (
    <section className="bg-[#eaf6f4] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-bold text-[#4e53a3]">
            Vous imaginez, nous réalisons.
          </h2>
          <p className="mx-auto mt-4 max-w-[800px] text-lg leading-relaxed text-[#2eb2a4]">
            Grâce à notre réseau de façonniers certifiés, nous donnons vie à vos idées en un temps
            record, sur toutes les galéniques et formats que vous souhaitez.
          </p>
        </div>

        <div className="mx-auto mb-12 grid max-w-[1000px] gap-8">
          {partners.map((partner, index) => (
            <article
              key={`${partner.alt}-${index}`}
              className="flex flex-col gap-6 rounded-[20px] border-2 border-[#4e53a3] bg-white p-8 shadow-[0_6px_18px_rgba(78,83,163,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.12)] md:flex-row md:items-center"
            >
              <div className="flex items-center justify-center md:border-r-2 md:border-[#4e53a340] md:pr-8">
                <Image
                  src={partner.icon}
                  alt={partner.alt}
                  width={144}
                  height={144}
                  className="h-36 w-36 object-contain"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-xl font-extrabold text-[#4e53a3]">
                  {partner.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#2eb2a4]">
                  {partner.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/ready-to-market"
            className="inline-block rounded-[10px] bg-[#4e53a3] px-8 py-3 font-['League_Spartan','Roboto',Arial,sans-serif] text-lg font-semibold text-white shadow-[0_10px_25px_rgba(78,83,163,0.2)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(78,83,163,0.28)]"
          >
            Découvrir notre catalogue de produits &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}

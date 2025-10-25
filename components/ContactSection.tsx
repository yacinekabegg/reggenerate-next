"use client";

import Image from "next/image";
import React from "react";

export type ContactSectionProps = {
  id?: string;
  title?: string;
  description?: string;
  formSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const DEFAULT_TITLE = "Contactez notre équipe d'Eggsperts";
const DEFAULT_DESCRIPTION =
  "Pour toute demande, utilisez le formulaire à gauche ou nos contacts à droite. Envie d'avoir notre dossier d'études cliniques, un échantillon, notre dossier qualité, notre dossier ready-to-market ou envie de parler du marché de la nutraceutique ?";

export function ContactSection({
  id = "contact",
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  formSrc = "https://tally.so/embed/3lxroW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
  imageSrc = "/images/circulegg-ceo.png",
  imageAlt = "Circul'Egg – Contact",
}: ContactSectionProps) {
  return (
    <section id={id} className="bg-[#fafafa] py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <h2 className="text-[2.5rem] font-bold text-[#4e53a3] mb-2">{title}</h2>
          <p className="mx-auto max-w-[800px] text-[1.1rem] text-[#2eb2a4]">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-[#e5e5e5] bg-[#e8f6f4] p-6">
            <iframe
              src={formSrc}
              loading="lazy"
              width="100%"
              height={820}
              frameBorder={0}
              title="Registration form"
            />
          </div>
          <div className="rounded-2xl border border-[#e5e5e5] bg-[#e8f6f4] p-6">
            <h3 className="mb-4 text-[1.5rem] font-bold text-[#4e53a3]">Contact de notre CEO - Yacine Kabeche</h3>
            <div className="flex justify-center">
              <Image
                src="/images/circulegg-ceo.png"
                alt="Yacine Kabeche - CEO Circul'Egg"
                width={500}
                height={500}
                className="h-auto w-[340px] md:w-[420px] lg:w-[500px] object-contain"
              />
            </div>
            <div className="mb-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[1.5rem]">📧</span>
                <div>
                  <h4 className="mb-1 font-semibold text-[#4e53a3]">Email</h4>
                  <p className="m-0 text-[#666]">yacine.kabeche@circulegg.fr</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[1.5rem]">📞</span>
                <div>
                  <h4 className="mb-1 font-semibold text-[#4e53a3]">Téléphone</h4>
                  <p className="m-0 text-[#666]">+33684159719</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[1.5rem]">🌍</span>
                <div>
                  <h4 className="mb-1 font-semibold text-[#4e53a3]">Adresses</h4>
                  <p className="m-0 text-[#666]">
                    Usine : 21 Rue Charles Lindbergh, 35150 Janzé
                    <br />Bureau : 14 rue Soleillet, 75020 Paris
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded bg-[#f8f9fa] p-4">
              <h4 className="mb-2 font-semibold text-[#4e53a3]">Délai de réponse</h4>
              <p className="m-0 text-[#666]">Notre équipe vous répond sous 48h ouvrées sinon on vous doit un cadeau !</p>
            </div>
            <div className="mt-8 text-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={800}
                className="mx-auto h-auto w-full rounded-xl object-cover shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

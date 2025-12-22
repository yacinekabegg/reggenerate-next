"use client";

import Image from "next/image";

const testimonials = [
  {
    quote:
      "Grâce à l'actif Reggenerate, nous avons pu créer un produit Peau vraiment efficace sous forme de gummies. Son dosage s'adapte parfaitement à cette galénique, ce qui nous a permis d'obtenir une texture idéale et une efficacité prouvée, sans compromis sur le goût !",
    name: "David Gueunoun",
    role: "Fondateur et CEO de Mium Lab",
    logo: "/images/mllogo.png",
  },
  {
    quote:
      "La collaboration avec Circul’Egg s’est révélée extrêmement fluide grâce à une équipe très réactive et engagée. Leur ingrédient, Reggenerate®, apporte une vraie valeur ajoutée sur le plan du bien-être, tout en restant compétitif. Leur disponibilité et leur capacité à accompagner chaque étape du projet font de Circul’Egg bien plus qu’un fournisseur : un partenaire de confiance.",
    name: "Stéphane LEHNING",
    role: "Président des Laboratoires Lehning",
    logo: "/images/lehninglogo.jpg",
  },
  {
    quote:
      "Lorsqu’on a découvert le concept du collagène d’œuf, on a tout de suite adoré l’idée.\n\nAu-delà du produit, je souligne que l’équipe Circul’Egg est tout simplement adorable et disponible, et il était tout aussi important pour nous de partager des valeurs communes.\n\nAujourd’hui, nos clients adorent notre collagène végétarien Oemine et, à travers leurs témoignages, nous constatons à quel point il leur fait du bien !",
    name: "Docteur Paul Dupont",
    role: "Fondateur de Oemine",
    logo: "/images/oemine-logo-xxl-min.png",
  },
  {
    quote:
      "Reggenerate s’est imposé comme l'un de nos ingrédients phares. Aussi bien sur notre produit articulaire que sur notre produit beauté — tous deux déjà dans le top 10 de nos ventes alors qu’ils ont été lancé courant 2025. Il répond exactement à l’attente de nos clients : une solution qui réunit les molécules clés recherchées sur ces segments, comme le collagène et l’acide hyaluronique, tout en étant enfin disponible dans une galénique moderne et agréable.",
    name: "Louis-Benoit HUG",
    role: "CEO de Valébio",
    logo: "/images/logovalebio.jpeg",
  },
];

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-[#e8f4f2] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-extrabold text-[#4e53a3]">
          Nos Clients : Ce qu’ils en disent
        </h2>
        <p className="mx-auto mb-16 mt-6 max-w-[800px] text-center text-lg leading-relaxed text-[#2eb2a4]">
          Découvrez ce que nos partenaires B2B disent de nos produits
        </p>

        <div className="relative mt-10 overflow-hidden">
          <div className="testimonials-marquee flex gap-8">
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-8">
                {testimonials.map((testimonial) => (
                  <article
                    key={`${testimonial.name}-${loopIndex}`}
                    className="group relative w-[320px] flex-shrink-0 overflow-visible rounded-[20px] border-2 border-[#4e53a3] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] md:w-[360px]"
                  >
                    <span className="pointer-events-none absolute left-6 top-4 font-serif text-5xl leading-none text-[#d1d5db] opacity-70">
                      &quot;
                    </span>

                    <div className="mb-4 h-[60px] w-[150px] ml-auto">
                      <Image
                        src={testimonial.logo}
                        alt={`Logo de ${testimonial.name}`}
                        width={150}
                        height={60}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="relative z-[2] mb-4 text-xs leading-relaxed text-[#374151] md:text-sm">
                      “{testimonial.quote}”
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-xs font-semibold text-[#374151] md:text-sm">
                        {testimonial.name}
                      </h4>
                      <span className="text-[11px] text-[#374151] md:text-xs">
                        {testimonial.role}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
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
            className="inline-flex items-center justify-center rounded-[10px] bg-[#4e53a3] px-8 py-3 text-lg font-semibold text-white shadow-[0_6px_18px_rgba(78,83,163,0.2)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(61,66,128,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4e53a3]"
          >
            Prendre rendez-vous &gt;
          </button>
        </div>

        <style jsx>{`
          .testimonials-marquee {
            animation: testimonials-scroll-left 35s linear infinite;
            will-change: transform;
          }
          .testimonials-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes testimonials-scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

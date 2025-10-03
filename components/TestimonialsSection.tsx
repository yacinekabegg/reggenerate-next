"use client";

import Image from "next/image";

const testimonials = [
  {
    quote:
      "Reggenerate nous a permis de proposer à nos clients une alternative au collagène marin en accord avec nos valeurs. Le produit est aujourd'hui notre best-seller.",
    name: "Caroline Chaussat",
    role: "Responsable R&D",
    metric: "+X% DE VENTES",
    logo: "/images/oemine-logo-xxl-min.png",
  },
  {
    quote:
      "Nous cherchions depuis longtemps un collagène innovant qui puisse rentrer dans 2 gélules et non pas 10. Reggenerate nous a permis de nous différencier dans ce secteur où la concurrence est rude.",
    name: "Hélène Blum",
    role: "Chef de projet R&D",
    metric: "+X% DE VENTES",
    logo: "/images/oemine-logo-xxl-min.png",
  },
  {
    quote:
      "Enfin un collagène qui n'a pas le goût de poisson et qui m'a permis de développer des barres à la fois saines et gourmandes ! J'aime beaucoup l'idée d'utiliser un ingrédient végétarien upcyclé et cela plaît beaucoup à mes clients.",
    name: "Catherine Kluger",
    role: "CEO",
    metric: "+X% DE VENTES",
    logo: "/images/oemine-logo-xxl-min.png",
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

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          }}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative overflow-visible rounded-[20px] border-2 border-[#4e53a3] bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            >
              <span className="pointer-events-none absolute left-6 top-4 font-serif text-5xl leading-none text-[#d1d5db] opacity-70">
                &quot;
              </span>

              <div className="absolute right-6 top-6 h-[107px] w-[200px]">
                <Image
                  src={testimonial.logo}
                  alt="Logo entreprise"
                  width={200}
                  height={107}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="relative z-[2] mb-8 mt-8 text-base leading-relaxed text-[#374151] lg:pr-[220px]">
                “{testimonial.quote}”
              </div>

              <div className="flex items-end justify-between gap-4">
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-[#374151]">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-[#374151]">{testimonial.role}</span>
                </div>
                <div className="whitespace-nowrap rounded-lg border-2 border-[#2eb2a4] px-4 py-2 text-xs font-semibold text-[#2eb2a4]">
                  {testimonial.metric}
                </div>
              </div>
            </article>
          ))}
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
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export function InnovationSection() {

  return (
    <section id="produit" className="bg-[#eaf6f4] py-12 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="text-center">
          <h2 className="mb-6 font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-extrabold text-[#4e53a3]">
            An Innovation Serving your Projects
          </h2>
          <p className="mx-auto mb-16 max-w-[800px] text-lg leading-relaxed text-[#2eb2a4]">
            Our patented technology turns today&apos;s waste into tomorrow&apos;s high-value-added ingredients
            for your nutraceutical, food and cosmetic projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div className="group relative overflow-hidden rounded-[20px] border-2 border-[#4e53a340] bg-white p-8 shadow-[0_6px_18px_rgba(78,83,163,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#4e53a3] to-[#2eb2a4] transition-transform duration-300 group-hover:scale-x-100" />
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center">
              <Image
                src="/images/4.png"
                alt="Patented process & clean label icon"
                width={72}
                height={72}
                className="h-18 w-18 object-contain"
              />
            </div>
            <h3 className="mb-3 text-center text-xl font-extrabold tracking-[0.2px] text-[#4e53a3]">
              PATENTED PROCESS &<br /> CLEAN LABEL
            </h3>
            <p className="text-center text-base leading-relaxed text-[#2eb2a4]">
              A unique mechanical separation and purification process, free of any chemical solvent
              and protected by a patent, that preserves the natural integrity of the biomolecules of interest.
            </p>
          </div>

          <div
            className="group relative overflow-hidden rounded-[20px] border-2 border-[#4e53a340] bg-white p-8 shadow-[0_6px_18px_rgba(78,83,163,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#4e53a3] to-[#2eb2a4] transition-transform duration-300 group-hover:scale-x-100" />
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center">
              <Image
                src="/images/comprime-violet.svg"
                alt="Dosage form performance icon"
                width={72}
                height={72}
                className="h-18 w-18 object-contain"
              />
            </div>
            <h3 className="mb-3 text-center text-xl font-extrabold tracking-[0.2px] text-[#4e53a3]">
              DOSAGE FORM<br /> PERFORMANCE
            </h3>
            <p className="text-center text-base leading-relaxed text-[#2eb2a4]">
              Compatible with all dosage forms thanks to its low dosage and neutral taste.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-[20px] border-2 border-[#4e53a340] bg-white p-8 shadow-[0_6px_18px_rgba(78,83,163,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#4e53a3] to-[#2eb2a4] transition-transform duration-300 group-hover:scale-x-100" />
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center">
              <Image
                src="/images/6.png"
                alt="Clinically proven efficacy icon"
                width={72}
                height={72}
                className="h-18 w-18 object-contain"
              />
            </div>
            <h3 className="mb-3 text-center text-xl font-extrabold tracking-[0.2px] text-[#4e53a3]">
              CLINICALLY PROVEN<br /> EFFICACY
            </h3>
            <p className="text-center text-base leading-relaxed text-[#2eb2a4]">
              Robust clinical studies supporting its efficacy, and quality guarantees through our
              certifications (ISO, HACCP).
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/en/ingredient"
            className="inline-flex w-[320px] items-center justify-center gap-3 rounded-[10px] bg-[#4e53a3] px-6 py-3 text-center text-[0.9em] font-bold text-white shadow-[0_6px_18px_rgba(78,83,163,0.2)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(78,83,163,0.25)]"
          >
            Go to our Ingredient page &gt;
          </a>
        </div>
      </div>
    </section>
  );
}

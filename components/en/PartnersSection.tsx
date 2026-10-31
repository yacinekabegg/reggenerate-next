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
    icon: "/images/comprime-violet.svg",
    alt: "Multi-dosage-form contract manufacturing",
    title: <>Multi-dosage-form contract manufacturing</>,
    description:
      "Capsules, tablets, powders, drinks, bars, cosmetics... Our ingredient adapts to your most eggcentric ideas.",
  },
  {
    icon: "/images/18.png",
    alt: "Contract manufacturing Eggsperts",
    title: (
      <>
        Your pre-selected contract manufacturing <span className="text-[#f3d86b]">Egg</span>sperts
      </>
    ),
    description:
      "We select the most responsive and best-suited partners for you (flexible MOQs, speed, competitive pricing). No need to compare, we’ve already done it. A real time saver!",
  },
  {
    icon: "/images/19.png",
    alt: "Eggspress Launch",
    title: (
      <>
        Our <span className="text-[#f3d86b]">Egg</span>spress Launch products
      </>
    ),
    description:
      "Ready-to-use formulas with Reggenerate™ built in, tested and validated by our experts. All you have to do is press the button to start production! No more endless, costly development.",
  },
];

export function PartnersSection() {
  return (
    <section className="bg-[#eaf6f4] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-bold text-[#4e53a3]">
            You imagine it, we make it happen.
          </h2>
          <p className="mx-auto mt-4 max-w-[800px] text-lg leading-relaxed text-[#2eb2a4]">
            Thanks to our network of certified contract manufacturers, we bring your ideas to life in
            record time, in every dosage form and format you want.
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
            href="/en/ready-to-market"
            className="inline-block rounded-[10px] bg-[#4e53a3] px-8 py-3 font-['League_Spartan','Roboto',Arial,sans-serif] text-lg font-semibold text-white shadow-[0_10px_25px_rgba(78,83,163,0.2)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(78,83,163,0.28)]"
          >
            Discover our product catalog &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1100px] rounded-[24px] border border-[#f3d86b45] bg-[#fff7e6] px-6 py-14 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Image
            src="/images/31.png"
            alt="Œufs"
            width={120}
            height={80}
            className="h-20 w-auto"
          />
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-extrabold text-[#2eb2a4]">
            Inscription à la newsletter
          </h2>
        </div>

        <p className="mx-auto mb-10 max-w-[880px] text-xl leading-relaxed text-[#2eb2a4]">
          <span className="font-bold text-[#f3d86b]">Egg</span>sentielle pour être au courant de nos
          dernières nouveautés et recevoir notre{" "}
          <span className="font-bold text-[#f3d86b]">egg</span>spertise marché, nos retours de salons et bien plus encore !
        </p>

        <div className="mx-auto flex max-w-[640px] flex-col gap-4 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            aria-label="Email"
            className="h-[70px] flex-1 rounded-[8px] border-[3px] border-[#2eb2a4] px-5 text-xl text-gray-950 outline-none focus:ring-4 focus:ring-[#2eb2a4]/30"
          />
          <button className="h-[70px] rounded-[10px] bg-[#2eb2a4] px-8 text-xl font-extrabold text-white transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(46,178,164,0.35)]">
            Je m’inscris
          </button>
        </div>
      </div>
    </section>
  );
}

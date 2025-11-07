"use client";

import Image from "next/image";

export function NewsletterSection() {

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
          <iframe
            data-tally-src="https://tally.so/embed/woe4r5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
            loading="lazy"
            width="100%"
            height="190"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Inscription newsletter"
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function Hero() {

  return (
    <section className="mt-12 sm:mt-0 flex min-h-[calc(100vh-64px)] overflow-hidden bg-white text-[#2eb2a4]">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch md:pl-[clamp(20px,4vw,56px)] md:pr-0 lg:grid-cols-[minmax(640px,720px)_1fr] lg:items-stretch lg:gap-0 lg:pl-[clamp(24px,5vw,64px)] lg:pr-0">
        <div className="flex flex-col justify-center gap-4 max-lg:mx-auto max-lg:max-w-[720px] max-lg:px-6 md:mx-0 md:px-0 md:self-center md:pr-[clamp(16px,3vw,40px)] lg:self-center lg:pl-0 lg:pr-[clamp(24px,4vw,56px)]">
          <div

            className="inline-flex items-center gap-[10px] rounded-[25px] border-[1px] border-current px-[18px] py-[10px] font-bold uppercase tracking-[0.02em] text-[#2eb2a4] w-[25ch]"
          >
            <Image
              src="https://res.cloudinary.com/dpc2uqmvg/image/upload/v1762018125/3_y4q1ww.png"
              alt="Patented innovation icon"
              width={3200}
              height={2400}
              className="h-[1.8rem] w-[1.8rem] object-contain"
            />
            <span>Patented innovation</span>
          </div>

          <h1
            className="max-w-[56ch] text-[clamp(28px,3.6vw,48px)] font-extrabold leading-[1.05] tracking-[0.02em]"
            style={{ fontFamily: "'League Spartan', 'Roboto', Arial, sans-serif" }}
          >
            Turning the ordinary
            <br />
            into <span className="text-[#f3d86b]">EGG</span>
            <span className="ml-2 text-[#2eb2a4]">STRA-ORDINARY</span>
          </h1>

          <p className="max-w-[56ch] text-[clamp(16px,1.8vw,18px)] leading-[1.7] text-[#2eb2a4] opacity-95">
            Reggenerate™ is the first upcycled, egg-derived, all-in-one ingredient that brings together in a
            single dose every essential ingredient for skin beauty and joint health: collagen, hyaluronic acid,
            elastin, glucosamine, chondroitin. Its versatility and low dosage allow it to be integrated into any
            dosage form to meet every need.
          </p>

          <a

            href="#produit"
            className="brand-hero-cta inline-block w-[20ch] rounded-[10px] bg-[#2eb2a4] px-[18px] py-[10px] text-center text-[0.9em] font-extrabold text-white transition hover:opacity-85"
          >
            Learn more &gt;
          </a>
        </div>

        <div className="hidden sm:flex h-full items-stretch justify-end px-0 md:self-stretch md:pl-[clamp(12px,2vw,32px)] md:pr-0 lg:self-stretch lg:pl-[clamp(16px,3vw,48px)] lg:pr-0">
          <div className="relative h-full w-full max-w-[640px] md:max-w-none lg:max-w-none">
            <Image
              src="https://res.cloudinary.com/dpc2uqmvg/image/upload/v1762017985/2_tdnld6.png"
              alt="Eggs"
              fill
              sizes="(min-width: 1536px) 40vw, (min-width: 1280px) 45vw, (min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover md:object-center lg:object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function CompositionSection() {
  return (
    <section
      id="composition-membrane"
      className="bg-[linear-gradient(135deg,#e8f4f8_0%,#d1e7dd_100%)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto text-center" style={{ maxWidth: "1000px" }}>
          <h2 className="mb-12 text-3xl font-bold leading-snug text-[#4a2c7a] sm:text-[2.5rem]">
            La Membrane d&apos;œuf : Une synergie de molécules bioactives reconnues
          </h2>

          <div className="mx-auto mb-8 max-w-[1000px]">
            <Image
              src="/images/11.png"
              alt="Composition de la membrane d'œuf"
              width={1000}
              height={600}
              className="h-auto w-full rounded-[12px]"
              priority
            />
          </div>

          <div>
            <a
              href="/ingredient"
              className="inline-flex items-center justify-center rounded-[8px] bg-[#4a2c7a] px-8 py-3 text-base font-semibold text-white shadow-[0_8px_18px_rgba(74,44,122,0.2)] transition hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(74,44,122,0.28)]"
            >
              En savoir plus &gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

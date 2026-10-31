import Image from "next/image";

export function ProcessOverlaySection() {
  return (
    <section className="relative h-[70vh] min-h-[360px] overflow-hidden">
      <Image
        src="/images/processus-membranes-oeufs.jpg"
        alt="Eggshell membrane extraction process"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute left-1/2 top-6 w-[92%] max-w-[1050px] -translate-x-1/2 rounded-[12px] bg-white/65 px-6 py-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md sm:px-10 sm:py-10 md:top-8 md:w-[90%] lg:px-12">
        <h2 className="mb-6 text-[1.75rem] font-bold leading-snug text-[#2eb2a4] sm:text-[2rem] lg:text-[2.2rem]">
          You will never look at an{" "}
          <span className="rounded-[8px] bg-[rgb(255,255,255)] px-2 py-1 text-[#ffd700]">
            egg
          </span>{" "}
          the same way again
        </h2>
        <p className="text-base font-medium leading-[1.6] text-[#2eb2a4] sm:text-lg">
          Through a 100% mechanical, patented extraction process, we recover eggshell membranes,
          an exceptional source of biomolecules of interest for skin beauty and joint health.
        </p>
      </div>
    </section>
  );
}

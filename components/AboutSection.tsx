import Link from "next/link";

const features = [
  { emoji: "💡", label: "Innovation continue" },
  { emoji: "👥", label: "Equipe Experte" },
  { emoji: "🌍", label: "Présence Internationale" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[2.2rem] font-bold text-[#2eb2a4]">
                Derrière la coquille
              </h2>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2eb2a4] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                <span className="text-xl">🥚</span>
              </div>
            </div>

            <div className="space-y-6 text-[1.1rem] leading-[1.7] text-[#2eb2a4]">
              <p>On ne s&apos;est même pas présentés! 👋</p>
              <p>
                En Bretagne, au cœur du premier bassin avicole français, nous avons l&apos;ambition de valoriser
                les 40 000 tonnes de coquilles rejetées chaque année pour en extraire leur trésor : la membrane d&apos;œuf.
              </p>
              <p>
                C&apos;est à partir de cette membrane que nous développons Reggenerate™, un ingrédient biosourcé,
                efficace et cliniquement prouvé pour la santé et la beauté.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row">
              {features.map((feature) => (
                <div key={feature.label} className="flex-1 text-center">
                  <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#2eb2a4] bg-white">
                    <span className="text-2xl text-[#2eb2a4]">{feature.emoji}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#2eb2a4]">{feature.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Link
                href="https://circulegg.fr/notre-boussole/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#2eb2a4] px-8 py-3 font-['League_Spartan','Roboto',Arial,sans-serif] text-lg font-semibold text-white shadow-[0_8px_24px_rgba(46,178,164,0.25)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(46,178,164,0.3)]"
              >
                Découvrez notre histoire et nos valeurs &gt;
              </Link>
            </div>
          </div>

          <div className="rounded-[20px] bg-[#2eb2a4] p-10 text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[2.2rem] font-bold">
              Rencontrez Yacine
            </h2>
            <h3 className="mb-6 font-['League_Spartan','Roboto',Arial,sans-serif] text-xl font-semibold">
              CEO et Fondateur de Circul&apos;Egg
            </h3>

            <p className="mb-8 text-[1.1rem] leading-[1.7] text-white">
              Découvrez comment un simple projet étudiant a fait éclore une entreprise qui casse
              les codes (et les œufs) en France et à l&apos;international.
            </p>

            <div className="overflow-hidden rounded-[12px] bg-black shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://www.youtube.com/embed/pLzMfItYkRs?si=-xWEqDoUumwK0-89&controls=0&start=37"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

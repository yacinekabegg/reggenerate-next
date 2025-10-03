"use client";

import Image from "next/image";

type StudyCard = {
  title: string;
  results: string;
  participants: string;
  duration: string;
};

type StudyColumn = {
  title: string;
  icon: string;
  alt: string;
  cards: StudyCard[];
};

const columns: StudyColumn[] = [
  {
    title: "Étude Beauté de la Peau",
    icon: "/images/12.png",
    alt: "Beauté de la peau",
    cards: [
      {
        title: "Test consommateur - Étude propriétaire",
        results:
          "78% fermeté (perception), 76% élasticité, 78% éclat, 76% peau douce, 60% peau souple, 71% hydratation, -79% inconfort cutané",
        participants: "60 participants",
        duration: "60 jours",
      },
      {
        title: "Étude clinique randomisée double aveugle",
        results:
          "-19% perte en eau, +51% fermeté, +25% élasticité, -33% fatigue cutanée",
        participants: "50 participants",
        duration: "60 jours",
      },
      {
        title: "Étude clinique randomisée double aveugle",
        results:
          "+21,1% densité capillaire, +1,5% uniformité du teint, -6,3 pts rides pattes d'oie, cheveux/ongles renforcés",
        participants: "68 participants",
        duration: "12 semaines",
      },
    ],
  },
  {
    title: "Étude Santé Articulaire",
    icon: "/images/13.png",
    alt: "Santé articulaire",
    cards: [
      {
        title: "Étude clinique randomisée double aveugle",
        results:
          "En 7 jours : douleur -22%, raideur -24% • En 30 jours : douleur -33%, raideur -35%",
        participants: "160 participants",
        duration: "90 jours",
      },
      {
        title: "Étude clinique randomisée double aveugle",
        results:
          "Raideur -26,6%, douleur -15,4% (effets visibles dès 10 jours)",
        participants: "67 participants",
        duration: "8 semaines",
      },
      {
        title: "Étude clinique randomisée double aveugle",
        results:
          "-9% dégradation du cartilage dès 1 semaine, -38,1% douleur dès 2 semaines, -18,5% raideur dès 2 semaines, +56,3% récupération vs placebo",
        participants: "60 participants",
        duration: "2 semaines",
      },
    ],
  },
];

export function EggspertiseSection() {
  return (
    <section className="bg-[#f8f9fa] py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold leading-snug text-[#2eb2a4] sm:text-[2.5rem]">
            Une efficacité cliniquement prouvée : c&apos;est ça notre{" "}
            <span className="text-[#ffd700]">EGGSPERTISE</span> !
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {columns.map((column) => (
            <div key={column.title} className="space-y-6">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full bg-white shadow-inner">
                  <Image
                    src={column.icon}
                    alt={column.alt}
                    width={60}
                    height={60}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#2eb2a4] md:text-[1.5rem]">
                  {column.title}
                </h3>
              </div>

              {column.cards.map((card, cardIndex) => (
                <article
                  key={`${column.title}-${cardIndex}`}
                  className="flex min-h-[220px] flex-col justify-between rounded-[12px] border border-[#e9ecef] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                >
                  <div>
                    <h4 className="mb-4 text-lg font-semibold text-[#2eb2a4]">
                      {card.title}
                    </h4>
                    <div className="space-y-2 text-sm text-[#666666]">
                      <p className="font-semibold text-[#2eb2a4]">Résultats clés :</p>
                      <p>{card.results}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#999999]">
                    <div className="flex items-center gap-2 rounded-md border border-[#e5e7eb] bg-[#f8f9fa] px-3 py-2">
                      <span>👥</span>
                      <span>{card.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md border border-[#e5e7eb] bg-[#f8f9fa] px-3 py-2">
                      <span>⏰</span>
                      <span>{card.duration}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
            className="inline-flex cursor-pointer items-center justify-center rounded-[10px] bg-[#2eb2a4] px-8 py-3 text-lg font-semibold text-white shadow-[0_6px_18px_rgba(46,178,164,0.2)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(46,178,164,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2eb2a4]"
          >
            Nous demander les études complètes &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

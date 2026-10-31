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
    title: "Skin Beauty Study",
    icon: "/images/12.png",
    alt: "Skin beauty",
    cards: [
      {
        title: "Consumer test - Proprietary study",
        results:
          "78% firmness (perceived), 76% elasticity, 78% radiance, 76% soft skin, 60% supple skin, 71% hydration, -79% skin discomfort",
        participants: "60 participants",
        duration: "60 days",
      },
      {
        title: "Randomized double-blind clinical study",
        results:
          "-19% water loss, +51% firmness, +25% elasticity, -33% skin fatigue",
        participants: "50 participants",
        duration: "60 days",
      },
      {
        title: "Randomized double-blind clinical study",
        results:
          "+21.1% hair density, +1.5% skin tone evenness, -6.3 pts crow's feet wrinkles, stronger hair/nails",
        participants: "68 participants",
        duration: "12 weeks",
      },
    ],
  },
  {
    title: "Joint Health Study",
    icon: "/images/13.png",
    alt: "Joint health",
    cards: [
      {
        title: "Randomized double-blind clinical study",
        results:
          "In 7 days: pain -22%, stiffness -24% • In 30 days: pain -33%, stiffness -35%",
        participants: "160 participants",
        duration: "90 days",
      },
      {
        title: "Randomized double-blind clinical study",
        results:
          "Stiffness -26.6%, pain -15.4% (effects visible from day 10)",
        participants: "67 participants",
        duration: "8 weeks",
      },
      {
        title: "Randomized double-blind clinical study",
        results:
          "-9% cartilage degradation from week 1, -38.1% pain from week 2, -18.5% stiffness from week 2, +56.3% recovery vs placebo",
        participants: "60 participants",
        duration: "2 weeks",
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
            Clinically proven efficacy: that&apos;s our{" "}
            <span className="text-[#ffd700]">EGGSPERTISE</span>!
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
                      <p className="font-semibold text-[#2eb2a4]">Key results:</p>
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
            Ask us for the full studies &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "How can it work with only 300 mg?",
    answer: (
      <p className="text-[#666666]">
        Reggenerate™ is effective at a low dose thanks to the natural synergy of its biomolecules
        (collagen types I, V, X, elastin, hyaluronic acid, GAGs, etc.). Unlike a conventional hydrolyzed
        collagen, each component acts in a complementary way, which increases bioavailability
        (≈85% versus 30 to 50% for other collagens). That&apos;s why just 300 mg is enough, backed by
        clinically proven efficacy.
      </p>
    ),
  },
  {
    question: "Which types of collagen are present?",
    answer: (
      <div className="space-y-3 text-[#666666]">
        <p>Eggshell membrane naturally contains several types of collagen:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-[#2eb2a4]">Type I:</span> the most abundant in skin,
            tendons and bones.
          </li>
          <li>
            <span className="font-semibold text-[#2eb2a4]">Type V:</span> involved in regulating collagen
            fibers and tissue structure.
          </li>
          <li>
            <span className="font-semibold text-[#2eb2a4]">Type X:</span> essential for cartilage
            regeneration and mineralization.
          </li>
        </ul>
        <p>
          This diversity explains the benefits for both joint health and the beauty of skin
          and hair.
        </p>
      </div>
    ),
  },
  {
    question: "What is the molecular weight?",
    answer: (
      <p className="text-[#666666]">
        The collagen in eggshell membrane is present in its native, non-hydrolyzed form. Each
        fibrillar collagen molecule (types I, V and X) has a mass of around 300 kDa and
        assembles into fibrils that can reach several million daltons. This high molecular
        weight reflects the structural integrity of the collagen and confirms the absence of
        chemical processing such as hydrolysis.
      </p>
    ),
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#eaf6f4] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-bold text-[#4e53a3]">
            <span className="text-[#4e53a3]">&quot;</span>
            <span className="text-[#f3d86b]">Egg</span>
            <span className="text-[#4e53a3]">splain it to me</span>
            <span className="text-[#4e53a3]">&quot;</span>
          </h2>
          <p className="mt-4 text-lg text-[#4e53a3]">Quickly find the answers to your questions</p>
        </div>

        <div className="mx-auto mb-12 max-w-[800px] rounded-[12px] border-2 border-[#2eb2a4] bg-white shadow-[0_6px_18px_rgba(78,83,163,0.08)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-[#2eb2a4] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex cursor-pointer w-full items-center justify-between gap-4 px-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base font-semibold text-[#2eb2a4]">{faq.question}</h3>
                  <span
                    className={`text-xl text-[#4e53a3] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                <div className={`overflow-hidden bg-[#f8f9fa] px-8 transition-all ${isOpen ? "py-6" : "max-h-0 py-0"}`}>
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
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
            className="rounded-[8px] border-none bg-[#4e53a3] px-8 py-3 font-['League_Spartan','Roboto',Arial,sans-serif] text-lg font-semibold text-white shadow-[0_10px_25px_rgba(78,83,163,0.2)] transition hover:-translate-y-1 hover:bg-[#2eb2a4] hover:shadow-[0_12px_28px_rgba(78,83,163,0.25)]"
          >
            See the full FAQ &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

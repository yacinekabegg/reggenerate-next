"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "Comment ça peut fonctionner avec seulement 300 mg ?",
    answer: (
      <p className="text-[#666666]">
        Reggenerate™ est efficace à faible dose grâce à la synergie naturelle de ses biomolécules
        (collagène types I, V, X, élastine, acide hyaluronique, GAGs…). Contrairement à un collagène
        hydrolysé classique, chaque composant agit de manière complémentaire, ce qui augmente la
        biodisponibilité (≈85 % contre 30–50 % pour d&apos;autres collagènes). C&apos;est pourquoi seulement 300 mg
        suffisent, efficacité cliniquement prouvée à l&apos;appui.
      </p>
    ),
  },
  {
    question: "Quels sont les types de collagènes présents ?",
    answer: (
      <div className="space-y-3 text-[#666666]">
        <p>La membrane d&apos;œuf contient naturellement plusieurs types de collagène :</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="font-semibold text-[#2eb2a4]">Type I :</span> le plus abondant dans la peau,
            les tendons et les os.
          </li>
          <li>
            <span className="font-semibold text-[#2eb2a4]">Type V :</span> impliqué dans la régulation des
            fibres de collagène et la structure des tissus.
          </li>
          <li>
            <span className="font-semibold text-[#2eb2a4]">Type X :</span> essentiel dans la régénération et
            la minéralisation du cartilage.
          </li>
        </ul>
        <p>
          Cette diversité explique les bénéfices à la fois sur la santé articulaire et la beauté de la peau
          et des cheveux.
        </p>
      </div>
    ),
  },
  {
    question: "Quel est le poids moléculaire ?",
    answer: (
      <p className="text-[#666666]">
        Le collagène de la membrane d&apos;œuf est présent sous forme native et non hydrolysée. Chaque
        molécule de collagène fibrillaire (types I, V et X) possède une masse d&apos;environ 300 kDa et
        s&apos;assemble en fibrilles pouvant atteindre plusieurs millions de daltons. Ce haut poids
        moléculaire reflète l&apos;intégrité structurale du collagène et confirme l&apos;absence de traitement
        chimique comme l&apos;hydrolyse.
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
            <span className="text-[#4e53a3]">splique-moi</span>
            <span className="text-[#4e53a3]">&quot;</span>
          </h2>
          <p className="mt-4 text-lg text-[#4e53a3]">Trouvez rapidement les réponses à vos questions</p>
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
                  {isOpen && faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="rounded-[8px] border-none bg-[#4e53a3] px-8 py-3 font-['League_Spartan','Roboto',Arial,sans-serif] text-lg font-semibold text-white shadow-[0_10px_25px_rgba(78,83,163,0.2)] transition hover:-translate-y-1 hover:bg-[#2eb2a4] hover:shadow-[0_12px_28px_rgba(78,83,163,0.25)]">
            Voir la FAQ complète &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

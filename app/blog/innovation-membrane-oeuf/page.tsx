export default function ArticleInnovation() {
  return (
    <main className="pt-16">
      <section className="mt-16 bg-gradient-to-br from-[#2eb2a4] to-[#4e53a3] py-12 text-white">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <div className="mx-auto mb-4 inline-block rounded-[20px] bg-white/20 px-4 py-2">
            <span className="text-[0.9rem] font-medium">🥚 Innovation</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-[800px] text-[2.5rem] font-bold">
            L'Innovation Révolutionnaire de la Membrane d'Œuf
          </h1>
          <p className="mx-auto max-w-[600px] text-[1.1rem] opacity-90">
            Découvrez comment la membrane d'œuf transforme le monde des compléments alimentaires avec ses propriétés uniques et ses bénéfices cliniquement prouvés.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 opacity-95">
            <div>📅 15 Janvier 2024</div>
            <div>⏱️ 5 min de lecture</div>
            <div>👤 Équipe Reggenerate™</div>
          </div>
        </div>
      </section>

      <article className="bg-[#fafafa] py-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <section className="mb-12">
              <p className="text-[1.2rem] leading-8 text-[#666] italic">
                Dans un monde où l'innovation en nutrition ne cesse de progresser, la membrane d'œuf émerge comme une solution révolutionnaire...
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-[2rem] font-bold text-[#1a1a1a]">Qu'est-ce que la Membrane d'Œuf ?</h2>
              <div className="rounded-xl bg-[#f8f9fa] p-6">
                <h3 className="mb-3 text-[1.3rem] font-semibold text-[#1a1a1a]">Composition de la Membrane d'Œuf :</h3>
                <ul className="list-disc space-y-2 pl-5 text-[#666]">
                  <li>
                    <strong>Collagène de type I, V et X :</strong> Essentiel pour la santé articulaire et cutanée
                  </li>
                  <li>
                    <strong>Glycosaminoglycanes :</strong> Hyaluronane, chondroïtine sulfate et dermatane sulfate
                  </li>
                  <li>
                    <strong>Protéines spécifiques :</strong> Ovotransferrine, lysozyme et ovomucine
                  </li>
                  <li>
                    <strong>Élastine :</strong> Pour la flexibilité et l'élasticité des tissus
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-[2rem] font-bold text-[#1a1a1a]">Pourquoi Choisir la Membrane d'Œuf ?</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    t: "Biodisponibilité Supérieure",
                    d:
                      "Les composants de la membrane d'œuf sont naturellement optimisés pour l'absorption par l'organisme.",
                  },
                  { t: "Synergie Naturelle", d: "Tous les composants agissent en synergie, offrant des résultats supérieurs." },
                  { t: "Tolérance Exceptionnelle", d: "Aucun effet secondaire rapporté, même à haute dose." },
                  { t: "Durabilité", d: "Valorisation d'un co-produit de l'industrie alimentaire." },
                ].map((c) => (
                  <div key={c.t} className="rounded-xl border border-[#e5e5e5] p-6">
                    <h4 className="mb-2 font-semibold text-[#2eb2a4]">✅ {c.t}</h4>
                    <p className="m-0 text-[#666]">{c.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 text-center">
              <div className="rounded-xl bg-gradient-to-br from-[#2eb2a4] to-[#4e53a3] p-8 text-white">
                <h3 className="mb-2 text-[1.3rem] font-semibold">Prêt à Innover avec Reggenerate™ ?</h3>
                <p className="mb-4 opacity-90">Découvrez comment intégrer la membrane d'œuf dans vos formulations.</p>
                <a href="/ready-to-market" className="inline-block rounded bg-white px-6 py-3 font-semibold text-[#2eb2a4]">Découvrir nos Formulations</a>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}



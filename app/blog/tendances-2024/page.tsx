export default function Tendances2024() {
  return (
    <main className="pt-16">
      <section className="mt-16 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] py-12 text-white">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <div className="mx-auto mb-4 inline-block rounded-[20px] bg-white/90 px-4 py-2 text-[#FF6B6B]">MARCHÉ</div>
          <h1 className="mb-4 text-[2.5rem] font-bold">Les Tendances Compléments Alimentaires 2024</h1>
          <p className="mx-auto max-w-[600px] text-[1.1rem] opacity-90">Analyse des nouvelles tendances du marché des compléments alimentaires.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 opacity-95">
            <div>📅 10 Janvier 2024</div>
            <div>⏱️ 7 min de lecture</div>
          </div>
        </div>
      </section>

      <article className="bg-[#fafafa] py-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <section className="mb-12">
              <h2 className="mb-4 text-[2rem] font-bold text-[#1a1a1a]">Panorama 2024</h2>
              <p className="text-[#666]">Du naturel au personnalisé, focus sur les formats gummies, shots, et les ingrédients à preuve clinique.</p>
            </section>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {['Personnalisation','Science & preuves','Durabilité'].map((t)=> (
                <div key={t} className="rounded-xl border border-[#e5e5e5] p-6">
                  <h3 className="mb-2 font-semibold text-[#1a1a1a]">{t}</h3>
                  <p className="m-0 text-[#666]">Points clés et implications pour les marques.</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}



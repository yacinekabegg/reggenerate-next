export default function ReadyToMarket() {
  return (
    <main className="pt-16">
      <section className="mt-16 bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="mb-6 text-center text-[2.5rem] font-bold text-[#1a1a1a]">Ready‑to‑Market</h1>
          <p className="mx-auto max-w-[800px] text-center text-[#666]">
            Formulations clés en main basées sur notre membrane d'œuf : mobility, beauty, performance…
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { t: "Mobility", d: "Articulations et flexibilité" },
              { t: "Beauty", d: "Peau, ongles et cheveux" },
              { t: "Performance", d: "Récupération musculaire" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-[#e5e5e5] p-6">
                <h3 className="mb-2 text-[1.3rem] font-semibold text-[#1a1a1a]">{c.t}</h3>
                <p className="m-0 text-[#666]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}



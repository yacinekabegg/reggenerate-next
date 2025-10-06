"use client";

import Image from "next/image";

export default function ClientsPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="mt-16 bg-gradient-to-br from-[#2eb2a4] to-[#4e53a3] py-12 text-white">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="mx-auto mb-4 inline-block rounded-[20px] bg-white/20 px-4 py-2">
            <span className="text-[0.9rem] font-medium">🥚 Ingrédient Membrane d'Œuf</span>
          </div>
          <h1 className="mb-2 text-[3rem] font-bold">Nos Clients</h1>
          <p className="mx-auto max-w-[600px] text-[1.2rem] opacity-90">
            Découvrez les marques qui font confiance à Reggenerate™ pour leurs formulations innovantes
          </p>
        </div>
      </section>

      {/* Clients list placeholder (Airtable-free static scaffold) */}
      <section className="bg-[#fafafa] py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 text-center">
            <h2 className="text-[2.5rem] font-bold">Ils utilisent Reggenerate™</h2>
            <p className="mx-auto max-w-[600px] text-[#666]">
              Plus de 30 marques font déjà confiance à notre ingrédient membrane d'œuf pour leurs produits
            </p>
          </div>

          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="client-card rounded-2xl bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition">
                <div className="mb-4 h-12 w-32 rounded bg-[#f3f3f3]" />
                <p className="m-0 text-[#666]">Client #{i} – logo et description à brancher.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-[#2eb2a4] to-[#4e53a3] py-16 text-white">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="mb-12 text-center">
            <h2 className="text-[2.5rem] font-bold">Impact Reggenerate™</h2>
            <p className="text-[1.1rem] opacity-90">L'ingrédient membrane d'œuf qui révolutionne la formulation</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { v: "30+", l: "Marques partenaires" },
              { v: "50+", l: "Produits formulés" },
              { v: "15+", l: "Pays d'export" },
              { v: "100%", l: "Satisfaction client" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-[3rem] font-bold">{s.v}</div>
                <div className="text-[1.1rem] font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#fafafa] py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <h2 className="text-[2.5rem] font-bold text-[#1a1a1a]">Rejoignez nos clients</h2>
            <p className="mx-auto max-w-[600px] text-[#666]">
              Vous souhaitez intégrer Reggenerate™ dans vos formulations ? Contactez notre équipe technique
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6">
              <iframe
                src="https://tally.so/embed/3lxroW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height={820}
                frameBorder={0}
                title="Registration form"
              />
            </div>
            <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6">
              <h3 className="mb-4 text-[1.5rem] font-bold text-[#1a1a1a]">Contact de notre CEO - Yacine Kabeche</h3>
              <div className="mb-8 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-[1.5rem]">📧</span>
                  <div>
                    <h4 className="mb-1 font-semibold text-[#1a1a1a]">Email</h4>
                    <p className="m-0 text-[#666]">yacine.kabeche@circulegg.fr</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[1.5rem]">📞</span>
                  <div>
                    <h4 className="mb-1 font-semibold text-[#1a1a1a]">Téléphone</h4>
                    <p className="m-0 text-[#666]">+33684159719</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[1.5rem]">🌍</span>
                  <div>
                    <h4 className="mb-1 font-semibold text-[#1a1a1a]">Adresses</h4>
                    <p className="m-0 text-[#666]">Usine : 21 Rue Charles Lindbergh, 35150 Janzé<br />Bureau : 14 rue Soleillet, 75020 Paris</p>
                  </div>
                </div>
              </div>
              <div className="rounded bg-[#f8f9fa] p-4">
                <h4 className="mb-2 font-semibold text-[#1a1a1a]">Délai de réponse</h4>
                <p className="m-0 text-[#666]">Notre équipe vous répond sous 48h ouvrées sinon on vous doit un cadeau !</p>
              </div>
              <div className="mt-8 text-center">
                <Image
                  src="/images/Mon image ChatGPT.jpg"
                  alt="Reggenerate - Image ChatGPT"
                  width={1200}
                  height={800}
                  className="mx-auto h-auto w-full rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



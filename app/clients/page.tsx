"use client";

import { Footer } from "@/components/Footer";
import Image from "next/image";
import { ContactSection } from "@/components/ContactSection";

export default function ClientsPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[360px] w-full md:h-[520px]">
        <Image
          src="/images/hero-clients.svg"
          alt="Produits Ready-to-Market"
          fill
          priority
        />
        {/* Badge aligné au container */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-[1400px] px-6 pt-6 flex justify-center">
            <div className="flex w-fit items-center gap-1 sm:gap-2 rounded-full border border-[#2eb2a4] sm:border-2 bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2">
              <Image src="/images/rocket.png" alt="Rocket" width={40} height={40} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              <span className="font-['League_Spartan',Arial,sans-serif] text-[0.8rem] sm:text-[0.95rem] font-extrabold tracking-normal sm:tracking-wide text-[#2eb2a4] whitespace-nowrap">
                PRODUITS DÉJÀ SUR LE MARCHÉ
              </span>
            </div>
          </div>
          {/* Titre en overlay absolute (desktop) */}
          <h1 className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-24 sm:bottom-22 md:bottom-32 lg:bottom-28 lg:mb-2 z-10 text-center font-['League_Spartan',Arial,sans-serif] text-[1.6rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold w-full">
            <span className="text-[#2eb2a4]">Nos clients <span className="text-[#f3d86b]">EGG</span><span className="text-[#2eb2a4]">ceptionnels</span></span>
          </h1>
          {/* Texte descriptif en overlay absolute (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-4 md:bottom-8 z-10 w-full max-w-[1100px] px-4 sm:px-6">
            <p className="text-center text-white text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] leading-snug sm:leading-normal md:leading-relaxed drop-shadow-md">
              Trouver le bon ingrédient, c’est un peu comme chercher l’âme sœur : il faut ce petit “plus” qui fait la différence. 71 marques ont déjà trouvé le bon ingrédient avec Reggenerate™. Chacune pour une raison différente — sa qualité, son brevet, sa facilité d’usage —mais toutes pour la même évidence : c’était le bon, au bon moment.
            </p>
          </div>
        </div>
      </section>

      {/* Titre + texte sous l'image (mobile) */}
      <div className="md:hidden px-6 pb-4 text-center">
        <h1 className="font-['League_Spartan',Arial,sans-serif] text-[1.9rem] font-extrabold">
          <span className="text-[#2eb2a4]">Nos clients <span className="text-[#f3d86b]">EGG</span><span className="text-[#2eb2a4]">ceptionnels</span></span>
        </h1>
        <p className="mt-2 font-['Roboto',Arial,sans-serif] text-[#2eb2a4] text-[0.95rem] leading-normal">
          Trouver le bon ingrédient, c’est un peu comme chercher l’âme sœur : il faut ce petit “plus” qui fait la différence. 71 marques ont déjà trouvé le bon ingrédient avec Reggenerate™. Chacune pour une raison différente — sa qualité, son brevet, sa facilité d’usage —mais toutes pour la même évidence : c’était le bon, au bon moment.
        </p>
      </div>

      {/* Zoom – titre + sous-titre */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[1.7rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold leading-tight text-[#4e53a3]">
            Zoom sur les produits <span className="text-[#f3d86b]">pondus</span> par nos clients
          </h2>
          <p className="mt-2 text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] leading-relaxed text-[#2eb2a4]">
            On apporte l’œuf, et nos clients font éclore les plus belles innovations de demain.
          </p>
        </div>
      </section>

      {/* Stats – KPIs */}
      <section className="bg-[#eaf6f4] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "60+", l: "Marques partenaires" },
              { v: "71+", l: "Produits formulés" },
              { v: "15+", l: "Pays d’eggsport" },
              { v: "100%", l: "satisfaction client" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center justify-center py-2">
                <div className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[#4e53a3] text-[3rem] sm:text-[3.6rem] md:text-[4rem] lg:text-[4.5rem] font-extrabold leading-none">
                  {s.v}
                </div>
                <div className="mt-3 text-[#2eb2a4] text-[1.1rem] sm:text-[1.2rem] font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients map */}
      <section className="bg-white pt-16 pb-4">
        <div className="mx-auto max-w-[1400px] px-6 text-center flex flex-col justify-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[1.7rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold leading-tight text-[#2eb2a4]">
            En France mais aussi à l&apos;<span className="text-[#f3d86b]">Egg</span>sport ✈️
          </h2>
          <div className="mx-auto mt-6 w-full max-w-[800px]">
            <Image
              src="/images/clients-map.png"
              alt="Carte des clients en France et à l'international"
              width={600}
              height={400}
              sizes="(min-width: 1280px) 800px, (min-width: 768px) 75vw, 95vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Clients products */}
      <section className="bg-[#e8f6f4] pb-12 pt-16">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[280px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/collagène-articulaire.svg" alt="Coquille de j'oeufnesse" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Collagène articulaire
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Valebio</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : 60 gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Articulations</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + acide hyaluronique + curcuma vitamine C</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[280px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/collagène-veggie.svg" alt="Collagène végétarien" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Collagène végétarien
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Oemine</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Anti-âge & Articulation</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + Cynorrhodon</p>
                </div>

                <div className="mt-4 rounded-xl p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[280px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/cure-peau-repulpee.svg" alt="Cure peau repulpée" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Cure peau repulpée
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Epycure</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Beauté de la peau</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + Bourrache + Vitamine C + Sélénium + Vitamine E + Zinc + Biotine + Vitamine B6</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/hair-skin-nails.svg" alt="Hair Skin Nails" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Hair Skin Nails
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Nutrielement</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Beauté globale peau, cheveu & ongles</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + Kératine + Sélénium + Zinc + Vitamine C + Biotine + MSM</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/powder.png" alt="Poudre" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/collagène-veggie-2.svg" alt="Collagène végétarien" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Collagène végétarien
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">SIHO</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Poudre</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Peau & Articulations</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate™</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/kotor-collagène.svg" alt="Bosw’Egg" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Kotor Collagène               
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Kotor Pharma</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Peau & Articulations</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + siliium végétal + Vitamine C + glucosamine + chondroïtine + kératine</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/bars.png" alt="Barres" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/barre-collagène-matcha-choco.svg" alt="Barre Collagène Matcha Chocolat" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Barre Collagène Matcha Chocolat
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Supernature</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Barre</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Beauté de la peau</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/powder.png" alt="Poudre" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/chai-latte-collagène.svg" alt="Chaï Latte Collagène" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Chaï Latte Collagène
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Supernature</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Poudre</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Beauté de la peau</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 9 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/dermavits.svg" alt="Dermavits" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Dermavits
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Lepivits</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Poudre</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Beauté de la peau</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + Vitamine C + Vitamine E</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 10 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/membrane-coquille-curcuma.svg" alt="Membrane Coquille d'oeuf Curcuma" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Membrane Coquille d&apos;Oeuf Curcuma
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Curcumaxx</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Articulations</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + Curcuma</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 11 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/mouvement.svg" alt="Mouvement avec Collagène" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Mouvement 
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Byogénie</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Articulations</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + Collagène + Acide hyaluronique + Bambou + Curcuma + Saule + cuivre</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 12 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/soap.png" alt="Savon" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/gommage.png" alt="Gommage" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/collagène-scrub-soap.svg" alt="Collagen Scrub Soap Set" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  C’est la Chic(k) Collagen Scrub Soap Set
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Mouvement</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Gommage</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Beauté de la peau</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + Graines de lin + Romarin + Coquille de noix + Sel marin + Beurre de karité</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 13 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/drink.png" alt="Liquide" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/collagène-vinaigrette.svg" alt="Collagen Vinaigrett" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Collagen+ Vinaigrett
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Archie</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Vinaigrette</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Beauté de la peau</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate +</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 14 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/mouvement-collagène+.svg" alt="Mouvement Collagène +" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Mouvement
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Byogénie</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Peau & Articulations</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + Prêle + Vitamine C</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 15 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/capsules.png" alt="Comprimés" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/suivimine.svg" alt="Mouvement Collagène +" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Suivimine Arthro
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Therascience</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Comprimés</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Articulations</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Reggenerate + Boswellia + Glucosamine + Chondroïtine</p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>

            {/* Card 16 */}
            <div className="relative rounded-2xl border-2 border-[#2eb2a4] bg-white p-4 mt-6">
              {/* Badges icônes en haut à gauche */}
              <div className="absolute -top-[3.8rem] -left-4 z-10 flex items-center">
                {/* Wrapper dimensionné: augmente la taille en changeant size-16/20 */}
                <span className="relative size-24">
                  <Image src="/images/pill.png" alt="Gélules" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/skin-beauty.png" alt="Beauté de la peau" fill className="object-contain p-2" />
                </span>
                <span className="relative -ml-10 size-24">
                  <Image src="/images/knuckle.png" alt="Santé des articulations" fill className="object-contain p-2" />
                </span>
              </div>
              <div className="relative h-[240px] w-[85%] mx-auto overflow-hidden rounded-xl mt-2">
                <Image src="/images/silinovea.svg" alt="Silinovea du Laboratoire Motima" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-['League_Spartan',Arial,sans-serif] text-[1.25rem] font-extrabold text-[#4e53a3] text-center">
                  Laboratoire Motima
                </h3>
                <p className="mb-4 font-['Roboto',Arial,sans-serif] italic text-[#2eb2a4] text-center">Silinovea</p>

                <div className="space-y-1 font-['Roboto',Arial,sans-serif] text-[#2eb2a4]">
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Galénique</span> : Gélules</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Bienfaits</span> : Articulations & Peau</p>
                  <p className="m-0"><span className="font-semibold text-[#4e53a3]">Formulation</span> : Vitamine C + Bambou Tabashir + L-Tyrosine + Lithothamne (iode) + Reggenerate + Zinc + Vitamine B5 + Vitamine B6 + Vitamine B8 </p>
                </div>

                <div className="mt-4 p-3 text-center">
                  <button className="rounded-full bg-[#2eb2a4] px-5 py-2 font-['League_Spartan',Arial,sans-serif] font-bold text-white transition hover:underline decoration-white underline-offset-2 decoration-2">
                    Voir le produit 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        imageSrc="/images/circulegg-team.jpg"
        imageAlt="Circul'Egg – Équipe"
      />
      <Footer />
    </main>
  );
}

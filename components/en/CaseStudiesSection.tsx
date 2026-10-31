const caseStudies = [
  {
    title: "Joint Collagen",
    tag: "joints",
    tagClass: "bg-[#2eb2a4]",
    brand: "by Valebio",
    description:
      "Premium joint supplement with 300 mg of Reggenerate™ per dose (2 capsules), enriched with hyaluronic acid, turmeric and vitamin C.",
    characteristics: [
      "300 mg Reggenerate™",
      "75 mg Turmeric",
      "80 mg Vitamin C",
      "30 mg Hyaluronic Acid",
      "60 capsules",
    ],
    rating: "4.8/5",
    stars: "★★★★★",
    reviews: "57 reviews",
  },
  {
    title: "Plumped Skin Program",
    tag: "Skin Beauty",
    tagClass: "bg-[#f3763e]",
    brand: "by Epycure",
    description:
      "Premium beauty supplement with SuavyEgg™ (Reggenerate™ eggshell membrane + borage oil) and a vitamin & mineral complex for skin beauty.",
    characteristics: [
      "300 mg Reggenerate™",
      "43 mg Borage oil",
      "Vitamins & Minerals",
      "60 capsules",
    ],
    rating: "4.61/5",
    stars: "★★★★☆",
    reviews: "137 reviews",
    featured: true,
  },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center font-['League_Spartan','Roboto',Arial,sans-serif] text-[2.2rem] font-bold text-[#2eb2a4]">
          Finished Products with <span className="text-[#f3d86b]">EGG</span>cellent ratings
        </h2>
        <p className="mx-auto mb-12 mt-4 max-w-[800px] text-center text-[1.1rem] text-[#2eb2a4] opacity-90">
          So many eggceptional products on the market! Our ingredient transforms your products 😊
        </p>

        <div className="mx-auto mb-10 grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {caseStudies.map((product) => (
            <article
              key={product.title}
              className={`rounded-[12px] border border-[#dddddd] bg-[#e2f6f4] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${
                product.featured ? "bg-white" : ""
              }`}
            >
              <div className="flex flex-col gap-4">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-xl font-bold text-[#2eb2a4]">
                    {product.title}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-[6px] text-xs font-semibold uppercase text-white ${product.tagClass}`}
                  >
                    {product.tag}
                  </span>
                </header>

                <p className="text-sm font-medium text-[#2eb2a4]">{product.brand}</p>
                <p className="text-sm leading-relaxed text-[#374151]">{product.description}</p>

                <div className="space-y-3 rounded-[10px] bg-white/70 p-4">
                  <h4 className="font-semibold text-[#2eb2a4]">Key characteristics:</h4>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {product.characteristics.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-2 text-sm font-medium text-[#2eb2a4] shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <footer className="mt-2 flex items-center justify-between rounded-[10px] bg-white/80 px-4 py-3 text-[#2eb2a4]">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold">{product.rating}</span>
                    <span className="text-base leading-none">{product.stars}</span>
                  </div>
                  <span className="text-sm font-medium text-[#2eb2a4]">{product.reviews}</span>
                </footer>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/en/clients"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#2eb2a4] px-8 py-3 text-lg font-semibold text-white shadow-[0_6px_18px_rgba(46,178,164,0.24)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(46,178,164,0.3)]"
          >
            See the products where Reggenerate™ is the star &gt;
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const badges = [
  { src: "/images/25.png", alt: "ISO 22000" },
  { src: "/images/26.png", alt: "HACCP" },
  { src: "/images/27.png", alt: "Halal" },
  { src: "/images/28.png", alt: "Kosher" },
  { src: "/images/29.png", alt: "No Novel Food" },
];

export function QualityAssuranceSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 text-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-bold text-[#4e53a3]">
            Nos Garanties Qualité
          </h2>
        </div>

        <div
          className="mx-auto grid gap-8"
          style={{ maxWidth: "1200px", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))" }}
        >
          {badges.map((badge) => (
            <div key={badge.alt} className="text-center">
              <div className="mx-auto flex h-40 w-40 items-center justify-center">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={160}
                  height={160}
                  className="h-40 w-40 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

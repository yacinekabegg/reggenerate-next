"use client";

import Image from "next/image";

const logos = [
  "46.png",
  "45.png",
  "44.png",
  "43.png",
  "42.png",
  "41.png",
  "40.png",
  "39.png",
  "38.png",
  "37.png",
  "36.png",
  "35.png",
  "34.png",
  "33.png",
];

export function PressMentionsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="mb-8 text-center font-['League_Spartan','Roboto',Arial,sans-serif] text-3xl font-bold text-[#4e53a3]">
          Ils parlent de nous
        </h2>

        <div className="relative overflow-hidden">
          <div className="press-marquee flex gap-16">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex items-center gap-16">
                {logos.map((file) => (
                  <div
                    key={`${file}-${index}`}
                    className="flex h-[120px] w-[200px] items-center justify-center"
                  >
                    <Image
                      src={`/images/${file}`}
                      alt={file.replace(".png", "")}
                      width={200}
                      height={120}
                      className="h-[120px] w-auto object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .press-marquee {
            animation: press-scroll-left 28s linear infinite;
            will-change: transform;
          }
          @keyframes press-scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

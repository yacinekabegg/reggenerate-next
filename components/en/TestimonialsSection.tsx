"use client";

import Image from "next/image";

const testimonials = [
  {
    quote:
      "Thanks to the Reggenerate active ingredient, we were able to create a truly effective Skin product in gummy form. Its dose level fits perfectly into this dosage form, which allowed us to achieve an ideal texture and proven efficacy, with no compromise on taste!",
    name: "David Gueunoun",
    role: "Founder and CEO of Mium Lab",
    logo: "/images/mllogo.png",
  },
  {
    quote:
      "Working with Circul’Egg proved extremely smooth thanks to a highly responsive and committed team. Their ingredient, Reggenerate®, brings real added value in terms of wellness while remaining competitive. Their availability and their ability to support every stage of the project make Circul’Egg much more than a supplier: a trusted partner.",
    name: "Stéphane LEHNING",
    role: "President of Laboratoires Lehning",
    logo: "/images/lehninglogo.jpg",
  },
  {
    quote:
      "When we discovered the concept of egg collagen, we immediately loved the idea.\n\nBeyond the product, I must say the Circul’Egg team is simply lovely and available, and sharing common values was just as important to us.\n\nToday, our customers love our Oemine vegetarian collagen and, through their testimonials, we can see how much good it does them!",
    name: "Dr. Paul Dupont",
    role: "Founder of Oemine",
    logo: "/images/oemine-logo-xxl-min.png",
  },
  {
    quote:
      "Reggenerate has established itself as one of our flagship ingredients, both in our joint product and in our beauty product, which are already in our top 10 best sellers even though they were launched in 2025. It meets our customers’ expectations exactly: a solution that brings together the key molecules sought after in these segments, such as collagen and hyaluronic acid, while finally being available in a modern, pleasant dosage form.",
    name: "Louis-Benoit HUG",
    role: "CEO of Valébio",
    logo: "/images/logovalebio.jpeg",
  },
];

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-[#e8f4f2] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-extrabold text-[#4e53a3]">
          Our Clients: What They Say
        </h2>
        <p className="mx-auto mb-16 mt-6 max-w-[800px] text-center text-lg leading-relaxed text-[#2eb2a4]">
          Find out what our B2B partners say about our products
        </p>

        <div className="relative mt-10 overflow-hidden">
          <div className="testimonials-marquee flex gap-8">
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-8">
                {testimonials.map((testimonial) => (
                  <article
                    key={`${testimonial.name}-${loopIndex}`}
                    className="group relative w-[320px] flex-shrink-0 overflow-visible rounded-[20px] border-2 border-[#4e53a3] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] md:w-[360px]"
                  >
                    <span className="pointer-events-none absolute left-6 top-4 font-serif text-5xl leading-none text-[#d1d5db] opacity-70">
                      &quot;
                    </span>

                    <div className="mb-4 h-[60px] w-[150px] ml-auto">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.name} logo`}
                        width={150}
                        height={60}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="relative z-[2] mb-4 text-xs leading-relaxed text-[#374151] md:text-sm">
                      “{testimonial.quote}”
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-xs font-semibold text-[#374151] md:text-sm">
                        {testimonial.name}
                      </h4>
                      <span className="text-[11px] text-[#374151] md:text-xs">
                        {testimonial.role}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
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
            className="inline-flex items-center justify-center rounded-[10px] bg-[#4e53a3] px-8 py-3 text-lg font-semibold text-white shadow-[0_6px_18px_rgba(78,83,163,0.2)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(61,66,128,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4e53a3]"
          >
            Book a meeting &gt;
          </button>
        </div>

        <style jsx>{`
          .testimonials-marquee {
            animation: testimonials-scroll-left 35s linear infinite;
            will-change: transform;
          }
          .testimonials-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes testimonials-scroll-left {
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

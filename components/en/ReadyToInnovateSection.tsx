import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    icon: "/images/23.png",
    alt: "Free samples",
    title: "Free Samples",
    content: "Test Reggenerate™ in your formulations today",
    href: "#contact",
    cta: "Request a sample",
    emoji: "📦",
  },
  {
    icon: "/images/24.png",
    alt: "Dedicated expert",
    title: "Dedicated Expert",
    content: "Meet our technical team and talk with your dedicated point of contact",
    href: "#contact",
    cta: "Book a meeting",
    emoji: "📅",
  },
  {
    icon: "/images/15.png",
    alt: "Ready-to-market",
    title: "Ready-to-market",
    content: "Launch your product simply and quickly. We take care of everything!",
    href: "/en/ready-to-market",
    cta: "See the catalog",
    emoji: "🚀",
  },
];

export function ReadyToInnovateSection() {
  return (
    <section className="bg-[#2eb2a4] py-24 text-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <h2 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-4xl font-bold">
            Ready to revolutionize your products?
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Join the brands innovating with Reggenerate™ and capturing consumer trends.
          </p>
        </div>

        <div
          className="mx-auto grid gap-8"
          style={{ maxWidth: "1000px", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[16px] bg-white p-8 text-center text-[#2eb2a4] shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.15)]"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>

              <h3 className="mb-4 font-['League_Spartan','Roboto',Arial,sans-serif] text-xl font-bold">
                {card.title}
              </h3>
              <p className="mb-8 text-base leading-relaxed">{card.content}</p>

              {card.href === "#contact" ? (
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
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#2eb2a4] px-6 py-3 font-['League_Spartan','Roboto',Arial,sans-serif] text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                >
                  <span>{card.emoji}</span>
                  {card.cta}
                </button>
              ) : (
                <Link
                  href={card.href}
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#2eb2a4] px-6 py-3 font-['League_Spartan','Roboto',Arial,sans-serif] text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                >
                  <span>{card.emoji}</span>
                  {card.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

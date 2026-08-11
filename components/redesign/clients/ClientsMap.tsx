import Image from "next/image";
import { Highlight } from "../Highlight";

export function ClientsMap() {
  return (
    <section style={{ background: "var(--white)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 32px", textAlign: "center" }} data-reveal>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--fs-display-md)",
            lineHeight: 1.15,
            letterSpacing: "-.02em",
            color: "var(--ink)",
            margin: 0,
          }}
        >
          En France, mais aussi à l&apos;<Highlight>Eggsport</Highlight>.
        </h2>
        <div style={{ maxWidth: "800px", margin: "40px auto 0" }}>
          <Image
            src="/images/clients-map.png"
            alt="Carte des clients en France et à l'international"
            width={800}
            height={533}
            sizes="(min-width: 1280px) 800px, (min-width: 768px) 75vw, 95vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

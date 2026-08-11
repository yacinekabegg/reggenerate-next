import Image from "next/image";
import { Accent } from "./Accent";
import { IconCircle } from "./Icon";

const CONTACT_ITEMS = [
  { icon: "mail" as const, label: "Email", value: "yacine.kabeche@circulegg.fr", tone: "teal" as const },
  { icon: "phone" as const, label: "Téléphone", value: "+33 6 84 15 97 19", tone: "teal" as const },
  {
    icon: "target" as const,
    label: "Adresses",
    value: "Usine : 21 Rue Charles Lindbergh, 35150 Janzé — Bureau : 14 rue Soleillet, 75020 Paris",
    tone: "teal" as const,
  },
];

export function ContactSection({
  imageSrc = "/images/circulegg-team.jpg",
  imageAlt = "Circul'Egg — Équipe",
  bordered = true,
}: {
  imageSrc?: string;
  imageAlt?: string;
  bordered?: boolean;
}) {
  return (
    <section id="contact" style={{ background: "var(--cream)", borderTop: bordered ? "1px solid var(--line)" : "none" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 32px" }} data-reveal>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--fs-display-lg)",
            lineHeight: 1.1,
            letterSpacing: "-.02em",
            color: "var(--ink)",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "20ch",
          }}
        >
          Contactez notre équipe d&apos;<Accent>eggsperts</Accent>.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "var(--body-ink)", textAlign: "center", margin: "14px auto 0", maxWidth: "42em" }}>
          Dossier d&apos;études cliniques, échantillon, dossier qualité, dossier ready-to-market — utilisez le
          formulaire ou nos contacts directs.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,.9fr)", gap: "32px", marginTop: "48px" }}>
          <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: "16px", boxShadow: "var(--shadow-card)", padding: "28px" }}>
            <iframe
              src="https://tally.so/embed/3lxroW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height={820}
              style={{ border: "none" }}
              title="Formulaire de contact"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: "16px", boxShadow: "var(--shadow-card)", padding: "28px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "20px", color: "var(--ink)", margin: 0 }}>
                Yacine Kabeche — CEO
              </h3>
              <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                <Image
                  src="/images/circulegg-ceo.png"
                  alt="Yacine Kabeche - CEO Circul'Egg"
                  width={300}
                  height={300}
                  style={{ width: "220px", height: "auto", objectFit: "contain" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {CONTACT_ITEMS.map((c) => (
                  <div key={c.label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <IconCircle name={c.icon} tone={c.tone} size={36} iconSize={16} />
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", margin: 0 }}>
                        {c.label}
                      </p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--body-ink)", margin: "3px 0 0" }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "20px", padding: "16px", borderRadius: "12px", background: "var(--cream)" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.5, color: "var(--body-ink)", margin: 0 }}>
                  <span style={{ fontWeight: 700, color: "var(--ink)" }}>Délai de réponse :</span> notre équipe vous
                  répond sous 48h ouvrées, sinon on vous doit un cadeau.
                </p>
              </div>
            </div>

            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "16px", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
              <Image src={imageSrc} alt={imageAlt} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

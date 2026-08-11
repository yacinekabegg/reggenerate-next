import { Highlight } from "../Highlight";
import { IconCircle } from "../Icon";

const FACTS = [
  { icon: "flask" as const, title: "300 mg", body: "Dose journalière" },
  { icon: "droplet" as const, title: "Goût neutre", body: "Facilement masquable" },
  { icon: "shield" as const, title: "Prouvé & breveté", body: "Études cliniques disponibles" },
  { icon: "recycle" as const, title: "Upcyclé", body: "Clean label, biosourcé" },
  { icon: "package" as const, title: "6 galéniques", body: "Gélule, poudre, gummy, boisson…" },
];

export function IngredientHero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--cream)" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-10%",
          top: "-14%",
          width: "46%",
          height: "60%",
          borderRadius: "var(--egg-radius)",
          background: "var(--teal)",
          opacity: 0.1,
          transform: "rotate(-8deg)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "clamp(140px,16vw,180px) 32px 72px" }} data-reveal>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--fs-display-xl)",
            lineHeight: 1.02,
            letterSpacing: "-.02em",
            color: "var(--ink)",
            margin: 0,
            maxWidth: "16ch",
          }}
        >
          Reggenerate<sup style={{ fontSize: "0.5em" }}>®</sup>, et <Highlight>tout ce qui va avec</Highlight>.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--fs-lede)",
            fontWeight: 500,
            lineHeight: 1.55,
            color: "var(--ink)",
            margin: "24px 0 0",
            maxWidth: "38em",
          }}
        >
          Une membrane de coquille d&apos;œuf brevetée, naturellement riche en collagène, acide hyaluronique et
          élastine — obtenue par un procédé 100% mécanique, sans solvant.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            lineHeight: 1.6,
            color: "var(--body-ink)",
            margin: "14px 0 0",
            maxWidth: "42em",
          }}
        >
          Elle conserve ses qualités natives, sans ajout de produits chimiques, et valorise un coproduit des
          casseries françaises que personne ne transformait jusque-là.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "1px",
            background: "var(--line)",
            marginTop: "56px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {FACTS.map((f) => (
            <div key={f.title} style={{ background: "var(--white)", padding: "26px 22px" }}>
              <IconCircle name={f.icon} tone="teal" size={40} />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "var(--ink)",
                  margin: "14px 0 0",
                }}
              >
                {f.title}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--muted)", margin: "4px 0 0" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

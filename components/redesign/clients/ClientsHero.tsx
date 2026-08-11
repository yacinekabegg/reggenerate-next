import { Highlight } from "../Highlight";
import { CountUp } from "../CountUp";

const STATS = [
  { value: "60+", label: "Marques partenaires" },
  { value: "71+", label: "Produits formulés" },
  { value: "15+", label: "Pays d'eggsport" },
  { value: "100%", label: "Satisfaction client" },
];

export function ClientsHero() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--cream)" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-10%",
            top: "-12%",
            width: "48%",
            height: "60%",
            borderRadius: "var(--egg-radius)",
            background: "var(--teal)",
            opacity: 0.1,
            transform: "rotate(-6deg)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "clamp(140px,16vw,180px) 32px 72px", textAlign: "center" }} data-reveal>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--fs-display-xl)",
              lineHeight: 1.04,
              letterSpacing: "-.02em",
              color: "var(--ink)",
              margin: "0 auto",
              maxWidth: "20ch",
            }}
          >
            Nos clients <Highlight>EGGceptionnels</Highlight>.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--fs-lede)",
              lineHeight: 1.6,
              color: "var(--body-ink)",
              margin: "22px auto 0",
              maxWidth: "48em",
            }}
          >
            Trouver le bon ingrédient, c&apos;est un peu comme chercher l&apos;âme sœur : il faut ce petit
            &laquo;&nbsp;plus&nbsp;&raquo; qui fait la différence.{" "}
            <span style={{ fontWeight: 700, color: "var(--ink)" }}>71 marques</span> ont déjà
            trouvé le bon ingrédient avec Reggenerate® — chacune pour une raison différente, mais toutes pour la même
            évidence : c&apos;était le bon, au bon moment.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }} data-reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="clin-band">
            {STATS.map((s, i) => (
              <div key={s.label} style={{ textAlign: "center", padding: "0 16px", borderLeft: i > 0 ? "1px solid var(--line)" : undefined }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(40px,4.6vw,56px)",
                    lineHeight: 1,
                    letterSpacing: "-.02em",
                    color: "var(--teal-dark)",
                    margin: 0,
                  }}
                >
                  <CountUp value={s.value} />
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600, color: "var(--body-ink)", margin: "10px 0 0" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

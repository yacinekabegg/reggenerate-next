import { IconCircle } from "../Icon";

const STRIP_COLORS = ["var(--teal)", "var(--orange)", "var(--gold)"] as const;
const STRIP_TONES = ["teal", "orange", "gold"] as const;

const COMMITMENTS = [
  {
    icon: "recycle" as const,
    title: "Empreinte carbone diminuée",
    body: "5 fois plus faible que celle du collagène marin. 10 fois plus faible que celle du collagène bovin.",
  },
  {
    icon: "target" as const,
    title: "Traçabilité complète",
    body: "Suivi de lot de l'élevage au produit fini. Certificats d'analyse fournis pour chaque batch.",
  },
  {
    icon: "leaf" as const,
    title: "Démarche RSE",
    body: "Une entreprise à mission, locale et 100% électrique, qui valorise éleveurs et casseries.",
  },
];

const STEPS = [
  { n: "01", title: "5 casseries françaises", body: "80% du gisement industriel du pays, identifiées et auditées." },
  { n: "02", title: "Usine de Janzé", body: "Séparation mécanique de la membrane. Sans solvant, sans hydrolyse." },
  { n: "03", title: "Reggenerate®", body: "Poudre stable, traçable lot par lot, prête à formuler." },
];

export function Sourcing() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
        {COMMITMENTS.map((c, i) => (
          <div
            key={c.title}
            className="hover-lift"
            style={{
              display: "flex",
              flexDirection: "column",
              background: "var(--white)",
              border: "1px solid var(--line)",
              borderTop: `8px solid ${STRIP_COLORS[i % 3]}`,
              borderRadius: "16px",
              boxShadow: "var(--shadow-card)",
              padding: "30px 26px",
            }}
          >
            <IconCircle name={c.icon} tone={STRIP_TONES[i % 3]} size={48} />
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "19px", color: "var(--ink)", margin: "18px 0 0" }}>
              {c.title}
            </h4>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.55, color: "var(--body-ink)", margin: "10px 0 0" }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "56px", paddingTop: "48px", borderTop: "1px solid var(--line)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "22px", color: "var(--ink)", margin: "0 0 28px", textAlign: "center" }}>
          De la coquille à la poudre.
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "24px" }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "30px", color: "var(--teal)" }}>{s.n}</span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "17px", color: "var(--ink)", margin: "10px 0 0" }}>{s.title}</h4>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", lineHeight: 1.5, color: "var(--body-ink)", margin: "8px 0 0" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

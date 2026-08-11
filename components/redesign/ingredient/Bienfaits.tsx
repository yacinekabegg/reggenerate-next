import { IconCircle } from "../Icon";

const PEAU = [
  { pct: "78%", text: "des femmes ont constaté une amélioration de la fermeté de leur peau et un teint plus lumineux dès 2 mois de cure." },
  { pct: "76%", text: "des femmes ont constaté une amélioration de l'élasticité de leur peau dès 2 mois de cure." },
  { pct: "71%", text: "des femmes ont constaté une peau mieux hydratée dès le 1er mois." },
  { pct: "60%", text: "des femmes ont constaté une peau plus souple dès le 1er mois." },
];

const ARTICULATIONS = [
  { sign: "−51,9%", text: "de douleur en 30 jours", ref: "Gil-Quintana et al., 2018" },
  { sign: "+48%", text: "d'amélioration de la fonction articulaire en 30 jours, avec des résultats dès le 3ᵉ jour", ref: "Gil-Quintana et al., 2018" },
  { sign: "−35%", text: "de raideur articulaire en 30 jours, avec des effets dès le 10ᵉ jour", ref: "Eskiyurt N et al., 2019" },
  { sign: "+56,3%", text: "d'amélioration de la récupération sportive", ref: "Ruff KJ et al., 2018" },
];

function BienfaitCol({
  eyebrow,
  title,
  children,
  tone,
  icon,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tone: "teal" | "orange";
  icon: "sparkles" | "shield";
}) {
  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--line)",
        borderTop: `8px solid ${tone === "teal" ? "var(--teal)" : "var(--orange)"}`,
        borderRadius: "16px",
        boxShadow: "var(--shadow-card)",
        padding: "32px 30px",
      }}
    >
      <IconCircle name={icon} tone={tone} size={44} />
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: tone === "teal" ? "var(--teal-deep)" : "var(--orange-deep)",
          margin: "18px 0 0",
        }}
      >
        {eyebrow}
      </p>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "26px", lineHeight: 1.1, color: "var(--ink)", margin: "10px 0 0" }}>
        {title}
      </h3>
      <div style={{ marginTop: "22px" }}>{children}</div>
    </div>
  );
}

export function Bienfaits() {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "44px" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--fs-display-md)",
            lineHeight: 1.15,
            letterSpacing: "-.015em",
            color: "var(--ink)",
            margin: 0,
          }}
        >
          Des bienfaits décuplés, sur deux territoires.
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "var(--body-ink)", margin: "14px auto 0", maxWidth: "42em" }}>
          Une seule membrane, deux terrains d&apos;action documentés. Les chiffres ci-dessous viennent d&apos;études
          consommateur et cliniques distinctes.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "24px" }}>
        <BienfaitCol eyebrow="Peau" title="Fermeté, éclat, hydratation" tone="teal" icon="sparkles">
          {PEAU.map((row, i) => (
            <div
              key={row.pct}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "16px",
                padding: "16px 0",
                borderTop: i === 0 ? undefined : "1px solid var(--line)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: 1,
                  color: "var(--teal-dark)",
                  flex: "none",
                  minWidth: "3.2em",
                }}
              >
                {row.pct}
              </span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14.5px", lineHeight: 1.5, color: "var(--body-ink)", margin: 0 }}>{row.text}</p>
            </div>
          ))}
          <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontStyle: "italic", color: "var(--muted)", margin: "14px 0 0" }}>
            *Étude consommateur Circul&apos;Egg 2024.
          </p>
        </BienfaitCol>

        <BienfaitCol eyebrow="Articulations" title="Douleur, raideur, récupération" tone="orange" icon="shield">
          {ARTICULATIONS.map((row, i) => (
            <div
              key={row.sign}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "16px",
                padding: "16px 0",
                borderTop: i === 0 ? undefined : "1px solid var(--line)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "22px",
                  lineHeight: 1,
                  color: "var(--orange-deep)",
                  flex: "none",
                  minWidth: "4.6em",
                }}
              >
                {row.sign}
              </span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14.5px", lineHeight: 1.5, color: "var(--body-ink)", margin: 0 }}>
                {row.text} <span style={{ fontStyle: "italic", color: "var(--muted)" }}>({row.ref})</span>
              </p>
            </div>
          ))}
        </BienfaitCol>
      </div>
    </div>
  );
}

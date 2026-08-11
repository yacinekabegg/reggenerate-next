import { Button } from "../Button";
import { CountUp } from "../CountUp";

const TAGS = ["Efficacité", "Assimilation", "Sécurité"];

const STUDY_GROUPS = [
  { count: 2, label: "Études propriétaires", items: ["1 étude consommateur sur la beauté de la peau", "1 étude ex-vivo sur explant de peau"] },
  { count: 3, label: "Études in vitro", items: ["2 sur l'effet anti-inflammatoire et anti-oxydant", "1 sur l'efficacité anti-âge"] },
  { count: 3, label: "Études in vivo", items: ["1 sur la digestibilité et l'assimilation", "1 sur l'efficacité anti-âge", "1 sur la toxicité"] },
  { count: 8, label: "Études cliniques", items: ["3 sur la beauté de la peau", "5 sur les articulations"] },
];

export function Science() {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--fs-display-md)",
            lineHeight: 1.1,
            letterSpacing: "-.02em",
            color: "var(--ink)",
            margin: 0,
          }}
        >
          16 études scientifiques
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "var(--body-ink)", margin: "12px 0 0" }}>
          Démontrent la <span style={{ fontWeight: 600, color: "var(--ink)" }}>performance unique</span> de la membrane
          de coquille d&apos;œuf.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
          {TAGS.map((t) => (
            <span
              key={t}
              style={{
                display: "inline-flex",
                padding: "7px 16px",
                borderRadius: "999px",
                background: "var(--white)",
                border: "1.5px solid var(--teal)",
                color: "var(--teal-deep)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "13px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", marginTop: "44px" }}>
        {STUDY_GROUPS.map((g, i) => (
          <div key={g.label} style={{ padding: "28px 24px", borderLeft: i > 0 ? "1px solid var(--line)" : undefined }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(34px,3.4vw,44px)", lineHeight: 1, color: "var(--teal-dark)" }}>
              <CountUp value={String(g.count)} />
            </span>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", margin: "12px 0 10px" }}>
              {g.label}
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
              {g.items.map((it) => (
                <li key={it} style={{ fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.45, color: "var(--body-ink)" }}>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "48px" }}>
        <Button variant="secondary" chevron>
          Recevoir les études complètes
        </Button>
      </div>
    </div>
  );
}

const SEGMENTS = [
  { label: "Élastine", value: 25, color: "var(--teal)" },
  { label: "Collagène", value: 22, color: "var(--orange)" },
  { label: "GAGs*", value: 4, color: "var(--teal-dark)" },
  { label: "Acide hyaluronique", value: 3, color: "var(--teal-deep)" },
  { label: "Glucosamine", value: 2, color: "var(--orange-deep)" },
];

const REMAINDER = 100 - SEGMENTS.reduce((sum, s) => sum + s.value, 0);

export function Composition() {
  return (
    <section style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 32px" }} data-reveal>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)", gap: "56px", alignItems: "start" }}>
          <div>
            <h2
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
              Une seule matière. Une matrice complète.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.65, color: "var(--body-ink)", margin: "18px 0 0", maxWidth: "34em" }}>
              La membrane d&apos;œuf n&apos;isole pas une molécule : elle les livre ensemble, dans leur proportion
              naturelle. Ce qui suit n&apos;est pas une recette, c&apos;est une photographie de ce qu&apos;il y a
              dedans.
            </p>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                height: "64px",
                borderRadius: "999px",
                overflow: "hidden",
                boxShadow: "var(--shadow-card)",
              }}
              role="img"
              aria-label="Répartition des biomolécules de la membrane d'œuf"
            >
              {SEGMENTS.map((s) => (
                <div
                  key={s.label}
                  style={{ width: `${s.value}%`, background: s.color }}
                  title={`${s.label} — ${s.value}%`}
                />
              ))}
              <div style={{ width: `${REMAINDER}%`, background: "var(--line)" }} title={`Autres biomolécules — ${REMAINDER}%`} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "14px 20px", marginTop: "28px" }}>
              {SEGMENTS.map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: "9px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "3px", background: s.color, flex: "none" }} />
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "17px", color: "var(--ink)" }}>{s.value}%</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--body-ink)" }}>{s.label}</span>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "baseline", gap: "9px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "3px", background: "var(--line)", flex: "none" }} />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "17px", color: "var(--ink)" }}>{REMAINDER}%</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--body-ink)" }}>+ 400 autres biomolécules</span>
              </div>
            </div>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontStyle: "italic", lineHeight: 1.5, color: "var(--muted)", margin: "22px 0 0" }}>
              *Glucosaminoglycanes sulfatés : chondroïtine, dermatane sulfate, kératane sulfatée. Méthode de dosage
              validée et certifiée par l&apos;Université Bretagne Sud (UBS).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

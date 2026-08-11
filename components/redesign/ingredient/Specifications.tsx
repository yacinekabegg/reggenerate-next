const ACTIVES = [
  { label: "Protéines", method: "Kjeldahl", value: "≥ 80%" },
  { label: "Collagène", method: "Colorimétrie", value: "≥ 22%" },
  { label: "Élastine", method: "Colorimétrie", value: "≥ 25%" },
  { label: "GAGs totaux", method: "USP26", value: "≥ 5%" },
  { label: "Dont acide hyaluronique", method: "HPLC-ECD", value: "≥ 3%" },
];

const PHYSICO = [
  { label: "Apparence", value: "Blanc cassé — CIE L*a*b* 91/1/12,5" },
  { label: "Goût", value: "Neutre" },
  { label: "Granulométrie D50", value: "180 µm ± 20 µm ou < 100 µm" },
  { label: "Granulométrie D90", value: "420 µm ± 20 µm ou < 250 µm" },
  { label: "Densité non tapée", value: "> 0,32 g/cm³" },
  { label: "Densité tapée", value: "> 0,4 g/cm³" },
  { label: "Aw", value: "< 0,4" },
  { label: "pH", value: "8,1" },
];

function SpecTable({ title, rows, note }: { title: string; rows: { label: string; method?: string; value: string }[]; note?: string }) {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--teal-deep)", margin: "0 0 4px" }}>
        {title}
      </p>
      <div style={{ borderTop: "2px solid #C9C4B4" }}>
        {rows.map((r, i) => (
          <div
            key={r.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              padding: "14px 0",
              borderTop: i === 0 ? undefined : "1px solid var(--line)",
            }}
          >
            <span style={{ fontFamily: "var(--font-body)", fontSize: "14.5px", color: "var(--ink)" }}>
              {r.label}
              {r.method && <span style={{ color: "var(--muted)" }}> · {r.method}</span>}
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "14.5px", color: "var(--teal-dark)", whiteSpace: "nowrap" }}>
              {r.value}
            </span>
          </div>
        ))}
      </div>
      {note && (
        <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontStyle: "italic", color: "var(--muted)", margin: "14px 0 0" }}>{note}</p>
      )}
    </div>
  );
}

export function Specifications() {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.65, color: "var(--body-ink)", margin: "0 0 40px", maxWidth: "52em" }}>
        Protéine en poudre naturelle et biosourcée, élaborée à partir de coquilles d&apos;œufs, pour une application
        nutraceutique à une dose journalière de 300 mg.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "48px" }}>
        <SpecTable
          title="Éléments actifs"
          rows={ACTIVES}
          note="Toutes les mesures sont réalisées par un organisme tiers accrédité COFRAC ou un partenaire universitaire. GAGs : chondroïtine sulfate, kératane sulfate, dermatane sulfate, héparane sulfate."
        />
        <SpecTable title="Propriétés physico-chimiques" rows={PHYSICO} note="Mesures indicatives selon lots ; valeurs cibles disponibles sur demande." />
      </div>
    </div>
  );
}

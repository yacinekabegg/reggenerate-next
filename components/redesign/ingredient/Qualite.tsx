import { Button } from "../Button";

const CERTS = [
  { file: "iso-22000.png", alt: "ISO 22000" },
  { file: "haccp.png", alt: "HACCP" },
  { file: "halal.png", alt: "Halal" },
  { file: "kosher.png", alt: "Kosher" },
  { file: "no-novel-food.png", alt: "No Novel Food" },
];

const CTAS = ["Fiche technique", "Certificats d'analyse", "Certifications"];

export function Qualite() {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--teal-deep)", margin: "0 0 20px", textAlign: "center" }}>
        Certifications & conformités
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {CERTS.map((c) => (
          <div
            key={c.file}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "100px",
              background: "var(--white)",
              border: "1px solid var(--line)",
              borderRadius: "16px",
              boxShadow: "var(--shadow-card)",
              padding: "16px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/redesign/assets/certifications/${c.file}`} alt={c.alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
          </div>
        ))}
      </div>

      <div style={{ maxWidth: "720px", margin: "48px auto 0", textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "22px", color: "var(--ink)", margin: 0 }}>
          Statut réglementaire
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.65, color: "var(--body-ink)", margin: "14px 0 0" }}>
          Nos produits sont conformes au règlement (CE) n°853/2004 (ovoproduits) et ne sont pas soumis au statut
          Novel Food (UE n°2015/2283). Norme HACCP, agrément sanitaire.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", marginTop: "36px" }}>
        {CTAS.map((c) => (
          <Button key={c} variant="ghost">
            {c}
          </Button>
        ))}
      </div>
    </div>
  );
}

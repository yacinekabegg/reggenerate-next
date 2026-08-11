import { Button } from "../Button";
import { Highlight } from "../Highlight";
import { CountUp } from "../CountUp";

const STAT_BAND = [
  { label: "Études cliniques", value: "6", suffix: "" },
  { label: "De recherche", value: "20", suffix: "ans" },
  { label: "Participants", value: "465", suffix: "" },
];

type Row = { n: number; criteria: string; result: string; protocol: string; n_val: number; duration: string };

const PEAU_ROWS: Row[] = [
  { n: 1, criteria: "Inconfort cutané", result: "−79 %", protocol: "Test consommateur", n_val: 60, duration: "60 j" },
  { n: 2, criteria: "Fermeté cutanée", result: "+51 %", protocol: "Randomisée, double aveugle", n_val: 50, duration: "60 j" },
  { n: 3, criteria: "Densité capillaire", result: "+21,1 %", protocol: "Randomisée, double aveugle", n_val: 68, duration: "12 sem" },
];

const ARTICULATIONS_ROWS: Row[] = [
  { n: 4, criteria: "Douleur à 30 jours", result: "−33 %", protocol: "Randomisée, double aveugle", n_val: 160, duration: "90 j" },
  { n: 5, criteria: "Raideur articulaire", result: "−26,6 %", protocol: "Randomisée, double aveugle", n_val: 67, duration: "8 sem" },
  { n: 6, criteria: "Douleur à 2 semaines", result: "−38,1 %", protocol: "Randomisée, double aveugle", n_val: 60, duration: "2 sem" },
];

const FOOTNOTES = [
  {
    text: "78 % fermeté · 78 % éclat · 76 % élasticité · 76 % peau douce · 71 % hydratation · 60 % souplesse",
    note: "Résultats déclaratifs. C'est ce que les gens ressentent, pas ce qu'un appareil a mesuré. Nous l'écrivons parce que c'est exactement ce qui vend le deuxième flacon.",
  },
  {
    text: "−19 % perte insensible en eau · +25 % élasticité · −33 % fatigue cutanée",
    note: "Mesuré à l'instrument. Pas au questionnaire.",
  },
  {
    text: "−6,3 pts rides patte d'oie · cheveux et ongles renforcés",
    note: "Une matière, trois revendications. Un seul fournisseur à auditer.",
  },
  {
    text: "dès J+7 : douleur −22 %, raideur −24 % · à J+30 : raideur −35 %",
    note: "Le plus gros effectif de la série. Et le premier effet arrive avant que le flacon soit à moitié vide : pour une gamme articulaire, c'est exactement là que se joue le réachat.",
  },
  {
    text: "douleur −15,4 % · premiers effets à 10 jours",
    note: "Deux protocoles, deux équipes, la même direction.",
  },
  {
    text: "−9 % dégradation du cartilage dès 1 semaine · −18,5 % raideur · +56,3 % récupération vs placebo",
    note: "Soulager, c'est une chose. Agir sur le cartilage, c'en est une autre.",
  },
];

const REFERENCES = [
  "Test consommateur, résultats déclaratifs, 60 sujets, 60 jours.",
  "Étude clinique randomisée en double aveugle contre placebo, 50 sujets, 60 jours.",
  "Étude clinique randomisée en double aveugle contre placebo, 68 sujets, 12 semaines.",
  "Étude clinique randomisée en double aveugle contre placebo, 160 sujets, 90 jours.",
  "Étude clinique randomisée en double aveugle contre placebo, 67 sujets, 8 semaines.",
  "Étude clinique randomisée en double aveugle contre placebo, 60 sujets, 2 semaines.",
];

function Row({ row }: { row: Row }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "28px 1fr 108px 200px 52px 78px",
        alignItems: "center",
        gap: "20px",
        padding: "12px 0",
        borderTop: "1px solid var(--line)",
      }}
    >
      <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--muted)" }}>{row.n}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--ink)" }}>{row.criteria}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 500, color: "var(--teal-dark)", textAlign: "right" }}>
        {row.result}
      </span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--body-ink)" }}>{row.protocol}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--body-ink)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
        {row.n_val}
      </span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--body-ink)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
        {row.duration}
      </span>
    </div>
  );
}

export function Preuves() {
  return (
    <>
      <section style={{ position: "relative", background: "var(--white)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "104px 32px 40px" }} data-reveal>
          <span style={{ display: "block", width: "24px", height: "3px", background: "var(--orange)", margin: "0 0 28px" }} />

          <div className="clin-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "var(--fs-display-lg)",
                  lineHeight: 1,
                  letterSpacing: "-.02em",
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                Vingt ans de recherche clinique sur la membrane d&apos;œuf.
                <br />
                <Highlight>Une seule extraite en France.</Highlight>
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.65, color: "var(--body-ink)", margin: 0, maxWidth: "62ch" }}>
                La membrane de coquille d&apos;œuf n&apos;est pas une hypothèse marketing. Elle est étudiée depuis
                plus de vingt ans : sur la peau, les cheveux, les ongles et les articulations.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.55, color: "var(--ink)", margin: "22px 0 0", maxWidth: "62ch" }}>
                <span style={{ fontWeight: 600 }}>Reggenerate®, c&apos;est cette membrane.</span>{" "}
                <span style={{ color: "var(--body-ink)" }}>
                  Extraite en France, à partir de coquilles françaises, à partir d&apos;un coproduit que personne ne
                  valorisait.
                </span>
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.65, color: "var(--body-ink)", margin: "22px 0 0", maxWidth: "62ch" }}>
                Ci-dessous : les données cliniques sur l&apos;ingrédient. Protocole, effectif, durée, tout est
                visible.
              </p>
            </div>
          </div>

          <div
            className="clin-band"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              borderTop: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
              marginTop: "40px",
            }}
          >
            {STAT_BAND.map((s) => (
              <div key={s.label} style={{ padding: "28px 32px", borderLeft: "1px solid var(--line)" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    margin: "0 0 16px",
                  }}
                >
                  {s.label}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "38px", lineHeight: 1, letterSpacing: "-.02em", color: "var(--teal-dark)" }}>
                    <CountUp value={s.value} />
                  </span>
                  {s.suffix && (
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "18px", color: "var(--teal-dark)" }}>
                      {s.suffix}
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div style={{ padding: "28px 32px", borderLeft: "1px solid var(--line)" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  margin: "0 0 16px",
                }}
              >
                Randomisées, double aveugle
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "38px", lineHeight: 1, letterSpacing: "-.02em", color: "var(--teal-dark)" }}>
                    5
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "18px", color: "var(--teal-dark)" }}>/6</span>
                </div>
                <div style={{ display: "flex", gap: "3px", alignSelf: "center" }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} style={{ width: "7px", height: "7px", background: "var(--teal-dark)" }} />
                  ))}
                  <span style={{ width: "7px", height: "7px", border: "1px solid var(--teal-dark)" }} />
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "112px" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "var(--fs-display-md)",
                lineHeight: 1.1,
                letterSpacing: "-.015em",
                color: "var(--ink)",
                textAlign: "center",
                margin: 0,
              }}
            >
              Une matière. Trois territoires.
            </h3>
            <div style={{ maxWidth: "780px", margin: "36px auto 0" }}>
              <svg viewBox="0 0 820 560" width="100%" role="img" aria-labelledby="venn-t venn-d" style={{ display: "block", overflow: "visible" }}>
                <title id="venn-t">Trois territoires d&apos;application de la membrane d&apos;œuf</title>
                <desc id="venn-d">
                  Trois cercles qui se recouvrent — peau, articulations, cheveux et ongles — partagent une seule
                  matière première au centre : la membrane.
                </desc>
                <circle cx="340" cy="180" r="150" fill="#2EB2A4" fillOpacity=".18" />
                <circle cx="250" cy="330" r="150" fill="#F19A2A" fillOpacity=".18" />
                <circle cx="430" cy="330" r="150" fill="#E1C23C" fillOpacity=".26" />
                <line x1="378" y1="300" x2="628" y2="446" stroke="#8A8F8D" strokeWidth="1" />
                <circle cx="340" cy="280" r="47" fill="#1F8E83" />
                <text x="340" y="276" textAnchor="middle" fontFamily="var(--font-body)" fontWeight="700" fontSize="11" letterSpacing="1" fill="#fff">
                  LA
                </text>
                <text x="340" y="290" textAnchor="middle" fontFamily="var(--font-body)" fontWeight="700" fontSize="11" letterSpacing="1" fill="#fff">
                  MEMBRANE
                </text>
                <text x="340" y="108" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="24" letterSpacing="-.01em" fill="#1B1F1E">
                  Peau
                </text>
                <text x="340" y="136" textAnchor="middle" fontFamily="var(--font-body)" fontSize="14.5" fill="#4D5453">
                  Fermeté, élasticité,
                </text>
                <text x="340" y="156" textAnchor="middle" fontFamily="var(--font-body)" fontSize="14.5" fill="#4D5453">
                  hydratation, rides
                </text>
                <text x="200" y="368" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="22" letterSpacing="-.01em" fill="#1B1F1E">
                  Articulations
                </text>
                <text x="200" y="394" textAnchor="middle" fontFamily="var(--font-body)" fontSize="14.5" fill="#4D5453">
                  Douleur, raideur,
                </text>
                <text x="200" y="414" textAnchor="middle" fontFamily="var(--font-body)" fontSize="14.5" fill="#4D5453">
                  cartilage
                </text>
                <text x="465" y="368" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="22" letterSpacing="-.01em" fill="#1B1F1E">
                  Cheveux &amp; ongles
                </text>
                <text x="465" y="394" textAnchor="middle" fontFamily="var(--font-body)" fontSize="14.5" fill="#4D5453">
                  Densité capillaire,
                </text>
                <text x="465" y="414" textAnchor="middle" fontFamily="var(--font-body)" fontSize="14.5" fill="#4D5453">
                  renforcement
                </text>
                <text x="636" y="436" fontFamily="var(--font-body)" fontSize="14" fill="#4D5453">
                  Une seule matière première
                </text>
                <text x="636" y="456" fontFamily="var(--font-body)" fontSize="14" fill="#4D5453">
                  à sourcer, qualifier
                </text>
                <text x="636" y="476" fontFamily="var(--font-body)" fontSize="14" fill="#4D5453">
                  et stocker
                </text>
              </svg>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontStyle: "italic", color: "var(--body-ink)", textAlign: "center", margin: "32px 0 0" }}>
              Trois gammes. Une seule ligne de commande.
            </p>
          </div>

          <div style={{ marginTop: "96px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "28px 1fr 108px 200px 52px 78px",
                alignItems: "end",
                gap: "20px",
                padding: "0 0 12px",
                borderBottom: "2px solid #C9C4B4",
              }}
            >
              <span />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>
                Critère
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", textAlign: "right" }}>
                Résultat
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>
                Protocole
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", textAlign: "right" }}>
                n
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", textAlign: "right" }}>
                Durée
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 0 10px" }}>
              <span style={{ width: "22px", height: "2px", background: "var(--teal)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink)" }}>
                Peau
              </span>
            </div>
            {PEAU_ROWS.map((r) => (
              <Row key={r.n} row={r} />
            ))}

            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "24px 0 10px", borderTop: "1px solid var(--line)" }}>
              <span style={{ width: "22px", height: "2px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink)" }}>
                Articulations
              </span>
            </div>
            {ARTICULATIONS_ROWS.map((r) => (
              <Row key={r.n} row={r} />
            ))}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "28px 1fr 108px 200px 52px 78px",
                alignItems: "center",
                gap: "20px",
                padding: "16px 0",
                borderTop: "1px solid var(--line)",
                borderBottom: "2px solid #C9C4B4",
              }}
            >
              <span />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>
                Total participants
              </span>
              <span />
              <span />
              <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "var(--ink)", textAlign: "right", gridColumn: "5 / 7", fontVariantNumeric: "tabular-nums" }}>
                465
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 48px", marginTop: "36px" }}>
              {FOOTNOTES.map((f, i) => (
                <div key={i}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", lineHeight: 1.6, color: "var(--body-ink)", margin: 0 }}>
                    <span style={{ color: "var(--muted)" }}>({i + 1})</span> {f.text}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontStyle: "italic", lineHeight: 1.6, color: "var(--ink)", margin: "8px 0 0" }}>
                    <span style={{ fontWeight: 500 }}>{f.note.split(".")[0]}.</span> {f.note.split(".").slice(1).join(".").trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 96px" }}>
          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(24px,2.6vw,30px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Les 6 études, en entier.
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "var(--body-ink)", margin: "16px auto 0", maxWidth: "34em" }}>
              Protocoles complets, effectifs, références bibliographiques. Votre e-mail suffit.
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "28px" }}>
              <Button variant="secondary" chevron>
                Recevoir les études
              </Button>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontStyle: "italic", color: "var(--muted)", lineHeight: 1.6, margin: "24px auto 0", maxWidth: "40em" }}>
              P.S. : si vous préférez en parler plutôt que lire 80 pages, écrivez-nous. On répond sous 48 h.
            </p>
          </div>

          <div style={{ maxWidth: "720px", margin: "72px auto 0" }}>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
              {REFERENCES.map((ref, i) => (
                <li key={i} style={{ fontFamily: "var(--font-body)", fontSize: "12px", lineHeight: 1.5, color: "var(--muted)" }}>
                  ({i + 1}) {ref}
                </li>
              ))}
            </ol>
            <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "20px 0" }} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", lineHeight: 1.5, color: "var(--muted)", margin: 0 }}>
              Données cliniques portant sur la membrane de coquille d&apos;œuf en tant qu&apos;ingrédient. Les
              allégations finales relèvent de la responsabilité du metteur sur le marché (Règl. CE n°1924/2006).
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "44px 32px 92px" }} data-reveal>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", margin: 0, textAlign: "center" }}>
            Fonctionne aussi dans
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(18px,2vw,24px)",
              lineHeight: 1.3,
              letterSpacing: "-.01em",
              color: "var(--ink)",
              margin: "12px 0 0",
              textAlign: "center",
              textWrap: "balance",
            }}
          >
            Nutrition animale · Nutrition sportive · Cosmétique topique
          </p>
        </div>
      </section>
    </>
  );
}

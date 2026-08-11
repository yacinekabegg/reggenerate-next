import { Highlight } from "../Highlight";
import { IconCircle } from "../Icon";
import { Kicker } from "../Kicker";

const STRIP_COLORS = ["var(--teal)", "var(--orange)", "var(--gold)"];

const CHIPS = [
  { label: "25% Élastine", tone: "teal" },
  { label: "22% Collagène", tone: "orange" },
  { label: "4% GAGs*", tone: "teal" },
  { label: "3% Acide hyaluronique", tone: "teal" },
  { label: "2% Glucosamine", tone: "orange" },
] as const;

const STATS = [
  { value: "300 mg", label: "Dose journalière." },
  { value: "Type I, V & X", label: "Les trois collagènes qui composent le tissu conjonctif." },
  {
    value: "400+",
    label: "Biomolécules naturellement présentes : collagène, acide hyaluronique, élastine, sulfate de chondroïtine, glucosamine.",
  },
  { value: "Fabriqué en France", label: "Janzé, Bretagne. De la coquille française, du début à la fin.", small: true },
];

const PILLARS = [
  {
    n: "01",
    icon: "shield" as const,
    title: "Zéro solvant. Breveté.",
    body: "La plupart des procédés attaquent la membrane à l'acide ou à l'enzyme — et détruisent précisément ce qu'ils cherchent. Le nôtre est purement mécanique, et breveté. Le collagène, l'élastine et l'acide hyaluronique arrivent dans votre formule à l'état natif, structurellement intacts. Sur votre étiquette, une seule ligne : membrane de coquille d'œuf.",
  },
  {
    n: "02",
    icon: "package" as const,
    title: "300 mg par jour. C'est tout.",
    body: "Là où un collagène marin impose 5 à 10 g, Reggenerate® agit à 300 mg. La dose journalière entière tient dans une seule gélule. Goût neutre, poudre fine, stable — gélule, stick, gummie, boisson. Il s'adapte à votre format au lieu de vous l'imposer.",
  },
  {
    n: "03",
    icon: "factory" as const,
    title: "5 casseries. 80 % du gisement français.",
    body: "Pas de conteneur anonyme venu d'Asie. Notre membrane vient de cinq casseries françaises identifiées qui alimentent notre usine de Janzé — 80 % du gisement industriel du pays. Vous savez exactement d'où elle sort. Votre marketing aussi.",
  },
];

export function Matiere() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 32px 96px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.1fr) minmax(0,.9fr)",
              gap: "44px",
              alignItems: "start",
            }}
            data-reveal
          >
            <div style={{ maxWidth: "44em" }}>
              <span style={{ display: "block", width: "24px", height: "3px", background: "var(--orange)", margin: "0 0 20px" }} />
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "var(--fs-display-lg)",
                  lineHeight: 1.1,
                  letterSpacing: "-.02em",
                  color: "var(--ink)",
                  margin: "16px 0 0",
                }}
              >
                Le collagène, et <Highlight>tout ce qui va avec</Highlight>.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--fs-lede)",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  color: "var(--ink)",
                  margin: "22px 0 0",
                  maxWidth: "30em",
                }}
              >
                <span style={{ fontWeight: 600 }}>Reggenerate®</span> est un ingrédient premium de collagène de
                membrane d&apos;œuf, <em>upcyclé</em>.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(15px,1.2vw,17px)",
                  lineHeight: 1.68,
                  color: "var(--body-ink)",
                  margin: "18px 0 0",
                  maxWidth: "42em",
                }}
              >
                Il soutient les{" "}
                <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                  articulations, la peau, les cheveux et les ongles
                </span>
                , chez l&apos;humain comme chez l&apos;animal. Riche en collagène de{" "}
                <span style={{ fontWeight: 600, color: "var(--ink)" }}>type I, V et X</span> et en la matrice complète
                de biomolécules de la membrane, il apporte à vos formules du tissu conjonctif sous la forme que le
                corps connaît déjà : <em>intact, bioactif, complet</em>.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "var(--muted)",
                  margin: "16px 0 0",
                }}
              >
                Fabriqué à Janzé, en Bretagne, à partir de coquilles d&apos;œufs françaises.{" "}
                <em>Une ressource qui ne se tarit pas.</em>
              </p>
            </div>
            <div>
              <div
                className="hover-zoom-frame"
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                  background: "var(--white)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/redesign/assets/ingredients-jars.png"
                  alt="Reggenerate® — poudre de membrane d'œuf"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "20px" }}>
                {CHIPS.map((c) => (
                  <span
                    key={c.label}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "10px 20px",
                      border: `2px solid ${c.tone === "teal" ? "var(--teal)" : "var(--orange)"}`,
                      borderRadius: "999px",
                      background: "var(--white)",
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: c.tone === "teal" ? "var(--teal-deep)" : "var(--orange-deep)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {c.label}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  color: "var(--teal-deep)",
                  margin: "14px 0 0",
                }}
              >
                (Glucosaminoglycanes sulfatés : chondroïtine, dermatane sulfate, kératane sulfatée.)
                <br />
                (Méthode de dosage validée et certifiée par l&apos;Université Bretagne Sud (UBS).)
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              marginTop: "56px",
              borderTop: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
            }}
            data-reveal
          >
            {STATS.map((s, i) => (
              <div
                key={s.value}
                style={{
                  padding: "34px 28px 32px",
                  borderLeft: i > 0 ? "1px solid var(--line)" : undefined,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: s.small ? "clamp(22px,2.3vw,30px)" : "clamp(30px,3.4vw,48px)",
                    lineHeight: s.small ? 1.06 : 1,
                    letterSpacing: s.small ? "-.015em" : "-.02em",
                    color: s.small ? "var(--orange-deep)" : "var(--teal-deep)",
                    margin: 0,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    color: "var(--body-ink)",
                    margin: "14px 0 0",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ position: "relative", overflow: "hidden", background: "var(--cream)" }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "16px 32px 92px" }} data-reveal>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "56px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 440px", maxWidth: "44em" }}>
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
                La membrane d&apos;œuf, enfin intacte.
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--fs-lede)",
                  lineHeight: 1.6,
                  color: "var(--body-ink)",
                  margin: "20px 0 0",
                }}
              >
                Chaque année, <span style={{ fontWeight: 600, color: "var(--ink)" }}>40 000 tonnes de coquilles</span>{" "}
                sortent des casseries françaises. Nous en séparons la membrane mécaniquement — la seule matrice
                naturelle qui réunit collagène, élastine et acide hyaluronique. Sans solvant. Sans hydrolyse.{" "}
                <em>Sans rien casser.</em>
              </p>
            </div>
            <div className="fan-group" style={{ flex: "0 1 430px", position: "relative", height: "330px", minWidth: "300px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="fan-item"
                src="/redesign/assets/mechanical-separation.png"
                alt="Séparation mécanique de la membrane"
                style={
                  {
                    position: "absolute",
                    left: 0,
                    top: "22px",
                    width: "60%",
                    height: "84%",
                    borderRadius: "20px",
                    border: "5px solid var(--white)",
                    backgroundColor: "var(--white)",
                    boxShadow: "var(--shadow-card)",
                    objectFit: "cover",
                    zIndex: 1,
                    "--fan-x": "-14px",
                    "--fan-y": "10px",
                  } as React.CSSProperties
                }
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="fan-item"
                src="/redesign/assets/shells-treasures.png"
                alt="Coquilles d'œuf françaises"
                style={
                  {
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "47%",
                    height: "50%",
                    borderRadius: "16px",
                    border: "5px solid var(--white)",
                    backgroundColor: "var(--white)",
                    boxShadow: "var(--shadow-card)",
                    objectFit: "cover",
                    zIndex: 3,
                    "--fan-x": "14px",
                    "--fan-y": "-12px",
                  } as React.CSSProperties
                }
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="fan-item"
                src="/redesign/assets/membrane-composition-egg.png"
                alt="Composition de la membrane"
                style={
                  {
                    position: "absolute",
                    right: "4%",
                    bottom: 0,
                    width: "42%",
                    height: "46%",
                    borderRadius: "16px",
                    border: "5px solid var(--white)",
                    backgroundColor: "var(--white)",
                    boxShadow: "var(--shadow-card)",
                    objectFit: "cover",
                    zIndex: 2,
                    "--fan-x": "10px",
                    "--fan-y": "12px",
                  } as React.CSSProperties
                }
              />
            </div>
          </div>

          <div style={{ marginTop: "52px" }}>
            <Kicker>Procédé breveté</Kicker>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px", marginTop: "28px" }}
          >
            {PILLARS.map((p, i) => (
              <div
                key={p.n}
                className="hover-lift"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--white)",
                  border: "1px solid var(--line)",
                  borderTop: `8px solid ${STRIP_COLORS[i % 3]}`,
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-card)",
                  padding: "34px 30px 32px",
                }}
              >
                <IconCircle name={p.icon} tone={i === 0 ? "teal" : i === 1 ? "orange" : "gold"} size={44} />
                <div style={{ display: "flex", alignItems: "baseline", gap: "11px", margin: "20px 0 24px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "34px", lineHeight: 1, color: "var(--teal)" }}>
                    {p.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    Pilier
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "clamp(21px,1.7vw,26px)",
                    lineHeight: 1.1,
                    letterSpacing: "-.01em",
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    lineHeight: 1.62,
                    color: "var(--body-ink)",
                    margin: "16px 0 0",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { Button } from "../Button";

const CARDS = [
  {
    tag: "Le plus simple",
    title: "Échantillon gratuit",
    body: "Reggenerate® chez vous, dans votre labo, dans votre matrice. Vous verrez plus vite en une semaine d'essais qu'en trois mois de documentation.",
    cta: "Demander un échantillon",
    variant: "primary" as const,
    bg: "rgba(27,31,30,.045)",
  },
  {
    tag: "Le plus utile",
    title: "Un expert dédié",
    body: "Un interlocuteur technique. Le même à chaque appel. Il connaît votre process, vous ne réexpliquez jamais.",
    cta: "Prendre rendez-vous",
    variant: "secondary" as const,
    bg: "rgba(27,31,30,.045)",
  },
  {
    tag: "Le plus rapide",
    title: "Ready-to-market",
    body: "Une formule finie, un façonnier, une date de lancement. On s'occupe du reste.",
    cta: "Voir le catalogue",
    variant: "secondary" as const,
    bg: "rgba(27,31,30,.07)",
  },
];

export function Commencer() {
  return (
    <section style={{ background: "var(--cream)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(64px,9vw,110px) 32px" }} data-reveal>
        <span style={{ display: "block", width: "24px", height: "3px", background: "var(--orange)", margin: "0 auto 24px" }} />
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--fs-display-lg)",
            lineHeight: 1.08,
            letterSpacing: "-.02em",
            color: "var(--ink)",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "900px",
          }}
        >
          Trois façons de commencer.
          <br />
          <span style={{ color: "var(--orange-deep)" }}>La première prend deux minutes.</span>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.7, color: "var(--body-ink)", textAlign: "center", margin: "22px auto 0", maxWidth: "680px" }}>
          Vous n&apos;êtes pas obligé de décider maintenant. Mais vous pouvez déjà tenir la matière dans les mains.
        </p>

        <div className="clay-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "52px", alignItems: "stretch" }}>
          {CARDS.map((c) => (
            <div key={c.title} style={{ display: "flex", flexDirection: "column", background: c.bg, borderRadius: "22px", padding: "clamp(28px,3vw,40px)" }}>
              <span
                style={{
                  alignSelf: "flex-start",
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--teal-deep)",
                  background: "rgba(46,178,164,.14)",
                  borderRadius: "999px",
                  padding: "5px 12px",
                }}
              >
                {c.tag}
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "32px", lineHeight: 1.05, letterSpacing: "-.02em", color: "var(--ink)", margin: "20px 0 0" }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "var(--body-ink)", margin: "16px 0 0" }}>{c.body}</p>
              <div style={{ marginTop: "auto", paddingTop: "28px" }}>
                <Button variant={c.variant} chevron>
                  {c.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

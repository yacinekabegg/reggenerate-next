import { Button } from "../Button";

const DOCS = [
  {
    title: "Fiche technique",
    body: "Solubilité, granulométrie, humidité, spécifications lot.",
    note: "Pour savoir en trente secondes si ça passe chez vous, ou si on s'arrête là.",
  },
  {
    title: "Guide de formulation",
    body: "Compatibilité matrices, plage de pH, tenue en température.",
    note: "Pour éviter le tour de reformulation que personne n'a budgété.",
  },
  {
    title: "Certificats",
    body: "ISO, HACCP, attestations qualité.",
    note: "Pour que votre service qualité valide sans vous rappeler trois fois.",
  },
  {
    title: "Informations réglementaires",
    body: "Allégations EFSA, statut de l'ingrédient.",
    note: "Pour savoir ce que vous aurez le droit d'écrire sur l'étui.",
  },
];

const FACONNAGE = [
  {
    title: "6 galéniques",
    body: "Gélules, comprimés, poudres, boissons, barres, cosmétiques. La membrane tient dans les six. Votre idée de format n'est probablement pas un problème.",
  },
  {
    title: "0 appel d'offres",
    body: "Nos façonniers sont présélectionnés sur trois critères : réactivité, MOQ flexible, prix tenu. Le benchmark, on l'a fait, et on le refait. Vous héritez du résultat.",
  },
  {
    title: "Prêt à produire",
    body: "Nos formules Eggspress Launch contiennent déjà Reggenerate®, testées et validées. Pas de développement, pas de cycle de mise au point. Vous choisissez, on lance.",
  },
];

export function Integration() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--white)", borderTop: "1px solid var(--line)" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-8%",
            top: "-6%",
            width: "340px",
            height: "440px",
            borderRadius: "var(--egg-radius)",
            background: "var(--teal)",
            opacity: 0.1,
            transform: "rotate(-8deg)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "clamp(64px,10vw,120px) 32px" }} data-reveal>
          <span style={{ display: "block", width: "24px", height: "3px", background: "var(--orange)", margin: "0 0 20px" }} />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--fs-display-lg)",
              lineHeight: 1.1,
              letterSpacing: "-.02em",
              color: "var(--ink)",
              margin: "18px 0 0",
              maxWidth: "720px",
            }}
          >
            Les études, c&apos;est fait.
            <br />
            <span style={{ color: "var(--orange-deep)" }}>Reste à savoir si ça passe dans votre process.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.7, color: "var(--body-ink)", margin: "24px 0 0", maxWidth: "432px" }}>
            Un ingrédient qui marche en clinique et qui casse en production, ça ne sert à rien. Voici les quatre
            documents que votre R&amp;D et votre qualité vont réclamer de toute façon.
          </p>

          <div style={{ maxWidth: "880px", margin: "64px 0 0" }}>
            {DOCS.map((d, i) => (
              <div
                key={d.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "260px 1fr",
                  gap: "32px",
                  alignItems: "start",
                  padding: i === DOCS.length - 1 ? "40px 0 64px" : "40px 0",
                  borderTop: "1px solid var(--line)",
                  borderBottom: i === DOCS.length - 1 ? "1px solid var(--line)" : undefined,
                }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", lineHeight: 1.2, color: "var(--ink)", margin: 0 }}>
                  {d.title}
                </p>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>{d.body}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontStyle: "italic", lineHeight: 1.6, color: "var(--orange-deep)", margin: "8px 0 0" }}>
                    {d.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ margin: "64px 0 0", maxWidth: "880px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "24px", lineHeight: 1.15, letterSpacing: "-.01em", color: "var(--ink)", margin: 0 }}>
              Le Pack Documentaire
            </h3>
            <div style={{ marginTop: "20px" }}>
              <Button chevron>Télécharger le pack</Button>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6, color: "var(--muted)", margin: "22px 0 0", maxWidth: "44em" }}>
              P.S. : pas envie de tout ouvrir ? Dites-nous votre matrice et votre process. On vous renvoie les deux
              pages qui vous concernent.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(64px,9vw,110px) 32px" }} data-reveal>
          <div style={{ background: "var(--white)", borderRadius: "32px", padding: "clamp(40px,6vw,80px) clamp(28px,4vw,64px)" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", margin: 0 }}>
              Passer en production
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "var(--fs-display-md)",
                lineHeight: 1.12,
                letterSpacing: "-.02em",
                color: "var(--ink)",
                textAlign: "center",
                margin: "18px auto 0",
                maxWidth: "900px",
              }}
            >
              La partie longue, c&apos;est de trouver le bon façonnier. On l&apos;a déjà faite.
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.7, color: "var(--body-ink)", textAlign: "center", margin: "22px auto 0", maxWidth: "680px" }}>
              Vous avez une idée de produit. Entre elle et le premier lot, il y a normalement trois mois d&apos;appels
              d&apos;offres, de MOQ incompatibles et de devis qui ne se comparent pas. Notre réseau de façonniers
              certifiés est déjà passé par là.
            </p>

            <div className="clay-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "48px" }}>
              {FACONNAGE.map((f) => (
                <div key={f.title} style={{ display: "flex", flexDirection: "column", background: "var(--cream)", borderRadius: "22px", padding: "clamp(28px,3vw,40px)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,2.6vw,34px)", lineHeight: 1.05, letterSpacing: "-.02em", color: "var(--ink)", margin: 0 }}>
                    {f.title}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "var(--body-ink)", margin: "20px 0 0" }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

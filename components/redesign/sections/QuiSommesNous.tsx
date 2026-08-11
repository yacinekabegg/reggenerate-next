import { Highlight } from "../Highlight";

export function QuiSommesNous() {
  return (
    <section style={{ background: "var(--cream)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px 0" }} data-reveal>
        <div style={{ background: "var(--white)", borderRadius: "32px", padding: "clamp(44px,6vw,88px) clamp(28px,4vw,72px)", marginBottom: "clamp(28px,3vw,40px)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", margin: 0 }}>
            On ne s&apos;est même pas présentés
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--fs-display-lg)",
              lineHeight: 1.08,
              letterSpacing: "-.02em",
              color: "var(--ink)",
              textAlign: "center",
              margin: "18px auto 0",
              maxWidth: "900px",
            }}
          >
            40 000 tonnes de coquilles partent à la benne chaque année.
            <br />
            <Highlight>On a trouvé ce qu&apos;il y avait dedans.</Highlight>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.7, color: "var(--body-ink)", textAlign: "center", margin: "22px auto 0", maxWidth: "680px" }}>
            Janzé, Bretagne. Premier bassin avicole français. C&apos;est ici qu&apos;on extrait la membrane, la fine
            pellicule que tout le monde jette avec la coquille, et qu&apos;on en fait Reggenerate®, un ingrédient
            biosourcé pour la santé et la beauté.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", fontStyle: "italic", lineHeight: 1.6, color: "var(--ink)", textAlign: "center", margin: "14px auto 0", maxWidth: "680px" }}>
            Le déchet des uns. La matière première des autres.
          </p>

          <div style={{ maxWidth: "680px", margin: "52px auto 0", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.14, letterSpacing: "-.01em", color: "var(--ink)", margin: 0 }}>
              La science est là. La matière, c&apos;est nous.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7, color: "var(--body-ink)", margin: "16px 0 0" }}>
              Notre EGGSPERTISE : transformer une coquille d&apos;œuf, un coproduit collecté en France chez{" "}
              <span style={{ fontWeight: 700, color: "var(--ink)" }}>5 casseries partenaires</span>, en une membrane
              pure, régulière et traçable. Lot après lot, spec après spec.
            </p>
          </div>

          <div
            className="yacine"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,.9fr) minmax(0,1.1fr)",
              gap: "clamp(28px,4vw,56px)",
              alignItems: "stretch",
              background: "var(--cream)",
              borderRadius: "24px",
              overflow: "hidden",
              marginTop: "20px",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=pLzMfItYkRs"
              target="_blank"
              rel="noopener"
              aria-label="Voir la vidéo"
              style={{ position: "relative", display: "block", minHeight: "340px", width: "100%", height: "100%", textDecoration: "none" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.youtube.com/vi/pLzMfItYkRs/maxresdefault.jpg"
                alt="Yacine, CEO et fondateur de Circul'Egg"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span aria-hidden="true" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "72px",
                    height: "72px",
                    borderRadius: "999px",
                    background: "rgba(27,31,30,.72)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: 0,
                      height: 0,
                      marginLeft: "5px",
                      borderStyle: "solid",
                      borderWidth: "13px 0 13px 22px",
                      borderColor: "transparent transparent transparent #fff",
                    }}
                  />
                </span>
              </span>
            </a>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(32px,4vw,56px) clamp(28px,4vw,56px) clamp(32px,4vw,56px) 0" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-display-md)", lineHeight: 1.05, letterSpacing: "-.02em", color: "var(--ink)", margin: 0 }}>
                Rencontrez Yacine
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--teal-deep)", margin: "10px 0 0" }}>
                CEO et fondateur · un projet étudiant
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.65, color: "var(--body-ink)", margin: "18px 0 0", maxWidth: "36em" }}>
                C&apos;est comme ça que Circul&apos;Egg a commencé. Aujourd&apos;hui : une usine en Bretagne, une
                vingtaine de personnes, et un ingrédient qui casse les codes (et les œufs) en France et à
                l&apos;international.
              </p>
              <a
                href="#"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "18px", letterSpacing: "-.01em", color: "var(--teal-deep)", textDecoration: "none", marginTop: "24px" }}
              >
                Découvrir notre histoire et nos valeurs →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

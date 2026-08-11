"use client";

import { Wordmark } from "../Wordmark";
import { Button } from "../Button";

const NAV_LINKS = ["Accueil", "Ingrédient", "Ready-to-Market", "Nos Clients", "Blog"];
const START_LINKS = ["Demander un échantillon", "Prendre rendez-vous", "Contact", "FAQ"];

export function RedesignFooter() {
  return (
    <footer style={{ position: "relative", overflow: "hidden", background: "var(--teal)", color: "#fff" }}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "520px",
          height: "640px",
          borderRadius: "50% 50% 50% 50% / 62% 62% 38% 38%",
          background: "#fff",
          opacity: 0.05,
          top: "-260px",
          right: "-160px",
          transform: "rotate(-14deg)",
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "340px",
          height: "420px",
          borderRadius: "50% 50% 50% 50% / 62% 62% 38% 38%",
          border: "1.5px dashed rgba(255,255,255,.16)",
          bottom: "-200px",
          left: "-120px",
          transform: "rotate(9deg)",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(64px,8vw,104px) 32px clamp(32px,4vw,44px)", position: "relative", zIndex: 1 }}>
        <div className="ft-top" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.35fr) 1fr 1fr", gap: "clamp(32px,4vw,64px)", alignItems: "start" }}>
          <div style={{ maxWidth: "34em" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-display-lg)", lineHeight: 1.06, letterSpacing: "-.02em", color: "#fff", margin: 0 }}>
              Restez au courant.
              <br />
              <span style={{ color: "var(--yellow)" }}>Sans jamais rater un lot.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.65, color: "var(--on-teal-muted)", margin: "20px 0 24px", maxWidth: "32em" }}>
              Nos nouveautés, notre eggspertise marché, nos retours de salons — directement dans votre boîte pro. Une
              lettre, pas un flux.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: "440px" }}
            >
              <input
                type="email"
                placeholder="Votre e-mail professionnel"
                style={{
                  flex: "1 1 220px",
                  minWidth: 0,
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,.28)",
                  background: "rgba(255,255,255,.08)",
                  padding: "14px 20px",
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "#fff",
                  outline: "none",
                }}
              />
              <Button variant="secondary" chevron>
                S&apos;inscrire
              </Button>
            </form>
          </div>

          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", margin: "0 0 18px" }}>
              Naviguer
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "13px" }}>
              {NAV_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--on-teal-muted)" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", margin: "0 0 18px" }}>
              Commencer
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "13px" }}>
              {START_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--on-teal-muted)" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="ft-bottom"
          style={{
            marginTop: "clamp(48px,6vw,72px)",
            paddingTop: "26px",
            borderTop: "1px solid rgba(255,255,255,.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Wordmark variant="reversed" size={22} />
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <a href="/cgu" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--on-teal-muted)" }}>
              CGU
            </a>
            <a href="/mentions-legales" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--on-teal-muted)" }}>
              Mentions légales
            </a>
            <a href="/politique-de-confidentialite" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--on-teal-muted)" }}>
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

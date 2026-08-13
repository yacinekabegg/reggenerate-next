import { Accent } from "../Accent";

export function RtmHero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--cream)" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-12%",
          top: "-10%",
          width: "50%",
          height: "62%",
          borderRadius: "var(--egg-radius)",
          background: "var(--orange)",
          opacity: 0.09,
          transform: "rotate(9deg)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "clamp(140px,16vw,180px) 32px 72px", textAlign: "center" }} data-reveal>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--fs-display-xl)",
            lineHeight: 1.04,
            letterSpacing: "-.02em",
            color: "var(--ink)",
            margin: "0 auto",
            maxWidth: "18ch",
          }}
        >
          Notre gamme
          <br />
          <Accent>EGGspress Launch</Accent>.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--fs-lede)",
            lineHeight: 1.6,
            color: "var(--body-ink)",
            margin: "22px auto 0",
            maxWidth: "44em",
          }}
        >
          Nos formulateurs ont développé, avec <span style={{ fontWeight: 700, color: "var(--ink)" }}>126 façonniers</span>{" "}
          certifiés rigoureusement sélectionnés, des formules prêtes à produire intégrant Reggenerate®. Choisissez la
          vôtre — on s&apos;occupe du reste.
        </p>
      </div>
    </section>
  );
}

import { Highlight } from "../Highlight";

export function Hero() {
  return (
    <>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--teal-deep)",
          height: "100vh",
          minHeight: "540px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/redesign/assets/hero-bg.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "78%",
            zIndex: 1,
            pointerEvents: "none",
            background:
              "linear-gradient(0deg, rgba(18,38,35,.94) 4%, rgba(18,38,35,.72) 26%, rgba(18,38,35,.18) 62%, rgba(18,38,35,0) 100%)",
          }}
        />
        {/* Darkens just the band the fixed header sits over, so the nav
            titles stay legible against the hero image regardless of its
            content. */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "140px",
            zIndex: 1,
            pointerEvents: "none",
            background: "linear-gradient(180deg, rgba(10,20,18,.5) 0%, rgba(10,20,18,0) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", width: "100%" }}>
            {/* <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "var(--yellow)",
                margin: "0 0 22px",
              }}
            >
              Innovation brevetée&nbsp; →&nbsp; Circul&apos;Egg
            </p> */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "32px 56px",
                flexWrap: "wrap",
              }}
            >
              <h1
                style={{
                  flex: "1 1 560px",
                  minWidth: 0,
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(46px,6.8vw,104px)",
                  lineHeight: 0.9,
                  letterSpacing: "-.03em",
                  color: "#fff",
                  margin: 0,
                }}
              >
                Transformer l&apos;ordinaire en <Highlight style={{ color: "var(--teal)" }}>EGGSTRA-ORDINAIRE</Highlight>
              </h1>
              <div style={{ flex: "0 1 348px", minWidth: 0, paddingBottom: "8px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--fs-lede)",
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,.9)",
                    margin: "0 0 26px",
                    textWrap: "pretty",
                  }}
                >
                  Cinq actifs beauté &amp; articulations réunis dans une seule dose de 300&nbsp;mg.{" "}
                  <em>Un seul ingrédient à sourcer, à formuler, à tracer.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", padding: "72px 32px 76px", textAlign: "center" }} data-reveal>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "var(--fs-lede)",
              lineHeight: 1.55,
              color: "var(--ink)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Votre galénique ne change pas. C&apos;est <span style={{ fontWeight: 600 }}>Reggenerate®</span> qui s&apos;y
            plie : gélule, stick, gummy, boisson.
          </p>
        </div>
      </section>
    </>
  );
}

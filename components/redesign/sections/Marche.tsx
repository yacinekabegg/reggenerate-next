import { Highlight } from "../Highlight";
import { CountUp } from "../CountUp";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  brandLogo: string;
  brandAlt: string;
  brandDark?: boolean;
  pressLogo: string;
  pressAlt: string;
  pressMaxH: number;
};

const TESTIMONIALS_A: Testimonial[] = [
  {
    quote:
      "« La collaboration avec Circul'Egg est extrêmement fluide : une équipe réactive et engagée. Reggenerate® apporte une vraie valeur ajoutée bien-être, tout en restant compétitif. Bien plus qu'un fournisseur, un partenaire de confiance. »",
    name: "Stéphane Lehning",
    role: "Président des Laboratoires Lehning",
    brandLogo: "/redesign/assets/brands/lehning.jpg",
    brandAlt: "Lehning",
    pressLogo: "/redesign/assets/press/forbes.png",
    pressAlt: "Forbes",
    pressMaxH: 36,
  },
  {
    quote:
      "« Reggenerate est devenu l'un de nos ingrédients phares : nos produits articulaire et beauté sont déjà dans le top 10 des ventes. Il réunit collagène et acide hyaluronique dans une galénique moderne et agréable. »",
    name: "Louis-Benoit Hug",
    role: "CEO de Valébio",
    brandLogo: "/redesign/assets/brands/valebio.jpeg",
    brandAlt: "Valébio",
    pressLogo: "/redesign/assets/press/ouest-france2.png",
    pressAlt: "Ouest France",
    pressMaxH: 42,
  },
];

const TESTIMONIALS_B: Testimonial[] = [
  {
    quote:
      "« Dès qu'on a découvert le collagène d'œuf, on a adoré l'idée. L'équipe Circul'Egg est adorable, disponible, et partage nos valeurs. Aujourd'hui, nos clients adorent notre collagène végétarien Oemine ! »",
    name: "Docteur Paul Dupont",
    role: "Fondateur de Oemine",
    brandLogo: "/redesign/assets/brands/oemine.png",
    brandAlt: "Oemine",
    pressLogo: "/redesign/assets/press/challenges2.png",
    pressAlt: "Challenges",
    pressMaxH: 34,
  },
  {
    quote:
      "« Grâce à Reggenerate, nous avons créé un produit Peau vraiment efficace en gummies. Son dosage s'adapte parfaitement à cette galénique : efficacité prouvée, sans compromis sur le goût ! »",
    name: "David Gueunoun",
    role: "Fondateur et CEO de Mium Lab",
    brandLogo: "/redesign/assets/brands/miumlab.png",
    brandAlt: "Mium Lab",
    brandDark: true,
    pressLogo: "/redesign/assets/press/culture-nutrition2.png",
    pressAlt: "Culture Nutrition",
    pressMaxH: 40,
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure
      className="hover-lift"
      style={{
        flex: "none",
        boxSizing: "border-box",
        width: "440px",
        height: "200px",
        marginRight: "10px",
        display: "flex",
        flexDirection: "column",
        background: "var(--white)",
        border: "1px solid var(--line)",
        borderRadius: "18px",
        boxShadow: "var(--shadow-card)",
        padding: "22px 26px",
      }}
    >
      <blockquote style={{ flex: 1, fontFamily: "var(--font-body)", fontSize: "13.5px", lineHeight: 1.55, color: "var(--body-ink)", margin: 0, overflow: "hidden" }}>
        {t.quote}
      </blockquote>
      <figcaption style={{ display: "flex", alignItems: "center", gap: "11px", marginTop: "12px" }}>
        <span
          aria-hidden="true"
          style={{
            width: "44px",
            height: "44px",
            flex: "none",
            borderRadius: "999px",
            background: "var(--line)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "15px",
            color: "var(--teal-deep)",
          }}
        >
          {t.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "15px", color: "var(--ink)", margin: 0 }}>{t.name}</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "11.5px", color: "var(--muted)", margin: "1px 0 0" }}>{t.role}</p>
        </div>
        {t.brandDark ? (
          <span style={{ flex: "none", height: "30px", padding: "0 4px", background: "#16233F", borderRadius: "6px", overflow: "hidden", display: "inline-flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.brandLogo} alt={t.brandAlt} style={{ height: "30px", width: "30px", objectFit: "cover" }} />
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.brandLogo} alt={t.brandAlt} style={{ height: "28px", width: "auto", maxWidth: "92px", objectFit: "contain", flex: "none" }} />
        )}
      </figcaption>
    </figure>
  );
}

function PressCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="hover-lift"
      style={{
        flex: "none",
        boxSizing: "border-box",
        width: "170px",
        height: "116px",
        marginRight: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--white)",
        border: "1px solid var(--line)",
        borderRadius: "16px",
        boxShadow: "var(--shadow-card)",
        padding: "14px 18px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={t.pressLogo} alt={t.pressAlt} style={{ maxWidth: "100%", maxHeight: `${t.pressMaxH}px`, width: "auto", objectFit: "contain" }} />
    </div>
  );
}

function MarqueeRow({ items, variant }: { items: Testimonial[]; variant: "a" | "b" }) {
  const doubled = [...items, ...items];
  return (
    <div className="mq">
      <div className={`mq-track ${variant}`}>
        {doubled.map((t, i) => (
          <div key={i} style={{ display: "flex" }}>
            <TestimonialCard t={t} />
            <PressCard t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

const STAT_BAND = [
  { label: "Clients", value: "~100" },
  { label: "Avis consommateurs cumulés", value: "194" },
  { label: "Note moyenne pondérée", value: "4,7", suffix: "/5" },
  { label: "Territoires couverts", value: "2" },
];

export function Marche() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--white)", padding: "72px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div
            data-reveal
            style={{ position: "relative", overflow: "hidden", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "32px", padding: "52px 0 46px" }}
          >
            <div style={{ textAlign: "center", maxWidth: "34em", margin: "0 auto 42px", padding: "0 32px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", margin: 0 }}>
                Ils construisent déjà avec Reggenerate®
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <MarqueeRow items={TESTIMONIALS_A} variant="a" />
              <MarqueeRow items={TESTIMONIALS_B} variant="b" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ position: "relative", overflow: "hidden", background: "var(--white)", borderTop: "1px solid var(--line)" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-8%",
            bottom: "-8%",
            width: "320px",
            height: "410px",
            borderRadius: "var(--egg-radius)",
            background: "var(--orange)",
            opacity: 0.1,
            transform: "rotate(11deg)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "clamp(64px,10vw,120px) 32px 0" }} data-reveal>
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
            Reggenerate® est déjà sur les étagères.
            <br />
            <Highlight>Voici à quelle dose.</Highlight>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.7, color: "var(--body-ink)", margin: "24px 0 0", maxWidth: "432px" }}>
            Deux marques. Deux territoires : articulations et peau. Deux équipes de formulation qui ne se sont jamais
            parlé. Et la même dose : <span style={{ fontWeight: 700, fontSize: "1.4em", color: "var(--ink)" }}>300 mg</span>.
          </p>

          <div className="sh-band" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "32px", marginTop: "64px" }}>
            {STAT_BAND.map((s) => (
              <div key={s.label} style={{ background: "var(--cream)", borderRadius: "24px", padding: "32px 28px 34px" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
                  {s.label}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "2px", fontVariantNumeric: "tabular-nums" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--fs-kpi)", lineHeight: 1, letterSpacing: "-.02em", color: "var(--teal-dark)" }}>
                    <CountUp value={s.value} />
                  </span>
                  {s.suffix && <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "24px", color: "var(--teal-dark)" }}>{s.suffix}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="sh-prod" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "32px", marginTop: "32px" }}>
            <article style={{ display: "flex", flexDirection: "column", background: "var(--cream)", borderRadius: "16px", padding: "36px 34px 34px" }}>
              <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "10px 12px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "24px", lineHeight: 1.1, color: "var(--ink)", margin: 0 }}>
                  Collagène articulaire
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--teal-deep)",
                    background: "rgba(46,178,164,.14)",
                    borderRadius: "999px",
                    padding: "5px 12px",
                  }}
                >
                  Articulations
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--muted)", margin: "8px 0 0" }}>par Valebio</p>
              <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "22px 0 24px" }} />
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", fontVariantNumeric: "tabular-nums" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "60px", lineHeight: 1, letterSpacing: "-.02em", color: "var(--teal-dark)" }}>300</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "22px", color: "var(--teal-dark)" }}>mg</span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--body-ink)", margin: "10px 0 0" }}>de Reggenerate® par dose (2 gélules)</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, margin: "20px 0 0" }}>
                75 mg curcuma · 80 mg vitamine C · 30 mg acide hyaluronique · 60 gélules
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--ink)", margin: "20px 0 0" }}>4,8/5 · 57 avis</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontStyle: "italic", color: "var(--ink)", lineHeight: 1.55, margin: "22px 0 0" }}>
                La membrane porte la formule. Les actifs connus rassurent le linéaire.
              </p>
            </article>
            <article style={{ display: "flex", flexDirection: "column", background: "var(--cream)", borderRadius: "16px", padding: "36px 34px 34px" }}>
              <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "10px 12px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "24px", lineHeight: 1.1, color: "var(--ink)", margin: 0 }}>
                  Cure peau repulpée
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--orange-deep)",
                    background: "rgba(241,154,42,.16)",
                    borderRadius: "999px",
                    padding: "5px 12px",
                  }}
                >
                  Beauté peau
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--muted)", margin: "8px 0 0" }}>par Epycure</p>
              <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "22px 0 24px" }} />
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", fontVariantNumeric: "tabular-nums" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "60px", lineHeight: 1, letterSpacing: "-.02em", color: "var(--teal-dark)" }}>300</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "22px", color: "var(--teal-dark)" }}>mg</span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--body-ink)", margin: "10px 0 0" }}>de Reggenerate® par dose</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, margin: "20px 0 0" }}>
                SuavyEgg™ (membrane Reggenerate® + 43 mg huile de bourrache) · vitamines &amp; minéraux · 60 gélules
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--ink)", margin: "20px 0 0" }}>4,61/5 · 137 avis</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontStyle: "italic", color: "var(--ink)", lineHeight: 1.55, margin: "22px 0 0" }}>
                Epycure en a fait un actif nommé sur l&apos;étui. Pas un ingrédient caché dans la liste.
              </p>
            </article>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "clamp(48px,7vw,80px) 32px clamp(64px,10vw,120px)" }}>
          <a href="#" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "18px", letterSpacing: "-.01em", color: "var(--teal-deep)", textDecoration: "none" }}>
            Voir tous les produits qui contiennent Reggenerate® →
          </a>
        </div>
      </section>
    </>
  );
}

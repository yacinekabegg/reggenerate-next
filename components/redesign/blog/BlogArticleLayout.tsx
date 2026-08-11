import type { ReactNode } from "react";

type BlogArticleLayoutProps = {
  title: string;
  categoryLabel: string;
  date?: string;
  readingTime?: string;
  coverImage: string;
  children: ReactNode;
};

export function BlogArticleLayout({ title, categoryLabel, date, readingTime, coverImage, children }: BlogArticleLayoutProps) {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--teal-deep)", height: "56vh", minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={coverImage} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(18,38,35,.9) 4%, rgba(18,38,35,.55) 40%, rgba(18,38,35,.1) 75%, rgba(18,38,35,0) 100%)",
          }}
        />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px 56px", width: "100%" }}>
            <span
              style={{
                display: "inline-flex",
                padding: "7px 16px",
                borderRadius: "999px",
                background: "rgba(247,244,235,.92)",
                border: "1.5px solid var(--teal)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "var(--teal-deep)",
              }}
            >
              {categoryLabel}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "var(--fs-display-lg)",
                lineHeight: 1.08,
                letterSpacing: "-.02em",
                color: "#fff",
                margin: "18px 0 0",
              }}
            >
              {title}
            </h1>
            {(date || readingTime) && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,.85)", margin: "14px 0 0" }}>
                {date}
                {date && readingTime ? " · " : ""}
                {readingTime ? `${readingTime} min de lecture` : ""}
              </p>
            )}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "56px 32px 88px" }} data-reveal>
          <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: "16px", boxShadow: "var(--shadow-card)", padding: "clamp(28px,4vw,56px)" }}>
            <div className="article-prose">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { ReactNode } from "react";

type KickerProps = {
  children: ReactNode;
};

export function Kicker({ children }: KickerProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "var(--yellow)",
        borderRadius: "999px",
        padding: "10px 24px",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "18px",
        color: "var(--teal-deep)",
        textTransform: "uppercase",
        letterSpacing: ".01em",
      }}
    >
      {children}
    </span>
  );
}

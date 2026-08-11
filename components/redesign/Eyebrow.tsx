import type { ReactNode, CSSProperties } from "react";

type EyebrowProps = {
  children: ReactNode;
  dot?: boolean;
  style?: CSSProperties;
};

export function Eyebrow({ children, dot = true, style = {} }: EyebrowProps) {
  return (
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--teal-deep)",
        margin: 0,
        ...style,
      }}
    >
      {dot && (
        <span style={{ color: "var(--teal)", fontSize: "0.72em", verticalAlign: "2px", marginRight: "0.5em" }}>
          ●
        </span>
      )}
      {children}
    </p>
  );
}

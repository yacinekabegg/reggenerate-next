import type { ReactNode, CSSProperties } from "react";

type HighlightProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export function Highlight({ children, style = {} }: HighlightProps) {
  return (
    <span
      style={{
        backgroundImage: "var(--highlighter)",
        padding: "0 .06em",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

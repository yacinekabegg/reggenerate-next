import type { ReactNode } from "react";

type AccentProps = {
  children: ReactNode;
  onTeal?: boolean;
};

export function Accent({ children, onTeal = false }: AccentProps) {
  return <span style={{ color: onTeal ? "var(--yellow)" : "var(--orange)" }}>{children}</span>;
}

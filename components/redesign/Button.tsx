"use client";

import { useState, type ReactNode, type CSSProperties, type MouseEventHandler } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  chevron?: boolean;
  disabled?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
};

const PADS = { sm: "9px 18px", md: "13px 26px", lg: "16px 34px" };
const SIZES = { sm: 15, md: 16, lg: 18 };

const PALETTE = {
  primary: { bg: "var(--teal)", fg: "#fff", bd: "var(--teal)", bgHover: "var(--teal-dark)", bdHover: "var(--teal-dark)" },
  secondary: { bg: "var(--orange)", fg: "#fff", bd: "var(--orange)", bgHover: "var(--orange-deep)", bdHover: "var(--orange-deep)" },
  ghost: { bg: "transparent", fg: "var(--teal-deep)", bd: "var(--teal-deep)", bgHover: "rgba(46,178,164,.10)", bdHover: "var(--teal-dark)" },
  link: { bg: "transparent", fg: "var(--teal-deep)", bd: "transparent", bgHover: "transparent", bdHover: "transparent" },
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  chevron = false,
  disabled = false,
  children,
  style = {},
  onClick,
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const palette = PALETTE[variant];
  const isLink = variant === "link";
  const fs = SIZES[size];

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: fs,
    lineHeight: 1,
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    border: isLink ? "none" : `2px solid ${hover && !disabled ? palette.bdHover : palette.bd}`,
    borderRadius: "999px",
    padding: isLink ? "2px 0" : PADS[size],
    color: palette.fg,
    background: isLink ? "transparent" : hover && !disabled ? palette.bgHover : palette.bg,
    boxShadow: isLink && hover && !disabled ? "inset 0 -2px 0 var(--yellow)" : "none",
    opacity: disabled ? 0.45 : 1,
    transform: active && !disabled ? "scale(.97)" : "none",
    transition: "background .18s cubic-bezier(.22,.61,.36,1), border-color .18s cubic-bezier(.22,.61,.36,1), transform .18s cubic-bezier(.22,.61,.36,1)",
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick: disabled ? (e: React.MouseEvent) => e.preventDefault() : onClick,
  };

  const content = (
    <>
      <span>{children}</span>
      {chevron && (
        <span
          style={{
            fontSize: "1.15em",
            lineHeight: 0,
            marginLeft: "-2px",
            transform: hover && !disabled ? "translateX(2px)" : "none",
            transition: "transform .18s cubic-bezier(.22,.61,.36,1)",
          }}
        >
          ›
        </span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} style={base} {...handlers}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" style={base} disabled={disabled} {...handlers}>
      {content}
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./Wordmark";
import { Button } from "./Button";

const LINKS = [
  { label: "Accueil", href: "/nouveau" },
  { label: "Ingrédient", href: "/nouveau/ingredient" },
  { label: "Ready-to-Market", href: "/nouveau/ready-to-market" },
  { label: "Nos Clients", href: "/nouveau/clients" },
  { label: "Blog", href: "/nouveau/blog" },
  { label: "Contact", href: "/nouveau/contact" },
];

// next.config.ts sets trailingSlash: true, so the live pathname is
// "/nouveau/ingredient/" while our hrefs above are written without the
// trailing slash — strip it (except for "/") before comparing.
const normalize = (path: string) => (path.length > 1 ? path.replace(/\/$/, "") : path);

function NavLink({
  href,
  active,
  scrolled,
  children,
}: {
  href: string;
  active: boolean;
  scrolled: boolean;
  children: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        fontWeight: active ? 700 : 500,
        color: active || hover ? "var(--teal-deep)" : scrolled ? "var(--ink)" : "#fff",
        textShadow: !scrolled && !active && !hover ? "0 1px 6px rgba(27,31,30,.45)" : "none",
        textDecoration: "none",
        paddingBottom: "3px",
        borderBottom: `2px solid ${active ? "var(--yellow)" : "transparent"}`,
        transition: "color .18s cubic-bezier(.22,.61,.36,1), border-color .18s cubic-bezier(.22,.61,.36,1), text-shadow .18s cubic-bezier(.22,.61,.36,1)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    // Hysteresis: enter "scrolled" past 24px, only leave it below 8px.
    // A single shared threshold flickers under inertial/trackpad scroll,
    // which hovers back and forth across it several times a second.
    const check = () => {
      ticking = false;
      setScrolled((prev) => {
        const y = window.scrollY;
        if (prev) return y > 8;
        return y > 24;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      {/* Blur is expensive to keep computing every scroll frame (the browser
          re-samples the backdrop continuously while the sticky header sits
          over moving content), so it's only mounted at all once scrolled —
          no transition on it, it just appears. The only thing that animates
          is this tint layer's opacity. */}
      {scrolled && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backdropFilter: "saturate(140%) blur(10px)",
            WebkitBackdropFilter: "saturate(140%) blur(10px)",
          }}
        />
      )}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: "rgba(247,244,235,.88)",
          borderBottom: "1px solid var(--line)",
          opacity: scrolled ? 1 : 0,
          transition: "opacity .3s cubic-bezier(.22,.61,.36,1)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--page-max)",
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link href="/nouveau" style={{ textDecoration: "none" }}>
          <Wordmark size={24} />
        </Link>
        <nav style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "28px" }}>
          {LINKS.map((l) => (
            <NavLink key={l.label} href={l.href} active={normalize(pathname ?? "") === l.href} scrolled={scrolled}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Button variant="primary" size="sm">
          Prendre rendez-vous
        </Button>
      </div>
    </header>
  );
}

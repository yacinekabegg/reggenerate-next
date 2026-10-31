"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type Locale = "fr" | "en";

const NAV: Record<Locale, { href: string; label: string }[]> = {
  fr: [
    { href: "/", label: "Accueil" },
    { href: "/ingredient", label: "Ingrédient" },
    { href: "/ready-to-market", label: "Ready-to-Market" },
    { href: "/clients", label: "Nos Clients" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/ingredient", label: "Ingredient" },
    { href: "/en/ready-to-market", label: "Ready-to-Market" },
    { href: "/en/clients", label: "Our Clients" },
    { href: "/en/blog", label: "Blog" },
    { href: "/en#contact", label: "Contact" },
  ],
};

// Lien vers la même page dans l'autre langue. Par défaut, on ajoute ou retire
// le préfixe /en ; pour un article de blog (slug différent selon la langue), on
// lit la balise hreflang posée dans l'en-tête de la page, sinon on renvoie vers
// la liste des articles.
function defaultAltPath(locale: Locale, pathname: string) {
  if (locale === "en") {
    const rest = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    return rest.startsWith("/blog/") ? "/blog" : rest;
  }
  if (pathname.startsWith("/blog/")) return "/en/blog";
  return pathname === "/" ? "/en" : `/en${pathname}`;
}

export function Header({ locale = "fr" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const navItems = NAV[locale];
  const other: Locale = locale === "fr" ? "en" : "fr";
  const [altHref, setAltHref] = useState(() => defaultAltPath(locale, pathname));

  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${other}"]`);
    const fromHead = link?.getAttribute("href");
    if (fromHead) {
      try {
        setAltHref(new URL(fromHead, window.location.href).pathname);
        return;
      } catch {
        // adresse invalide : on garde le repli
      }
    }
    setAltHref(defaultAltPath(locale, pathname));
  }, [locale, other, pathname]);

  const switcher = (
    <a
      href={altHref}
      hrefLang={other}
      lang={other}
      aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
      className="rounded-full border border-white/60 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white hover:bg-white/10"
    >
      {other.toUpperCase()}
    </a>
  );

  useEffect(() => {
    // Lock body scroll when menu is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#2eb2a4] px-6">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between">
        <Link href={locale === "en" ? "/en" : "/"} className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dpc2uqmvg/image/upload/v1762017356/1_1_tq6kgk.png"
            alt="Reggenerate logo"
            width={140}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-bold tracking-[0.2px] text-white md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white/90">
              {item.label}
            </Link>
          ))}
          {switcher}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={locale === "en" ? "Open menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 md:hidden"
        >
          {open ? (
            // Close icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} fixed inset-x-0 top-16 z-40 origin-top bg-[#2eb2a4] shadow-xl transition-opacity duration-200`}
      >
        <nav className="flex flex-col gap-2 px-6 py-4 text-base font-bold tracking-[0.2px] text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-2">{switcher}</div>
        </nav>
      </div>
    </header>
  );
}

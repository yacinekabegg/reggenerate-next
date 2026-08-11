"use client";

import { useEffect } from "react";

/**
 * Drives every [data-reveal] element on the page: fades + rises into view
 * the moment it actually enters the viewport — immediately on load for
 * anything already on screen (e.g. the top of a page), and later on
 * scroll for everything below the fold. Styles are set imperatively via
 * JS rather than a CSS default-hidden class, so a page with JS disabled
 * simply keeps showing the content — it never gets stuck invisible.
 *
 * The hidden starting style is only ever applied once the observer has
 * confirmed (via its own first report) that an element is genuinely NOT
 * on screen yet. This avoids any dependency on a fixed-timing snapshot —
 * on image-heavy pages, images finishing load can shift the whole layout,
 * which previously made a one-off "already visible" check (taken too
 * early) both reveal sections that should still animate in on scroll and,
 * in other cases, hide sections that were actually already visible.
 * IntersectionObserver re-evaluates on every layout change on its own, so
 * this approach stays correct regardless of when images settle.
 */
export function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(".redesign [data-reveal]"));
    const pending = new Set<HTMLElement>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "none";
            io.unobserve(el);
            pending.delete(el);
          } else if (!pending.has(el)) {
            // First report for this element, and it's genuinely off-screen:
            // safe to hide it now — it'll transition in once it later
            // intersects, however layout shifts before then.
            pending.add(el);
            const delay = el.dataset.revealDelay ? `${el.dataset.revealDelay}ms` : "0ms";
            el.style.opacity = "0";
            el.style.transform = "translateY(16px)";
            el.style.transition = `opacity .55s cubic-bezier(.22,.61,.36,1) ${delay}, transform .55s cubic-bezier(.22,.61,.36,1) ${delay}`;
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}

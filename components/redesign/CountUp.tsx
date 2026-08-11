"use client";

import { useEffect, useRef, useState } from "react";

type Parsed = { prefix: string; number: number; decimals: number; suffix: string };

function parseValue(raw: string): Parsed | null {
  const match = raw.match(/^([^\d−-]*)([−-]?\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const normalized = numStr.replace("−", "-").replace(",", ".");
  const number = parseFloat(normalized);
  if (Number.isNaN(number)) return null;
  const decimals = normalized.includes(".") ? normalized.split(".")[1].length : 0;
  return { prefix, number, decimals, suffix };
}

function format(n: number, decimals: number) {
  const sign = n < 0 ? "−" : "";
  return sign + Math.abs(n).toFixed(decimals).replace(".", ",");
}

/**
 * Animates a stat value counting up from 0 the moment it scrolls into
 * view. Understands the site's own number formats: French decimal comma
 * ("4,7"), the real minus sign ("−79 %"), and any leading/trailing text
 * ("~100", "60+"). Falls back to displaying the raw value as-is if it
 * can't find a number to animate, and skips the animation entirely under
 * prefers-reduced-motion.
 */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    setDisplay(value);
    const el = ref.current;
    if (!el) return;
    const parsed = parseValue(value);
    if (!parsed) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const { prefix, number, decimals, suffix } = parsed;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = number * eased;
            setDisplay(prefix + format(current, decimals) + suffix);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}

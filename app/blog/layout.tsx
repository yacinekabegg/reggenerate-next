import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reggenerate™ — La nouvelle génération de collagène végétarien.",
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}



import type { Metadata } from "next";
import { SiteHeader } from "@/components/redesign/SiteHeader";
import { ScrollReveal } from "@/components/redesign/ScrollReveal";
import { Hero } from "@/components/redesign/sections/Hero";
import { Matiere } from "@/components/redesign/sections/Matiere";
import { Preuves } from "@/components/redesign/sections/Preuves";
import { Integration } from "@/components/redesign/sections/Integration";
import { Marche } from "@/components/redesign/sections/Marche";
import { Commencer } from "@/components/redesign/sections/Commencer";
import { QuiSommesNous } from "@/components/redesign/sections/QuiSommesNous";
import { RedesignFooter } from "@/components/redesign/sections/RedesignFooter";

export const metadata: Metadata = {
  title: "Reggenerate™ — Nouveau design (aperçu)",
  description: "Aperçu de la nouvelle page d'accueil Reggenerate®, basé sur le handoff Claude Design.",
};

export default function NouveauPage() {
  return (
    <div className="redesign">
      <ScrollReveal />
      <SiteHeader />
      <Hero />
      <Matiere />
      <Preuves />
      <Integration />
      <Marche />
      <Commencer />
      <QuiSommesNous />
      <RedesignFooter />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/redesign/SiteHeader";
import { ScrollReveal } from "@/components/redesign/ScrollReveal";
import { IngredientHero } from "@/components/redesign/ingredient/IngredientHero";
import { Composition } from "@/components/redesign/ingredient/Composition";
import { TabsSection } from "@/components/redesign/ingredient/TabsSection";
import { Commencer } from "@/components/redesign/sections/Commencer";
import { ContactSection } from "@/components/redesign/ContactSection";
import { RedesignFooter } from "@/components/redesign/sections/RedesignFooter";

export const metadata: Metadata = {
  title: "Reggenerate™ — L'ingrédient (aperçu)",
  description: "Composition, bienfaits, science, sourcing, spécifications et qualité de Reggenerate®.",
};

export default function IngredientNouveauPage() {
  return (
    <div className="redesign">
      <ScrollReveal />
      <SiteHeader />
      <IngredientHero />
      <Composition />
      <TabsSection />
      <Commencer />
      <ContactSection />
      <RedesignFooter />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/redesign/SiteHeader";
import { ScrollReveal } from "@/components/redesign/ScrollReveal";
import { RtmHero } from "@/components/redesign/ready-to-market/RtmHero";
import { ProductCatalog } from "@/components/redesign/ready-to-market/ProductCatalog";
import { ContactSection } from "@/components/redesign/ContactSection";
import { RedesignFooter } from "@/components/redesign/sections/RedesignFooter";

export const metadata: Metadata = {
  title: "Reggenerate™ — Ready-to-Market (aperçu)",
  description: "La gamme Eggspress Launch : des formules prêtes à produire intégrant Reggenerate®.",
};

export default function ReadyToMarketNouveauPage() {
  return (
    <div className="redesign">
      <ScrollReveal />
      <SiteHeader />
      <RtmHero />
      <ProductCatalog />
      <ContactSection />
      <RedesignFooter />
    </div>
  );
}

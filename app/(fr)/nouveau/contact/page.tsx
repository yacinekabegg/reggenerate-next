import type { Metadata } from "next";
import { SiteHeader } from "@/components/redesign/SiteHeader";
import { ScrollReveal } from "@/components/redesign/ScrollReveal";
import { ContactSection } from "@/components/redesign/ContactSection";
import { RedesignFooter } from "@/components/redesign/sections/RedesignFooter";

export const metadata: Metadata = {
  title: "Reggenerate™ — Contact (aperçu)",
  description: "Contactez l'équipe Circul'Egg pour vos échantillons, études cliniques ou projets ready-to-market.",
};

export default function ContactNouveauPage() {
  return (
    <div className="redesign">
      <ScrollReveal />
      <SiteHeader />
      <div style={{ paddingTop: "60px" }}>
        <ContactSection bordered={false} />
      </div>
      <RedesignFooter />
    </div>
  );
}

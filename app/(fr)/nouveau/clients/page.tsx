import type { Metadata } from "next";
import { fetchClientProductsFromAirtable } from "@/lib/clientProducts";
import { SiteHeader } from "@/components/redesign/SiteHeader";
import { ScrollReveal } from "@/components/redesign/ScrollReveal";
import { ClientsHero } from "@/components/redesign/clients/ClientsHero";
import { ClientsMap } from "@/components/redesign/clients/ClientsMap";
import { ClientProductGrid } from "@/components/redesign/clients/ClientProductGrid";
import { ContactSection } from "@/components/redesign/ContactSection";
import { RedesignFooter } from "@/components/redesign/sections/RedesignFooter";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Reggenerate™ — Nos clients (aperçu)",
  description: "Les marques qui formulent déjà avec Reggenerate®.",
};

export default async function ClientsNouveauPage() {
  const products = await fetchClientProductsFromAirtable();

  return (
    <div className="redesign">
      <ScrollReveal />
      <SiteHeader />
      <ClientsHero />
      <ClientsMap />
      <ClientProductGrid products={products} />
      <ContactSection imageSrc="/images/circulegg-team.jpg" imageAlt="Circul'Egg – Équipe" />
      <RedesignFooter />
    </div>
  );
}

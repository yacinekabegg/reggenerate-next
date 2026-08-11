import type { Metadata } from "next";
import { fetchArticlesFromAirtable } from "@/lib/airtable";
import { SiteHeader } from "@/components/redesign/SiteHeader";
import { ScrollReveal } from "@/components/redesign/ScrollReveal";
import { BlogListClient } from "@/components/redesign/blog/BlogListClient";
import { ContactSection } from "@/components/redesign/ContactSection";
import { RedesignFooter } from "@/components/redesign/sections/RedesignFooter";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Reggenerate™ — Blog (aperçu)",
  description: "Science, marché et formulation autour de la membrane d'œuf.",
};

export default async function BlogNouveauPage() {
  const articles = await fetchArticlesFromAirtable();

  return (
    <div className="redesign">
      <ScrollReveal />
      <SiteHeader />
      <BlogListClient articles={articles} />
      <ContactSection />
      <RedesignFooter />
    </div>
  );
}

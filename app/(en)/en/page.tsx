import { Hero } from "@/components/en/Hero";
import { InnovationSection } from "@/components/en/InnovationSection";
import { MarketTrendsSection } from "@/components/en/MarketTrendsSection";
import { TestimonialsSection } from "@/components/en/TestimonialsSection";
import { ProcessOverlaySection } from "@/components/en/ProcessOverlaySection";
import { CompositionSection } from "@/components/en/CompositionSection";
import { EggspertiseSection } from "@/components/en/EggspertiseSection";
import { TechnicalDocsSection } from "@/components/en/TechnicalDocsSection";
import { CaseStudiesSection } from "@/components/en/CaseStudiesSection";
import { PartnersSection } from "@/components/en/PartnersSection";
import { ReadyToInnovateSection } from "@/components/en/ReadyToInnovateSection";
import { AboutSection } from "@/components/en/AboutSection";
import { QualityAssuranceSection } from "@/components/en/QualityAssuranceSection";
import { FAQSection } from "@/components/en/FAQSection";
import { BlogArticlesSection } from "@/components/en/BlogArticlesSection";
import { PressMentionsSection } from "@/components/en/PressMentionsSection";
import { NewsletterSection } from "@/components/en/NewsletterSection";
import { Footer } from "@/components/en/Footer";
import { JsonLd } from "@/components/JsonLd";
import { fetchLatestArticles } from "@/lib/airtable";
import { PAGES_EN, pageMetadataEn, productJsonLdEn, faqJsonLdEn } from "@/lib/seo";

export const metadata = pageMetadataEn(PAGES_EN.home);

// Même page d'accueil que la version française, composants traduits.
const SECTIONS_CONFIG = {
  showTestimonials: true,
};

export default async function HomeEn() {
  // Trois derniers articles publiés, pour le bloc « articles » de l'accueil
  const latest = (await fetchLatestArticles("en", 3)).map((a) => ({
    href: a.href,
    title: a.title,
    excerpt: a.excerpt,
    image: a.image,
  }));
  return (
    <>
      <JsonLd data={[productJsonLdEn, faqJsonLdEn]} />
      <Hero />
      <InnovationSection />
      <MarketTrendsSection/>
      {SECTIONS_CONFIG.showTestimonials && <TestimonialsSection/>}
      <ProcessOverlaySection/>
      <CompositionSection/>
      <EggspertiseSection/>
      <TechnicalDocsSection/>
      <CaseStudiesSection/>
      <PartnersSection />
      <ReadyToInnovateSection />
      <AboutSection />
      <QualityAssuranceSection />
      <FAQSection />
      <BlogArticlesSection articles={latest} />
      <PressMentionsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}

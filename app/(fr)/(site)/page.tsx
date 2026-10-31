import { Hero } from "@/components/Hero";
import { InnovationSection } from "@/components/InnovationSection";
import { MarketTrendsSection } from "@/components/MarketTrendsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProcessOverlaySection } from "@/components/ProcessOverlaySection";
import { CompositionSection } from "@/components/CompositionSection";
import { EggspertiseSection } from "@/components/EggspertiseSection";
import { TechnicalDocsSection } from "@/components/TechnicalDocsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ReadyToInnovateSection } from "@/components/ReadyToInnovateSection";
import { AboutSection} from "@/components/AboutSection";
import { QualityAssuranceSection } from "@/components/QualityAssuranceSection";
import { FAQSection } from "@/components/FAQSection";
import { BlogArticlesSection } from "@/components/BlogArticlesSection";
import { PressMentionsSection } from "@/components/PressMentionsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { fetchLatestArticles } from "@/lib/airtable";
import { PAGES, pageMetadata, productJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(PAGES.home);

// Feature flags for toggling sections on the homepage
const SECTIONS_CONFIG = {
  // Set to true to re-enable the testimonials section
  showTestimonials: true,
};

export default async function Home() {
  // Trois derniers articles publiés, pour le bloc « articles » de l'accueil
  const latest = (await fetchLatestArticles("fr", 3)).map((a) => ({
    href: a.href,
    title: a.title,
    excerpt: a.excerpt,
    image: a.image,
  }));
  return (
    <>
      <JsonLd data={[productJsonLd, faqJsonLd]} />
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

      {/* Ajoute ici les prochaines sections */}
    </>
  );
}

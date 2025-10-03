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

export default function Home() {
  return (
    <>
      <Hero />
      <InnovationSection />
      <MarketTrendsSection/>
      <TestimonialsSection/>
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
      <BlogArticlesSection />
      <PressMentionsSection />
      <NewsletterSection />
      <Footer />

      {/* Ajoute ici les prochaines sections */}
    </>
  );
}

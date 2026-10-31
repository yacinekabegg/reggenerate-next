import { JsonLd } from "@/components/JsonLd";
import { PAGES, pageMetadata, productJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(PAGES.ingredient);

export default function IngredientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={productJsonLd} />
      {children}
    </>
  );
}

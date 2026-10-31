import { JsonLd } from "@/components/JsonLd";
import { PAGES_EN, pageMetadataEn, productJsonLdEn } from "@/lib/seo";

export const metadata = pageMetadataEn(PAGES_EN.ingredient);

export default function IngredientLayoutEn({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={productJsonLdEn} />
      {children}
    </>
  );
}

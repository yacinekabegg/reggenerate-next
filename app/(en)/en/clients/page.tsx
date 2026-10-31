import ClientsPageClient from "./ClientsPageClient";
import { fetchClientProductsFromAirtable } from "@/lib/clientProducts";

import { PAGES_EN, pageMetadataEn } from "@/lib/seo";

export const metadata = pageMetadataEn(PAGES_EN.clients);

export const revalidate = 3600;
export const dynamic = "force-static";

export default async function ClientsPageEn() {
  const products = await fetchClientProductsFromAirtable();
  return <ClientsPageClient products={products} />;
}

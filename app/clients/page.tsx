import ClientsPageClient from "./ClientsPageClient";
import { fetchClientProductsFromAirtable } from "@/lib/clientProducts";

export const revalidate = 3600;
export const dynamic = "force-static";

export default async function ClientsPage() {
  const products = await fetchClientProductsFromAirtable();
  return <ClientsPageClient products={products} />;
}

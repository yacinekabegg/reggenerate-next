import { PAGES, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(PAGES.readyToMarket);

export default function ReadyToMarketLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

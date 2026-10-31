import { PAGES_EN, pageMetadataEn } from "@/lib/seo";

export const metadata = pageMetadataEn(PAGES_EN.readyToMarket);

export default function ReadyToMarketLayoutEn({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

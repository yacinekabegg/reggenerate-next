import type { Metadata } from "next";

// Refonte en préparation : hors index Google pour éviter les doublons avec le site en ligne.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NouveauLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

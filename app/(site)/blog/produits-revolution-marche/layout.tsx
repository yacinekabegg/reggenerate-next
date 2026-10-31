import type { Metadata } from "next";

// Article encore en cours de rédaction : hors index Google tant qu'il n'est pas publié.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function DraftArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

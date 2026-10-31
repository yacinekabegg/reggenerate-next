import type { Metadata } from "next";
import { RootHtml } from "@/components/RootHtml";

// Racine du site anglais (/en) : même squelette que le site français, langue « en ».
export const metadata: Metadata = {
  metadataBase: new URL("https://reggenerate.circulegg.fr"),
  title: "Reggenerate™: the new generation of vegetarian collagen.",
  description:
    "The first upcycled ingredient from the egg, Reggenerate™ brings together collagen, hyaluronic acid and elastin for beauty and mobility.",
  openGraph: {
    title: "Reggenerate™: the new generation of vegetarian collagen.",
    description:
      "The first upcycled ingredient from the egg, Reggenerate™ brings together collagen, hyaluronic acid and elastin for beauty and mobility.",
    type: "website",
    url: "https://reggenerate.circulegg.fr/en",
    images: ["/images/blog-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reggenerate™: the new generation of vegetarian collagen.",
    description:
      "The first upcycled ingredient from the egg, Reggenerate™ brings together collagen, hyaluronic acid and elastin for beauty and mobility.",
    images: ["/images/blog-hero.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayoutEn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootHtml lang="en">{children}</RootHtml>;
}

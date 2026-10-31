import type { Metadata } from "next";
import { RootHtml } from "@/components/RootHtml";

export const metadata: Metadata = {
  metadataBase: new URL("https://reggenerate.circulegg.fr"),
  title: "Reggenerate™ — La nouvelle génération de collagène végétarien.",
  description:
    "Premier ingrédient upcyclé issu de l’œuf, Reggenerate™ réunit collagène, acide hyaluronique et élastine pour la beauté et la mobilité.",
  openGraph: {
    title: "Reggenerate™ — La nouvelle génération de collagène végétarien.",
    description:
      "Premier ingrédient upcyclé issu de l’œuf, Reggenerate™ réunit collagène, acide hyaluronique et élastine pour la beauté et la mobilité.",
    type: "website",
    url: "https://reggenerate.circulegg.fr",
    images: ["/images/blog-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reggenerate™ — La nouvelle génération de collagène végétarien.",
    description:
      "Premier ingrédient upcyclé issu de l’œuf, Reggenerate™ réunit collagène, acide hyaluronique et élastine pour la beauté et la mobilité.",
    images: ["/images/blog-hero.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootHtml lang="fr">{children}</RootHtml>;
}

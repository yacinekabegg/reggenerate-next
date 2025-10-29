import type { Metadata } from "next";
import { Roboto, League_Spartan } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://circulegg.fr"),
  title: "Reggenerate™ — La nouvelle génération de collagène végétarien.",
  description:
    "Premier ingrédient upcyclé issu de l’œuf, Reggenerate™ réunit collagène, acide hyaluronique et élastine pour la beauté et la mobilité.",
  openGraph: {
    title: "Reggenerate™ — La nouvelle génération de collagène végétarien.",
    description:
      "Premier ingrédient upcyclé issu de l’œuf, Reggenerate™ réunit collagène, acide hyaluronique et élastine pour la beauté et la mobilité.",
    type: "website",
    url: "https://circulegg.fr",
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
  return (
    <html lang="en">
      <head>
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </head>
      <body suppressHydrationWarning className={`${roboto.variable} ${leagueSpartan.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

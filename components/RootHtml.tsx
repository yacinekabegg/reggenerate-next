// Squelette HTML commun aux deux racines du site (français « / » et anglais
// « /en ») : polices, Google Analytics, Tally. Seule la langue déclarée change.
import { Roboto, League_Spartan } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd, websiteJsonLdEn } from "@/lib/seo";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export function RootHtml({
  lang,
  children,
}: Readonly<{
  lang: "fr" | "en";
  children: React.ReactNode;
}>) {
  return (
    <html lang={lang}>
        <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap"
        />
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T9CJYYZRKY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T9CJYYZRKY');
          `}
        </Script>
      </head>

      <body suppressHydrationWarning className={`${roboto.variable} ${leagueSpartan.variable} antialiased`}>
        <JsonLd data={[organizationJsonLd, lang === "en" ? websiteJsonLdEn : websiteJsonLd]} />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto, League_Spartan } from "next/font/google";
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
  title: "Reggenerate - Innovation en Nutrition Clinique",
  description: "Reggenerate - Innovation en Nutrition Clinique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${roboto.variable} ${leagueSpartan.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

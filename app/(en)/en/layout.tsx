import { Header } from "@/components/Header";

export default function SiteLayoutEn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header locale="en" />
      {children}
    </>
  );
}

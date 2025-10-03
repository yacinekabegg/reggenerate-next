import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed items-center inset-x-0 top-0 z-50 border-b border-white/20 bg-[#2eb2a4] px-6">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/1 (1).png"
            alt="Reggenerate"
            width={140}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-8 text-sm font-bold tracking-[0.2px] text-white">
          <Link href="/">Accueil</Link>
          <Link href="/ingredient">Ingrédient</Link>
          <Link href="/ready-to-market">Ready-to-Market</Link>
          <Link href="/clients">Nos Clients</Link>
          <Link href="/#about">Notre Histoire</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { label: "Acccueil", href: "/" },
  { label: "Ingrédient", href: "/ingredient" },
  { label: "Ready-to-Market", href: "/ready-to-market" },
  { label: "Nos Clients", href: "/clients" },
  { label: "Blog", href: "/blog" },
];

const usefulLinks = [
  // { label: "FAQ", href: "#faq" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGU", href: "/cgu" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];

export function Footer() {
  return (
    <footer className="bg-[#2eb2a4] py-8 pb-4 text-white">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="overflow-hidden rounded-[20px]">
            <Image
              src="/images/32.png"
              alt="Œuf super héros"
              width={500}
              height={500}
              className="h-[500px] w-[500px] object-cover object-center"
              priority
            />
          </div>

          <div className="flex flex-1 flex-col items-end gap-8">
            <div className="flex items-center gap-4 overflow-hidden">
              <Image
                src="/images/PHOTOS SITES.png"
                alt="Circul'Egg"
                width={529}
                height={126}
                className="h-[126px] w-[529px] object-cover object-center"
                priority
              />
            </div>

            <div className="flex gap-24 text-left">
              <div>
                <h3 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[1.5rem] font-bold uppercase">
                  Menus
                </h3>
                <ul className="mt-4 space-y-3 font-['Roboto',Arial,sans-serif] text-base leading-7">
                  {menuLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white transition hover:text-white/80">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-['League_Spartan','Roboto',Arial,sans-serif] text-[1.5rem] font-bold uppercase">
                  Liens utiles
                </h3>
                <ul className="mt-4 space-y-3 font-['Roboto',Arial,sans-serif] text-base leading-7">
                  {usefulLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white transition hover:text-white/80">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center self-center w-full">
          <p className="font-['Roboto',Arial,sans-serif] text-sm text-white/80">
            © Circul&apos;Egg {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

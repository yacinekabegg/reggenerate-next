import Image from "next/image";
import Link from "next/link";

const usefulLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Prendre rendez-vous", href: "#rdv" },
  { label: "Echantillon", href: "#echantillon" },
  { label: "Documentation", href: "#documentation" },
  { label: "Devis", href: "#devis" },
  { label: "Rejoindre l'aventure", href: "#rejoindre" },
];

const menuLinks = [
  { label: "Acccueil", href: "/" },
  { label: "Ingrédient", href: "/ingredient" },
  { label: "Ready-to-Market", href: "/ready-to-market" },
  { label: "Nos Clients", href: "/clients" },
  { label: "Notre Histoire", href: "#about" },
  { label: "Blog", href: "/blog" },
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
                  Lien utiles
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
            </div>

            <div className="mt-4 text-right">
              <p className="font-['Roboto',Arial,sans-serif] text-sm text-white/80">
                © Circul&apos;Egg 2025 // Mentions légales et conditions d&apos;utilisations • Politique de confidentialité et politique cookies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

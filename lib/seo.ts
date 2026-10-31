// Données SEO et GEO centralisées.
// Les textes ci-dessous ne s'affichent pas sur les pages : ils servent aux
// moteurs de recherche (balises title et description) et aux IA (données
// structurées). Modifier ici pour changer ce qu'affiche Google.

import type { Metadata } from "next";

// Adresses sans "/" final : en ligne, GitHub Pages sert /ingredient (200)
// et renvoie 404 sur /ingredient/. Ne pas ajouter de "/" aux chemins ci-dessous.
export const SITE_URL = "https://reggenerate.circulegg.fr";
export const BRAND = "Reggenerate™";

// Date de dernière mise à jour des pages fixes du site (pour le sitemap).
// À changer quand le contenu d'une page principale change.
export const SITE_UPDATED = "2026-11-01";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Chemin de la même page dans l'autre langue (balises hreflang) */
  alt?: string;
};

export const PAGES = {
  home: {
    title: "Ingrédient articulations, peau et cheveux | Reggenerate™ membrane d'œuf",
    description:
      "Reggenerate™, membrane d'œuf : collagène, élastine, acide hyaluronique, glucosamine, chondroïtine en 300 mg. Pour vos formules articulations, peau, cheveux.",
    path: "/",
    alt: "/en",
  },
  ingredient: {
    title: "Membrane d'œuf native : composition, études, qualité | Reggenerate™",
    description:
      "Composition, bienfaits pour la peau et les articulations, 16 études scientifiques, spécifications et qualité de Reggenerate™, membrane de coquille d'œuf native.",
    path: "/ingredient",
    alt: "/en/ingredient",
  },
  readyToMarket: {
    title: "Compléments en marque blanche à la membrane d'œuf | Reggenerate™",
    description:
      "Notre gamme EGGspress Launch : des formules prêtes à lancer à base de Reggenerate™, en gélules, comprimés, poudres, gummies et barres.",
    path: "/ready-to-market",
    alt: "/en/ready-to-market",
  },
  clients: {
    title: "Marques et produits à la membrane d'œuf | Reggenerate™",
    description:
      "Les marques de compléments alimentaires qui formulent avec Reggenerate™, membrane de coquille d'œuf : gélules, gummies, poudres et barres.",
    path: "/clients",
    alt: "/en/clients",
  },
  blog: {
    title: "Blog membrane d'œuf, collagène et formulation | Reggenerate™",
    description:
      "Expertise technique, innovations, marché et tendances, beauté et santé : les articles Reggenerate™ sur la membrane d'œuf et les compléments alimentaires.",
    path: "/blog",
    alt: "/en/blog",
  },
  mentionsLegales: {
    title: "Mentions légales | Reggenerate™",
    description: "Informations légales relatives au site Reggenerate™ de Circul'Egg.",
    path: "/mentions-legales",
    alt: "/en/mentions-legales",
  },
  cgu: {
    title: "Conditions générales d'utilisation | Reggenerate™",
    description: "Règles d'utilisation du site Reggenerate™ et responsabilités.",
    path: "/cgu",
    alt: "/en/cgu",
  },
  confidentialite: {
    title: "Politique de confidentialité | Reggenerate™",
    description: "Transparence sur la collecte et l'usage de vos données sur le site Reggenerate™.",
    path: "/politique-de-confidentialite",
    alt: "/en/politique-de-confidentialite",
  },
} satisfies Record<string, PageSeo>;

// Version anglaise du site (/en). Mêmes pages, textes traduits.
export const PAGES_EN = {
  home: {
    title: "Joint, skin and hair ingredient | Reggenerate™ eggshell membrane",
    description:
      "Reggenerate™, eggshell membrane: collagen, elastin, hyaluronic acid, glucosamine and chondroitin in 300 mg. For your joint, skin and hair formulas.",
    path: "/en",
    alt: "/",
  },
  ingredient: {
    title: "Native eggshell membrane: composition, studies, quality | Reggenerate™",
    description:
      "Composition, benefits for skin and joints, 16 scientific studies, specifications and quality of Reggenerate™, native eggshell membrane.",
    path: "/en/ingredient",
    alt: "/ingredient",
  },
  readyToMarket: {
    title: "Private label eggshell membrane supplements | Reggenerate™",
    description:
      "Our EGGspress Launch range: ready-to-launch formulas based on Reggenerate™, in capsules, tablets, powders, gummies and bars.",
    path: "/en/ready-to-market",
    alt: "/ready-to-market",
  },
  clients: {
    title: "Brands and products with eggshell membrane | Reggenerate™",
    description:
      "The dietary supplement brands formulating with Reggenerate™, eggshell membrane: capsules, gummies, powders and bars.",
    path: "/en/clients",
    alt: "/clients",
  },
  blog: {
    title: "Eggshell membrane, collagen and formulation blog | Reggenerate™",
    description:
      "Technical expertise, innovation, market and trends, beauty and health: Reggenerate™ articles on eggshell membrane and dietary supplements.",
    path: "/en/blog",
    alt: "/blog",
  },
  mentionsLegales: {
    title: "Legal notice | Reggenerate™",
    description: "Legal information about the Reggenerate™ website by Circul'Egg.",
    path: "/en/mentions-legales",
    alt: "/mentions-legales",
  },
  cgu: {
    title: "Terms of use | Reggenerate™",
    description: "Rules for using the Reggenerate™ website and responsibilities.",
    path: "/en/cgu",
    alt: "/cgu",
  },
  confidentialite: {
    title: "Privacy policy | Reggenerate™",
    description: "Transparency on how your data is collected and used on the Reggenerate™ website.",
    path: "/en/politique-de-confidentialite",
    alt: "/politique-de-confidentialite",
  },
} satisfies Record<string, PageSeo>;

export type Locale = "fr" | "en";

/** Balises hreflang : la page courante, son équivalent dans l'autre langue, et le français par défaut. */
export function languageAlternates(locale: Locale, path: string, alt?: string) {
  const fr = locale === "fr" ? path : alt;
  const en = locale === "en" ? path : alt;
  const languages: Record<string, string> = {};
  if (fr) languages["fr"] = fr;
  if (en) languages["en"] = en;
  if (fr) languages["x-default"] = fr;
  return languages;
}

function buildMetadata(locale: Locale, page: PageSeo, extra: Partial<Metadata> = {}): Metadata {
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: page.path,
      languages: languageAlternates(locale, page.path, page.alt),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: BRAND,
      locale: locale === "en" ? "en_US" : "fr_FR",
      type: "website",
      images: ["/images/blog-hero.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    ...extra,
  };
}

/** Construit les métadonnées Next.js d'une page : title, description, canonical, hreflang, Open Graph. */
export function pageMetadata(page: PageSeo, extra: Partial<Metadata> = {}): Metadata {
  return buildMetadata("fr", page, extra);
}

/** Même chose pour une page du site anglais. */
export function pageMetadataEn(page: PageSeo, extra: Partial<Metadata> = {}): Metadata {
  return buildMetadata("en", page, extra);
}

/** Articles codés en dur encore en cours de rédaction : hors index et hors sitemap. */
export const DRAFT_BLOG_SLUGS = [
  "collagene-marche-vraiment",
  "membrane-nouvelle-revolution",
  "molecules-indispensables-belle-peau",
  "produits-revolution-marche",
];

/** Articles codés en dur publiés. */
export const STATIC_BLOG_ARTICLES = [
  {
    slug: "10-astuces-naturelles-sante-articulaire",
    title: "10 astuces naturelles pour améliorer votre santé articulaire",
    description:
      "Les articulations sont le socle de notre mobilité. 10 astuces éprouvées et naturelles pour préserver la flexibilité et le confort articulaire.",
    datePublished: "2025-01-15",
    image: "/images/article-1.png",
  },
  {
    slug: "tendances-2024",
    title: "Les tendances compléments alimentaires 2024 : entre naturalité, science et personnalisation",
    description:
      "En 2024, trois leviers structurent l'innovation en compléments alimentaires : la naturalité, la personnalisation et la performance scientifiquement prouvée.",
    datePublished: "2025-03-15",
    image: "/images/article-3.png",
  },
];

// ---------- Données structurées (JSON-LD) ----------

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://circulegg.fr/#organization",
  name: "Circul'Egg",
  url: "https://circulegg.fr",
  logo: `${SITE_URL}/icon.png`,
  email: "yacine.kabeche@circulegg.fr",
  // Adresse de l'usine, telle qu'affichée dans le bloc contact du site.
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 Rue Charles Lindbergh",
    postalCode: "35150",
    addressLocality: "Janzé",
    addressRegion: "Bretagne",
    addressCountry: "FR",
  },
  sameAs: ["https://circulegg.fr", SITE_URL],
  brand: { "@id": `${SITE_URL}/#reggenerate` },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BRAND,
  url: SITE_URL,
  inLanguage: "fr-FR",
  publisher: { "@id": "https://circulegg.fr/#organization" },
};

export const websiteJsonLdEn = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/en#website`,
  name: BRAND,
  url: `${SITE_URL}/en`,
  inLanguage: "en",
  publisher: { "@id": "https://circulegg.fr/#organization" },
};

// Textes repris mot pour mot du site (hero et FAQ).
export const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/#reggenerate`,
  name: BRAND,
  alternateName: ["Reggenerate", "Reggenerate®", "membrane de coquille d'œuf Circul'Egg"],
  category: "Ingrédient pour compléments alimentaires",
  description:
    "Reggenerate™ est le 1er ingrédient upcyclé issu de l'œuf et tout-en-1 qui regroupe en une seule dose tous les ingrédients indispensables pour la beauté de la peau et la santé des articulations : collagène, acide hyaluronique, élastine, glucosamine, chondroïtine. Sa versatilité et sa faible posologie permettent une intégration dans toutes les galéniques pour s'adapter à tous les besoins.",
  brand: { "@type": "Brand", name: BRAND },
  manufacturer: { "@id": "https://circulegg.fr/#organization" },
  url: `${SITE_URL}/ingredient`,
  image: `${SITE_URL}/images/blog-hero.png`,
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment ça peut fonctionner avec seulement 300 mg ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reggenerate™ est efficace à faible dose grâce à la synergie naturelle de ses biomolécules (collagène types I, V, X, élastine, acide hyaluronique, GAGs…). Contrairement à un collagène hydrolysé classique, chaque composant agit de manière complémentaire, ce qui augmente la biodisponibilité (≈85 % contre 30–50 % pour d'autres collagènes). C'est pourquoi seulement 300 mg suffisent, efficacité cliniquement prouvée à l'appui.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les types de collagènes présents ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La membrane d'œuf contient naturellement plusieurs types de collagène : Type I, le plus abondant dans la peau, les tendons et les os. Type V, impliqué dans la régulation des fibres de collagène et la structure des tissus. Type X, essentiel dans la régénération et la minéralisation du cartilage. Cette diversité explique les bénéfices à la fois sur la santé articulaire et la beauté de la peau et des cheveux.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le poids moléculaire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le collagène de la membrane d'œuf est présent sous forme native et non hydrolysée. Chaque molécule de collagène fibrillaire (types I, V et X) possède une masse d'environ 300 kDa et s'assemble en fibrilles pouvant atteindre plusieurs millions de daltons. Ce haut poids moléculaire reflète l'intégrité structurale du collagène et confirme l'absence de traitement chimique comme l'hydrolyse.",
      },
    },
  ],
};

// Version anglaise des données structurées de l'accueil et de la page ingrédient.
export const productJsonLdEn = {
  ...productJsonLd,
  "@id": `${SITE_URL}/#reggenerate`,
  alternateName: ["Reggenerate", "Reggenerate®", "Circul'Egg eggshell membrane"],
  category: "Ingredient for dietary supplements",
  description:
    "Reggenerate™ is the first upcycled, all-in-one ingredient from the egg that brings together in a single dose every essential ingredient for skin beauty and joint health: collagen, hyaluronic acid, elastin, glucosamine, chondroitin. Its versatility and low dosage allow it to be integrated into any dosage form to meet every need.",
  url: `${SITE_URL}/en/ingredient`,
};

export const faqJsonLdEn = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can it work with only 300 mg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reggenerate™ is effective at a low dose thanks to the natural synergy of its biomolecules (collagen types I, V, X, elastin, hyaluronic acid, GAGs, etc.). Unlike a conventional hydrolyzed collagen, each component acts in a complementary way, which increases bioavailability (≈85% versus 30 to 50% for other collagens). That's why just 300 mg is enough, backed by clinically proven efficacy.",
      },
    },
    {
      "@type": "Question",
      name: "Which types of collagen are present?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eggshell membrane naturally contains several types of collagen: Type I, the most abundant in skin, tendons and bones. Type V, involved in regulating collagen fibers and tissue structure. Type X, essential for cartilage regeneration and mineralization. This diversity explains the benefits for both joint health and the beauty of skin and hair.",
      },
    },
    {
      "@type": "Question",
      name: "What is the molecular weight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The collagen in eggshell membrane is present in its native, non-hydrolyzed form. Each fibrillar collagen molecule (types I, V and X) has a mass of around 300 kDa and assembles into fibrils that can reach several million daltons. This high molecular weight reflects the structural integrity of the collagen and confirms the absence of chemical processing such as hydrolysis.",
      },
    },
  ],
};

export function articleJsonLd(a: {
  title: string;
  description?: string;
  path: string;
  image?: string;
  datePublished?: string;
  author?: { name: string; jobTitle: string };
  locale?: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    url: `${SITE_URL}${a.path}`,
    mainEntityOfPage: `${SITE_URL}${a.path}`,
    image: a.image ? `${SITE_URL}${a.image}` : undefined,
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    inLanguage: a.locale === "en" ? "en" : "fr-FR",
    author: a.author
      ? {
          "@type": "Person",
          name: a.author.name,
          jobTitle: a.author.jobTitle,
          worksFor: { "@id": "https://circulegg.fr/#organization" },
        }
      : { "@id": "https://circulegg.fr/#organization" },
    publisher: { "@id": "https://circulegg.fr/#organization" },
    about: { "@id": `${SITE_URL}/#reggenerate` },
  };
}

// Fil d'Ariane Accueil > Blog > Article, pour Google.
export function breadcrumbJsonLd(title: string, path: string, locale: Locale = "fr") {
  const en = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: en ? "Home" : "Accueil", item: `${SITE_URL}${en ? "/en" : "/"}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}${en ? "/en/blog" : "/blog"}` },
      { "@type": "ListItem", position: 3, name: title, item: `${SITE_URL}${path}` },
    ],
  };
}

// FAQ d'un article : extraite automatiquement de la section « Questions
// fréquentes » du contenu Airtable (paires h3 question / paragraphes réponse).
// Ne renvoie rien si l'article n'a pas cette section.
function stripTags(html: string) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
export function faqJsonLdFromHtml(html: string) {
  const m = html.match(/<h2[^>]*>\s*(?:Questions fréquentes|Frequently asked questions|FAQ)\s*<\/h2>([\s\S]*)$/i);
  if (!m) return undefined;
  const section = m[1].split(/<h2[^>]*>/i)[0];
  const parts = section.split(/<h3[^>]*>/i).slice(1);
  const qa = parts
    .map((part) => {
      const [q, rest = ""] = part.split(/<\/h3>/i);
      return { q: stripTags(q), a: stripTags(rest) };
    })
    .filter((x) => x.q && x.a);
  if (!qa.length) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

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
export const SITE_UPDATED = "2026-10-31";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const PAGES = {
  home: {
    title: "Ingrédient articulations, peau et cheveux | Reggenerate™ membrane d'œuf",
    description:
      "Reggenerate™, membrane d'œuf : collagène, élastine, acide hyaluronique, glucosamine, chondroïtine en 300 mg. Pour vos formules articulations, peau, cheveux.",
    path: "/",
  },
  ingredient: {
    title: "Membrane d'œuf native : composition, études, qualité | Reggenerate™",
    description:
      "Composition, bienfaits pour la peau et les articulations, 16 études scientifiques, spécifications et qualité de Reggenerate™, membrane de coquille d'œuf native.",
    path: "/ingredient",
  },
  readyToMarket: {
    title: "Compléments en marque blanche à la membrane d'œuf | Reggenerate™",
    description:
      "Notre gamme EGGspress Launch : des formules prêtes à lancer à base de Reggenerate™, en gélules, comprimés, poudres, gummies et barres.",
    path: "/ready-to-market",
  },
  clients: {
    title: "Marques et produits à la membrane d'œuf | Reggenerate™",
    description:
      "Les marques de compléments alimentaires qui formulent avec Reggenerate™, membrane de coquille d'œuf : gélules, gummies, poudres et barres.",
    path: "/clients",
  },
  blog: {
    title: "Blog membrane d'œuf, collagène et formulation | Reggenerate™",
    description:
      "Expertise technique, innovations, marché et tendances, beauté et santé : les articles Reggenerate™ sur la membrane d'œuf et les compléments alimentaires.",
    path: "/blog",
  },
  mentionsLegales: {
    title: "Mentions légales | Reggenerate™",
    description: "Informations légales relatives au site Reggenerate™ de Circul'Egg.",
    path: "/mentions-legales",
  },
  cgu: {
    title: "Conditions générales d'utilisation | Reggenerate™",
    description: "Règles d'utilisation du site Reggenerate™ et responsabilités.",
    path: "/cgu",
  },
  confidentialite: {
    title: "Politique de confidentialité | Reggenerate™",
    description: "Transparence sur la collecte et l'usage de vos données sur le site Reggenerate™.",
    path: "/politique-de-confidentialite",
  },
} satisfies Record<string, PageSeo>;

/** Construit les métadonnées Next.js d'une page : title, description, canonical, Open Graph. */
export function pageMetadata(page: PageSeo, extra: Partial<Metadata> = {}): Metadata {
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: BRAND,
      locale: "fr_FR",
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

export function articleJsonLd(a: {
  title: string;
  description?: string;
  path: string;
  image?: string;
  datePublished?: string;
  author?: { name: string; jobTitle: string };
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
    inLanguage: "fr-FR",
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
export function breadcrumbJsonLd(title: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
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
  const m = html.match(/<h2[^>]*>\s*Questions fréquentes\s*<\/h2>([\s\S]*)$/i);
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

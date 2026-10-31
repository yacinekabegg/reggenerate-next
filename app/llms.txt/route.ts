import { fetchPublishedMeta } from "@/lib/airtable";
import { DRAFT_BLOG_SLUGS, SITE_URL, STATIC_BLOG_ARTICLES } from "@/lib/seo";

export const dynamic = "force-static";

// llms.txt : résumé du site pour les IA (ChatGPT, Claude, Perplexity...).
// Régénéré à chaque reconstruction, avec la liste des articles publiés.
const INTRO = `# Reggenerate™

> Reggenerate™ est le 1er ingrédient upcyclé issu de l'œuf et tout-en-1 qui regroupe en une seule dose tous les ingrédients indispensables pour la beauté de la peau et la santé des articulations : collagène, acide hyaluronique, élastine, glucosamine, chondroïtine. Sa versatilité et sa faible posologie permettent une intégration dans toutes les galéniques pour s'adapter à tous les besoins.

Reggenerate™ est un ingrédient B2B de Circul'Egg (https://circulegg.fr), destiné aux marques de compléments alimentaires, aux formulateurs et aux façonniers.

## Points clés

- Ingrédient : membrane de coquille d'œuf, présente sous forme native et non hydrolysée.
- Actifs naturellement présents : collagène (types I, V et X), élastine, acide hyaluronique, glucosamine, chondroïtine, GAGs.
- Dose : 300 mg par jour.
- Galéniques : gélules, comprimés, poudres, gummies, barres.
- Fournisseur : Circul'Egg, entreprise française basée à Janzé (Bretagne).
- Positionnement : ingrédient pour compléments alimentaires articulations, peau et cheveux.

## Pages

- [Accueil](https://reggenerate.circulegg.fr/) : présentation de Reggenerate™
- [L'ingrédient](https://reggenerate.circulegg.fr/ingredient) : composition, bienfaits, études scientifiques, sourcing, spécifications, qualité
- [Ready-to-market](https://reggenerate.circulegg.fr/ready-to-market) : gamme EGGspress Launch, formules prêtes à lancer
- [Nos clients](https://reggenerate.circulegg.fr/clients) : produits des marques qui formulent avec Reggenerate™
- [Blog](https://reggenerate.circulegg.fr/blog) : articles sur la membrane d'œuf, le collagène et les compléments alimentaires`;

const CONTACT = `- Circul'Egg : https://circulegg.fr
- yacine.kabeche@circulegg.fr`;

// Résumé en anglais, pour les requêtes en anglais (site traduit sous /en).
const INTRO_EN = `## English version

> Reggenerate™ is the first upcycled, all-in-one ingredient from the egg that brings together in a single dose every essential ingredient for skin beauty and joint health: collagen, hyaluronic acid, elastin, glucosamine, chondroitin. Its versatility and low dosage allow it to be integrated into any dosage form.

- Ingredient: eggshell membrane, in its native, non-hydrolyzed form.
- Naturally present actives: collagen (types I, V and X), elastin, hyaluronic acid, glucosamine, chondroitin, GAGs.
- Dose: 300 mg per day.
- Dosage forms: capsules, tablets, powders, gummies, bars.
- Supplier: Circul'Egg, a French company based in Janzé (Brittany).
- Positioning: ingredient for joint, skin and hair dietary supplements.

### Pages (English)

- [Home](https://reggenerate.circulegg.fr/en)
- [The ingredient](https://reggenerate.circulegg.fr/en/ingredient): composition, benefits, scientific studies, sourcing, specifications, quality
- [Ready-to-market](https://reggenerate.circulegg.fr/en/ready-to-market): EGGspress Launch range, ready-to-launch formulas
- [Our clients](https://reggenerate.circulegg.fr/en/clients): products from the brands formulating with Reggenerate™
- [Blog](https://reggenerate.circulegg.fr/en/blog): articles on eggshell membrane, collagen and dietary supplements

### Articles (English)`;

export async function GET() {
  let posts: { slug: string; title: string; excerpt: string }[] = [];
  let postsEn: { slug: string; title: string; excerpt: string }[] = [];
  try {
    [posts, postsEn] = await Promise.all([fetchPublishedMeta("fr"), fetchPublishedMeta("en")]);
  } catch {
    posts = [];
    postsEn = [];
  }
  const all = [
    ...posts.filter((p) => !DRAFT_BLOG_SLUGS.includes(p.slug)),
    ...STATIC_BLOG_ARTICLES.map((a) => ({ slug: a.slug, title: a.title, excerpt: a.description })),
  ];
  const seen = new Set<string>();
  const lines = all
    .filter((p) => (seen.has(p.slug) ? false : (seen.add(p.slug), true)))
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug})${p.excerpt ? ` : ${p.excerpt}` : ""}`);

  const linesEn = postsEn.map(
    (p) => `- [${p.title}](${SITE_URL}/en/blog/${p.slug})${p.excerpt ? `: ${p.excerpt}` : ""}`,
  );

  const body = [
    INTRO.trim(),
    "",
    "## Articles",
    "",
    ...lines,
    "",
    INTRO_EN.trim(),
    "",
    ...linesEn,
    "",
    "## Contact",
    "",
    CONTACT.trim(),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export type BlogArticle = {
  category: "innovation" | "sante" | "marche" | "technique" | "beaute";
  href: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  label: string;
  labelColor: string;
  badge: string;
  image: string; // path to image
};

export const blogArticles: BlogArticle[] = [
  {
    category: "sante",
    href: "/blog/10-astuces-naturelles-sante-articulaire",
    title: "10 astuces naturelles pour améliorer votre santé articulaire",
    date: "15 Janvier 2025",
    read: "5 min",
    excerpt:
      "Comment maintenir une mobilité articulaire optimale avec des solutions naturelles et des ingrédients innovants...",
    label: "SANTÉ & BIEN-ÊTRE",
    labelColor: "#2eb2a4",
    badge: "🥚",
    image: "/images/article-1.png",
  },
  {
    category: "technique",
    href: "/blog/membrane-nouvelle-revolution",
    title: "La membrane d’oeuf, nouvelle révolution",
    date: "15 Février 2025",
    read: "3 min",
    excerpt:
      "Découvrez comment la membrane d'œuf transforme le monde des compléments alimentaires avec ses propriétés uniques...",
    label: "EGGSPERTISE TECHNIQUE",
    labelColor: "#FF6B6B",
    badge: "📈",
    image: "/images/article-2.png",
  },
  {
    category: "marche",
    href: "/blog/tendances-2024",
    title: "Les Tendances Compléments Alimentaires 2024",
    date: "15 Mars 2025",
    read: "8 min",
    excerpt:
      "Analyse des nouvelles tendances du marché : du naturel au personnalisé, découvrez ce qui va marquer 2024...",
    label: "MARCHÉ & TENDANCES",
    labelColor: "#90EE90",
    badge: "🦴",
    image: "/images/article-3.png",
  },
  {
    category: "beaute",
    href: "/blog/molecules-indispensables-belle-peau",
    title: "3 molécules indispensables pour une belle peau",
    date: "15 Avril 2025",
    read: "5 min",
    excerpt:
      "Dès 25 ans, les réserves en collagène, acide hyaluronique et élastine diminuent, entraînant le vieillissement de la peau. Mais à quoi servent ces molécules et comment contrer ce phénomène ?",
    label: "BEAUTÉ PEAU & CHEVEUX",
    labelColor: "#87CEEB",
    badge: "🧪",
    image: "/images/article-4.png",
  },
  {
    category: "innovation",
    href: "/blog/produits-revolution-marche",
    title: "Ces 5 produits qui révolutionnent totalement le marché",
    date: "15 Mai 2025",
    read: "8 min",
    excerpt:
      "Dans cet océan de compléments alimentaires, cinq produits surgissent tel un raz-de-marée, déferlant avec une innovation qui fait grand bruit. Découvrez pourquoi ils captivent autant.",
    label: "INNOVATIONS",
    labelColor: "#FF69B4",
    badge: "✨",
    image: "/images/article-5.png",
  },
  {
    category: "technique",
    href: "/blog/collagene-marche-vraiment",
    title: "Le Collagène ça marche vraiment ?",
    date: "15 Juin 2025",
    read: "8 min",
    excerpt:
      "Le collagène n’est pas efficace, le corps ne l’absorbe pas, c’est dangereux, c’est marketing...on répond à toutes les objections sur le collagène et on lève le voile sur cet ingrédient hyper tendance.",
    label: "EGGSPERTISE TECHNIQUE",
    labelColor: "#8B4513",
    badge: "📋",
    image: "/images/article-6.png",
  },
];


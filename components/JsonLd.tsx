// Injecte des données structurées schema.org (JSON-LD) dans la page.
// Invisible pour le visiteur, lu par Google et les IA.

// Les "/" sont échappés en "\\/" (équivalent en JSON) : sinon le proxy Weglot
// réécrit les URL du site (ajout de /en/, /de/...) à l'intérieur du flux React,
// en change la longueur et casse l'affichage des pages traduites.
function serialize(data: object | object[]) {
  return JSON.stringify(data).replace(/</g, "\\u003c").replace(/\//g, "\\/");
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Le contenu vient de constantes du code, pas d'une saisie utilisateur.
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
    />
  );
}

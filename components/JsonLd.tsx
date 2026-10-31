// Injecte des données structurées schema.org (JSON-LD) dans la page.
// Invisible pour le visiteur, lu par Google et les IA.
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Le contenu vient de constantes du code, pas d'une saisie utilisateur.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

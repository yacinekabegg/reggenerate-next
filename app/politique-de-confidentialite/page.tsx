import { Footer } from "@/components/Footer";

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="pt-16">
      <section className="bg-[#e8f6f4] py-10 px-6">
        <div className="mx-auto w-full max-w-[1100px]">
          <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[#4e53a3]">Politique de confidentialité</h1>
          <p className="mt-2 text-[#4e53a3] opacity-80">Transparence sur la collecte et l&apos;usage de vos données.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <div className="rounded-2xl border-2 border-[#2eb2a4] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="space-y-8 text-[#2e2e2e]">
              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">1. Responsable de traitement</h2>
                <p className="mt-2">Circul&apos;Egg – Contact: <a className="text-[#2eb2a4] underline" href="mailto:yacine.kabeche@circulegg.fr">yacine.kabeche@circulegg.fr</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">2. Données collectées</h2>
                <p className="mt-2">Données d’identification (nom, email), données de contact, contenus de messages envoyés via les formulaires, données de navigation (cookies/analytics).</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">3. Finalités</h2>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Répondre à vos demandes et gérer la relation client.</li>
                  <li>Amélioration du site et mesure d’audience.</li>
                  <li>Sécurité et prévention de la fraude.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">4. Bases légales</h2>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Exécution de mesures précontractuelles/contractuelles.</li>
                  <li>Intérêt légitime (amélioration du site, sécurité).</li>
                  <li>Consentement (cookies non essentiels, newsletters le cas échéant).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">5. Durées de conservation</h2>
                <p className="mt-2">Les données sont conservées pour la durée nécessaire aux finalités: demandes (12 à 24 mois), analytics (13 mois), obligations légales applicables.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">6. Destinataires</h2>
                <p className="mt-2">Équipe interne Circul&apos;Egg et prestataires techniques habilités (hébergement, analytics) liés par des engagements de confidentialité.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">7. Transferts hors UE</h2>
                <p className="mt-2">Le cas échéant, encadrés par des Clauses Contractuelles Types et mesures complémentaires. Vous pouvez nous contacter pour plus d’informations.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">8. Vos droits</h2>
                <p className="mt-2">Accès, rectification, effacement, opposition, limitation, portabilité, directives post-mortem. Pour exercer vos droits, écrivez à <a className="text-[#2eb2a4] underline" href="mailto:yacine.kabeche@circulegg.fr">yacine.kabeche@circulegg.fr</a> en joignant une pièce d’identité.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">9. Cookies</h2>
                <p className="mt-2">Voir la section « Cookies » des <a className="text-[#2eb2a4] underline" href="/mentions-legales">Mentions légales</a>. Vous pouvez gérer vos préférences dans votre navigateur.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">10. Sécurité</h2>
                <p className="mt-2">Mesures techniques et organisationnelles appropriées sont mises en place pour protéger vos données contre l’accès non autorisé, l’altération ou la perte.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


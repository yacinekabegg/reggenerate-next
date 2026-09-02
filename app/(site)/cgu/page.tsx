import { Footer } from "@/components/Footer";

export default function CGUPage() {
  return (
    <main className="pt-16">
      <section className="bg-[#e8f6f4] py-10 px-6">
        <div className="mx-auto w-full max-w-[1100px]">
          <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[#4e53a3]">Conditions Générales d&apos;Utilisation (CGU)</h1>
          <p className="mt-2 text-[#4e53a3] opacity-80">Règles d&apos;utilisation du site et responsabilités.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <div className="rounded-2xl border-2 border-[#2eb2a4] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="space-y-8 text-[#2e2e2e]">
              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">1. Objet</h2>
                <p className="mt-2">Les présentes CGU ont pour objet de définir les modalités d’accès et d’utilisation du site reggenerate.circulegg.fr.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">2. Accès au site</h2>
                <p className="mt-2">Le site est accessible gratuitement à tout Utilisateur disposant d’un accès Internet. Les coûts liés à l’accès (matériel, logiciel, connexion) sont à la charge de l’Utilisateur.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">3. Propriété intellectuelle</h2>
                <p className="mt-2">Les contenus du site sont protégés par le droit d’auteur. Toute reproduction ou représentation sans autorisation est interdite.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">4. Responsabilité</h2>
                <p className="mt-2">L’Éditeur s’efforce d’assurer l’exactitude des informations publiées mais ne peut garantir l’absence d’erreurs ou d’omissions. L’Utilisateur utilise le site sous sa seule responsabilité.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">5. Liens hypertextes</h2>
                <p className="mt-2">Le site peut contenir des liens vers d’autres sites. L’Éditeur n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">6. Données personnelles</h2>
                <p className="mt-2">Pour toute information concernant le traitement des données personnelles, veuillez consulter notre <a className="text-[#2eb2a4] underline" href="/politique-de-confidentialite">Politique de confidentialité</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">7. Cookies</h2>
                <p className="mt-2">Pour en savoir plus sur l’utilisation des cookies, consultez la section « Cookies » des <a className="text-[#2eb2a4] underline" href="/mentions-legales">Mentions légales</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">8. Droit applicable</h2>
                <p className="mt-2">Les présentes CGU sont régies par le droit français. En cas de litige, et à défaut d’accord amiable, les tribunaux compétents seront ceux du ressort de la Cour d’appel de Paris.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">9. Modifications</h2>
                <p className="mt-2">L’Éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs sont invités à les consulter régulièrement.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">10. Contact</h2>
                <p className="mt-2">Pour toute question relative aux CGU : <a className="text-[#2eb2a4] underline" href="mailto:yacine.kabeche@circulegg.fr">yacine.kabeche@circulegg.fr</a>.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


import { Footer } from "@/components/en/Footer";
import { PAGES_EN, pageMetadataEn } from "@/lib/seo";

export const metadata = pageMetadataEn(PAGES_EN.confidentialite);

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="pt-16">
      <section className="bg-[#e8f6f4] py-10 px-6">
        <div className="mx-auto w-full max-w-[1100px]">
          <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[#4e53a3]">Privacy Policy</h1>
          <p className="mt-2 text-[#4e53a3] opacity-80">Transparency about how we collect and use your data.</p>
          <p className="mt-2 text-[#4e53a3] opacity-80">This English version is provided for convenience. In the event of any discrepancy, the French version prevails: <a href="/politique-de-confidentialite" className="underline">see the French version</a>.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <div className="rounded-2xl border-2 border-[#2eb2a4] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="space-y-8 text-[#2e2e2e]">
              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">1. Data controller</h2>
                <p className="mt-2">Circul&apos;Egg. Contact: <a className="text-[#2eb2a4] underline" href="mailto:yacine.kabeche@circulegg.fr">yacine.kabeche@circulegg.fr</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">2. Data collected</h2>
                <p className="mt-2">Identification data (name, email), contact data, the content of messages sent via our forms, browsing data (cookies/analytics).</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">3. Purposes</h2>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Responding to your requests and managing the customer relationship.</li>
                  <li>Improving the site and measuring audience.</li>
                  <li>Security and fraud prevention.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">4. Legal bases</h2>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Performance of pre-contractual/contractual measures.</li>
                  <li>Legitimate interest (site improvement, security).</li>
                  <li>Consent (non-essential cookies, newsletters where applicable).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">5. Retention periods</h2>
                <p className="mt-2">Data is retained for as long as necessary for the purposes described: requests (12 to 24 months), analytics (13 months), applicable legal obligations.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">6. Recipients</h2>
                <p className="mt-2">Circul&apos;Egg internal team and authorized technical service providers (hosting, analytics) bound by confidentiality commitments.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">7. Transfers outside the EU</h2>
                <p className="mt-2">Where applicable, governed by Standard Contractual Clauses and supplementary measures. You may contact us for more information.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">8. Your rights</h2>
                <p className="mt-2">Access, rectification, erasure, objection, restriction, portability, post-mortem directives. To exercise your rights, write to <a className="text-[#2eb2a4] underline" href="mailto:yacine.kabeche@circulegg.fr">yacine.kabeche@circulegg.fr</a> and attach a copy of an identity document.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">9. Cookies</h2>
                <p className="mt-2">See the “Cookies” section of the <a className="text-[#2eb2a4] underline" href="/en/mentions-legales">Legal Notice</a>. You can manage your preferences in your browser.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">10. Security</h2>
                <p className="mt-2">Appropriate technical and organizational measures are in place to protect your data against unauthorized access, alteration or loss.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

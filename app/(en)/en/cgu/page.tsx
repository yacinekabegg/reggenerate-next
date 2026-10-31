import { Footer } from "@/components/en/Footer";
import { PAGES_EN, pageMetadataEn } from "@/lib/seo";

export const metadata = pageMetadataEn(PAGES_EN.cgu);

export default function CGUPage() {
  return (
    <main className="pt-16">
      <section className="bg-[#e8f6f4] py-10 px-6">
        <div className="mx-auto w-full max-w-[1100px]">
          <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[#4e53a3]">General Terms of Use (CGU)</h1>
          <p className="mt-2 text-[#4e53a3] opacity-80">Rules for using the site and responsibilities.</p>
          <p className="mt-2 text-[#4e53a3] opacity-80">This English version is provided for convenience. In the event of any discrepancy, the French version prevails: <a href="/cgu" className="underline">see the French version</a>.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <div className="rounded-2xl border-2 border-[#2eb2a4] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="space-y-8 text-[#2e2e2e]">
              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">1. Purpose</h2>
                <p className="mt-2">The purpose of these Terms of Use (CGU) is to define the conditions of access to and use of the website reggenerate.circulegg.fr.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">2. Access to the site</h2>
                <p className="mt-2">The site is accessible free of charge to any User with Internet access. Costs related to access (hardware, software, connection) are borne by the User.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">3. Intellectual property</h2>
                <p className="mt-2">The content of the site is protected by copyright. Any reproduction or representation without authorization is prohibited.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">4. Liability</h2>
                <p className="mt-2">The Publisher makes every effort to ensure the accuracy of the information published but cannot guarantee the absence of errors or omissions. The User uses the site under their sole responsibility.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">5. Hyperlinks</h2>
                <p className="mt-2">The site may contain links to other websites. The Publisher has no control over these websites and accepts no liability for their content.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">6. Personal data</h2>
                <p className="mt-2">For any information regarding the processing of personal data, please consult our <a className="text-[#2eb2a4] underline" href="/en/politique-de-confidentialite">Privacy Policy</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">7. Cookies</h2>
                <p className="mt-2">To learn more about the use of cookies, see the “Cookies” section of the <a className="text-[#2eb2a4] underline" href="/en/mentions-legales">Legal Notice</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">8. Governing law</h2>
                <p className="mt-2">These Terms of Use are governed by French law. In the event of a dispute, and failing an amicable settlement, the competent courts shall be those within the jurisdiction of the Paris Court of Appeal (Cour d&apos;appel de Paris).</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">9. Amendments</h2>
                <p className="mt-2">The Publisher reserves the right to amend these Terms of Use at any time. Users are invited to consult them regularly.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#4e53a3]">10. Contact</h2>
                <p className="mt-2">For any questions regarding these Terms of Use: <a className="text-[#2eb2a4] underline" href="mailto:yacine.kabeche@circulegg.fr">yacine.kabeche@circulegg.fr</a>.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

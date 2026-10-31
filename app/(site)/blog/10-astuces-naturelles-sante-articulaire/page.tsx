import { BlogArticleLayout } from "@/components/BlogArticleLayout";
import Link from "next/link";

export default function ArticleSanteAstuces() {
  return (
    <BlogArticleLayout
      title="10 astuces naturelles pour améliorer votre santé articulaire"
      categoryLabel="SANTÉ & BIEN-ÊTRE"
      categoryColor="#2eb2a4"
      date="15 janvier 2025"
      readingTime="5 min"
      coverImage="/images/article-1.png"
    >
      <section className="mb-8 leading-8 text-[#4e53a3]">
        <p className="text-[1.1rem] leading-8 text-[#4e53a3]">
          Les articulations sont le socle de notre mobilité. Pourtant, avec l’âge, le stress oxydatif et nos modes de vie
          sédentaires, elles s’usent plus vite qu’on ne le pense.
        </p>
        <p>
          Bonne nouvelle : il existe des solutions naturelles pour préserver la flexibilité et le confort articulaire sans recourir à des approches invasives.
        </p>
        <p className="mt-4 text-[1.05rem] leading-7 text-[#4e53a3]">
          Voici 10 astuces éprouvées pour entretenir vos articulations et favoriser une mobilité durable.
        </p>
      </section>

      <section className="mb-8">
        <ol className="list-decimal space-y-8 pl-6 text-[#4e53a3] marker:font-bold">
          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Miser sur une alimentation anti‑inflammatoire</h3>
            <p className="m-0 text-[#4e53a3]">Les douleurs articulaires sont souvent liées à une inflammation chronique.</p>
            <p className="mt-2 text-[#4e53a3]">
              Privilégiez les fruits rouges, les poissons gras (riches en oméga‑3), les épices comme le curcuma et limitez les sucres raffinés.
            </p>
            <p className="m-0 text-[#4e53a3]">Une alimentation équilibrée aide à réduire les marqueurs inflammatoires et à protéger le cartilage.</p>
          </li>

          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Hydrater ses articulations de l’intérieur</h3>
            <p className="m-0 text-[#4e53a3]">L’eau est essentielle à la lubrification du cartilage.</p>
            <p className="mt-2 text-[#4e53a3]">
              Pensez à boire 1,5 à 2 litres d’eau par jour, en complément de sources naturelles d’acide hyaluronique présentes dans certains aliments ou compléments.
            </p>
          </li>

          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Privilégier le mouvement doux</h3>
            <p className="m-0 text-[#4e53a3]">Marche, yoga, natation ou vélo… L’activité physique régulière entretient la souplesse des tissus.</p>
            <p className="mt-2 text-[#4e53a3]">💡 L’objectif : bouger sans forcer, pour stimuler la production naturelle de liquide synovial.</p>
          </li>

          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Maintenir un poids santé</h3>
            <p className="m-0 text-[#4e53a3]">
              Chaque kilo supplémentaire exerce une pression sur les articulations, en particulier celles des genoux et des hanches.
            </p>
            <p className="mt-2 text-[#4e53a3]">
              Un équilibre alimentaire durable et une activité physique douce permettent de soulager cette contrainte mécanique.
            </p>
          </li>

          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Soutenir le collagène et l’élastine</h3>
            <p className="m-0 text-[#4e53a3]">
              Le collagène et l’élastine sont deux protéines clés du tissu articulaire. Leur production diminue naturellement avec l’âge.
            </p>
            <p className="mt-2 text-[#4e53a3]">
              Des ingrédients comme <strong>REGGENERATE®</strong>, issu de la membrane d’œuf, apportent une combinaison naturelle de collagène, élastine, acide hyaluronique et glycosaminoglycanes, soutenant ainsi la structure et la souplesse articulaire.
            </p>
            <p className="mt-2 text-[#4e53a3]">
              Des études publiées montrent que les extraits de membrane d’œuf peuvent contribuer à la réduction de la raideur articulaire et à une meilleure récupération fonctionnelle {/* <em>[mettre lien tally]</em> */}.
            </p>
          </li>

          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Faire le plein d’antioxydants</h3>
            <p className="m-0 text-[#4e53a3]">
              Les vitamines C et E, le sélénium ou encore les polyphénols des fruits colorés neutralisent les radicaux libres responsables de la dégradation du cartilage.
            </p>
            <p className="mt-2 text-[#4e53a3]">Un geste simple : ajouter une poignée de baies ou une cuillère de curcuma à vos repas quotidiens.</p>
          </li>

          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Renforcer sa masse musculaire</h3>
            <p className="m-0 text-[#4e53a3]">Des muscles forts soutiennent les articulations et limitent les microtraumatismes.</p>
            <p className="mt-2 text-[#4e53a3]">
              Des exercices légers de renforcement musculaire ou de Pilates contribuent à une meilleure stabilité articulaire.
            </p>
          </li>

          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Intégrer des compléments naturels ciblés</h3>
            <p className="m-0 text-[#4e53a3]">
              Les compléments à base de membrane d’œuf, de curcuma, ou de boswellia offrent un soutien nutritionnel complémentaire.
            </p>
            <p className="mt-2 text-[#4e53a3]">
              💡 <strong>REGGENERATE®</strong> se distingue comme une solution clean‑label et multifonctionnelle, adaptée aux marques souhaitant proposer une approche globale santé & beauté.
            </p>
          </li>

          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Dormir suffisamment</h3>
            <p className="m-0 text-[#4e53a3]">
              Le sommeil est une phase de régénération cellulaire essentielle. Un repos de qualité favorise la réparation des tissus conjonctifs et la régulation hormonale impliquée dans la santé articulaire.
            </p>
          </li>

          <li>
            <h3 className="mb-2 text-[1.25rem] font-semibold text-[#4e53a3]">Adopter une approche durable et préventive</h3>
            <p className="m-0 text-[#4e53a3]">La santé articulaire se construit dans la durée.</p>
            <p className="mt-2 text-[#4e53a3]">
              Associer alimentation, mouvement et nutraceutiques de nouvelle génération permet de maintenir le confort articulaire tout au long de la vie.
            </p>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="mb-3 text-[1.5rem] font-bold text-[#4e53a3]">En résumé</h2>
        <p className="text-[#4e53a3]">
          La prévention articulaire n’est pas une affaire de traitement, mais d’entretien. Grâce à une hygiène de vie naturelle et à des ingrédients innovants comme <strong>REGGENERATE®</strong>, il est possible de conjuguer performance, durabilité et naturalité au service du bien‑être articulaire.
        </p>
      </section>

      {/* Pour aller plus loin */}
      <section className="mt-8">
        <h2 className="mb-3 text-[1.4rem] font-extrabold text-[#4e53a3]">🔗 Pour aller plus loin</h2>
        <ul className="list-disc pl-6 text-[#4e53a3]">
          <li>
            <a href="/ingredient" className="underline decoration-[#4e53a3] underline-offset-2" title="Découvrir REGGENERATE®">Découvrir REGGENERATE®</a>
          </li>
          <li>
            <a href="https://circulegg.fr/" className="underline decoration-[#4e53a3] underline-offset-2" title="En savoir plus sur Circul’Egg">En savoir plus sur Circul’Egg</a>
          </li>
          <li>
            <Link
              href={{ pathname: "/blog", hash: "contact" }}
              className="underline decoration-[#4e53a3] underline-offset-2"
              title="Contactez notre équipe"
            >
              Contactez notre équipe
            </Link>
          </li>
        </ul>
      </section>
    </BlogArticleLayout>
  );
}

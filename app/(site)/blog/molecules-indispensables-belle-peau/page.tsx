import { BlogArticleLayout } from "@/components/BlogArticleLayout";

export default function MoleculesBellePeau() {
  return (
    <BlogArticleLayout
      title="3 molécules indispensables pour une belle peau"
      categoryLabel="BEAUTÉ PEAU & CHEVEUX"
      categoryColor="#2eb2a4"
      date="15 Avril 2025"
      readingTime="5 min"
      coverImage="/images/article-4.png"
    >
      <div className="py-10 text-center text-[#4e53a3]">
        <p className="text-[1.15rem] font-semibold">Article en cours de rédaction</p>
        <p className="mt-2 opacity-80">
          Revenez très bientôt pour découvrir en détail pourquoi la membrane d’œuf est une nouvelle révolution.
        </p>
      </div>

      {/**
       * Contenu original commenté le temps de la rédaction
       * --------------------------------------------------
       *
       * <section className="mb-8 leading-8 text-[#4e53a3]"> ... </section>
       * <section className="mb-8"> ... </section>
       * <section> ... </section>
       */}
    </BlogArticleLayout>
  );
}



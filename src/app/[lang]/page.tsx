import { notFound } from "next/navigation";
import { BeforeProduct } from "@/components/home/before-product";
import { Built } from "@/components/home/built";
import { FeaturedCases } from "@/components/home/featured-cases";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { Proofs } from "@/components/home/proofs";
import { Stack } from "@/components/home/stack";
import { getDictionary } from "@/content";
import { isLocale } from "@/i18n/config";

/** Início: as sete seções na ordem do wireframe. A oitava, o contato, é o rodapé do site. */
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  const t = dictionary.home;

  return (
    <>
      <Hero lang={lang} t={t} />
      <Proofs t={t.proofs} />
      <Process t={t.process} />
      <FeaturedCases lang={lang} t={t.cases} cases={dictionary.work.cases} />
      <Built t={t.built} />
      <Stack t={t.stack} />
      <BeforeProduct lang={lang} t={t.before} />
    </>
  );
}

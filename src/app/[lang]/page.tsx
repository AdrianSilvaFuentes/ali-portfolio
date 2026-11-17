import { notFound } from "next/navigation";
import { BeforeProduct } from "@/components/home/before-product";
import { Built } from "@/components/home/built";
import { FeaturedCases } from "@/components/home/featured-cases";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { Stack } from "@/components/home/stack";
import { getDictionary } from "@/content";
import { isLocale } from "@/i18n/config";

/**
 * Início: abertura, casos selecionados (logo depois da abertura, a pedido do Adrián),
 * como trabalho, construído, stack e antes do produto. O contato é o rodapé do site.
 * As seções alternam fundo branco e cinza (sunken).
 * As provas (components/home/proofs.tsx) estão ocultas até haver números reais.
 */
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  const t = dictionary.home;

  return (
    <>
      <Hero lang={lang} t={t} />
      <FeaturedCases lang={lang} t={t.cases} cases={dictionary.work.cases} />
      <Process t={t.process} />
      <Built t={t.built} />
      <Stack t={t.stack} />
      <BeforeProduct lang={lang} t={t.before} />
    </>
  );
}

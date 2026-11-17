import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseFull } from "@/components/case/case-full";
import { getDictionary } from "@/content";
import { caseKeyFromSlug, caseKeys, cases, isLocale, locales, pages } from "@/i18n/config";
import { caseAlternates } from "@/i18n/metadata";

/**
 * As páginas de caso, dentro de Trabalho e com o endereço traduzido:
 * /pt/casos/pesquisa-armazens, /en/cases/warehouse-research. Só existem dentro de Casos;
 * qualquer outra combinação dá 404. Casos ainda sem estudo escrito (`study`) ficam ocultos
 * e também dão 404.
 */
export function generateStaticParams() {
  return locales.flatMap((lang) =>
    caseKeys
      .filter((key) => getDictionary(lang).work.cases[key].study)
      .map((key) => ({ lang, page: pages.work[lang], slug: cases[key][lang] })),
  );
}
export const dynamicParams = false;

async function resolve(params: PageProps<"/[lang]/[page]/[slug]">["params"]) {
  const { lang, page, slug } = await params;
  if (!isLocale(lang) || page !== pages.work[lang]) return null;
  const key = caseKeyFromSlug(lang, slug);
  if (!key) return null;
  const t = getDictionary(lang);
  if (!t.work.cases[key].study) return null;
  return { lang, key, t };
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/[page]/[slug]">): Promise<Metadata> {
  const found = await resolve(params);
  if (!found) return {};
  const { lang, key, t } = found;
  return {
    title: `${t.work.cases[key].title} · ${t.site.name}`,
    description: t.work.cases[key].summary,
    alternates: caseAlternates(lang, key),
  };
}

export default async function CasePage({ params }: PageProps<"/[lang]/[page]/[slug]">) {
  const found = await resolve(params);
  if (!found) notFound();
  const { lang, key, t } = found;
  const study = t.work.cases[key].study;
  if (!study) notFound();
  return <CaseFull lang={lang} caseKey={key} t={t} study={study} />;
}

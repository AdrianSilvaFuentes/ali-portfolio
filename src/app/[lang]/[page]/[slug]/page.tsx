import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case/case-study";
import { getDictionary } from "@/content";
import { caseKeyFromSlug, caseKeys, cases, isLocale, locales, pages } from "@/i18n/config";
import { caseAlternates } from "@/i18n/metadata";

/**
 * As páginas de caso, dentro de Trabalho e com o endereço traduzido:
 * /pt/trabalho/pesquisa-armazens, /en/work/warehouse-research. Só existem dentro de Trabalho;
 * qualquer outra combinação dá 404.
 */
export function generateStaticParams() {
  return locales.flatMap((lang) =>
    caseKeys.map((key) => ({ lang, page: pages.work[lang], slug: cases[key][lang] })),
  );
}
export const dynamicParams = false;

async function resolve(params: PageProps<"/[lang]/[page]/[slug]">["params"]) {
  const { lang, page, slug } = await params;
  if (!isLocale(lang) || page !== pages.work[lang]) return null;
  const key = caseKeyFromSlug(lang, slug);
  if (!key) return null;
  return { lang, key, t: getDictionary(lang) };
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
  return <CaseStudy lang={found.lang} caseKey={found.key} t={found.t} />;
}

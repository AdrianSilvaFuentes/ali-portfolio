import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getDictionary } from "@/content";
import { isLocale, locales, pageKeyFromSlug, pageKeys, pages } from "@/i18n/config";
import { alternates } from "@/i18n/metadata";

/**
 * As páginas internas, com o endereço traduzido: /pt/trabalho, /en/work, /es/trabajo.
 * Cada combinação de idioma e página é gerada no build; qualquer outra dá 404.
 */
export function generateStaticParams() {
  return locales.flatMap((lang) => pageKeys.map((key) => ({ lang, page: pages[key][lang] })));
}
export const dynamicParams = false;

async function resolve(params: PageProps<"/[lang]/[page]">["params"]) {
  const { lang, page } = await params;
  if (!isLocale(lang)) return null;
  const key = pageKeyFromSlug(lang, page);
  if (!key) return null;
  return { lang, key, t: getDictionary(lang) };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[page]">): Promise<Metadata> {
  const found = await resolve(params);
  if (!found) return {};
  const { lang, key, t } = found;
  return {
    title: `${t.nav[key]} · ${t.site.name}`,
    alternates: alternates(lang, key),
  };
}

export default async function InnerPage({ params }: PageProps<"/[lang]/[page]">) {
  const found = await resolve(params);
  if (!found) notFound();
  const { key, t } = found;

  return (
    <PageIntro eyebrow={t[key].eyebrow} title={t[key].title}>
      <p className="text-body-lg text-subtle">{t.placeholder}</p>
    </PageIntro>
  );
}

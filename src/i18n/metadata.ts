import type { Metadata } from "next";
import {
  type CaseKey,
  casePath,
  htmlLang,
  type Locale,
  locales,
  type PageKey,
  pagePath,
} from "./config";

/**
 * Endereço do site, usado como base dos links de compartilhamento e dos idiomas.
 * Vem da Vercel (VERCEL_PROJECT_PRODUCTION_URL): o domínio próprio do projeto, quando há um
 * ligado; sem ele, o endereço .vercel.app. Se o domínio deixar de ser usado, basta tirá-lo do
 * projeto na Vercel e publicar de novo. Fora da Vercel (no computador), usa o .vercel.app.
 */
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "adriansilvafuentes.vercel.app";
export const siteUrl = new URL(`https://${productionHost}`);

/**
 * Endereço canônico da página e as versões dela nos outros idiomas (hreflang),
 * para o Google mostrar a versão certa a cada pessoa.
 */
export function alternates(lang: Locale, page?: PageKey): Metadata["alternates"] {
  return {
    canonical: pagePath(lang, page),
    languages: Object.fromEntries(
      locales.map((locale) => [htmlLang[locale], pagePath(locale, page)]),
    ),
  };
}

/** O mesmo que `alternates`, para a página de um caso. */
export function caseAlternates(lang: Locale, key: CaseKey): Metadata["alternates"] {
  return {
    canonical: casePath(lang, key),
    languages: Object.fromEntries(
      locales.map((locale) => [htmlLang[locale], casePath(locale, key)]),
    ),
  };
}

import type { Metadata } from "next";
import { htmlLang, type Locale, locales, type PageKey, pagePath } from "./config";

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

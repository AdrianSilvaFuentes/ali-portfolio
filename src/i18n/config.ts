/**
 * Idiomas e endereços do site. O português é a língua-fonte; o inglês é o idioma de reserva
 * para quem não usa português nem espanhol no navegador.
 */
export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const fallbackLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Valor do atributo lang do HTML para cada idioma. */
export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en", es: "es" };

/** Nome de cada idioma escrito no próprio idioma, para o seletor. */
export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

/** O endereço de cada página em cada idioma: /pt/trabalho, /en/work, /es/trabajo. */
export const pages = {
  work: { pt: "trabalho", en: "work", es: "trabajo" },
  built: { pt: "construido", en: "built", es: "construido" },
  resume: { pt: "experiencia", en: "resume", es: "experiencia" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof pages;
export const pageKeys = Object.keys(pages) as PageKey[];

/** Caminho de uma página num idioma. Sem página, é o início daquele idioma. */
export function pagePath(lang: Locale, page?: PageKey): string {
  return page ? `/${lang}/${pages[page][lang]}` : `/${lang}`;
}

/** Qual página um trecho do endereço representa naquele idioma (ou nenhuma). */
export function pageKeyFromSlug(lang: Locale, slug: string): PageKey | undefined {
  return pageKeys.find((key) => pages[key][lang] === slug);
}

/**
 * O mesmo endereço em outro idioma, para o seletor: /pt/trabalho vira /en/work.
 * Trechos depois da página (como o nome de um caso) passam iguais.
 */
export function translatePath(pathname: string, to: Locale): string {
  const [, from, slug, ...rest] = pathname.split("/");
  if (!from || !isLocale(from)) return pagePath(to);
  if (!slug) return pagePath(to);
  const key = pageKeyFromSlug(from, slug);
  if (!key) return pagePath(to);
  return [pagePath(to, key), ...rest].join("/");
}

/**
 * Escolhe o idioma a partir do cabeçalho Accept-Language do navegador
 * (ex.: "pt-BR,pt;q=0.9,en;q=0.8"): o primeiro, por preferência, que o site tenha.
 */
export function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return fallbackLocale;
  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { base: tag.toLowerCase().split("-")[0] ?? "", q: q ? Number(q.split("=")[1]) : 1 };
    })
    .filter((entry) => entry.base && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);
  return ranked.map((entry) => entry.base).find(isLocale) ?? fallbackLocale;
}

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

/**
 * O endereço de cada caso em cada idioma, dentro da página Trabalho:
 * /pt/trabalho/pesquisa-armazens, /en/work/warehouse-research. A ordem aqui é a ordem dos
 * casos no site (e do "próximo caso").
 */
export const cases = {
  wiipo: {
    pt: "wiipo-registro-de-ponto",
    en: "wiipo-time-clock",
    es: "wiipo-registro-de-jornada",
  },
  support: {
    pt: "suporte-planos-premium",
    en: "premium-support-plans",
    es: "soporte-planes-premium",
  },
  warehouses: {
    pt: "pesquisa-armazens",
    en: "warehouse-research",
    es: "investigacion-almacenes",
  },
  gko: { pt: "gko-fretes-xt", en: "gko-fretes-xt", es: "gko-fretes-xt" },
  icons: { pt: "biblioteca-de-icones", en: "icon-library", es: "biblioteca-de-iconos" },
} as const satisfies Record<string, Record<Locale, string>>;

export type CaseKey = keyof typeof cases;
export const caseKeys = Object.keys(cases) as CaseKey[];
export const pageKeys = Object.keys(pages) as PageKey[];

/** Caminho de uma página num idioma. Sem página, é o início daquele idioma. */
export function pagePath(lang: Locale, page?: PageKey): string {
  return page ? `/${lang}/${pages[page][lang]}` : `/${lang}`;
}

/** Caminho de um caso num idioma: /pt/trabalho/pesquisa-armazens. */
export function casePath(lang: Locale, key: CaseKey): string {
  return `${pagePath(lang, "work")}/${cases[key][lang]}`;
}

/** Qual caso um trecho do endereço representa naquele idioma (ou nenhum). */
export function caseKeyFromSlug(lang: Locale, slug: string): CaseKey | undefined {
  return caseKeys.find((key) => cases[key][lang] === slug);
}

/** Qual página um trecho do endereço representa naquele idioma (ou nenhuma). */
export function pageKeyFromSlug(lang: Locale, slug: string): PageKey | undefined {
  return pageKeys.find((key) => pages[key][lang] === slug);
}

/**
 * O mesmo endereço em outro idioma, para o seletor: /pt/trabalho vira /en/work, e
 * /pt/trabalho/pesquisa-armazens vira /en/work/warehouse-research.
 */
export function translatePath(pathname: string, to: Locale): string {
  const [, from, slug, ...rest] = pathname.split("/");
  if (!from || !isLocale(from)) return pagePath(to);
  if (!slug) return pagePath(to);
  const key = pageKeyFromSlug(from, slug);
  if (!key) return pagePath(to);
  const [caseSlug] = rest;
  if (key === "work" && caseSlug) {
    const caseKey = caseKeyFromSlug(from, caseSlug);
    return caseKey ? casePath(to, caseKey) : pagePath(to, key);
  }
  return pagePath(to, key);
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

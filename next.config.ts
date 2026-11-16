import type { NextConfig } from "next";

/**
 * A página Trabalho virou Casos (/pt/casos, /en/cases, /es/casos). Os endereços antigos
 * redirecionam para os novos, com os casos dentro, para nenhum link já compartilhado quebrar.
 */
const oldWorkSlugs = [
  { lang: "pt", from: "trabalho", to: "casos" },
  { lang: "en", from: "work", to: "cases" },
  { lang: "es", from: "trabajo", to: "casos" },
];

/**
 * A página Construído saiu: o ali-ui virou um caso completo. Os endereços antigos levam a ele.
 */
const oldBuiltPages = [
  { source: "/pt/construido", destination: "/pt/casos/ali-ui-design-system" },
  { source: "/en/built", destination: "/en/cases/ali-ui-design-system" },
  { source: "/es/construido", destination: "/es/casos/ali-ui-design-system" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...oldWorkSlugs.flatMap(({ lang, from, to }) => [
        { source: `/${lang}/${from}`, destination: `/${lang}/${to}`, permanent: true },
        { source: `/${lang}/${from}/:slug`, destination: `/${lang}/${to}/:slug`, permanent: true },
      ]),
      ...oldBuiltPages.map((page) => ({ ...page, permanent: true })),
    ];
  },
};

export default nextConfig;

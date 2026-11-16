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

const nextConfig: NextConfig = {
  async redirects() {
    return oldWorkSlugs.flatMap(({ lang, from, to }) => [
      { source: `/${lang}/${from}`, destination: `/${lang}/${to}`, permanent: true },
      { source: `/${lang}/${from}/:slug`, destination: `/${lang}/${to}/:slug`, permanent: true },
    ]);
  },
};

export default nextConfig;

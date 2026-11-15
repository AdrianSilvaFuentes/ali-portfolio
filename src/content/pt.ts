/**
 * Textos do site em português, a língua-fonte. en.ts e es.ts seguem esta mesma forma.
 * Nenhum texto vive dentro dos componentes.
 * Trechos entre [colchetes] são provisórios e continuam visíveis até o conteúdo final.
 */
export const pt = {
  site: {
    name: "Adrián Silva Fuentes",
    title: "Adrián Silva Fuentes · Product Design Engineer",
    description:
      "Designer de produto sênior que leva o problema até o produto entregue, com design e código.",
  },
  nav: {
    label: "Principal",
    home: "Início",
    work: "Trabalho",
    built: "Construído",
    resume: "Experiência",
    contact: "Contato",
  },
  language: {
    label: "Idioma",
  },
  theme: {
    toDark: "Ativar tema escuro",
    toLight: "Ativar tema claro",
  },
  home: {
    greeting: "Oi, sou o Adrián. Todo mundo me chama de Ali.",
    role: "Product Design Engineer",
    title: "Designer de produto sênior que leva o problema até o produto entregue.",
    lead: "[Uma frase sobre o que você faz e para quem.]",
    seeWork: "Ver trabalho",
    talk: "Falar comigo",
  },
  work: {
    eyebrow: "Trabalho",
    title: "Produtos que melhorei e sites e marcas que desenhei.",
  },
  built: {
    eyebrow: "Construído",
    title: "O que fiz com as próprias mãos, do Figma ao código.",
  },
  resume: {
    eyebrow: "Experiência",
    title: "De coletar comportamento em dados a desenhar as jornadas que o moldam.",
  },
  placeholder: "[Conteúdo desta página em construção.]",
  footer: {
    title: "Vamos conversar.",
    email: "[e-mail público]",
    linksLabel: "Perfis",
    links: [
      { label: "GitHub", href: "https://github.com/AdrianSilvaFuentes" },
      { label: "[LinkedIn]", href: null },
      { label: "[Behance]", href: null },
      { label: "[Currículo (PDF)]", href: null },
    ] as { label: string; href: string | null }[],
    madeWith: "Feito com ali-ui",
  },
};

export type Dictionary = typeof pt;

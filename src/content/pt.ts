/**
 * Textos do site em português, a língua-fonte. en.ts e es.ts seguem esta mesma forma.
 * Nenhum texto vive dentro dos componentes.
 * Trechos entre [colchetes] são provisórios e continuam visíveis até o conteúdo final.
 */
/** Ícones de ferramentas que o visitante reconhece. As outras ficam só com o nome. */
export type StackIcon = "react" | "typescript" | "tailwind" | "storybook" | "vercel";
type StackGroup = {
  title: string;
  items: { name: string; description: string; icon?: StackIcon }[];
};

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
    greeting: { before: "Oi, sou o Adrián. Todo mundo me chama de ", name: "Ali", after: "." },
    role: "Product Design Engineer",
    title: "Designer de produto sênior que leva o problema até o produto entregue.",
    lead: "[Uma frase sobre o que você faz e para quem. Ex.: pesquisa com usuários, decisão de produto e código, com IA como ferramenta e julgamento próprio.]",
    seeWork: "Ver trabalho",
    talk: "Falar comigo",
    portraitAlt: "Adrián sorrindo, de boné e lenço, em frente a um moinho.",
    /** Rótulo das áreas que ainda esperam imagem, lido pelo leitor de tela antes do nome. */
    reserved: "Espaço reservado",
    proofs: {
      title: "Provas",
      items: [
        {
          project: "GKO Fretes XT",
          value: "[+X]",
          result: "pontos de NPS depois de adaptar os padrões visuais do produto.",
          note: "[precisa do número real]",
        },
        {
          project: "Senior Systems Icon Lib",
          value: "1.500+",
          result: "ícones criados internamente, no lugar de recursos externos pagos.",
          note: "[custo evitado, se houver]",
        },
        {
          project: "ali-ui",
          value: "AA",
          result: "contraste verificado por teste automático, nos temas claro e escuro.",
          note: "projeto próprio, do zero",
        },
      ],
    },
    process: {
      eyebrow: "Como trabalho",
      title: "Do problema ao resultado, com as mãos no produto.",
      steps: [
        { title: "Descobrir", description: "[Pesquisa com usuários e dados: onde dói e quanto.]" },
        {
          title: "Decidir",
          description: "[Priorizar e definir a métrica de sucesso antes de construir.]",
        },
        {
          title: "Construir",
          description: "[Design e código, com IA como ferramenta e julgamento próprio.]",
        },
        {
          title: "Medir",
          description: "[O que mudou depois do lançamento, e o que isso ensinou.]",
        },
      ],
    },
    cases: {
      eyebrow: "Casos em destaque",
      title: "Trabalho selecionado",
      seeAll: "Ver todos os casos",
      image: "Imagem do caso",
      items: [
        {
          meta: "[ano] · [papel]",
          tags: ["Pesquisa de campo", "Logística", "UX research"],
          title: "Pesquisa de campo em armazéns",
          summary: "[Problema → resultado, em uma linha.]",
        },
        {
          meta: "[ano] · [papel]",
          tags: ["Design system", "Ícones", "Figma"],
          title: "Biblioteca de 1.500 ícones",
          summary: "[Problema → resultado, em uma linha.]",
        },
        {
          meta: "2026 · projeto próprio",
          tags: ["Design system", "React", "Acessibilidade"],
          title: "ali-ui: do Figma ao código",
          summary: "[Problema → resultado, em uma linha.]",
        },
      ],
    },
    built: {
      eyebrow: "Construído",
      title: "ali-ui, um sistema feito do zero.",
      lead: "Tokens, componentes e documentação, com testes de acessibilidade. Abre no Storybook, com o código no GitHub.",
      storybook: { label: "Abrir o Storybook", href: "https://ali-ui-delta.vercel.app" },
      github: { label: "Ver no GitHub", href: "https://github.com/AdrianSilvaFuentes/ali-ui" },
      palette: "Escala de cinzas e o amarelo da marca, tirados dos tokens do ali-ui",
      samples: {
        label: "Amostras de componentes do ali-ui",
        button: { name: "Button", label: "Salvar" },
        input: { name: "Input", label: "Nome do projeto", value: "ali-ui" },
        select: { name: "Select", label: "Tema", options: ["Claro", "Escuro"] },
      },
    },
    stack: {
      title: "Stack",
      groups: [
        {
          title: "Componentes e estilos",
          items: [
            { name: "React", description: "componentes", icon: "react" },
            { name: "TypeScript", description: "em modo estrito", icon: "typescript" },
            {
              name: "Tailwind CSS 4",
              description: "estilos a partir dos tokens",
              icon: "tailwind",
            },
          ],
        },
        {
          title: "Repositório e construção",
          items: [
            { name: "pnpm", description: "instalação" },
            { name: "Turborepo", description: "monorepo" },
            { name: "Vite", description: "build" },
          ],
        },
        {
          title: "Qualidade",
          items: [
            { name: "Vitest", description: "testes, incluindo contraste WCAG" },
            { name: "Biome", description: "lint e formatação" },
            { name: "GitHub Actions", description: "verificação automática" },
          ],
        },
        {
          title: "Documentação e publicação",
          items: [
            { name: "Storybook 9", description: "documentação", icon: "storybook" },
            { name: "Vercel", description: "publicação", icon: "vercel" },
          ],
        },
      ] as StackGroup[],
    },
    before: {
      eyebrow: "Antes do produto",
      title: "Antes de produto, eu já desenhava e publicava sites e marcas.",
      lead: "Design e código feitos à mão, com a bagagem de marketing por trás de cada decisão.",
      items: [
        {
          title: "Web design e UI",
          description:
            "Landings, blogs e e-commerce do Figma ao HTML, CSS e WordPress. [3+ anos, NODO.team]",
          link: "Ver sites",
        },
        {
          title: "Branding e identidade",
          description:
            "Marca, identidade visual e presença web de uma empresa nos EUA. [The Rio System]",
          link: "Ver marcas",
        },
      ],
      thumbnails: ["Landing", "E-commerce", "Logo / marca", "Página de marca"],
    },
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

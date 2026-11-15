/**
 * Textos do site em português, a língua-fonte. en.ts e es.ts seguem esta mesma forma.
 * Nenhum texto vive dentro dos componentes.
 * Trechos entre [colchetes] são provisórios e continuam visíveis até o conteúdo final.
 */
/** Ícones de ferramentas que o visitante reconhece. As outras ficam só com o nome. */
export type StackIcon = "react" | "typescript" | "tailwind" | "storybook" | "vercel";
/** Um papel na linha do tempo. Texto corrido ou tópicos; o link leva à lista Web e marca. */
type ExperienceItem = {
  period: string;
  place: string;
  title: string;
  text?: string;
  bullets?: string[];
  link?: string;
};

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
    filters: { label: "Filtrar trabalhos", all: "Tudo", product: "Produto", web: "Web e marca" },
    product: { title: "Produto", readCase: "Ler o caso", image: "Imagem do caso" },
    web: {
      title: "Web e marca",
      thumbnail: "Miniatura",
      items: [
        {
          name: "[Nome do site]",
          description: "Landing page · Figma, HTML, CSS, WordPress",
          meta: "NODO.team · [ano]",
          link: "[Ver site]",
        },
        {
          name: "[Nome da loja]",
          description: "E-commerce · arquitetura de informação e SEO",
          meta: "NODO.team · [ano]",
          link: "[Ver site]",
        },
        {
          name: "The Rio System",
          description: "Marca, identidade visual e presença web",
          meta: "2021–2022",
          link: "[Ver marca]",
        },
      ],
    },
    /** Os casos de produto. A ordem e os endereços estão em src/i18n/config.ts (cases). */
    cases: {
      warehouses: {
        company: "[Empresa]",
        years: "[ano]",
        role: "[papel]",
        tags: ["Pesquisa de campo", "Logística", "UX research"],
        title: "Pesquisa de campo em armazéns",
        summary: "[Problema → resultado, em uma linha.]",
        result: "[Resultado]",
      },
      gko: {
        company: "Senior Sistemas",
        years: "2022–2025",
        role: "UX Designer",
        tags: ["Logística", "Design system", "NPS"],
        title: "[+X] de NPS no GKO Fretes XT",
        summary: "[Problema → resultado, em uma linha.]",
        result: "[+X pontos de NPS]",
      },
      icons: {
        company: "Senior Sistemas",
        years: "[ano]",
        role: "UX Designer",
        tags: ["Design system", "Ícones", "Figma"],
        title: "Biblioteca de 1.500+ ícones",
        summary: "[Problema → resultado, em uma linha.]",
        result: "1.500+ ícones",
      },
      wiipo: {
        company: "Wiipo",
        years: "2024–2025",
        role: "UX Designer",
        tags: ["Mobile", "Design system", "React Native"],
        title: "Design system em React Native",
        summary: "[Problema → resultado, em uma linha.]",
        result: "[Resultado]",
      },
    },
    /**
     * O modelo da página de caso, igual para todos enquanto o conteúdo real não chega.
     * Quando chegar, cada caso ganha os próprios textos.
     */
    caseTemplate: {
      back: "Todos os casos",
      meta: {
        result: "Resultado",
        role: "Meu papel",
        roleValue: "[Pesquisa, design e código]",
        duration: "Duração",
        durationValue: "[X meses]",
        tools: "Ferramentas",
        toolsValue: "[Figma, React, ...]",
      },
      mainImage: "Imagem principal",
      problem: {
        title: "O problema",
        text: "[Quem sofria, onde e quanto custava. Em 3 a 4 frases, com um número se existir.]",
        quote: "[Frase de um usuário real que resume a dor.]",
      },
      learned: {
        title: "O que aprendi com os usuários",
        findings: [
          { label: "Descoberta 1", text: "[O que você viu em campo.]" },
          { label: "Descoberta 2", text: "[O que contrariou a hipótese.]" },
          { label: "Descoberta 3", text: "[O que mudou a prioridade.]" },
        ],
        image: "Foto de campo, síntese ou mapa de jornada",
      },
      decision: {
        title: "A decisão",
        text: "[O que você escolheu fazer e o que decidiu não fazer. Por quê.]",
        chose: { label: "Escolhi", text: "[Caminho escolhido]" },
        discarded: { label: "Descartei", text: "[Alternativa e motivo]" },
        metricLabel: "Métrica de sucesso definida antes de construir:",
        metric: "[qual]",
      },
      built: {
        title: "O que construí",
        items: [
          { image: "Tela / protótipo", caption: "[Legenda: o que esta tela resolve]" },
          { image: "Código / componente", caption: "[Legenda: a parte que você implementou]" },
        ],
      },
      result: {
        title: "O resultado",
        metrics: [
          { value: "[+X]", label: "[métrica, antes → depois]" },
          { value: "[−X%]", label: "[segunda métrica]" },
        ],
        quote: "[Frase do usuário ou do time depois do lançamento]",
        quoteAuthor: "[quem disse]",
        differentLabel: "O que eu faria diferente",
        different: "[Uma reflexão honesta. Mostra julgamento, não só execução.]",
      },
      next: "Próximo caso",
    },
  },
  built: {
    eyebrow: "Construído",
    title: "O que fiz com as próprias mãos, do Figma ao código.",
    lead: "Projetos próprios, sem empresa no meio. Aqui você vê como eu decido e implemento.",
    aliUi: {
      eyebrow: "Projeto principal · 2026",
      title: "ali-ui",
      lead: "[Em uma frase: um design system enxuto, com poucos componentes, cada um bem acabado, do token ao teste.]",
      facts: [
        { label: "Problema", text: "[Por que criar outro sistema.]" },
        {
          label: "Decisões",
          text: "Tokens em dois níveis, Radix para acessibilidade, teste de contraste WCAG AA.",
        },
        {
          label: "O que construí",
          text: "Monorepo, Storybook publicado, pipeline com verificação automática.",
        },
      ],
      storybook: { label: "Abrir o Storybook", href: "https://ali-ui-delta.vercel.app" },
      github: { label: "Ver no GitHub", href: "https://github.com/AdrianSilvaFuentes/ali-ui" },
      imageAlt:
        "Formulário de exemplo do ali-ui no Storybook, lado a lado nos temas claro e escuro.",
      thumbnails: ["Tokens", "Figma ↔ código", "Teste AA"],
    },
    site: {
      eyebrow: "Projeto · 2026",
      title: "Este site",
      lead: "Feito com os componentes do ali-ui. A prova de que o sistema funciona em um produto real.",
      code: { label: "Ver o código", href: "https://github.com/AdrianSilvaFuentes/ali-portfolio" },
      imageAlt: "Primeira tela deste site: saudação, título, botões e o retrato em forma de selo.",
    },
    /** Experimentos pequenos. A seção só aparece quando houver pelo menos um. */
    experiments: {
      title: "Experimentos",
      items: [] as { name: string; description: string; href: string | null }[],
    },
  },
  resume: {
    eyebrow: "Experiência",
    title: "De coletar comportamento em dados a desenhar as jornadas que o moldam.",
    intro:
      "[Como cheguei aqui, em 3 parágrafos curtos: comunicação e marketing (por que as pessoas fazem o que fazem na tela) → pesquisa e design de interação, com visitas de campo → produto, com design e código. Fechar com: hoje levo o problema até o produto entregue.]",
    location: "Blumenau, SC",
    nickname: { before: "Todo mundo me chama de ", name: "Ali" },
    photo: "Foto de pesquisa de campo",
    cv: "[Currículo (PDF)]",
    experience: {
      title: "Experiência",
      items: [
        {
          period: "abr 2025 — hoje",
          place: "São Paulo · remoto",
          title: "UX Product Designer · Nuvia",
        },
        {
          period: "dez 2024 — abr 2025",
          place: "Blumenau",
          title: "UX Designer · Wiipo",
          text: "Pesquisa, design e documentação do design system para desktop e mobile (React Native), e integração com os produtos da Senior para um SuperApp.",
        },
        {
          period: "nov 2022 — jan 2025",
          place: "Blumenau",
          title: "UX Designer · Senior Sistemas",
          bullets: [
            "Biblioteca de 1.500+ ícones vetoriais no lugar de recursos externos pagos.",
            "Aumento do NPS do GKO Fretes XT ao adaptar os padrões do design system ao Delphi.",
            "Pesquisa com grupos focais e entrevistas até personas e jornadas; testes de usabilidade no Maze.",
            "Documentação técnica de componentes (React, Angular, Flutter), com acessibilidade e tokens.",
          ],
        },
        {
          period: "2020 — 2023",
          place: "Santiago, Chile",
          title: "UI Designer e Web Developer · NODO.team",
          text: "Sites, blogs e e-commerce do Figma ao HTML, CSS e WordPress, com benchmarking e arquitetura de informação apresentados aos clientes.",
        },
        {
          period: "2018 — 2022",
          place: "Chile e EUA",
          title: "Antes: marca, web e marketing",
          text: "Na The Rio System criei a marca, a identidade visual e as landing pages em WordPress. Na STAFF Chile, campanhas, e-mail e relatórios. Na Agencia MRC, estratégia para clientes de hotéis a ciência, junto de um time de UI/UX e desenvolvedores. Foi onde aprendi a ouvir cliente e medir resultado.",
          link: "Ver sites e marcas",
        },
      ] as ExperienceItem[],
    },
    education: {
      title: "Formação",
      degree: "Marketing",
      school: "Pontificia Universidad Católica de Chile",
      years: "2014 — 2018",
      honorsTitle: "Distinções",
      honors: [
        "Matrícula de Honor",
        "Beca de Excelencia Académica UC",
        "Beca de Excelencia Académica (Governo do Chile)",
      ],
    },
    languages: {
      title: "Idiomas",
      /** Cada idioma escrito nele mesmo, com o código para o atributo lang. */
      items: [
        { name: "Português", lang: "pt-BR", level: "nativo" },
        { name: "Español", lang: "es", level: "nativo" },
        { name: "English", lang: "en", level: "profissional completo" },
      ],
    },
    certifications: {
      title: "Certificações",
      courses: { one: "curso", many: "cursos" },
      showAll: "Ver todas",
      showLess: "Ver menos",
    },
  },
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

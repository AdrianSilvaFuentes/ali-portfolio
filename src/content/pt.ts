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
    photoAlt:
      "Visita a cliente para pesquisa de campo: um grupo ao redor de uma mesa com notebooks e coletores de dados, conversando sobre o trabalho.",
    cv: "[Currículo (PDF)]",
    experience: {
      title: "Experiência",
      items: [
        {
          period: "abr 2025 — hoje",
          place: "São Paulo · remoto",
          title: "UX Product Designer · Nuvia",
          bullets: [
            "Liderei a estratégia de UX e o design de produto de ponta a ponta da Nuvia, uma plataforma que dá a times de vendas B2B dados e automação com IA.",
            "Desenhei e documentei as jornadas dos módulos principais, como Search, Campaigns, Inbound, Records e Billing.",
            "Escrevi os textos do produto, os fluxos de onboarding e a documentação interna no Mintlify, com foco em clareza e consistência.",
            "Usei ferramentas de IA como V0, Lovable e Figma Compose para acelerar o design, gerar ideias de interface e otimizar conteúdo.",
            "Fiz a ponte entre Desenvolvimento, Marketing e Operações, alinhando os times em torno do roadmap e das entregas.",
            "Conduzi pesquisas e entrevistas com usuários para validar fluxos e guiar as decisões de design.",
            "Ajudei a construir a narrativa de go-to-market com a liderança, na proposta de valor e no posicionamento do produto.",
          ],
        },
        {
          period: "dez 2024 — abr 2025",
          place: "Blumenau, SC · híbrido",
          title: "UX Designer · Wiipo",
          bullets: [
            "Pesquisa, design e documentação do design system da Wiipo para desktop e mobile (React Native).",
            "Pesquisa qualitativa e quantitativa com usuários.",
            "Integrações entre os produtos da Senior Sistemas e a Wiipo para construir um SuperApp.",
          ],
        },
        {
          period: "nov 2022 — jan 2025",
          place: "Blumenau, SC",
          title: "UX Designer · Senior Sistemas",
          bullets: [
            "Pesquisa com grupos focais, entrevistas semiestruturadas, formulários quantitativos e triangulação de dados para definir personas, mapas de jornada, customer journey e product-market fit.",
            "Análise de resultados na web com Google Analytics, HubSpot e Maze para melhorar a interface.",
            "Documentação técnica de novos componentes do Senior Design System, com usabilidade, acessibilidade, tokens e cenários (React e Angular na web; iOS, Flutter e Android no mobile).",
            "Protótipos navegáveis no Figma para testes de usabilidade no Maze, com análise de mapas de calor, cliques na jornada, tempo médio e suporte a dispositivos.",
            "Criação da Senior Systems Icon Lib: mais de 1.500 ícones vetoriais no Figma para o Senior Design System, com economia em relação a recursos externos.",
            "Melhorias de design que aumentaram o NPS do GKO Fretes XT, com a adoção das cores e dos padrões visuais do SDS (Senior Design System) adaptados ao Delphi.",
            "Sessões de trabalho com desenvolvedores back-end, front-end e full stack para melhorar processos no desktop, em dispositivos móveis e em coletores de dados usados em armazéns.",
          ],
        },
        {
          period: "jun 2021 — ago 2022",
          place: "Chile",
          title: "Especialista em Marketing Digital · STAFF Chile",
          bullets: [
            "Relatórios com Google Analytics, Google Data Studio e Facebook Business Manager, entre outros, para acompanhar o orçamento das campanhas, o comportamento no site e melhorias em produtos digitais.",
            "Campanhas de e-mail marketing do conteúdo ao HTML, com limpeza da base de contatos no Excel para envios em massa pelo Mailchimp.",
            "Campanhas no Google Ads e no Facebook Business Manager.",
          ],
        },
        {
          period: "jan 2021 — nov 2022",
          place: "Colorado, EUA · remoto",
          title: "Consultor de Marketing Digital · The Rio System",
          bullets: [
            "Criação da marca e da identidade visual da empresa, junto com a estratégia de conteúdo para SEO e a presença na web.",
            "Pesquisa de mercado e benchmarking para construir os elementos da marca.",
            "Design da interface das landing pages e desenvolvimento front-end em WordPress com Elementor Pro.",
          ],
          link: "Ver marca",
        },
        {
          period: "jan 2020 — jan 2023",
          place: "Santiago, Chile · remoto",
          title: "UI Designer e Web Developer · NODO.team",
          bullets: [
            "Crescimento exponencial na entrega de sites de diferentes níveis de complexidade, como landings, blogs e e-commerce, com Figma, HTML5, CSS3, Elementor e WordPress.",
            "Apresentações de pesquisa e benchmarking a clientes e stakeholders para criar a arquitetura de informação dos sites.",
            "Revisão dos mapas de conteúdo e melhorias para reestruturar os sites, com foco em SEO e boas práticas de HTML.",
          ],
          link: "Ver sites",
        },
        {
          period: "nov 2018 — jun 2021",
          place: "Chile",
          title: "Executivo de Contas · Agencia MRC",
          bullets: [
            "Papel ativo na criação de estratégias para clientes de vários setores, como hotéis, aviação privada, fundações, concessionárias, imobiliárias, e-commerce e ciência.",
            "Trabalho com um time de 5 especialistas em UI/UX e desenvolvedores front-end e back-end para criar propostas estratégicas para os clientes.",
            "Prototipação e design de interface com Figma e Adobe XD.",
            "Supervisão e manutenção de sites em WordPress avançado.",
            "Apresentações de pesquisa e benchmark para novos clientes e stakeholders.",
            "Relacionamento com os clientes que levou a renovações de contrato e a novos negócios.",
          ],
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

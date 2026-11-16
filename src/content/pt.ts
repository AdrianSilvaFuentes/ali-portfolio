import type { CaseKey } from "@/i18n/config";

/**
 * Textos do site em português, a língua-fonte. en.ts e es.ts seguem esta mesma forma.
 * Nenhum texto vive dentro dos componentes.
 * Trechos entre [colchetes] são provisórios e continuam visíveis até o conteúdo final.
 */
/** Uma imagem de caso: caminho em public/ sem extensão (.webp ou .png), tamanho exibido e texto alternativo. */
export type CaseImage = { src: string; width: number; height: number; alt: string };

/** Um card: rótulo, título sem ponto final e, opcionalmente, uma nota curta com " - ". */
type CaseCard = { label: string; title: string; note?: string };

/** O conteúdo real de um caso, no molde: Problema, Metodologia, Análise, Decisão, Entrega, Resultado. */
export type CaseStudyContent = {
  skills: string[];
  method: string[];
  tools: string[];
  cover: CaseImage;
  problem: { paragraphs: string[]; points: { label: string; text: string }[]; cards: CaseCard[] };
  methodology: { lead: string; cards: (CaseCard & { image: CaseImage })[] };
  analysis: {
    lead: string;
    rows: { title: string; text: string; data: string }[];
    flow: { label: string; inputs: string[]; decisionLabel: string; decision: string };
    crossTitle: string;
    crossings: { title: string; text: string }[];
  };
  decision: {
    lead: string;
    chartLabel: string;
    options: { letter: string; value: number; caption: string }[];
    cards: CaseCard[];
  };
  delivery: { lead: string; items: { image: CaseImage; caption: string }[] };
  result: { lead: string; metrics: { value: string; label: string }[]; image: CaseImage };
};

/** Um caso de produto. Com `study`, a página usa o molde real; sem ele, o modelo provisório. */
type CaseText = {
  company: string;
  years: string;
  role: string;
  tags: string[];
  title: string;
  summary: string;
  result: string;
  /** Imagem 16:10 do card na Home e em Trabalho. Sem ela, o card mostra uma área reservada. */
  cardImage?: CaseImage;
  study?: CaseStudyContent;
};

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
        years: "2025",
        role: "UX Designer",
        tags: ["Pesquisa UX", "Super app", "Teste de usabilidade"],
        title: "Feature de registro de ponto dentro do app da empresa",
        summary: "[Problema → resultado, em uma linha.]",
        result: "Widget lançado na Home (layout A, 67%)",
        cardImage: {
          src: "/casos/wiipo/wiipo-card",
          width: 1024,
          height: 640,
          alt: "Tela inicial do app Wiipo com o botão Marcar Ponto em destaque",
        },
        study: {
          skills: ["Pesquisa quantitativa", "Pesquisa qualitativa", "Design e prototipação"],
          method: [
            "Benchmark",
            "Formulário",
            "Entrevistas semiestruturadas",
            "Teste de usabilidade",
          ],
          tools: ["Figma", "Google Forms", "Maze"],
          cover: {
            src: "/casos/wiipo/wiipo-capa",
            width: 1168,
            height: 420,
            alt: "Tela inicial do app com o widget de registro de ponto na parte central-superior",
          },
          problem: {
            paragraphs: [
              "A Wiipo, produto financeiro da Senior Sistemas, queria virar um super app para colaboradores: reunir vale-alimentação, holerite e carteiras com módulos de registro de ponto, feedbacks e programação de férias, entre outros.",
              "O primeiro serviço a integrar foi o registro de ponto. É uma tarefa de segundos, repetida várias vezes ao dia, que passaria a morar dentro de um app pensado para serviços financeiros. A pergunta era: onde colocá-lo para que fique fácil de achar, sem se perder atrás do conteúdo financeiro?",
            ],
            points: [
              {
                label: "Risco",
                text: "o ponto ficar escondido atrás de conteúdo financeiro.",
              },
              {
                label: "Hipótese",
                text: "incorporar serviços do colaborador torna o app mais conveniente e aumenta o uso.",
              },
            ],
            cards: [
              {
                label: "Objetivo 1",
                title: "Conhecer a percepção dos usuários sobre a jornada Wiipo + Ponto",
              },
              {
                label: "Objetivo 2",
                title: "Validar a jornada de integração e a arquitetura de informação",
              },
              {
                label: "Objetivo 3",
                title: "Definir os alcances técnicos da integração",
              },
            ],
          },
          methodology: {
            lead: "Métodos quantitativos e qualitativos combinados: o que as pessoas fazem, o que dizem e por quê.",
            cards: [
              {
                label: "Benchmark",
                title:
                  "Fintechs e bancos digitais: arquitetura, design system, interações, nomenclatura",
                note: "Estudo de 4 apps - Inter, Nubank, Itaú e Tenpo",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-benchmark",
                  width: 394,
                  height: 180,
                  alt: "Recorte de telas de apps financeiros usados no benchmark",
                },
              },
              {
                label: "Formulário",
                title: "Alternativa e seleção múltipla com usuários ativos",
                note: "Amostra calculada: 384 participantes - 95% de confiança",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-formulario",
                  width: 394,
                  height: 180,
                  alt: "Gráfico com respostas do formulário aplicado a usuários",
                },
              },
              {
                label: "Entrevistas",
                title: "Semiestruturadas, com as perguntas do formulário como base",
                note: "5 usuários - 40 minutos por sessão",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-entrevistas",
                  width: 394,
                  height: 180,
                  alt: "Ilustração de uma sessão de entrevista com um usuário",
                },
              },
              {
                label: "Teste de usabilidade",
                title: "Tarefa guiada, CES, escolha entre layouts e pergunta aberta",
                note: "27 respostas - Colaboradores da Senior Sistemas",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-teste",
                  width: 394,
                  height: 180,
                  alt: "Tela do protótipo usado no teste de usabilidade",
                },
              },
            ],
          },
          analysis: {
            lead: "Os números mostram o quê; os comentários explicam por quê. Cada tipo de dado foi lido separadamente e só depois cruzado com os outros.",
            rows: [
              {
                title: "Tarefa guiada",
                text: "Esforço real, não opinião: tempo, sucesso, cliques errados e mapa de calor do toque.",
                data: "23,4 s · 100% de sucesso · 51,5% de cliques errados",
              },
              {
                title: "Escalas de 1 a 5",
                text: "Média e distribuição inteira, não só o topo.",
                data: "Usaria com frequência: 4,2 · Complexo demais: 1,8 · Aprende rápido: 4,5",
              },
              {
                title: "Escolha entre 4 layouts",
                text: "Voto único, lido como preferência declarada.",
                data: "A 67% · B 14% · C 14% · D 5%",
              },
              {
                title: "Pergunta aberta",
                text: "Comentários agrupados em categorias, com o peso de cada uma.",
                data: "Organização 33,3% · menos banners 16,7% · feedback positivo 16,7% · técnicas 8,3% · ideias 8,3%",
              },
            ],
            flow: {
              label: "Quatro tipos de dado levam à decisão pelo layout A",
              inputs: [
                "Tarefa: tempo, sucesso, cliques",
                "Escalas: média e distribuição",
                "Layouts: voto de preferência",
                "Pergunta aberta: categorias",
              ],
              decisionLabel: "Decisão",
              decision: "Layout A na Home",
            },
            crossTitle: "O cruzamento",
            crossings: [
              {
                title: "A preferência ganha sentido pela frequência",
                text: "O layout A teve 67%, e um participante explica: o ponto é usado ao menos 4 vezes ao dia; o saldo, esporadicamente.",
              },
              {
                title: "Os 33% restantes mostram o que o layout A ainda não resolve",
                text: "Um participante achou que o A ocupa muito espaço e preferiu o C. Outro achou confuso misturar ponto e app financeiro e sugeriu um atalho antes do login.",
              },
              {
                title: "Pedidos fora do widget foram separados",
                text: "Os pedidos de menos banners vêm do contexto da home, não do widget. Foram tratados como achado à parte.",
              },
              {
                title: "Falhas técnicas não entram na decisão de design",
                text: "A falha do reconhecimento facial é de autenticação e pertence ao alcance técnico.",
              },
            ],
          },
          decision: {
            lead: "O widget de Ponto entra na parte central-superior da Home: o que se usa mais vezes por dia fica mais perto, e a maioria preferiu assim.",
            chartLabel: "Preferência entre os 4 layouts",
            options: [
              {
                letter: "A",
                value: 67,
                caption: "Widget de Ponto na parte central-superior da Home",
              },
              {
                letter: "B",
                value: 14,
                caption: "Widget só na barra inferior",
              },
              {
                letter: "C",
                value: 14,
                caption: "Widget menor, junto com banner",
              },
              {
                letter: "D",
                value: 5,
                caption: "Acesso rápido no topo",
              },
            ],
            cards: [
              {
                label: "Escolhido",
                title: "Layout A",
              },
              {
                label: "Descartado",
                title: "B, C e D, pelo voto e pelo espaço",
              },
              {
                label: "Ficou em aberto",
                title: "Atalho antes do login. Menos banners na home",
              },
            ],
          },
          delivery: {
            lead: "Os protótipos usados no teste e o widget de Ponto da Home que depois foi lançado.",
            items: [
              {
                image: {
                  src: "/casos/wiipo/wiipo-entrega-layouts",
                  width: 256,
                  height: 280,
                  alt: "Quatro posições testadas para o módulo de ponto na Home, lado a lado",
                },
                caption: "O mesmo módulo em quatro posições.",
              },
              {
                image: {
                  src: "/casos/wiipo/wiipo-entrega-modulo",
                  width: 256,
                  height: 280,
                  alt: "Módulo de registro de ponto, com marcações e aviso de uso sem internet",
                },
                caption:
                  "Pressão prolongada para registrar, e aviso de que dá para bater o ponto offline.",
              },
              {
                image: {
                  src: "/casos/wiipo/wiipo-entrega-widgets",
                  width: 256,
                  height: 280,
                  alt: "Três widgets de registro de ponto para a tela inicial do celular",
                },
                caption: "Testados no celular.",
              },
            ],
          },
          result: {
            lead: "O widget de registro de ponto foi lançado na Home, na posição preferida pela maioria dos participantes do teste.",
            metrics: [
              {
                value: "67%",
                label: "escolheram o layout lançado",
              },
              {
                value: "100%",
                label: "de sucesso na tarefa, em 23,4 s",
              },
              {
                value: "1,8",
                label: "de complexidade, em escala de 1 a 5",
              },
            ],
            image: {
              src: "/casos/wiipo/wiipo-resultado",
              width: 1920,
              height: 1080,
              alt: "Widget de registro de ponto no ar, na Home do app",
            },
          },
        },
      },
    } as Record<CaseKey, CaseText>,
    /**
     * O modelo da página de caso, igual para todos enquanto o conteúdo real não chega.
     * Quando chegar, cada caso ganha os próprios textos.
     */
    /** Rótulos do molde real dos casos (os que têm `study`). */
    caseStudy: {
      meta: {
        result: "Resultado",
        skills: "Skills",
        method: "Método",
        tools: "Ferramentas",
      },
      sections: {
        problem: "Problema",
        method: "Metodologia",
        analysis: "Análise",
        decision: "Decisão",
        delivery: "Entrega",
        result: "Resultado",
      },
      image: "Imagem",
    },
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

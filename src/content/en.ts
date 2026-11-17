import type { Dictionary } from "./pt";

/**
 * English, generated from pt.ts.
 * REVISAR: tradução gerada, aguardando revisão do Adrián (o inglês é prioridade).
 */
export const en: Dictionary = {
  site: {
    name: "Adrián Silva Fuentes",
    title: "Adrián Silva Fuentes · Product Design Engineer",
    description:
      "Senior product designer who takes the problem all the way to the shipped product, with design and code.",
  },
  nav: {
    label: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Home",
    work: "Cases",
    resume: "Resume",
    contact: "Contact",
  },
  language: {
    label: "Language",
  },
  theme: {
    label: "Theme",
    light: "Light",
    dark: "Dark",
  },
  home: {
    role: "Product Design Engineer",
    /** O título da abertura, em duas linhas; "Ali" leva o destaque amarelo. */
    title: {
      first: "Hi! I’m Adrian,",
      before: "but everyone calls me ",
      name: "Ali :)",
    },
    lead: "I’m a Senior Product Designer with a strong passion for crafting purposeful products through UX and interaction design.",
    seeWork: "See cases",
    talk: "Get in touch",
    portraitAlt: "Adrián smiling, wearing a cap and a scarf, in front of a windmill.",
    tags: { uxUi: "UI/UX Design", product: "Product Engineer", branding: "Branding & Identity" },
    reserved: "Reserved space",
    proofs: {
      title: "Proof",
      items: [
        {
          project: "GKO Fretes XT",
          value: "[+X]",
          result: "NPS points after adapting the product's visual standards.",
          note: "[needs the real number]",
        },
        {
          project: "Senior Systems Icon Lib",
          value: "1,500+",
          result: "icons created in-house, instead of paid external resources.",
          note: "[cost avoided, if any]",
        },
        {
          project: "ali-ui",
          value: "AA",
          result: "contrast verified by automated tests, in light and dark themes.",
          note: "personal project, from scratch",
        },
      ],
    },
    process: {
      eyebrow: "How I work",
      title: "From problem to outcome, hands on the product.",
      steps: [
        {
          title: "Discover",
          description:
            "Field research, interviews and usage data to find where the experience breaks and what it costs.",
        },
        {
          title: "Decide",
          description:
            "I turn what I learned into priorities and set the success metric before the first screen.",
        },
        {
          title: "Build",
          description:
            "Design and code in one flow, with AI to move faster and a design system to stay consistent.",
        },
        {
          title: "Measure",
          description:
            "I test with users and track the numbers after launch. What I learn feeds the next cycle.",
        },
      ],
    },
    cases: {
      eyebrow: "Featured cases",
      title: "Selected cases",
      seeAll: "See all cases",
      viewCase: "View case",
      image: "Case image",
    },
    built: {
      eyebrow: "Latest project",
      status: "In progress",
      title: "Ali Design System, built from scratch.",
      lead: "Tokens, components and documentation, with contrast tested on every build. This panel is the real Storybook: you can click and type.",
      demo: "Interactive demo of the Ali Design System, loaded from Storybook",
      storybook: { label: "Open Storybook", href: "https://ali-ui-delta.vercel.app" },
      github: { label: "View on GitHub", href: "https://github.com/AdrianSilvaFuentes/ali-ui" },
      palette: "Gray scale and the brand yellow, taken from the ali-ui tokens",
      samples: {
        label: "ali-ui component samples",
        button: { name: "Button", label: "Save" },
        input: { name: "Input", label: "Project name", value: "ali-ui" },
        select: { name: "Select", label: "Theme", options: ["Light", "Dark"] },
      },
    },
    stack: {
      title: "Stack",
      groups: [
        {
          title: "Components and styles",
          items: [
            { name: "React", description: "components", icon: "react" },
            { name: "TypeScript", description: "in strict mode", icon: "typescript" },
            { name: "Tailwind CSS 4", description: "styles from the tokens", icon: "tailwind" },
          ],
        },
        {
          title: "Repository and build",
          items: [
            { name: "pnpm", description: "installation", icon: "pnpm" },
            { name: "Turborepo", description: "monorepo", icon: "turborepo" },
            { name: "Vite", description: "build", icon: "vite" },
          ],
        },
        {
          title: "Quality",
          items: [
            { name: "Vitest", description: "tests, including WCAG contrast", icon: "vitest" },
            { name: "Biome", description: "linting and formatting", icon: "biome" },
            { name: "GitHub Actions", description: "automated checks", icon: "github" },
          ],
        },
        {
          title: "Documentation and publishing",
          items: [
            { name: "Storybook 9", description: "documentation", icon: "storybook" },
            { name: "Vercel", description: "publishing", icon: "vercel" },
          ],
        },
      ],
    },
    before: {
      eyebrow: "Before product",
      title: "Before product, I was already designing and shipping websites and brands.",
      lead: "Design and code made by hand, with a marketing background behind every decision.",
      items: [
        {
          title: "Web design and UI",
          description:
            "Landing pages, blogs and e-commerce from Figma to HTML, CSS and WordPress. [3+ years, NODO.team]",
          link: "See websites",
        },
        {
          title: "Branding and identity",
          description: "Brand, visual identity and web presence for a US company. [The Rio System]",
          link: "See brands",
        },
      ],
      thumbnails: [
        {
          label: "Landing page",
          image: { src: "/casos/web/ailex", width: 1200, height: 869, alt: "" },
        },
        {
          label: "Logo / brand",
          image: { src: "/casos/web/the-rio-system", width: 1200, height: 869, alt: "" },
        },
        {
          label: "Landing page",
          image: { src: "/casos/web/novamineralis", width: 1200, height: 869, alt: "" },
        },
        {
          label: "Brand page",
          image: { src: "/casos/web/identa", width: 1080, height: 820, alt: "" },
        },
      ],
    },
  },
  work: {
    eyebrow: "Cases",
    title: "Products I improved, and sites and brands I designed.",
    filters: { label: "Filter cases", all: "All", product: "Product", web: "Web and brand" },
    product: { title: "Product", readCase: "View case", image: "Case image" },
    web: {
      title: "Web and brand",
      thumbnail: "Thumbnail",
      reserved: "Placeholder",
      items: [
        // REVISAR
        {
          name: "Ailex",
          description: "UI design · responsive website for a legal tech company",
          meta: "2023",
          link: "See on Behance",
          href: "https://www.behance.net/gallery/160898291/UI-Design-Ailex-Tech",
          image: {
            src: "/casos/web/ailex",
            width: 1200,
            height: 869,
            alt: "Ailex website on a laptop and a phone, with an orange header, a laptop and the Nosotros, Características and Productos sections",
          },
        },
        {
          name: "Novamineralis",
          description: "UI design · responsive website for a mining technology company",
          meta: "2025",
          link: "See on Behance",
          href: "https://www.behance.net/gallery/197578587/UI-Design-(Novamineralis)",
          image: {
            src: "/casos/web/novamineralis",
            width: 1200,
            height: 869,
            alt: "Novamineralis website on a laptop and a phone, with a mine photo at the top, the headline about mineral extraction and a scientist in a lab",
          },
        },
        {
          name: "[Site name]",
          description: "Landing page · Figma, HTML, CSS, WordPress",
          meta: "NODO.team · [year]",
          link: "[See site]",
        },
        {
          name: "[Store name]",
          description: "E-commerce · information architecture and SEO",
          meta: "NODO.team · [year]",
          link: "[See site]",
        },
        {
          name: "The Rio System",
          description: "Brand, visual identity and web presence",
          meta: "2022",
          link: "See on Behance",
          href: "https://www.behance.net/gallery/151215671/Branding-Identity-The-Rio-System",
          image: {
            src: "/casos/web/the-rio-system",
            width: 1200,
            height: 869,
            alt: "The Rio System logo in white over the blue sky of Rio de Janeiro, with Sugarloaf Mountain and Christ the Redeemer in the background",
          },
        },
        {
          name: "Clínica iDenta",
          description: "Branding and social media for a dental clinic",
          meta: "2024",
          link: "See on Behance",
          href: "https://www.behance.net/gallery/211890569/Social-Media-iDenta",
          image: {
            src: "/casos/web/identa",
            width: 1080,
            height: 820,
            alt: "Clínica iDenta logo in white over a photo of hands in black gloves holding a dental model",
          },
        },
      ],
    },
    cases: {
      // TODO(Adrián): confirmar duração das entrevistas e o setor do cliente citado na pergunta 4.
      support: {
        company: "Senior Sistemas",
        years: "2024",
        role: "UX Designer",
        tags: ["UX research", "Support", "Model validation"],
        title: "Validating premium support plans with larger customers",
        summary: "[Problem → outcome, in one line.]",
        result: "The most valued support attributes, handed to management to choose the model",
        cardImage: {
          src: "/casos/suporte/suporte-card",
          width: 1024,
          height: 640,
          alt: "Snippets from the support research: compared plans, survey results, synthesis matrix and open questions",
        },
        study: {
          skills: ["Qualitative research", "Synthesis and analysis"],
          method: [
            "Benchmark",
            "Certainties and doubts map",
            "Semi-structured interviews",
            "Survey",
          ],
          tools: ["Miro", "Notion"],
          cover: {
            src: "/casos/suporte/suporte-capa",
            width: 1168,
            height: 420,
            alt: "Premium support plans for larger customers, with a sticky note map in the background",
          },
          problem: {
            paragraphs: [
              "Senior was designing premium support plans and needed to know whether its larger customers would pay for differentiated service. They were large customers, rated AA by monthly recurring revenue (MRR).",
              "Before investing in new plans, the business team had hypotheses and doubts. The research existed to test them with the people who would pay.",
            ],
            goal: {
              label: "General goal",
              title:
                "Explore customers' intention and willingness to pay for a differentiated support plan",
            },
            cards: [
              {
                label: "Specific goal 1",
                title: "Understand the current support landscape and how it works",
              },
              {
                label: "Specific goal 2",
                title: "Identify improvement points in the current process",
              },
              {
                label: "Specific goal 3",
                title: "Find out which support plan best suits large customers",
              },
            ],
          },
          methodology: {
            lead: "Research methods combined: what the market offers, what customers say and what they prioritize when they have to choose.",
            cards: [
              {
                label: "Benchmark",
                title: "Support plans from other software companies: attributes, tiers and prices",
                note: "Secondary research",
                image: {
                  src: "/casos/suporte/suporte-metodo-benchmark",
                  width: 394,
                  height: 180,
                  alt: "A comparison of other companies' support plans",
                },
              },
              {
                label: "Certainties and doubts map",
                title: "The business team's doubts, aligned before the interviews",
                note: "Before going to the field",
                image: {
                  src: "/casos/suporte/suporte-metodo-duvidas",
                  width: 394,
                  height: 180,
                  alt: "A certainties and doubts map with sticky notes",
                },
              },
              {
                label: "Interviews",
                title:
                  "Semi-structured: unbiased opening questions, a presentation of the plans and specific questions",
                note: "5 customers - [30 to 40] minutes per session",
                image: {
                  src: "/casos/suporte/suporte-metodo-entrevistas",
                  width: 394,
                  height: 180,
                  alt: "Open interview questions in Miro",
                },
              },
              {
                label: "Survey",
                title: "Closed questions to quantify open answers",
                note: "3 responses - Interviewed customers",
                image: {
                  src: "/casos/suporte/suporte-metodo-formulario",
                  width: 394,
                  height: 180,
                  alt: "The survey sent to customers",
                },
              },
            ],
          },
          analysis: {
            lead: "Each question had a goal. The testimonials became concepts, and the concepts were crossed.",
            columns: ["Question", "Goal", "Insight"],
            rows: [
              {
                title: "1. What do you understand by high-availability support?",
                text: "Map perception",
                data: "24/7 · fast response · shorter SLA",
                quote: "24/7 service and a direct, prioritized and human channel",
              },
              {
                title: "2. Have you ever needed support outside business hours?",
                text: "Identify real pain points",
                data: "Weekly or monthly · unofficial WhatsApp",
                quote: "Yes, there were times when the response we got came very late",
              },
              {
                title: "3. What do you value most in a support plan?",
                text: "Map attributes and purchase intent",
                data: "SLA · key people team (SPOC) · documentation",
                quote: "Some only reach out through tickets and there's no closeness",
              },
              {
                title: "4. Which plan best matches your expectations?",
                text: "Prioritize among real plans",
                data: "SPOC · advanced SLA · remote assistance",
                quote: "Priority, because of the focal point and the premium SLA",
                source: "customer from the [confirm] sector",
              },
              {
                title: "4.1 And which would you be least likely to buy?",
                text: "Identify what adds no value",
                data: "Extended hours · similar to the standard",
                quote: "Extended premium wouldn't be useful for our profile",
              },
              {
                title: "5. Additional comments and questions",
                text: "Leave room for the unexpected",
                data: "Combine attributes from plans",
                quote:
                  "You could take one topic from one, one from another, and build an ideal plan",
              },
            ],
            flow: {
              kind: "chain",
              label: "Analysis chain: testimonial, sticky note, recurring concept and conclusion",
              steps: [
                {
                  title: "Testimonial",
                  note: "what the customer said",
                },
                {
                  title: "Sticky note",
                  note: "one idea per note",
                },
                {
                  title: "Recurring concept",
                  note: "groups several notes",
                },
                {
                  title: "Conclusion",
                  note: "crosses the questions",
                },
              ],
            },
            crossTitle: "Crossing the data",
            crossings: [
              {
                title: "A shorter SLA is the most cited, but it's a symptom",
                text: "The causes: little technical knowledge and an insufficient first response.",
              },
              {
                title: "The need outside business hours is low",
                text: "Weekly or monthly. Extended hours was the least wanted.",
              },
              {
                title: "What they say they value and what they choose match",
                text: "Advanced SLA, focal point and remote assistance, in both stages.",
              },
              {
                title: "WhatsApp reveals a gap",
                text: "In emergencies, it becomes an unofficial channel.",
              },
              {
                title: "Documentation is support too",
                text: "If it were clear, customers would solve things on their own.",
              },
            ],
          },
          decision: {
            lead: "Management chose the service model. The research pointed to the attributes that would support the decision: advanced SLA, a focal point (SPOC) and remote assistance.",
            cards: [
              {
                label: "Recommended",
                title:
                  "Plans that combine advanced SLA, a focal point and remote assistance. Premium Priority brings all three together",
              },
              {
                label: "Least wanted",
                title:
                  "Premium Extended (extended hours with no need) and Online Consulting (similar to today's standard support)",
              },
              {
                label: "Left open",
                title:
                  "How much they would pay: only one customer said they would. And the option of combining attributes from different plans",
              },
            ],
          },
          delivery: {
            lead: "The synthesis matrix brings the 6 questions into rows and the 5 customers into columns, with the transcript, behavior notes and conclusions for each question. It was the artifact behind the analysis.",
            items: [
              {
                image: {
                  src: "/casos/suporte/suporte-entrega-matriz",
                  width: 1920,
                  height: 1080,
                  alt: "A synthesis matrix crossing the answers by question and by customer",
                },
                caption:
                  "Rows: questions. Columns: customers, with transcript and notes. Last column: conclusions.",
              },
            ],
          },
          result: {
            lead: "The research gave management a synthesis of the support attributes larger customers value most, to inform the choice of service model.",
            metrics: [
              {
                value: "5",
                label: "customers interviewed, from different segments",
              },
              {
                value: "6",
                label: "service models tested",
              },
              {
                value: "3",
                label: "most valued attributes",
              },
            ],
            note: "The research is qualitative: it shows trends and reasons, and doesn't represent all customers.",
          },
        },
      },
      aliUi: {
        company: "Personal project",
        years: "2026",
        role: "Design and code",
        tags: ["Design system", "Tokens", "Accessibility"],
        title: "Ali Design System: lean, accessible and tested on every build",
        summary: "[Problem → outcome, in one line.]",
        result:
          "21 components in light and dark themes, with WCAG AA contrast checked on every build",
        cardImage: {
          src: "/casos/ali-ui/ali-card",
          width: 1024,
          height: 640,
          alt: "ali-ui components in use: slider, email field, multi-select with tags, buttons, segmented control, select with avatars, checkbox, radio and switch",
        },
        study: {
          skills: ["Systems design", "AI-assisted front-end", "Accessibility"],
          method: ["Semantic tokens", "Components on Radix", "Contrast tests"],
          tools: ["Figma", "Claude Code", "Storybook", "GitHub"],
          cover: {
            src: "/casos/ali-ui/ali-capa",
            width: 1168,
            height: 420,
            alt: "ali-ui components in use (slider, multi-select with tags, buttons, select, checkbox, radio and switch), with the Ali Design System mark",
          },
          problem: {
            paragraphs: [
              "Generic kits repeat what every design system already offers. ali-ui takes another route: few components, each with personality, solving concrete problems across different kinds of operations and industries.",
              "For that to work, design and code have to move together: each design decision becomes a token, a component and a test, with the reasoning recorded in pull requests.",
            ],
            goal: {
              label: "General goal",
              title:
                "Build a compact design system, with few well-finished components, from token to test",
            },
            cards: [
              {
                label: "Specific goal 1",
                title: "Define tokens by role, with the same names in Figma, CSS and code",
              },
              {
                label: "Specific goal 2",
                title: "Ensure accessibility by default, with contrast checked in both themes",
              },
              {
                label: "Specific goal 3",
                title: "Prove the system in a real product: this site",
              },
            ],
          },
          methodology: {
            lead: "References from mature systems, combined with a workflow where every change goes through a branch, automated checks and a pull request.",
            cards: [
              {
                label: "References",
                title:
                  "Carbon, Atlassian Design System and Material Design as a comparison baseline",
                note: "Study of mature systems",
                image: {
                  src: "/casos/ali-ui/ali-metodo-referencias",
                  width: 394,
                  height: 180,
                  alt: "Mature design system references used as a baseline",
                },
              },
              {
                label: "Tokens",
                title: "Two tiers: primitives (values) and semantics (roles)",
                note: "Color, spacing, radius, shadow, typography and motion",
                image: {
                  src: "/casos/ali-ui/ali-metodo-tokens",
                  width: 394,
                  height: 180,
                  alt: "ali-ui primitive and semantic tokens",
                },
              },
              {
                label: "Components",
                title: "Radix UI for accessibility, CVA for variants, Tailwind CSS 4 for styling",
                note: "Component, story and test together",
                image: {
                  src: "/casos/ali-ui/ali-metodo-componentes",
                  width: 394,
                  height: 180,
                  alt: "ali-ui components in Storybook",
                },
              },
              {
                label: "Verification",
                title: "Lint, types, tests and build on every pull request",
                note: "A contrast failure breaks the build",
                image: {
                  src: "/casos/ali-ui/ali-metodo-verificacao",
                  width: 394,
                  height: 180,
                  alt: "Automated contrast checks and tests",
                },
              },
            ],
          },
          analysis: {
            lead: "The whole system rests on one rule: a component never knows the value, only the role.",
            columns: ["Layer", "Example", "Role"],
            rows: [
              {
                title: "Primitive",
                text: "11-step scales (50 to 950): neutrals, brand and status",
                data: "neutral-light-50 · primary · red-500",
              },
              {
                title: "Semantic",
                text: "Names the role of a value and changes per theme (light and dark)",
                data: "surface · surface-raised · text-subtle · border-focus",
              },
              {
                title: "Usage",
                text: "Tailwind classes generated from the tokens; loose values are blocked by lint",
                data: "bg-surface-raised · text-subtle",
              },
            ],
            flow: {
              kind: "chips",
              label:
                "One name everywhere: spacing becomes --ali-spacing-4 in CSS and p-4 in Tailwind",
              title: "One name everywhere",
              chips: ["spacing", "--ali-spacing-4", "p-4"],
              caption: "TypeScript → CSS → Tailwind",
            },
            crossTitle: "Crossing the decisions",
            crossings: [
              {
                title: "Elevation instead of decoration",
                text: "Four surface heights: in the light theme height comes from shadow; in the dark theme, from color.",
              },
              {
                title: "Contrast as a test",
                text: "Text and borders checked against WCAG AA (4.5:1 for text, 3:1 for controls) on every surface.",
              },
              {
                title: "Lint as the system's guard",
                text: "Rules block importing primitives, arbitrary values (like a hand-written hex color) and filled icons.",
              },
              {
                title: "Figma synced from code",
                text: "A plugin creates and updates Figma variables from the tokens, without duplicating collections.",
              },
            ],
          },
          decision: {
            lead: "Decisions that keep the system small and consistent, and the ones still open.",
            cards: [
              {
                label: "Chosen",
                title:
                  "Radix UI for accessibility, CVA for variants and semantic tokens as the only source of values",
              },
              {
                label: "Discarded",
                title: "Loose color, size and spacing values in components, blocked by lint",
              },
              {
                label: "Deliberate exceptions",
                title:
                  "3 points below AA documented in Storybook: white text on the brand gradient (≈ 2.35:1), the subtle border at rest and the placeholder in the light theme",
              },
              {
                label: "Left open",
                title:
                  "Dark mode in Figma: the free plan allows one mode per collection, so only light is created",
              },
            ],
          },
          delivery: {
            lead: "The system ships as living documentation: the published Storybook brings together foundations, components and the contrast and token pages.",
            items: [
              {
                image: {
                  src: "/casos/ali-ui/ali-entrega-storybook",
                  width: 804,
                  height: 470,
                  alt: "The published ali-ui Storybook, with foundations and components",
                },
                demo: "Interactive demo of the Ali Design System, loaded from Storybook",
                caption: "Published Storybook - code on GitHub - Figma plugin to sync the tokens",
              },
            ],
            links: [
              {
                label: "Open Storybook",
                href: "https://ali-ui-delta.vercel.app",
              },
              {
                label: "View on GitHub",
                href: "https://github.com/AdrianSilvaFuentes/ali-ui",
              },
            ],
          },
          result: {
            lead: "ali-ui already supports a real product: this site is built with the system's components.",
            metrics: [
              {
                value: "21",
                label: "components, each with a story and a test",
              },
              {
                value: "2",
                label: "themes, light and dark",
              },
              {
                value: "AA",
                label: "contrast checked on every build",
              },
            ],
            note: "A personal project that keeps evolving: the code is open to view and every decision is recorded in the pull requests.",
          },
        },
      },
      warehouses: {
        company: "[Company]",
        years: "[year]",
        role: "[role]",
        tags: ["Field research", "Logistics", "UX research"],
        title: "Field research in warehouses",
        summary: "[Problem → outcome, in one line.]",
        result: "[Result]",
      },
      gko: {
        company: "Senior Sistemas",
        years: "2022–2025",
        role: "UX Designer",
        tags: ["Logistics", "Design system", "NPS"],
        title: "[+X] NPS on GKO Fretes XT",
        summary: "[Problem → outcome, in one line.]",
        result: "[+X NPS points]",
      },
      icons: {
        company: "Senior Sistemas",
        years: "[year]",
        role: "UX Designer",
        tags: ["Design system", "Icons", "Figma"],
        title: "A library of 1,500+ icons",
        summary: "[Problem → outcome, in one line.]",
        result: "1,500+ icons",
      },
      wiipo: {
        company: "Wiipo",
        years: "2025",
        role: "UX Designer",
        tags: ["UX research", "Super app", "Usability testing"],
        title: "A time clock feature inside the company app",
        summary: "[Problem → outcome, in one line.]",
        result: "Widget launched on the Home (layout A, 67%)",
        cardImage: {
          src: "/casos/wiipo/wiipo-card",
          width: 1024,
          height: 640,
          alt: "The Wiipo app home screen with the Clock in button highlighted",
        },
        study: {
          skills: ["Quantitative research", "Qualitative research", "Design and prototyping"],
          method: ["Benchmark", "Survey", "Semi-structured interviews", "Usability testing"],
          tools: ["Figma", "Google Forms", "Maze"],
          cover: {
            src: "/casos/wiipo/wiipo-capa",
            width: 1168,
            height: 420,
            alt: "The app's home screen with the time clock widget in the upper center",
          },
          problem: {
            paragraphs: [
              "Wiipo, a financial product by Senior Sistemas, wanted to become a super app for employees: bringing meal vouchers, payslips and wallets together with modules for time clock, feedback and vacation planning, among others.",
              "The first service to integrate was the time clock. It's a task of seconds, repeated several times a day, that would now live inside an app built for financial services. The question was: where to place it so it's easy to find, without getting lost behind financial content?",
            ],
            points: [
              {
                label: "Risk",
                text: "the time clock getting hidden behind financial content.",
              },
              {
                label: "Hypothesis",
                text: "adding employee services makes the app more convenient and increases usage.",
              },
            ],
            cards: [
              {
                label: "Goal 1",
                title: "Understand how users perceive the Wiipo + Time clock journey",
              },
              {
                label: "Goal 2",
                title: "Validate the integration journey and the information architecture",
              },
              {
                label: "Goal 3",
                title: "Define the technical scope of the integration",
              },
            ],
          },
          methodology: {
            lead: "Quantitative and qualitative methods combined: what people do, what they say and why.",
            cards: [
              {
                label: "Benchmark",
                title:
                  "Fintechs and digital banks: architecture, design system, interactions, naming",
                note: "Study of 4 apps - Inter, Nubank, Itaú and Tenpo",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-benchmark",
                  width: 394,
                  height: 180,
                  alt: "A crop of financial app screens used in the benchmark",
                },
              },
              {
                label: "Survey",
                title: "Single and multiple choice with active users",
                note: "Calculated sample: 384 participants - 95% confidence",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-formulario",
                  width: 394,
                  height: 180,
                  alt: "A chart with answers from the survey sent to users",
                },
              },
              {
                label: "Interviews",
                title: "Semi-structured, based on the survey questions",
                note: "5 users - 40 minutes per session",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-entrevistas",
                  width: 394,
                  height: 180,
                  alt: "An illustration of an interview session with a user",
                },
              },
              {
                label: "Usability testing",
                title: "Guided task, CES, choice between layouts and an open question",
                note: "27 responses - Senior Sistemas employees",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-teste",
                  width: 394,
                  height: 180,
                  alt: "The prototype screen used in the usability test",
                },
              },
            ],
          },
          analysis: {
            lead: "The numbers show what; the comments explain why. Each type of data was read on its own and only then crossed with the others.",
            rows: [
              {
                title: "Guided task",
                text: "Real effort, not opinion: time, success, wrong clicks and a heat map of taps.",
                data: "23.4 s · 100% success · 51.5% wrong clicks",
              },
              {
                title: "1 to 5 scales",
                text: "The mean and the whole distribution, not just the top.",
                data: "Would use often: 4.2 · Too complex: 1.8 · Quick to learn: 4.5",
              },
              {
                title: "Choice between 4 layouts",
                text: "A single vote, read as stated preference.",
                data: "A 67% · B 14% · C 14% · D 5%",
              },
              {
                title: "Open question",
                text: "Comments grouped into categories, with the weight of each.",
                data: "Organization 33.3% · fewer banners 16.7% · positive feedback 16.7% · technical 8.3% · ideas 8.3%",
              },
            ],
            flow: {
              kind: "merge",
              label: "Four types of data lead to the decision for layout A",
              inputs: [
                "Task: time, success, clicks",
                "Scales: mean and distribution",
                "Layouts: preference vote",
                "Open question: categories",
              ],
              decisionLabel: "Decision",
              decision: "Layout A on the Home",
            },
            crossTitle: "Crossing the data",
            crossings: [
              {
                title: "Preference makes sense through frequency",
                text: "Layout A got 67%, and one participant explains: the time clock is used at least 4 times a day; the balance, only now and then.",
              },
              {
                title: "The remaining 33% show what layout A doesn't solve yet",
                text: "One participant felt A takes up too much space and preferred C. Another found it confusing to mix the time clock with a financial app and suggested a shortcut before login.",
              },
              {
                title: "Requests outside the widget were set apart",
                text: "The requests for fewer banners come from the home context, not the widget. They were handled as a separate finding.",
              },
              {
                title: "Technical failures stay out of the design decision",
                text: "The facial recognition failure is an authentication issue and belongs to the technical scope.",
              },
            ],
          },
          decision: {
            lead: "The time clock widget goes in the upper center of the Home: what's used most often each day stays closest, and most people preferred it that way.",
            chart: {
              label: "Preference among the 4 layouts",
              options: [
                {
                  letter: "A",
                  value: 67,
                  caption: "Time clock widget in the upper center of the Home",
                },
                {
                  letter: "B",
                  value: 14,
                  caption: "Widget only in the bottom bar",
                },
                {
                  letter: "C",
                  value: 14,
                  caption: "Smaller widget, next to a banner",
                },
                {
                  letter: "D",
                  value: 5,
                  caption: "Quick access at the top",
                },
              ],
            },
            cards: [
              {
                label: "Chosen",
                title: "Layout A",
              },
              {
                label: "Discarded",
                title: "B, C and D, by vote and by space",
              },
              {
                label: "Left open",
                title: "A shortcut before login. Fewer banners on the home",
              },
            ],
          },
          delivery: {
            lead: "The prototypes used in the test and the Home time clock widget that was later launched.",
            items: [
              {
                image: {
                  src: "/casos/wiipo/wiipo-entrega-layouts",
                  width: 256,
                  height: 280,
                  alt: "Four positions tested for the time clock module on the Home, side by side",
                },
                caption: "The same module in four positions.",
              },
              {
                image: {
                  src: "/casos/wiipo/wiipo-entrega-modulo",
                  width: 256,
                  height: 280,
                  alt: "Time clock module, with clock-ins and an offline notice",
                },
                caption: "Press and hold to clock in, with a notice that it works offline.",
              },
              {
                image: {
                  src: "/casos/wiipo/wiipo-entrega-widgets",
                  width: 256,
                  height: 280,
                  alt: "Three time clock widgets for the phone's home screen",
                },
                caption: "Tested on the phone.",
              },
            ],
          },
          result: {
            lead: "The time clock widget launched on the Home, in the position most test participants preferred.",
            metrics: [
              {
                value: "67%",
                label: "chose the launched layout",
              },
              {
                value: "100%",
                label: "task success, in 23.4 s",
              },
              {
                value: "1.8",
                label: "complexity, on a 1 to 5 scale",
              },
            ],
            image: {
              src: "/casos/wiipo/wiipo-resultado",
              width: 1920,
              height: 1080,
              alt: "The time clock widget live on the app's Home",
            },
          },
        },
      },
    },
    /** Rótulos do molde real dos casos (os que têm `study`). */
    caseStudy: {
      meta: {
        result: "Result",
        skills: "Skills",
        method: "Method",
        tools: "Tools",
      },
      sections: {
        problem: "Problem",
        method: "Methodology",
        analysis: "Analysis",
        decision: "Decision",
        delivery: "Delivery",
        result: "Result",
      },
      image: "Image",
    },
    caseTemplate: {
      back: "All cases",
      meta: {
        result: "Result",
        role: "My role",
        roleValue: "[Research, design and code]",
        duration: "Duration",
        durationValue: "[X months]",
        tools: "Tools",
        toolsValue: "[Figma, React, ...]",
      },
      mainImage: "Main image",
      problem: {
        title: "The problem",
        text: "[Who was struggling, where and how much it cost. In 3 to 4 sentences, with a number if there is one.]",
        quote: "[A quote from a real user that sums up the pain.]",
      },
      learned: {
        title: "What I learned from users",
        findings: [
          { label: "Finding 1", text: "[What you saw in the field.]" },
          { label: "Finding 2", text: "[What contradicted the hypothesis.]" },
          { label: "Finding 3", text: "[What changed the priority.]" },
        ],
        image: "Field photo, synthesis or journey map",
      },
      decision: {
        title: "The decision",
        text: "[What you chose to do and what you decided not to do. Why.]",
        chose: { label: "I chose", text: "[Chosen path]" },
        discarded: { label: "I discarded", text: "[Alternative and reason]" },
        metricLabel: "Success metric defined before building:",
        metric: "[which]",
      },
      built: {
        title: "What I built",
        items: [
          { image: "Screen / prototype", caption: "[Caption: what this screen solves]" },
          { image: "Code / component", caption: "[Caption: the part you implemented]" },
        ],
      },
      result: {
        title: "The result",
        metrics: [
          { value: "[+X]", label: "[metric, before → after]" },
          { value: "[−X%]", label: "[second metric]" },
        ],
        quote: "[A quote from a user or the team after launch]",
        quoteAuthor: "[who said it]",
        differentLabel: "What I would do differently",
        different: "[An honest reflection. It shows judgment, not just execution.]",
      },
      next: "Next case",
    },
  },
  resume: {
    eyebrow: "Resume",
    title: "From collecting behavior in data to designing the journeys that shape it.",
    intro:
      "[How I got here, in 3 short paragraphs: communication and marketing (why people do what they do on screen) → research and interaction design, with field visits → product, with design and code. Close with: today I take the problem all the way to the shipped product.]",
    location: "Blumenau, SC",
    nickname: { before: "Everyone calls me ", name: "Ali" },
    photoAlt:
      "A client visit for field research: a group around a table with laptops and data collectors, talking about the work.",
    cv: { label: "Résumé (PDF)", href: "/cv/adrian-silva-fuentes-cv-en.pdf" },
    experience: {
      title: "Experience",
      items: [
        {
          period: "Apr 2025 — present",
          place: "São Paulo · remote",
          title: "UX Product Designer · Nuvia",
          bullets: [
            "Led UX strategy and end-to-end product design for Nuvia, a platform that empowers B2B sales teams with AI-driven data and automation.",
            "Designed and documented user journeys across core modules including Search, Campaigns, Inbound, Records and Billing.",
            "Authored product copy, onboarding flows and internal documentation in Mintlify to ensure clarity and consistency.",
            "Used AI-powered tools like V0, Lovable and Figma Compose to accelerate design workflows, generate interface ideas and optimize content.",
            "Acted as the bridge between Development, Marketing and Ops, aligning cross-functional teams around the product roadmap and delivery.",
            "Conducted user research and interviews to validate flows and guide iterative design decisions.",
            "Helped shape the go-to-market narrative with leadership, on value proposition and product positioning.",
          ],
        },
        {
          period: "Dec 2024 — Apr 2025",
          place: "Blumenau, Brazil · hybrid",
          title: "UX Designer · Wiipo",
          bullets: [
            "Research, design and documentation of Wiipo's design system for desktop and mobile (React Native).",
            "Qualitative and quantitative user research.",
            "Integrations between Senior Sistemas products and Wiipo to build a SuperApp.",
          ],
        },
        {
          period: "Nov 2022 — Jan 2025",
          place: "Blumenau, Brazil",
          title: "UX Designer · Senior Sistemas",
          bullets: [
            "Research with focus groups, semi-structured interviews, quantitative forms and data triangulation to define personas, journey maps, customer journey and product-market fit.",
            "Web results analysis with Google Analytics, HubSpot and Maze to improve the UI.",
            "Technical documentation of new Senior Design System components, covering usability, accessibility, core tokens and scenarios (React and Angular on the web; iOS, Flutter and Android on mobile).",
            "Navigable prototypes in Figma for usability tests in Maze, analyzing heat maps, journey clicks, average time and device support.",
            "Created the Senior Systems Icon Lib: more than 1,500 vector icons in Figma for the Senior Design System, saving costs compared to external resources.",
            "Design improvements that raised the NPS of GKO Fretes XT by adopting the colors and visual patterns of the SDS (Senior Design System) adapted to Delphi.",
            "Work sessions with back-end, front-end and full stack developers to improve processes on desktop, mobile devices and data collectors used in warehouses.",
          ],
        },
        {
          period: "Jun 2021 — Aug 2022",
          place: "Chile",
          title: "Digital Marketing Specialist · STAFF Chile",
          bullets: [
            "Reports with Google Analytics, Google Data Studio and Facebook Business Manager, among others, to track campaign budgets, user behavior on the website and improvements to digital products.",
            "Email marketing campaigns from content design to HTML, with contact database cleanup in Excel for mass sends through Mailchimp.",
            "Campaigns in Google Ads and Facebook Business Manager.",
          ],
        },
        {
          period: "Jan 2021 — Nov 2022",
          place: "Colorado, USA · remote",
          title: "Digital Marketing Consultant · The Rio System",
          bullets: [
            "Created the company's brand and visual identity, along with the SEO content strategy and its web presence.",
            "Market research and benchmarking to build brand elements.",
            "Landing page UI design and front-end development in WordPress with Elementor Pro.",
          ],
          link: "See brand",
        },
        {
          period: "Jan 2020 — Jan 2023",
          place: "Santiago, Chile · remote",
          title: "UI Designer and Web Developer · NODO.team",
          bullets: [
            "Exponential growth in the delivery of websites of different depth, such as landing pages, blogs and e-commerce, using Figma, HTML5, CSS3, Elementor and WordPress.",
            "Research and benchmarking presentations to clients and stakeholders to create the information architecture of their websites.",
            "Review of content maps and improvements to restructure websites, focused on SEO and HTML best practices.",
          ],
          link: "See websites",
        },
        {
          period: "Nov 2018 — Jun 2021",
          place: "Chile",
          title: "Account Executive · Agencia MRC",
          bullets: [
            "Active role in creating strategies for clients from many sectors, such as hotels, private aviation, foundations, dealerships, real estate, e-commerce and science.",
            "Worked with a team of 5 UI/UX specialists and front-end and back-end developers to create strategic proposals for clients.",
            "Prototyping and UI design with Figma and Adobe XD.",
            "Supervised and maintained websites in advanced WordPress.",
            "Research and benchmark presentations for new clients and stakeholders.",
            "Nurtured client relationships that led to contract extensions and new business.",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      degree: "Marketing",
      school: "Pontificia Universidad Católica de Chile",
      years: "2014 — 2018",
      honorsTitle: "Honors",
      honors: [
        "Matrícula de Honor",
        "Beca de Excelencia Académica UC",
        "Beca de Excelencia Académica (Government of Chile)",
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Português", lang: "pt-BR", level: "native" },
        { name: "Español", lang: "es", level: "native" },
        { name: "English", lang: "en", level: "full professional" },
      ],
    },
    certifications: {
      title: "Certifications",
      courses: { one: "course", many: "courses" },
      showAll: "See all",
      showLess: "See less",
    },
  },
  footer: {
    title: "Let's talk.",
    linksLabel: "Profiles",
    links: [
      { label: "GitHub", href: "https://github.com/AdrianSilvaFuentes" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/adriansilvafuentes/" },
      { label: "Behance", href: "https://www.behance.net/adriansilva" },
      { label: "Résumé (PDF)", href: "/cv/adrian-silva-fuentes-cv-en.pdf" },
    ],
    madeWith: {
      before: "Made with ",
      label: "Ali Design System",
      href: "https://github.com/AdrianSilvaFuentes/ali-ui",
    },
  },
};

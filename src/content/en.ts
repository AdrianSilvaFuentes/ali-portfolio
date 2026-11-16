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
    home: "Home",
    work: "Work",
    built: "Built",
    resume: "Resume",
    contact: "Contact",
  },
  language: {
    label: "Language",
  },
  theme: {
    toDark: "Switch to dark theme",
    toLight: "Switch to light theme",
  },
  home: {
    greeting: { before: "Hi, I'm Adrián, but everyone calls me ", name: "Ali", after: "." },
    role: "Product Design Engineer",
    title: "Senior product designer who takes the problem all the way to the shipped product.",
    lead: "[One sentence about what you do and for whom. E.g.: user research, product decisions and code, with AI as a tool and my own judgment.]",
    seeWork: "See work",
    talk: "Get in touch",
    portraitAlt: "Adrián smiling, wearing a cap and a scarf, in front of a windmill.",
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
          description: "[User research and data: where it hurts and how much.]",
        },
        {
          title: "Decide",
          description: "[Prioritize and define the success metric before building.]",
        },
        {
          title: "Build",
          description: "[Design and code, with AI as a tool and my own judgment.]",
        },
        { title: "Measure", description: "[What changed after launch, and what it taught us.]" },
      ],
    },
    cases: {
      eyebrow: "Featured cases",
      title: "Selected work",
      seeAll: "See all cases",
      image: "Case image",
    },
    built: {
      eyebrow: "Built",
      title: "ali-ui, a system built from scratch.",
      lead: "Tokens, components and documentation, with accessibility tests. Opens in Storybook, with the code on GitHub.",
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
            { name: "pnpm", description: "installation" },
            { name: "Turborepo", description: "monorepo" },
            { name: "Vite", description: "build" },
          ],
        },
        {
          title: "Quality",
          items: [
            { name: "Vitest", description: "tests, including WCAG contrast" },
            { name: "Biome", description: "linting and formatting" },
            { name: "GitHub Actions", description: "automated checks" },
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
      thumbnails: ["Landing page", "E-commerce", "Logo / brand", "Brand page"],
    },
  },
  work: {
    eyebrow: "Work",
    title: "Products I improved, and sites and brands I designed.",
    filters: { label: "Filter work", all: "All", product: "Product", web: "Web and brand" },
    product: { title: "Product", readCase: "Read the case", image: "Case image" },
    web: {
      title: "Web and brand",
      thumbnail: "Thumbnail",
      items: [
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
          meta: "2021–2022",
          link: "[See brand]",
        },
      ],
    },
    cases: {
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
        years: "2024–2025",
        role: "UX Designer",
        tags: ["Mobile", "Design system", "React Native"],
        title: "A design system in React Native",
        summary: "[Problem → outcome, in one line.]",
        result: "[Result]",
      },
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
  built: {
    eyebrow: "Built",
    title: "What I made with my own hands, from Figma to code.",
    lead: "Personal projects, no company in between. Here you see how I decide and implement.",
    aliUi: {
      eyebrow: "Main project · 2026",
      title: "ali-ui",
      lead: "[In one sentence: a lean design system, with few components, each one well finished, from token to test.]",
      facts: [
        { label: "Problem", text: "[Why build another system.]" },
        {
          label: "Decisions",
          text: "Two-tier tokens, Radix for accessibility, WCAG AA contrast tests.",
        },
        {
          label: "What I built",
          text: "Monorepo, published Storybook, pipeline with automated checks.",
        },
      ],
      storybook: { label: "Open Storybook", href: "https://ali-ui-delta.vercel.app" },
      github: { label: "View on GitHub", href: "https://github.com/AdrianSilvaFuentes/ali-ui" },
      imageAlt: "An ali-ui sample form in Storybook, side by side in light and dark themes.",
      thumbnails: ["Tokens", "Figma ↔ code", "AA test"],
    },
    site: {
      eyebrow: "Project · 2026",
      title: "This site",
      lead: "Built with ali-ui components. Proof that the system works in a real product.",
      code: { label: "View the code", href: "https://github.com/AdrianSilvaFuentes/ali-portfolio" },
      imageAlt: "This site's first screen: greeting, title, buttons and the stamp-shaped portrait.",
    },
    /** Experimentos pequenos. A seção só aparece quando houver pelo menos um. */
    experiments: {
      title: "Experiments",
      items: [],
    },
  },
  resume: {
    eyebrow: "Resume",
    title: "From collecting behavior in data to designing the journeys that shape it.",
    intro:
      "[How I got here, in 3 short paragraphs: communication and marketing (why people do what they do on screen) → research and interaction design, with field visits → product, with design and code. Close with: today I take the problem all the way to the shipped product.]",
    location: "Blumenau, SC",
    nickname: { before: "Everyone calls me ", name: "Ali" },
    photo: "Field research photo",
    cv: "[Resume (PDF)]",
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
    email: "[public e-mail]",
    linksLabel: "Profiles",
    links: [
      { label: "GitHub", href: "https://github.com/AdrianSilvaFuentes" },
      { label: "[LinkedIn]", href: null },
      { label: "[Behance]", href: null },
      { label: "[Résumé (PDF)]", href: null },
    ],
    madeWith: "Made with ali-ui",
  },
};

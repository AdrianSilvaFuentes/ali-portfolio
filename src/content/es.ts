import type { Dictionary } from "./pt";

/**
 * Español, generado a partir de pt.ts.
 * REVISAR: tradução gerada, aguardando revisão do Adrián.
 */
export const es: Dictionary = {
  site: {
    name: "Adrián Silva Fuentes",
    title: "Adrián Silva Fuentes · Product Design Engineer",
    description:
      "Diseñador de producto sénior que lleva el problema hasta el producto entregado, con diseño y código.",
  },
  nav: {
    label: "Principal",
    home: "Inicio",
    work: "Trabajo",
    built: "Construido",
    resume: "Experiencia",
    contact: "Contacto",
  },
  language: {
    label: "Idioma",
  },
  theme: {
    toDark: "Activar tema oscuro",
    toLight: "Activar tema claro",
  },
  home: {
    greeting: { before: "Hola, soy Adrián. Todos me dicen ", name: "Ali", after: "." },
    role: "Product Design Engineer",
    title: "Diseñador de producto sénior que lleva el problema hasta el producto entregado.",
    lead: "[Una frase sobre lo que haces y para quién. Ej.: investigación con usuarios, decisión de producto y código, con IA como herramienta y criterio propio.]",
    seeWork: "Ver trabajo",
    talk: "Hablemos",
    portraitAlt: "Adrián sonriendo, con gorra y pañuelo, frente a un molino.",
    reserved: "Espacio reservado",
    proofs: {
      title: "Pruebas",
      items: [
        {
          project: "GKO Fretes XT",
          value: "[+X]",
          result: "puntos de NPS después de adaptar los estándares visuales del producto.",
          note: "[falta el número real]",
        },
        {
          project: "Senior Systems Icon Lib",
          value: "1.500+",
          result: "íconos creados internamente, en lugar de recursos externos pagos.",
          note: "[costo evitado, si lo hay]",
        },
        {
          project: "ali-ui",
          value: "AA",
          result: "contraste verificado por pruebas automáticas, en los temas claro y oscuro.",
          note: "proyecto propio, desde cero",
        },
      ],
    },
    process: {
      eyebrow: "Cómo trabajo",
      title: "Del problema al resultado, con las manos en el producto.",
      steps: [
        {
          title: "Descubrir",
          description: "[Investigación con usuarios y datos: dónde duele y cuánto.]",
        },
        {
          title: "Decidir",
          description: "[Priorizar y definir la métrica de éxito antes de construir.]",
        },
        {
          title: "Construir",
          description: "[Diseño y código, con IA como herramienta y criterio propio.]",
        },
        { title: "Medir", description: "[Qué cambió después del lanzamiento, y qué nos enseñó.]" },
      ],
    },
    cases: {
      eyebrow: "Casos destacados",
      title: "Trabajo seleccionado",
      seeAll: "Ver todos los casos",
      image: "Imagen del caso",
    },
    built: {
      eyebrow: "Construido",
      title: "ali-ui, un sistema hecho desde cero.",
      lead: "Tokens, componentes y documentación, con pruebas de accesibilidad. Se abre en Storybook, con el código en GitHub.",
      storybook: { label: "Abrir Storybook", href: "https://ali-ui-delta.vercel.app" },
      github: { label: "Ver en GitHub", href: "https://github.com/AdrianSilvaFuentes/ali-ui" },
      palette: "Escala de grises y el amarillo de la marca, tomados de los tokens de ali-ui",
      samples: {
        label: "Muestras de componentes de ali-ui",
        button: { name: "Button", label: "Guardar" },
        input: { name: "Input", label: "Nombre del proyecto", value: "ali-ui" },
        select: { name: "Select", label: "Tema", options: ["Claro", "Oscuro"] },
      },
    },
    stack: {
      title: "Stack",
      groups: [
        {
          title: "Componentes y estilos",
          items: [
            { name: "React", description: "componentes", icon: "react" },
            { name: "TypeScript", description: "en modo estricto", icon: "typescript" },
            {
              name: "Tailwind CSS 4",
              description: "estilos a partir de los tokens",
              icon: "tailwind",
            },
          ],
        },
        {
          title: "Repositorio y construcción",
          items: [
            { name: "pnpm", description: "instalación" },
            { name: "Turborepo", description: "monorepo" },
            { name: "Vite", description: "build" },
          ],
        },
        {
          title: "Calidad",
          items: [
            { name: "Vitest", description: "pruebas, incluido el contraste WCAG" },
            { name: "Biome", description: "lint y formato" },
            { name: "GitHub Actions", description: "verificación automática" },
          ],
        },
        {
          title: "Documentación y publicación",
          items: [
            { name: "Storybook 9", description: "documentación", icon: "storybook" },
            { name: "Vercel", description: "publicación", icon: "vercel" },
          ],
        },
      ],
    },
    before: {
      eyebrow: "Antes del producto",
      title: "Antes del producto, ya diseñaba y publicaba sitios y marcas.",
      lead: "Diseño y código hechos a mano, con la experiencia en marketing detrás de cada decisión.",
      items: [
        {
          title: "Diseño web y UI",
          description:
            "Landings, blogs y e-commerce de Figma a HTML, CSS y WordPress. [3+ años, NODO.team]",
          link: "Ver sitios",
        },
        {
          title: "Branding e identidad",
          description:
            "Marca, identidad visual y presencia web de una empresa en EE. UU. [The Rio System]",
          link: "Ver marcas",
        },
      ],
      thumbnails: ["Landing", "E-commerce", "Logo / marca", "Página de marca"],
    },
  },
  work: {
    eyebrow: "Trabajo",
    title: "Productos que mejoré y sitios y marcas que diseñé.",
    filters: { label: "Filtrar trabajos", all: "Todo", product: "Producto", web: "Web y marca" },
    product: { title: "Producto", readCase: "Leer el caso", image: "Imagen del caso" },
    web: {
      title: "Web y marca",
      thumbnail: "Miniatura",
      items: [
        {
          name: "[Nombre del sitio]",
          description: "Landing page · Figma, HTML, CSS, WordPress",
          meta: "NODO.team · [año]",
          link: "[Ver sitio]",
        },
        {
          name: "[Nombre de la tienda]",
          description: "E-commerce · arquitectura de información y SEO",
          meta: "NODO.team · [año]",
          link: "[Ver sitio]",
        },
        {
          name: "The Rio System",
          description: "Marca, identidad visual y presencia web",
          meta: "2021–2022",
          link: "[Ver marca]",
        },
      ],
    },
    cases: {
      warehouses: {
        company: "[Empresa]",
        years: "[año]",
        role: "[rol]",
        tags: ["Investigación de campo", "Logística", "UX research"],
        title: "Investigación de campo en almacenes",
        summary: "[Problema → resultado, en una línea.]",
        result: "[Resultado]",
      },
      gko: {
        company: "Senior Sistemas",
        years: "2022–2025",
        role: "UX Designer",
        tags: ["Logística", "Design system", "NPS"],
        title: "[+X] de NPS en GKO Fretes XT",
        summary: "[Problema → resultado, en una línea.]",
        result: "[+X puntos de NPS]",
      },
      icons: {
        company: "Senior Sistemas",
        years: "[año]",
        role: "UX Designer",
        tags: ["Design system", "Íconos", "Figma"],
        title: "Biblioteca de 1.500+ íconos",
        summary: "[Problema → resultado, en una línea.]",
        result: "1.500+ íconos",
      },
      wiipo: {
        company: "Wiipo",
        years: "2024–2025",
        role: "UX Designer",
        tags: ["Mobile", "Design system", "React Native"],
        title: "Design system en React Native",
        summary: "[Problema → resultado, en una línea.]",
        result: "[Resultado]",
      },
    },
    caseTemplate: {
      back: "Todos los casos",
      meta: {
        result: "Resultado",
        role: "Mi rol",
        roleValue: "[Investigación, diseño y código]",
        duration: "Duración",
        durationValue: "[X meses]",
        tools: "Herramientas",
        toolsValue: "[Figma, React, ...]",
      },
      mainImage: "Imagen principal",
      problem: {
        title: "El problema",
        text: "[Quién sufría, dónde y cuánto costaba. En 3 a 4 frases, con un número si existe.]",
        quote: "[Frase de un usuario real que resume el dolor.]",
      },
      learned: {
        title: "Lo que aprendí de los usuarios",
        findings: [
          { label: "Hallazgo 1", text: "[Lo que viste en campo.]" },
          { label: "Hallazgo 2", text: "[Lo que contradijo la hipótesis.]" },
          { label: "Hallazgo 3", text: "[Lo que cambió la prioridad.]" },
        ],
        image: "Foto de campo, síntesis o mapa de viaje",
      },
      decision: {
        title: "La decisión",
        text: "[Lo que elegiste hacer y lo que decidiste no hacer. Por qué.]",
        chose: { label: "Elegí", text: "[Camino elegido]" },
        discarded: { label: "Descarté", text: "[Alternativa y motivo]" },
        metricLabel: "Métrica de éxito definida antes de construir:",
        metric: "[cuál]",
      },
      built: {
        title: "Lo que construí",
        items: [
          { image: "Pantalla / prototipo", caption: "[Leyenda: lo que resuelve esta pantalla]" },
          { image: "Código / componente", caption: "[Leyenda: la parte que implementaste]" },
        ],
      },
      result: {
        title: "El resultado",
        metrics: [
          { value: "[+X]", label: "[métrica, antes → después]" },
          { value: "[−X%]", label: "[segunda métrica]" },
        ],
        quote: "[Frase del usuario o del equipo después del lanzamiento]",
        quoteAuthor: "[quién lo dijo]",
        differentLabel: "Lo que haría diferente",
        different: "[Una reflexión honesta. Muestra criterio, no solo ejecución.]",
      },
      next: "Siguiente caso",
    },
  },
  built: {
    eyebrow: "Construido",
    title: "Lo que hice con mis propias manos, de Figma al código.",
  },
  resume: {
    eyebrow: "Experiencia",
    title: "De recopilar comportamiento en datos a diseñar los recorridos que lo moldean.",
  },
  placeholder: "[Contenido de esta página en construcción.]",
  footer: {
    title: "Conversemos.",
    email: "[correo público]",
    linksLabel: "Perfiles",
    links: [
      { label: "GitHub", href: "https://github.com/AdrianSilvaFuentes" },
      { label: "[LinkedIn]", href: null },
      { label: "[Behance]", href: null },
      { label: "[Currículum (PDF)]", href: null },
    ],
    madeWith: "Hecho con ali-ui",
  },
};

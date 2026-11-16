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
    lead: "Proyectos propios, sin empresa de por medio. Aquí ves cómo decido e implemento.",
    aliUi: {
      eyebrow: "Proyecto principal · 2026",
      title: "ali-ui",
      lead: "[En una frase: un design system compacto, con pocos componentes, cada uno bien terminado, del token a la prueba.]",
      facts: [
        { label: "Problema", text: "[Por qué crear otro sistema.]" },
        {
          label: "Decisiones",
          text: "Tokens en dos niveles, Radix para accesibilidad, prueba de contraste WCAG AA.",
        },
        {
          label: "Lo que construí",
          text: "Monorepo, Storybook publicado, pipeline con verificación automática.",
        },
      ],
      storybook: { label: "Abrir Storybook", href: "https://ali-ui-delta.vercel.app" },
      github: { label: "Ver en GitHub", href: "https://github.com/AdrianSilvaFuentes/ali-ui" },
      imageAlt:
        "Formulario de ejemplo de ali-ui en Storybook, lado a lado en los temas claro y oscuro.",
      thumbnails: ["Tokens", "Figma ↔ código", "Prueba AA"],
    },
    site: {
      eyebrow: "Proyecto · 2026",
      title: "Este sitio",
      lead: "Hecho con los componentes de ali-ui. La prueba de que el sistema funciona en un producto real.",
      code: { label: "Ver el código", href: "https://github.com/AdrianSilvaFuentes/ali-portfolio" },
      imageAlt:
        "Primera pantalla de este sitio: saludo, título, botones y el retrato en forma de sello.",
    },
    /** Experimentos pequenos. A seção só aparece quando houver pelo menos um. */
    experiments: {
      title: "Experimentos",
      items: [],
    },
  },
  resume: {
    eyebrow: "Experiencia",
    title: "De recolectar comportamiento en datos a diseñar los recorridos que lo moldean.",
    intro:
      "[Cómo llegué aquí, en 3 párrafos cortos: comunicación y marketing (por qué las personas hacen lo que hacen en la pantalla) → investigación y diseño de interacción, con visitas de campo → producto, con diseño y código. Cerrar con: hoy llevo el problema hasta el producto entregado.]",
    location: "Blumenau, SC",
    nickname: { before: "Todos me dicen ", name: "Ali" },
    photo: "Foto de investigación de campo",
    cv: "[Currículum (PDF)]",
    experience: {
      title: "Experiencia",
      items: [
        {
          period: "abr 2025 — actualidad",
          place: "São Paulo · remoto",
          title: "UX Product Designer · Nuvia",
          bullets: [
            "Lideré la estrategia de UX y el diseño de producto de punta a punta de Nuvia, una plataforma que da a equipos de ventas B2B datos y automatización con IA.",
            "Diseñé y documenté los recorridos de los módulos principales, como Search, Campaigns, Inbound, Records y Billing.",
            "Escribí los textos del producto, los flujos de onboarding y la documentación interna en Mintlify, con foco en claridad y consistencia.",
            "Usé herramientas de IA como V0, Lovable y Figma Compose para acelerar el diseño, generar ideas de interfaz y optimizar contenido.",
            "Hice de puente entre Desarrollo, Marketing y Operaciones, alineando a los equipos en torno al roadmap y las entregas.",
            "Conduje investigación y entrevistas con usuarios para validar flujos y guiar las decisiones de diseño.",
            "Ayudé a construir la narrativa de go-to-market con el liderazgo, en la propuesta de valor y el posicionamiento del producto.",
          ],
        },
        {
          period: "dic 2024 — abr 2025",
          place: "Blumenau, Brasil · híbrido",
          title: "UX Designer · Wiipo",
          bullets: [
            "Investigación, diseño y documentación del design system de Wiipo para desktop y mobile (React Native).",
            "Investigación cualitativa y cuantitativa con usuarios.",
            "Integraciones entre los productos de Senior Sistemas y Wiipo para construir una SuperApp.",
          ],
        },
        {
          period: "nov 2022 — ene 2025",
          place: "Blumenau, Brasil",
          title: "UX Designer · Senior Sistemas",
          bullets: [
            "Investigación con grupos focales, entrevistas semiestructuradas, formularios cuantitativos y triangulación de datos para definir personas, mapas de recorrido, customer journey y product-market fit.",
            "Análisis de resultados web con Google Analytics, HubSpot y Maze para mejorar la interfaz.",
            "Documentación técnica de nuevos componentes del Senior Design System, con usabilidad, accesibilidad, tokens y escenarios (React y Angular en web; iOS, Flutter y Android en mobile).",
            "Prototipos navegables en Figma para pruebas de usabilidad en Maze, con análisis de mapas de calor, clics en el recorrido, tiempo promedio y soporte de dispositivos.",
            "Creación de la Senior Systems Icon Lib: más de 1.500 íconos vectoriales en Figma para el Senior Design System, con ahorro frente a recursos externos.",
            "Mejoras de diseño que aumentaron el NPS de GKO Fretes XT, con la adopción de los colores y patrones visuales del SDS (Senior Design System) adaptados a Delphi.",
            "Sesiones de trabajo con desarrolladores back-end, front-end y full stack para mejorar procesos en desktop, dispositivos móviles y colectores de datos usados en almacenes.",
          ],
        },
        {
          period: "jun 2021 — ago 2022",
          place: "Chile",
          title: "Especialista en Marketing Digital · STAFF Chile",
          bullets: [
            "Informes con Google Analytics, Google Data Studio y Facebook Business Manager, entre otros, para seguir el presupuesto de las campañas, el comportamiento en el sitio y mejoras en productos digitales.",
            "Campañas de e-mail marketing del contenido al HTML, con depuración de la base de contactos en Excel para envíos masivos por Mailchimp.",
            "Campañas en Google Ads y Facebook Business Manager.",
          ],
        },
        {
          period: "ene 2021 — nov 2022",
          place: "Colorado, EE. UU. · remoto",
          title: "Consultor de Marketing Digital · The Rio System",
          bullets: [
            "Creación de la marca y la identidad visual de la empresa, junto con la estrategia de contenido para SEO y su presencia web.",
            "Investigación de mercado y benchmarking para construir los elementos de la marca.",
            "Diseño de interfaz de las landing pages y desarrollo front-end en WordPress con Elementor Pro.",
          ],
          link: "Ver marca",
        },
        {
          period: "ene 2020 — ene 2023",
          place: "Santiago, Chile · remoto",
          title: "UI Designer y Web Developer · NODO.team",
          bullets: [
            "Crecimiento exponencial en la entrega de sitios de distinta complejidad, como landings, blogs y e-commerce, con Figma, HTML5, CSS3, Elementor y WordPress.",
            "Presentaciones de investigación y benchmarking a clientes y stakeholders para crear la arquitectura de información de sus sitios.",
            "Revisión de mapas de contenido y mejoras para reestructurar los sitios, con foco en SEO y buenas prácticas de HTML.",
          ],
          link: "Ver sitios",
        },
        {
          period: "nov 2018 — jun 2021",
          place: "Chile",
          title: "Ejecutivo de Cuentas · Agencia MRC",
          bullets: [
            "Rol activo en la creación de estrategias para clientes de diversos sectores, como hoteles, aviación privada, fundaciones, concesionarias, inmobiliarias, e-commerce y ciencia.",
            "Trabajo con un equipo de 5 especialistas en UI/UX y desarrolladores front-end y back-end para crear propuestas estratégicas para los clientes.",
            "Prototipado y diseño de interfaz con Figma y Adobe XD.",
            "Supervisión y mantenimiento de sitios en WordPress avanzado.",
            "Presentaciones de investigación y benchmark para nuevos clientes y stakeholders.",
            "Relación con los clientes que llevó a renovaciones de contrato y nuevos negocios.",
          ],
        },
      ],
    },
    education: {
      title: "Formación",
      degree: "Marketing",
      school: "Pontificia Universidad Católica de Chile",
      years: "2014 — 2018",
      honorsTitle: "Distinciones",
      honors: [
        "Matrícula de Honor",
        "Beca de Excelencia Académica UC",
        "Beca de Excelencia Académica (Gobierno de Chile)",
      ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Português", lang: "pt-BR", level: "nativo" },
        { name: "Español", lang: "es", level: "nativo" },
        { name: "English", lang: "en", level: "profesional completo" },
      ],
    },
    certifications: {
      title: "Certificaciones",
      courses: { one: "curso", many: "cursos" },
      showAll: "Ver todas",
      showLess: "Ver menos",
    },
  },
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

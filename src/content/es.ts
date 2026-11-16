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
        years: "2025",
        role: "UX Designer",
        tags: ["Investigación UX", "Super app", "Prueba de usabilidad"],
        title: "Función de registro de jornada dentro de la app de la empresa",
        summary: "[Problema → resultado, en una línea.]",
        result: "Widget lanzado en la Home (layout A, 67%)",
        cardImage: {
          src: "/casos/wiipo/wiipo-card",
          width: 1024,
          height: 640,
          alt: "Pantalla de inicio de la app Wiipo con el botón para marcar la jornada destacado",
        },
        study: {
          skills: [
            "Investigación cuantitativa",
            "Investigación cualitativa",
            "Diseño y prototipado",
          ],
          method: [
            "Benchmark",
            "Formulario",
            "Entrevistas semiestructuradas",
            "Prueba de usabilidad",
          ],
          tools: ["Figma", "Google Forms", "Maze"],
          cover: {
            src: "/casos/wiipo/wiipo-capa",
            width: 1168,
            height: 420,
            alt: "Pantalla de inicio de la app con el widget de registro de jornada en la parte central superior",
          },
          problem: {
            paragraphs: [
              "Wiipo, producto financiero de Senior Sistemas, quería convertirse en una super app para colaboradores: reunir vale de alimentación, liquidación de sueldo y billeteras con módulos de registro de jornada, feedback y planificación de vacaciones, entre otros.",
              "El primer servicio en integrarse fue el registro de jornada. Es una tarea de segundos, repetida varias veces al día, que pasaría a vivir dentro de una app pensada para servicios financieros. La pregunta era: ¿dónde ubicarlo para que sea fácil de encontrar, sin perderse detrás del contenido financiero?",
            ],
            points: [
              {
                label: "Riesgo",
                text: "que el registro quedara escondido detrás del contenido financiero.",
              },
              {
                label: "Hipótesis",
                text: "incorporar servicios del colaborador hace la app más conveniente y aumenta el uso.",
              },
            ],
            cards: [
              {
                label: "Objetivo 1",
                title: "Conocer la percepción de los usuarios sobre el recorrido Wiipo + Registro",
              },
              {
                label: "Objetivo 2",
                title: "Validar el recorrido de integración y la arquitectura de información",
              },
              {
                label: "Objetivo 3",
                title: "Definir los alcances técnicos de la integración",
              },
            ],
          },
          methodology: {
            lead: "Métodos cuantitativos y cualitativos combinados: lo que las personas hacen, lo que dicen y por qué.",
            cards: [
              {
                label: "Benchmark",
                title:
                  "Fintechs y bancos digitales: arquitectura, design system, interacciones, nomenclatura",
                note: "Estudio de 4 apps - Inter, Nubank, Itaú y Tenpo",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-benchmark",
                  width: 394,
                  height: 180,
                  alt: "Recorte de pantallas de apps financieras usadas en el benchmark",
                },
              },
              {
                label: "Formulario",
                title: "Alternativa y selección múltiple con usuarios activos",
                note: "Muestra calculada: 384 participantes - 95% de confianza",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-formulario",
                  width: 394,
                  height: 180,
                  alt: "Gráfico con respuestas del formulario aplicado a usuarios",
                },
              },
              {
                label: "Entrevistas",
                title: "Semiestructuradas, con las preguntas del formulario como base",
                note: "5 usuarios - 40 minutos por sesión",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-entrevistas",
                  width: 394,
                  height: 180,
                  alt: "Ilustración de una sesión de entrevista con un usuario",
                },
              },
              {
                label: "Prueba de usabilidad",
                title: "Tarea guiada, CES, elección entre layouts y pregunta abierta",
                note: "27 respuestas - Colaboradores de Senior Sistemas",
                image: {
                  src: "/casos/wiipo/wiipo-metodo-teste",
                  width: 394,
                  height: 180,
                  alt: "Pantalla del prototipo usado en la prueba de usabilidad",
                },
              },
            ],
          },
          analysis: {
            lead: "Los números muestran el qué; los comentarios explican el porqué. Cada tipo de dato se leyó por separado y solo después se cruzó con los demás.",
            rows: [
              {
                title: "Tarea guiada",
                text: "Esfuerzo real, no opinión: tiempo, éxito, clics erróneos y mapa de calor del toque.",
                data: "23,4 s · 100% de éxito · 51,5% de clics erróneos",
              },
              {
                title: "Escalas de 1 a 5",
                text: "Promedio y distribución completa, no solo la parte alta.",
                data: "Lo usaría con frecuencia: 4,2 · Demasiado complejo: 1,8 · Se aprende rápido: 4,5",
              },
              {
                title: "Elección entre 4 layouts",
                text: "Voto único, leído como preferencia declarada.",
                data: "A 67% · B 14% · C 14% · D 5%",
              },
              {
                title: "Pregunta abierta",
                text: "Comentarios agrupados en categorías, con el peso de cada una.",
                data: "Organización 33,3% · menos banners 16,7% · feedback positivo 16,7% · técnicas 8,3% · ideas 8,3%",
              },
            ],
            flow: {
              label: "Cuatro tipos de dato llevan a la decisión por el layout A",
              inputs: [
                "Tarea: tiempo, éxito, clics",
                "Escalas: promedio y distribución",
                "Layouts: voto de preferencia",
                "Pregunta abierta: categorías",
              ],
              decisionLabel: "Decisión",
              decision: "Layout A en la Home",
            },
            crossTitle: "El cruce",
            crossings: [
              {
                title: "La preferencia cobra sentido por la frecuencia",
                text: "El layout A tuvo 67%, y un participante lo explica: el registro se usa al menos 4 veces al día; el saldo, de vez en cuando.",
              },
              {
                title: "El 33% restante muestra lo que el layout A todavía no resuelve",
                text: "Un participante sintió que el A ocupa mucho espacio y prefirió el C. Otro encontró confuso mezclar el registro con una app financiera y sugirió un atajo antes del login.",
              },
              {
                title: "Los pedidos fuera del widget se separaron",
                text: "Los pedidos de menos banners vienen del contexto de la home, no del widget. Se trataron como un hallazgo aparte.",
              },
              {
                title: "Las fallas técnicas no entran en la decisión de diseño",
                text: "La falla del reconocimiento facial es de autenticación y pertenece al alcance técnico.",
              },
            ],
          },
          decision: {
            lead: "El widget de Registro va en la parte central superior de la Home: lo que más se usa al día queda más cerca, y la mayoría lo prefirió así.",
            chartLabel: "Preferencia entre los 4 layouts",
            options: [
              {
                letter: "A",
                value: 67,
                caption: "Widget de Registro en la parte central superior de la Home",
              },
              {
                letter: "B",
                value: 14,
                caption: "Widget solo en la barra inferior",
              },
              {
                letter: "C",
                value: 14,
                caption: "Widget más pequeño, junto a un banner",
              },
              {
                letter: "D",
                value: 5,
                caption: "Acceso rápido arriba",
              },
            ],
            cards: [
              {
                label: "Elegido",
                title: "Layout A",
              },
              {
                label: "Descartado",
                title: "B, C y D, por el voto y por el espacio",
              },
              {
                label: "Quedó abierto",
                title: "Atajo antes del login. Menos banners en la home",
              },
            ],
          },
          delivery: {
            lead: "Los prototipos usados en la prueba y el widget de Registro de la Home que después se lanzó.",
            items: [
              {
                image: {
                  src: "/casos/wiipo/wiipo-entrega-layouts",
                  width: 256,
                  height: 280,
                  alt: "Cuatro posiciones probadas para el módulo de registro en la Home, lado a lado",
                },
                caption: "El mismo módulo en cuatro posiciones.",
              },
              {
                image: {
                  src: "/casos/wiipo/wiipo-entrega-modulo",
                  width: 256,
                  height: 280,
                  alt: "Módulo de registro de jornada, con marcaciones y aviso de uso sin internet",
                },
                caption:
                  "Presión prolongada para registrar, y aviso de que se puede marcar sin conexión.",
              },
              {
                image: {
                  src: "/casos/wiipo/wiipo-entrega-widgets",
                  width: 256,
                  height: 280,
                  alt: "Tres widgets de registro de jornada para la pantalla de inicio del celular",
                },
                caption: "Probados en el celular.",
              },
            ],
          },
          result: {
            lead: "El widget de registro de jornada se lanzó en la Home, en la posición que prefirió la mayoría de los participantes de la prueba.",
            metrics: [
              {
                value: "67%",
                label: "eligió el layout lanzado",
              },
              {
                value: "100%",
                label: "de éxito en la tarea, en 23,4 s",
              },
              {
                value: "1,8",
                label: "de complejidad, en escala de 1 a 5",
              },
            ],
            image: {
              src: "/casos/wiipo/wiipo-resultado",
              width: 1920,
              height: 1080,
              alt: "Widget de registro de jornada en producción, en la Home de la app",
            },
          },
        },
      },
    },
    /** Rótulos do molde real dos casos (os que têm `study`). */
    caseStudy: {
      meta: {
        result: "Resultado",
        skills: "Skills",
        method: "Método",
        tools: "Herramientas",
      },
      sections: {
        problem: "Problema",
        method: "Metodología",
        analysis: "Análisis",
        decision: "Decisión",
        delivery: "Entrega",
        result: "Resultado",
      },
      image: "Imagen",
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
    photoAlt:
      "Visita a un cliente para investigación de campo: un grupo alrededor de una mesa con notebooks y colectores de datos, conversando sobre el trabajo.",
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

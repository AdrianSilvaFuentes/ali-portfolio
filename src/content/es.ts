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
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "Inicio",
    work: "Casos",
    resume: "Experiencia",
    contact: "Contacto",
  },
  language: {
    label: "Idioma",
  },
  theme: {
    label: "Tema",
    light: "Claro",
    dark: "Oscuro",
  },
  home: {
    role: "Product Design Engineer",
    /** O título da abertura, em duas linhas; "Ali" leva o destaque amarelo. */
    title: {
      first: "¡Hola! Soy Adrián,",
      before: "pero todos me dicen ",
      name: "Ali :)",
    },
    lead: "Soy Product Designer Sénior, con una gran pasión por crear productos con propósito a través del UX y el diseño de interacción.",
    seeWork: "Ver casos",
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
          description:
            "Investigación de campo, entrevistas y datos de uso para encontrar dónde se traba la experiencia y cuánto cuesta.",
        },
        {
          title: "Decidir",
          description:
            "Convierto lo aprendido en prioridades y defino la métrica de éxito antes de la primera pantalla.",
        },
        {
          title: "Construir",
          description:
            "Diseño y código en el mismo flujo, con IA para avanzar más rápido y un design system para mantener la consistencia.",
        },
        {
          title: "Medir",
          description:
            "Pruebo con usuarios y sigo los números después del lanzamiento. Lo que aprendo alimenta el próximo ciclo.",
        },
      ],
    },
    cases: {
      eyebrow: "Casos destacados",
      title: "Casos seleccionados",
      seeAll: "Ver todos los casos",
      viewCase: "Ver caso",
      image: "Imagen del caso",
    },
    built: {
      eyebrow: "Proyecto más reciente",
      status: "En curso",
      title: "Ali Design System, hecho desde cero.",
      lead: "Tokens, componentes y documentación, con contraste probado en cada build. Este panel es el Storybook real: se puede hacer clic y escribir.",
      demo: "Demostración interactiva del Ali Design System, cargada desde Storybook",
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
            { name: "pnpm", description: "instalación", icon: "pnpm" },
            { name: "Turborepo", description: "monorepo", icon: "turborepo" },
            { name: "Vite", description: "build", icon: "vite" },
          ],
        },
        {
          title: "Calidad",
          items: [
            { name: "Vitest", description: "pruebas, incluido el contraste WCAG", icon: "vitest" },
            { name: "Biome", description: "lint y formato", icon: "biome" },
            { name: "GitHub Actions", description: "verificación automática", icon: "github" },
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
      thumbnails: [
        { label: "Landing", image: { src: "/casos/web/ailex", width: 1200, height: 869, alt: "" } },
        {
          label: "Logo / marca",
          image: { src: "/casos/web/the-rio-system", width: 1200, height: 869, alt: "" },
        },
        {
          label: "Landing",
          image: { src: "/casos/web/novamineralis", width: 1200, height: 869, alt: "" },
        },
        {
          label: "Página de marca",
          image: { src: "/casos/web/identa", width: 1080, height: 820, alt: "" },
        },
      ],
    },
  },
  work: {
    eyebrow: "Casos",
    title: "Productos que mejoré y sitios y marcas que diseñé.",
    filters: { label: "Filtrar casos", all: "Todo", product: "Producto", web: "Web y marca" },
    product: { title: "Producto", readCase: "Ver caso", image: "Imagen del caso" },
    web: {
      title: "Web y marca",
      thumbnail: "Miniatura",
      reserved: "Espacio reservado",
      items: [
        // REVISAR
        {
          name: "Ailex",
          description: "UI design · sitio responsivo de una legal tech",
          meta: "2023",
          link: "Ver en Behance",
          href: "https://www.behance.net/gallery/160898291/UI-Design-Ailex-Tech",
          image: {
            src: "/casos/web/ailex",
            width: 1200,
            height: 869,
            alt: "Sitio de Ailex en una laptop y un celular, con la cabecera naranja, una laptop y las secciones Nosotros, Características y Productos",
          },
        },
        {
          name: "Novamineralis",
          description: "UI design · sitio responsivo de una empresa de tecnología para minería",
          meta: "2025",
          link: "Ver en Behance",
          href: "https://www.behance.net/gallery/197578587/UI-Design-(Novamineralis)",
          image: {
            src: "/casos/web/novamineralis",
            width: 1200,
            height: 869,
            alt: "Sitio de Novamineralis en una laptop y un celular, con la foto de una mina arriba, el título sobre extracción de minerales y una científica en el laboratorio",
          },
        },
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
          meta: "2022",
          link: "Ver en Behance",
          href: "https://www.behance.net/gallery/151215671/Branding-Identity-The-Rio-System",
          image: {
            src: "/casos/web/the-rio-system",
            width: 1200,
            height: 869,
            alt: "Logotipo de The Rio System en blanco sobre el cielo azul de Río de Janeiro, con el Pan de Azúcar y el Cristo Redentor al fondo",
          },
        },
        {
          name: "Clínica iDenta",
          description: "Branding y redes sociales de una clínica dental",
          meta: "2024",
          link: "Ver en Behance",
          href: "https://www.behance.net/gallery/211890569/Social-Media-iDenta",
          image: {
            src: "/casos/web/identa",
            width: 1080,
            height: 820,
            alt: "Logotipo de Clínica iDenta en blanco sobre la foto de manos con guantes negros sosteniendo un modelo dental",
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
        tags: ["Investigación UX", "Soporte", "Validación de modelos"],
        title: "Validación de planes de soporte premium con clientes de mayor tamaño",
        summary: "[Problema → resultado, en una línea.]",
        result:
          "Atributos de soporte más valorados, entregados a la gerencia para elegir el modelo",
        cardImage: {
          src: "/casos/suporte/suporte-card",
          width: 1024,
          height: 640,
          alt: "Recortes de la investigación de soporte: planes comparados, resultado del formulario, matriz de síntesis y preguntas abiertas",
        },
        study: {
          skills: ["Investigación cualitativa", "Síntesis y análisis"],
          method: [
            "Benchmark",
            "Mapa de certezas y dudas",
            "Entrevistas semiestructuradas",
            "Formulario",
          ],
          tools: ["Miro", "Notion"],
          cover: {
            src: "/casos/suporte/suporte-capa",
            width: 1168,
            height: 420,
            alt: "Planes de soporte premium para clientes de mayor tamaño, con un mapa de post-its al fondo",
          },
          problem: {
            paragraphs: [
              "Senior estaba diseñando planes de soporte premium y necesitaba saber si sus clientes de mayor tamaño pagarían por una atención diferenciada. Eran clientes de gran tamaño, calificados como AA por el ingreso mensual recurrente (MRR).",
              "Antes de invertir en nuevos planes, el equipo de negocios tenía hipótesis y dudas. La investigación existió para ponerlas a prueba con quienes iban a pagar.",
            ],
            goal: {
              label: "Objetivo general",
              title:
                "Explorar la intención y la predisposición de los clientes a pagar por un plan de soporte diferenciado",
            },
            cards: [
              {
                label: "Objetivo específico 1",
                title: "Entender el panorama actual del soporte y cómo funciona",
              },
              {
                label: "Objetivo específico 2",
                title: "Identificar puntos de mejora en el proceso actual",
              },
              {
                label: "Objetivo específico 3",
                title:
                  "Constatar cuál sería el plan de soporte más indicado para los clientes de gran tamaño",
              },
            ],
          },
          methodology: {
            lead: "Métodos de investigación combinados: lo que ofrece el mercado, lo que dicen los clientes y lo que priorizan cuando tienen que elegir.",
            cards: [
              {
                label: "Benchmark",
                title:
                  "Planes de soporte de otras empresas de software: atributos, niveles y precios",
                note: "Investigación secundaria",
                image: {
                  src: "/casos/suporte/suporte-metodo-benchmark",
                  width: 394,
                  height: 180,
                  alt: "Comparativo de planes de soporte de otras empresas",
                },
              },
              {
                label: "Mapa de certezas y dudas",
                title: "Dudas del equipo de negocios para alinear antes de las entrevistas",
                note: "Antes de ir a terreno",
                image: {
                  src: "/casos/suporte/suporte-metodo-duvidas",
                  width: 394,
                  height: 180,
                  alt: "Mapa de certezas y dudas con post-its",
                },
              },
              {
                label: "Entrevistas",
                title:
                  "Semiestructuradas: preguntas iniciales sin sesgo, presentación de los planes y preguntas específicas",
                note: "5 clientes - [30 a 40] minutos por sesión",
                image: {
                  src: "/casos/suporte/suporte-metodo-entrevistas",
                  width: 394,
                  height: 180,
                  alt: "Preguntas abiertas de las entrevistas en Miro",
                },
              },
              {
                label: "Formulario",
                title: "Preguntas cerradas para cuantificar respuestas abiertas",
                note: "3 respuestas - Clientes entrevistados",
                image: {
                  src: "/casos/suporte/suporte-metodo-formulario",
                  width: 394,
                  height: 180,
                  alt: "Formulario aplicado a los clientes",
                },
              },
            ],
          },
          analysis: {
            lead: "Cada pregunta tenía un objetivo. Los testimonios se convirtieron en conceptos, y los conceptos se cruzaron.",
            columns: ["Pregunta", "Objetivo", "Insight"],
            rows: [
              {
                title: "1. ¿Qué entiendes por soporte de alta disponibilidad?",
                text: "Mapear la percepción",
                data: "24/7 · respuesta rápida · SLA menor",
                quote: "Una atención 24/7 y un canal directo, priorizado y humanizado",
              },
              {
                title: "2. ¿Has necesitado soporte fuera del horario laboral?",
                text: "Identificar dolores reales",
                data: "Frecuencia semanal o mensual · WhatsApp extraoficial",
                quote: "Sí, hubo ocasiones en que la respuesta que nos dieron llegó muy tarde",
              },
              {
                title: "3. ¿Qué valoras más en un plan de soporte?",
                text: "Mapear atributos e intención de compra",
                data: "SLA · equipo de personas clave (SPOC) · documentación",
                quote: "Hay algunas que solo se contactan por tickets y no hay cercanía",
              },
              {
                title: "4. ¿Qué plan se alinea más con tus expectativas?",
                text: "Priorizar frente a planes reales",
                data: "SPOC · SLA avanzado · asistencia remota",
                quote: "Prioridad, por el focal point y el SLA premium",
                source: "cliente del sector [confirmar]",
              },
              {
                title: "4.1 ¿Y cuál tendría menos probabilidades de contratar?",
                text: "Identificar lo que no aporta",
                data: "Horario extendido · parecido al estándar",
                quote: "El premium extendido no sería útil para nuestro perfil",
              },
              {
                title: "5. Comentarios y dudas adicionales",
                text: "Abrir espacio para lo imprevisto",
                data: "Combinar atributos de planes",
                quote: "Se puede tomar un punto de uno, de otro, y armar un plan ideal",
              },
            ],
            flow: {
              kind: "chain",
              label: "Cadena de análisis: testimonio, post-it, concepto recurrente y conclusión",
              steps: [
                {
                  title: "Testimonio",
                  note: "lo que dice el cliente",
                },
                {
                  title: "Post-it",
                  note: "una idea por nota",
                },
                {
                  title: "Concepto recurrente",
                  note: "agrupa varias notas",
                },
                {
                  title: "Conclusión",
                  note: "cruza las preguntas",
                },
              ],
            },
            crossTitle: "El cruce",
            crossings: [
              {
                title: "El SLA menor es el más citado, pero es un síntoma",
                text: "Las causas: poco conocimiento técnico y una primera respuesta insuficiente.",
              },
              {
                title: "La necesidad fuera del horario es baja",
                text: "Frecuencia semanal o mensual. El horario extendido fue el menos deseado.",
              },
              {
                title: "Lo que dicen valorar y lo que eligen coincide",
                text: "SLA avanzado, punto focal y asistencia remota, en las dos etapas.",
              },
              {
                title: "El WhatsApp revela una brecha",
                text: "En emergencias, se vuelve un canal extraoficial.",
              },
              {
                title: "La documentación también es soporte",
                text: "Si fuera clara, el cliente lo resolvería solo.",
              },
            ],
          },
          decision: {
            lead: "La elección del modelo de atención fue de la gerencia. La investigación indicó los atributos que sostendrían la decisión: SLA avanzado, punto focal (SPOC) y asistencia remota.",
            cards: [
              {
                label: "Indicado",
                title:
                  "Planes que combinan SLA avanzado, punto focal y asistencia remota. El Premium Prioridad reúne los tres",
              },
              {
                label: "Menos deseado",
                title:
                  "Premium Extendido (horario extendido sin necesidad) y Consultoría Online (parecida al soporte estándar de hoy)",
              },
              {
                label: "Quedó abierto",
                title:
                  "Cuánto pagarían: solo un cliente afirmó que pagaría. Y la posibilidad de combinar atributos de planes distintos",
              },
            ],
          },
          delivery: {
            lead: "La matriz de síntesis reúne las 6 preguntas en las filas y los 5 clientes en las columnas, con la transcripción, las notas de comportamiento y las conclusiones de cada pregunta. Fue el artefacto que sostuvo el análisis.",
            items: [
              {
                image: {
                  src: "/casos/suporte/suporte-entrega-matriz",
                  width: 1920,
                  height: 1080,
                  alt: "Matriz de síntesis que cruza las respuestas por pregunta y por cliente",
                },
                caption:
                  "Filas: preguntas. Columnas: clientes, con transcripción y notas. Última columna: conclusiones.",
              },
            ],
          },
          result: {
            lead: "La investigación entregó a la gerencia una síntesis de los atributos de soporte más valorados por los clientes de mayor tamaño, para fundamentar la elección del modelo de atención.",
            metrics: [
              {
                value: "5",
                label: "clientes entrevistados, de segmentos distintos",
              },
              {
                value: "6",
                label: "modelos de atención probados",
              },
              {
                value: "3",
                label: "atributos más valorados",
              },
            ],
            note: "La investigación es cualitativa: muestra tendencias y motivos, no representa a todos los clientes.",
          },
        },
      },
      aliUi: {
        company: "Proyecto personal",
        years: "2026",
        role: "Diseño y código",
        tags: ["Design system", "Tokens", "Accesibilidad"],
        title: "Ali Design System: ligero, accesible y probado en cada build",
        summary: "[Problema → resultado, en una línea.]",
        result:
          "21 componentes en tema claro y oscuro, con contraste WCAG AA verificado en cada build",
        cardImage: {
          src: "/casos/ali-ui/ali-card",
          width: 1024,
          height: 640,
          alt: "Componentes de ali-ui en uso: slider, campo de e-mail, selección múltiple con etiquetas, botones, control segmentado, select con avatares, checkbox, radio y switch",
        },
        study: {
          skills: ["Diseño de sistemas", "Front-end con IA", "Accesibilidad"],
          method: ["Tokens semánticos", "Componentes sobre Radix", "Pruebas de contraste"],
          tools: ["Figma", "Claude Code", "Storybook", "GitHub"],
          cover: {
            src: "/casos/ali-ui/ali-capa",
            width: 1168,
            height: 420,
            alt: "Componentes de ali-ui en uso (slider, selección múltiple con etiquetas, botones, select, checkbox, radio y switch), con la marca Ali Design System",
          },
          problem: {
            paragraphs: [
              "Los kits genéricos repiten lo que todo design system ya ofrece. La propuesta de ali-ui es otra: pocos componentes, cada uno con personalidad, resolviendo problemas concretos en distintos tipos de operación e industria.",
              "Para que eso funcione, el diseño y el código tienen que ir juntos: cada decisión de diseño se convierte en un token, un componente y una prueba, con el razonamiento registrado en pull requests.",
            ],
            goal: {
              label: "Objetivo general",
              title:
                "Construir un design system compacto, con pocos componentes bien terminados, del token a la prueba",
            },
            cards: [
              {
                label: "Objetivo específico 1",
                title:
                  "Definir tokens por rol, con los mismos nombres en Figma, en CSS y en el código",
              },
              {
                label: "Objetivo específico 2",
                title:
                  "Garantizar accesibilidad por defecto, con contraste verificado en los dos temas",
              },
              {
                label: "Objetivo específico 3",
                title: "Probar el sistema en un producto real: este sitio",
              },
            ],
          },
          methodology: {
            lead: "Referencias de sistemas maduros, combinadas con un flujo de trabajo en el que cada cambio pasa por branch, verificación automática y pull request.",
            cards: [
              {
                label: "Referencias",
                title: "Carbon, Atlassian Design System y Material Design como base de comparación",
                note: "Estudio de sistemas maduros",
                image: {
                  src: "/casos/ali-ui/ali-metodo-referencias",
                  width: 394,
                  height: 180,
                  alt: "Referencias de design systems maduros usadas como base",
                },
              },
              {
                label: "Tokens",
                title: "Dos niveles: primitivos (valores) y semánticos (roles)",
                note: "Color, espaciado, radio, sombra, tipografía y movimiento",
                image: {
                  src: "/casos/ali-ui/ali-metodo-tokens",
                  width: 394,
                  height: 180,
                  alt: "Tokens primitivos y semánticos de ali-ui",
                },
              },
              {
                label: "Componentes",
                title:
                  "Radix UI para accesibilidad, CVA para variantes, Tailwind CSS 4 para estilo",
                note: "Componente, story y prueba juntos",
                image: {
                  src: "/casos/ali-ui/ali-metodo-componentes",
                  width: 394,
                  height: 180,
                  alt: "Componentes de ali-ui en Storybook",
                },
              },
              {
                label: "Verificación",
                title: "Lint, tipos, pruebas y build en cada pull request",
                note: "Una falla de contraste rompe el build",
                image: {
                  src: "/casos/ali-ui/ali-metodo-verificacao",
                  width: 394,
                  height: 180,
                  alt: "Verificación automática de contraste y pruebas",
                },
              },
            ],
          },
          analysis: {
            lead: "Todo el sistema depende de una regla: el componente nunca conoce el valor, solo el rol.",
            columns: ["Capa", "Ejemplo", "Rol"],
            rows: [
              {
                title: "Primitivo",
                text: "Escalas de 11 pasos (50 a 950): neutras, marca y estado",
                data: "neutral-light-50 · primary · red-500",
              },
              {
                title: "Semántico",
                text: "Nombra el rol del valor y cambia según el tema (claro y oscuro)",
                data: "surface · surface-raised · text-subtle · border-focus",
              },
              {
                title: "Uso",
                text: "Clases de Tailwind generadas desde los tokens; los valores sueltos se bloquean con lint",
                data: "bg-surface-raised · text-subtle",
              },
            ],
            flow: {
              kind: "chips",
              label:
                "Un nombre en todas partes: spacing se convierte en --ali-spacing-4 en CSS y en p-4 en Tailwind",
              title: "Un nombre en todas partes",
              chips: ["spacing", "--ali-spacing-4", "p-4"],
              caption: "TypeScript → CSS → Tailwind",
            },
            crossTitle: "El cruce",
            crossings: [
              {
                title: "Elevación en lugar de decoración",
                text: "Cuatro alturas de superficie: en el tema claro la altura viene de la sombra; en el oscuro, del color.",
              },
              {
                title: "Contraste como prueba",
                text: "Texto y bordes verificados contra WCAG AA (4,5:1 para texto, 3:1 para controles) en cada superficie.",
              },
              {
                title: "El lint como guardián del sistema",
                text: "Las reglas bloquean importar primitivos, valores arbitrarios (como un color hexadecimal escrito a mano) e íconos rellenos.",
              },
              {
                title: "Figma sincronizado desde el código",
                text: "Un plugin crea y actualiza las variables de Figma a partir de los tokens, sin duplicar colecciones.",
              },
            ],
          },
          decision: {
            lead: "Decisiones que mantienen el sistema pequeño y consistente, y las que siguen abiertas.",
            cards: [
              {
                label: "Elegido",
                title:
                  "Radix UI para accesibilidad, CVA para variantes y tokens semánticos como única fuente de valores",
              },
              {
                label: "Descartado",
                title:
                  "Valores sueltos de color, tamaño y espaciado en los componentes, bloqueados con lint",
              },
              {
                label: "Excepciones conscientes",
                title:
                  "3 puntos por debajo de AA documentados en Storybook: texto blanco sobre el degradado de la marca (≈ 2,35:1), el borde subtle en reposo y el placeholder en el tema claro",
              },
              {
                label: "Quedó abierto",
                title:
                  "Modo oscuro en Figma: el plan gratuito permite un modo por colección, así que solo se crea el claro",
              },
            ],
          },
          delivery: {
            lead: "El sistema se entrega como documentación viva: el Storybook publicado reúne fundamentos, componentes y las páginas de contraste y tokens.",
            items: [
              {
                image: {
                  src: "/casos/ali-ui/ali-entrega-storybook",
                  width: 804,
                  height: 470,
                  alt: "Storybook publicado de ali-ui, con fundamentos y componentes",
                },
                demo: "Demostración interactiva del Ali Design System, cargada desde Storybook",
                caption:
                  "Storybook publicado - código en GitHub - plugin de Figma para sincronizar los tokens",
              },
            ],
            links: [
              {
                label: "Abrir Storybook",
                href: "https://ali-ui-delta.vercel.app",
              },
              {
                label: "Ver en GitHub",
                href: "https://github.com/AdrianSilvaFuentes/ali-ui",
              },
            ],
          },
          result: {
            lead: "ali-ui ya sostiene un producto real: este sitio está hecho con los componentes del sistema.",
            metrics: [
              {
                value: "21",
                label: "componentes, cada uno con story y prueba",
              },
              {
                value: "2",
                label: "temas, claro y oscuro",
              },
              {
                value: "AA",
                label: "contraste verificado en cada build",
              },
            ],
            note: "Proyecto personal y en evolución: el código está abierto para consulta y cada decisión queda registrada en los pull requests.",
          },
        },
      },
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
              kind: "merge",
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
            chart: {
              label: "Preferencia entre los 4 layouts",
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
            },
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
  resume: {
    eyebrow: "Experiencia",
    title: "De recolectar comportamiento en datos a diseñar los recorridos que lo moldean.",
    intro:
      "[Cómo llegué aquí, en 3 párrafos cortos: comunicación y marketing (por qué las personas hacen lo que hacen en la pantalla) → investigación y diseño de interacción, con visitas de campo → producto, con diseño y código. Cerrar con: hoy llevo el problema hasta el producto entregado.]",
    location: "Blumenau, SC",
    nickname: { before: "Todos me dicen ", name: "Ali" },
    photoAlt:
      "Visita a un cliente para investigación de campo: un grupo alrededor de una mesa con notebooks y colectores de datos, conversando sobre el trabajo.",
    cv: { label: "Currículum (PDF, en inglés)", href: "/cv/adrian-silva-fuentes-cv-en.pdf" },
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
    linksLabel: "Perfiles",
    links: [
      { label: "GitHub", href: "https://github.com/AdrianSilvaFuentes" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/adriansilvafuentes/" },
      { label: "Behance", href: "https://www.behance.net/adriansilva" },
      { label: "Currículum (PDF, en inglés)", href: "/cv/adrian-silva-fuentes-cv-en.pdf" },
    ],
    madeWith: {
      before: "Hecho con ",
      label: "Ali Design System",
      href: "https://github.com/AdrianSilvaFuentes/ali-ui",
    },
  },
};

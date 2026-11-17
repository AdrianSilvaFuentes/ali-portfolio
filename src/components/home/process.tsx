import { IconChartLine, IconCode, IconSearch, IconTarget } from "@tabler/icons-react";
import type { Dictionary } from "@/content";
import { InViewList } from "../in-view-list";
import { Eyebrow, HomeSection } from "./section";

/** Um ícone por etapa, na mesma ordem dos textos: descobrir, decidir, construir, medir. */
const icons = [IconSearch, IconTarget, IconCode, IconChartLine];

/**
 * Quanto cada etapa leva para se preencher: 3 × o token mais lento do ali-ui (duration-slow).
 * Mudou o token, muda o ritmo aqui junto.
 */
const STEP = "calc(var(--ali-duration-slow) * 3)";

/**
 * 3. Como trabalho: as quatro etapas numeradas, cada uma com o seu ícone.
 * A linha de cima de cada etapa é um trecho de um único gradiente da marca (bg-gradient-brand,
 * como a trilha do Slider do ali-ui). Ao aparecer na tela, as linhas se preenchem da esquerda
 * para a direita, uma depois da outra; até a sua linha encher, a etapa fica opaca, como um
 * placeholder, e ganha cor junto com ela. Com "reduzir movimento", tudo já aparece pronto.
 */
export function Process({ t }: { t: Dictionary["home"]["process"] }) {
  const count = t.steps.length;
  return (
    <HomeSection id="processo-titulo" className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 id="processo-titulo" className="max-w-3xl text-title-md">
          {t.title}
        </h2>
      </div>
      <InViewList className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {t.steps.map((step, index) => {
          const Icon = icons[index] ?? IconSearch;
          // Cada etapa começa quando a anterior termina.
          const timing = { transitionDuration: STEP, transitionDelay: `calc(${STEP} * ${index})` };
          return (
            <li key={step.title} className="flex flex-col gap-2">
              <span aria-hidden className="relative mb-2 block h-0.5 overflow-hidden">
                {/* A trilha pontilhada: o que ainda falta preencher. */}
                <span className="absolute inset-x-0 top-0 border-t-2 border-dotted border-default" />
                <span
                  className="absolute inset-0 origin-left scale-x-0 bg-gradient-brand transition-transform ease-out group-data-in-view:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none"
                  style={{
                    // Um gradiente só, dividido entre as etapas: cada linha mostra o seu trecho.
                    backgroundSize: `${count * 100}% 100%`,
                    backgroundPosition: `${count > 1 ? (index / (count - 1)) * 100 : 0}% 0`,
                    ...timing,
                  }}
                />
              </span>
              <div
                className="flex flex-col gap-2 opacity-30 transition-opacity ease-out group-data-in-view:opacity-100 motion-reduce:opacity-100 motion-reduce:transition-none"
                style={timing}
              >
                <span aria-hidden className="flex items-center gap-2 text-label-md text-subtle">
                  <Icon className="size-5 text-icon-default" />
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-title-sm">{step.title}</h3>
                <p className="text-body-md text-subtle">{step.description}</p>
              </div>
            </li>
          );
        })}
      </InViewList>
    </HomeSection>
  );
}

import { IconChartLine, IconCode, IconSearch, IconTarget } from "@tabler/icons-react";
import type { Dictionary } from "@/content";
import { InViewList } from "../in-view-list";
import { Eyebrow, HomeSection } from "./section";

/** Um ícone por etapa, na mesma ordem dos textos: descobrir, decidir, construir, medir. */
const icons = [IconSearch, IconTarget, IconCode, IconChartLine];

/**
 * 3. Como trabalho: as quatro etapas numeradas, cada uma com o seu ícone.
 * A linha de cima de cada etapa é um trecho de um único gradiente da marca (bg-gradient-brand,
 * como a trilha do Slider do ali-ui): ao aparecer na tela, as linhas se preenchem da esquerda
 * para a direita, uma depois da outra. Com "reduzir movimento", aparecem já preenchidas.
 */
export function Process({ t }: { t: Dictionary["home"]["process"] }) {
  const count = t.steps.length;
  return (
    <HomeSection id="processo-titulo" className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 id="processo-titulo" className="max-w-3xl text-title-md lg:text-display">
          {t.title}
        </h2>
      </div>
      <InViewList className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {t.steps.map((step, index) => {
          const Icon = icons[index] ?? IconSearch;
          return (
            <li key={step.title} className="flex flex-col gap-2">
              <span
                aria-hidden
                className="relative mb-2 block h-0.5 overflow-hidden bg-neutral-subtle"
              >
                <span
                  className="absolute inset-0 origin-left scale-x-0 bg-gradient-brand transition-transform duration-slow ease-out group-data-in-view:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none"
                  style={{
                    // Um gradiente só, dividido entre as etapas: cada linha mostra o seu trecho.
                    backgroundSize: `${count * 100}% 100%`,
                    backgroundPosition: `${count > 1 ? (index / (count - 1)) * 100 : 0}% 0`,
                    // Uma depois da outra: cada linha começa quando a anterior termina.
                    transitionDelay: `calc(var(--ali-duration-slow) * ${index})`,
                  }}
                />
              </span>
              <span aria-hidden className="flex items-center gap-2 text-label-md text-subtle">
                <Icon className="size-5 text-icon-default" />
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-title-sm">{step.title}</h3>
              <p className="text-body-md text-subtle">{step.description}</p>
            </li>
          );
        })}
      </InViewList>
    </HomeSection>
  );
}

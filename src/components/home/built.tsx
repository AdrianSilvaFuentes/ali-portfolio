import { Button } from "@adriansilvafuentes/ui";
import type { Dictionary } from "@/content";
import { ComponentSamples } from "./component-samples";
import { Eyebrow, HomeSection } from "./section";

/**
 * A escala da faixa, do mais claro ao mais escuro no tema claro, mais o amarelo da marca.
 * Só tokens semânticos: no tema escuro, cada um vira o seu par escuro sozinho.
 */
const swatches = [
  "bg-surface",
  "bg-surface-sunken",
  "bg-neutral-subtle",
  "bg-[var(--ali-color-border-subtle)]",
  "bg-[var(--ali-color-border-default)]",
  "bg-[var(--ali-color-icon-subtle)]",
  "bg-[var(--ali-color-text-subtle)]",
  "bg-[var(--ali-color-icon-default)]",
  "bg-surface-inverse",
  "bg-primary-subtle",
];

/** 5. Construído: o ali-ui como prova, com a faixa de cores e componentes de verdade. */
export function Built({ t }: { t: Dictionary["home"]["built"] }) {
  return (
    <HomeSection id="construido-titulo" className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="flex flex-col gap-5">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 id="construido-titulo" className="text-title-md">
          {t.title}
        </h2>
        <p className="max-w-xl text-body-lg text-subtle">{t.lead}</p>
        <div className="flex flex-wrap gap-3">
          <Button size="sm" asChild>
            <a href={t.storybook.href}>{t.storybook.label}</a>
          </Button>
          <Button size="sm" asChild variant="secondary">
            <a href={t.github.href}>{t.github.label}</a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          role="img"
          aria-label={t.palette}
          className="flex h-10 overflow-hidden rounded-md border border-subtle"
        >
          {swatches.map((swatch) => (
            <span key={swatch} className={`flex-1 ${swatch}`} />
          ))}
        </div>
        <ComponentSamples t={t.samples} />
      </div>
    </HomeSection>
  );
}

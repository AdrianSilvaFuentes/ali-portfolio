import { Button } from "@adriansilvafuentes/ui";
import type { Dictionary } from "@/content";
import { StorybookDemo } from "../storybook-demo";
import { Eyebrow, HomeSection } from "./section";

/** 5. Construído: o Ali Design System como prova. Texto à esquerda, o Storybook ao vivo à direita. */
export function Built({ t }: { t: Dictionary["home"]["built"] }) {
  return (
    <HomeSection
      id="construido-titulo"
      sunken
      className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14"
    >
      <div className="flex flex-col gap-5 lg:col-span-2">
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
      <div className="lg:col-span-3">
        <StorybookDemo title={t.demo} />
      </div>
    </HomeSection>
  );
}

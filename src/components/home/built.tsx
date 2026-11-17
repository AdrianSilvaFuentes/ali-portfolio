import { Badge, Button } from "@adriansilvafuentes/ui";
import { IconProgress } from "@tabler/icons-react";
import type { Dictionary } from "@/content";
import { StorybookDemo } from "../storybook-demo";
import { Eyebrow, HomeSection } from "./section";
import { Stack } from "./stack";

/**
 * 5. Projeto mais recente: o Ali Design System, ainda em andamento (Badge). Texto à esquerda, o Storybook ao vivo à direita
 * e, embaixo, a stack com as ferramentas.
 */
export function Built({
  t,
  stack,
}: {
  t: Dictionary["home"]["built"];
  stack: Dictionary["home"]["stack"];
}) {
  return (
    <HomeSection id="construido-titulo" sunken className="flex flex-col gap-14">
      <div className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <Badge tone="info" icon={<IconProgress />}>
              {t.status}
            </Badge>
          </div>
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
      </div>
      <Stack t={stack} />
    </HomeSection>
  );
}

import {
  IconBrandGithub,
  IconBrandPnpm,
  IconBrandReact,
  IconBrandStorybook,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandVite,
  IconChecks,
  IconStack2,
  IconTestPipe,
} from "@tabler/icons-react";
import type { Dictionary, StackIcon } from "@/content";
import { Eyebrow } from "./section";

/** Os mesmos ícones da Introdução do Storybook do ali-ui. */
const icons: Record<StackIcon, typeof IconBrandReact> = {
  react: IconBrandReact,
  typescript: IconBrandTypescript,
  tailwind: IconBrandTailwind,
  pnpm: IconBrandPnpm,
  turborepo: IconStack2,
  vite: IconBrandVite,
  vitest: IconTestPipe,
  biome: IconChecks,
  github: IconBrandGithub,
  storybook: IconBrandStorybook,
  vercel: IconBrandVercel,
};

/** Stack: as ferramentas agrupadas por função. Fica dentro da seção Construído, abaixo do painel. */
export function Stack({ t }: { t: Dictionary["home"]["stack"] }) {
  return (
    <div className="flex flex-col gap-8 border-t border-subtle pt-10">
      <Eyebrow as="h3" id="stack-titulo">
        {t.title}
      </Eyebrow>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {t.groups.map((group) => {
          return (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-label-md text-subtle">{group.title}</h4>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => {
                  const Icon = icons[item.icon];
                  return (
                    <li key={item.name} className="flex items-start gap-3">
                      <Icon className="mt-0.5 size-5 shrink-0 text-icon-default" aria-hidden />
                      <span className="flex flex-col">
                        <span className="text-label-md">{item.name}</span>
                        <span className="text-body-md text-subtle">{item.description}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

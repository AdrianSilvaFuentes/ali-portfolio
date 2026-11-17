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
import { Eyebrow, HomeSection } from "./section";

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

/** 6. Stack: as ferramentas agrupadas por função. */
export function Stack({ t }: { t: Dictionary["home"]["stack"] }) {
  return (
    <HomeSection id="stack-titulo" className="flex flex-col gap-8">
      <Eyebrow as="h2" id="stack-titulo">
        {t.title}
      </Eyebrow>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {t.groups.map((group) => {
          return (
            <div key={group.title} className="flex flex-col gap-4">
              <h3 className="text-label-md text-subtle">{group.title}</h3>
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
    </HomeSection>
  );
}

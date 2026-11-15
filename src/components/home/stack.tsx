import {
  IconBrandReact,
  IconBrandStorybook,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
} from "@tabler/icons-react";
import type { Dictionary, StackIcon } from "@/content";
import { Eyebrow, HomeSection } from "./section";

/** Ícone só nas ferramentas que o visitante reconhece. */
const icons: Record<StackIcon, typeof IconBrandReact> = {
  react: IconBrandReact,
  typescript: IconBrandTypescript,
  tailwind: IconBrandTailwind,
  storybook: IconBrandStorybook,
  vercel: IconBrandVercel,
};

/** 6. Stack: as ferramentas agrupadas por função. */
export function Stack({ t }: { t: Dictionary["home"]["stack"] }) {
  return (
    <HomeSection id="stack-titulo" sunken className="flex flex-col gap-8">
      <Eyebrow as="h2" id="stack-titulo">
        {t.title}
      </Eyebrow>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {t.groups.map((group) => {
          const withIcons = group.items.some((item) => item.icon);
          return (
            <div key={group.title} className="flex flex-col gap-4">
              <h3 className="font-mono text-body-xs tracking-wider text-subtle uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.items.map((item) => {
                  const Icon = item.icon ? icons[item.icon] : null;
                  return (
                    <li key={item.name} className="flex gap-3">
                      {withIcons && (
                        <span aria-hidden className="size-6 shrink-0 text-icon-default">
                          {Icon && <Icon className="size-6" stroke={1.5} />}
                        </span>
                      )}
                      <span className="flex flex-col">
                        <span className="text-label-lg">{item.name}</span>
                        <span className="text-body-sm text-subtle">{item.description}</span>
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

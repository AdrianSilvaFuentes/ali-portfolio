import { Tag } from "@adriansilvafuentes/ui";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type Locale, pagePath } from "@/i18n/config";
import { Placeholder } from "../placeholder";
import { Eyebrow, HomeSection, textLinkClass } from "./section";

/**
 * 4. Casos em destaque. O link fica no título do card e cobre o card inteiro (after:inset-0),
 * para o leitor de tela ouvir só o título. As páginas de caso chegam no passo 4: por enquanto,
 * todos levam à página Trabalho.
 */
export function FeaturedCases({ lang, t }: { lang: Locale; t: Dictionary["home"]["cases"] }) {
  const workPath = pagePath(lang, "work");

  return (
    <HomeSection id="casos-titulo" sunken className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <h2 id="casos-titulo" className="text-title-lg">
            {t.title}
          </h2>
          <Link href={workPath} className={textLinkClass}>
            {t.seeAll}
            <IconArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
      <ul className="grid gap-10 md:grid-cols-3 md:gap-5">
        {t.items.map((item) => (
          <li
            key={item.title}
            className="group relative flex flex-col gap-3 rounded-md outline-focus outline-offset-4 has-focus-visible:outline-2"
          >
            <Placeholder label={t.image} className="aspect-16/10" />
            <p className="font-mono text-body-xs text-subtle">{item.meta}</p>
            <ul className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <li key={tag}>
                  <Tag color="gray" size="sm">
                    {tag}
                  </Tag>
                </li>
              ))}
            </ul>
            <h3 className="text-title-sm">
              <Link
                href={workPath}
                className="underline-offset-4 outline-none group-hover:underline after:absolute after:inset-0"
              >
                {item.title}
              </Link>
            </h3>
            <p className="text-body-md text-subtle">{item.summary}</p>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}

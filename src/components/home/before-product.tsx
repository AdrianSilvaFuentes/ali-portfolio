import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type Locale, pagePath } from "@/i18n/config";
import { Placeholder } from "../placeholder";
import { Eyebrow, HomeSection, textLinkClass } from "./section";

/**
 * 7. Antes do produto: web design e branding. Peso menor que os casos de propósito:
 * título menor, sem número grande e sem amarelo. Os links levam à página Trabalho por enquanto.
 */
export function BeforeProduct({ lang, t }: { lang: Locale; t: Dictionary["home"]["before"] }) {
  const workPath = pagePath(lang, "work");

  return (
    <HomeSection id="antes-titulo" className="flex flex-col gap-10">
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-14">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 id="antes-titulo" className="text-title-md">
            {t.title}
          </h2>
          <p className="text-body-md text-subtle">{t.lead}</p>
        </div>
        <ul className="border-b border-subtle lg:col-span-3">
          {t.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-2 border-t border-subtle py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-label-lg">{item.title}</h3>
                <p className="text-body-sm text-subtle">{item.description}</p>
              </div>
              <Link href={workPath} className={`${textLinkClass} shrink-0`}>
                {item.link}
                <IconArrowRight aria-hidden className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul aria-hidden className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {t.thumbnails.map((label) => (
          <li key={label}>
            <Placeholder label={label} className="aspect-4/3" />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}

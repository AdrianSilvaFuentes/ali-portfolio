import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type CaseKey, type Locale, pagePath } from "@/i18n/config";
import { CaseCard } from "../case-card";
import { Eyebrow, HomeSection, textLinkClass } from "./section";

/** Os três casos que a Home destaca, entre os quatro da página Trabalho. */
const featured: CaseKey[] = ["wiipo", "warehouses", "icons"];

/** 4. Casos em destaque, com link para a página Trabalho e cards que levam a cada caso. */
export function FeaturedCases({
  lang,
  t,
  cases,
}: {
  lang: Locale;
  t: Dictionary["home"]["cases"];
  cases: Dictionary["work"]["cases"];
}) {
  return (
    <HomeSection id="casos-titulo" sunken className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <h2 id="casos-titulo" className="text-title-md">
            {t.title}
          </h2>
          <Link href={pagePath(lang, "work")} className={textLinkClass}>
            {t.seeAll}
            <IconArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
      <ul className="grid gap-10 md:grid-cols-3 md:gap-5">
        {featured.map((key) => (
          <li key={key}>
            <CaseCard lang={lang} caseKey={key} t={cases[key]} imageLabel={t.image} />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}

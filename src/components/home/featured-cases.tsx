import { Button } from "@adriansilvafuentes/ui";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type CaseKey, type Locale, pagePath } from "@/i18n/config";
import { CaseCard } from "../case-card";
import { HomeSection } from "./section";

/** Os três casos que a Home destaca, entre os quatro da página Trabalho. */
const featured: CaseKey[] = ["wiipo", "support", "aliUi"];

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
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <h2 id="casos-titulo" className="text-title-md">
          {t.title}
        </h2>
        {/* Button ghost do ali-ui; a margem negativa compensa o px-4: no celular (embaixo do título) o texto alinha à esquerda; no desktop, a seta alinha com a borda dos cards. */}
        <Button
          size="md"
          variant="ghost"
          asChild
          iconRight={<IconArrowRight />}
          className="-ml-4 md:ml-0 md:-mr-4"
        >
          <Link href={pagePath(lang, "work")}>{t.seeAll}</Link>
        </Button>
      </div>
      <ul className="grid gap-4 md:grid-cols-3">
        {featured.map((key) => (
          <li key={key}>
            <CaseCard
              lang={lang}
              caseKey={key}
              t={cases[key]}
              imageLabel={t.image}
              readCase={t.viewCase}
            />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}

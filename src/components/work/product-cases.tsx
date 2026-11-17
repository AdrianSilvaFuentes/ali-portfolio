import type { Dictionary } from "@/content";
import { caseKeys, type Locale } from "@/i18n/config";
import { CaseCard } from "../case-card";
import { HomeSection } from "../home/section";

/**
 * Os casos de produto, em cards grandes que levam à página de cada caso.
 * Só aparecem os casos com estudo escrito (`study`); os que ainda têm placeholders ficam ocultos.
 */
export function ProductCases({ lang, t }: { lang: Locale; t: Dictionary["work"] }) {
  return (
    <HomeSection id="produto-titulo" sunken className="flex flex-col gap-10">
      <h2 id="produto-titulo" className="text-title-md">
        {t.product.title}
      </h2>
      <ul className="grid gap-12 md:grid-cols-2 md:gap-x-6">
        {caseKeys
          .filter((key) => t.cases[key].study)
          .map((key) => (
            <li key={key}>
              <CaseCard
                lang={lang}
                caseKey={key}
                t={t.cases[key]}
                imageLabel={t.product.image}
                readCase={t.product.readCase}
              />
            </li>
          ))}
      </ul>
    </HomeSection>
  );
}

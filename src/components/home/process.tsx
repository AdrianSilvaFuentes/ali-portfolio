import type { Dictionary } from "@/content";
import { Eyebrow, HomeSection } from "./section";

/** 3. Como trabalho: as quatro etapas numeradas, numa lista ordenada. */
export function Process({ t }: { t: Dictionary["home"]["process"] }) {
  return (
    <HomeSection id="processo-titulo" className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 id="processo-titulo" className="max-w-3xl text-title-lg">
          {t.title}
        </h2>
      </div>
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {t.steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-2 border-t-2 border-default pt-4">
            <span aria-hidden className="font-mono text-body-xs text-subtle">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-title-sm">{step.title}</h3>
            <p className="text-body-md text-subtle">{step.description}</p>
          </li>
        ))}
      </ol>
    </HomeSection>
  );
}

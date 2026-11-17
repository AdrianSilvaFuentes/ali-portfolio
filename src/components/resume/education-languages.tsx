import type { Dictionary } from "@/content";
import { Container } from "../container";

/** Formação e idiomas, lado a lado a partir do md. Cada idioma é marcado com o próprio lang. */
export function EducationLanguages({ t }: { t: Dictionary["resume"] }) {
  const edu = t.education;
  return (
    <div className="py-16 md:py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-14">
        <section aria-labelledby="formacao" className="flex flex-col gap-4">
          <h2 id="formacao" className="border-b-2 border-default pb-4 text-title-md">
            {edu.title}
          </h2>
          <div className="flex flex-col gap-1">
            <h3 className="text-title-sm">{edu.degree}</h3>
            <p lang="es" className="text-body-md text-subtle">
              {edu.school}
            </p>
            <p className="font-mono text-body-xs text-subtle">{edu.years}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-label-md text-subtle">{edu.honorsTitle}</h3>
            <ul className="flex flex-col gap-1 text-body-md text-subtle">
              {edu.honors.map((honor) => (
                <li key={honor} lang="es">
                  {honor}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section aria-labelledby="idiomas" className="flex flex-col gap-4">
          <h2 id="idiomas" className="border-b-2 border-default pb-4 text-title-md">
            {t.languages.title}
          </h2>
          <ul className="flex flex-col">
            {t.languages.items.map((language) => (
              <li
                key={language.name}
                className="flex items-baseline justify-between gap-4 border-b border-subtle py-3"
              >
                <span lang={language.lang} className="text-body-md">
                  {language.name}
                </span>
                <span className="text-body-sm text-subtle">{language.level}</span>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}

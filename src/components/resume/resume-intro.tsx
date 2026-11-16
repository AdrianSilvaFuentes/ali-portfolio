import { Button } from "@adriansilvafuentes/ui";
import type { Dictionary } from "@/content";
import { Container } from "../container";
import { Eyebrow } from "../home/section";
import { Placeholder } from "../placeholder";

/**
 * Abertura da Experiência: título, a narrativa "Como cheguei aqui", cidade, apelido e idiomas,
 * o botão do currículo e a foto de pesquisa de campo (reservada até haver autorização).
 * O currículo ainda não existe: o botão fica desabilitado, com o texto entre colchetes.
 */
export function ResumeIntro({ t, reserved }: { t: Dictionary["resume"]; reserved: string }) {
  return (
    <section aria-labelledby="experiencia-titulo">
      <Container className="grid gap-10 py-12 md:grid-cols-2 md:gap-14 md:py-16">
        <div className="flex flex-col gap-5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 id="experiencia-titulo" className="text-display">
            {t.title}
          </h1>
          <p className="text-body-lg text-subtle">{t.intro}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-body-md text-subtle">
            <li>{t.location}</li>
            <li>
              {t.nickname.before}
              {/* O amarelo é só fundo; o texto continua na cor padrão. */}
              <span className="rounded-sm bg-primary-subtle px-1 text-default">
                {t.nickname.name}
              </span>
            </li>
            <li>
              {t.languages.items.map((language, index) => (
                <span key={language.name}>
                  {index > 0 && " · "}
                  <span lang={language.lang}>{language.name}</span>
                </span>
              ))}
            </li>
          </ul>
          <div>
            <Button disabled>{t.cv}</Button>
          </div>
        </div>
        <Placeholder label={t.photo} reservedLabel={reserved} className="aspect-4/3" />
      </Container>
    </section>
  );
}

import { Button } from "@adriansilvafuentes/ui";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type Locale, pagePath } from "@/i18n/config";
import { Container } from "../container";
import { Placeholder } from "../placeholder";

/**
 * 1. Abertura: quem é, o que faz e o próximo passo. No celular o retrato vem depois do texto;
 * a partir do md, fica ao lado. É a única seção com h1.
 */
export function Hero({ lang, t }: { lang: Locale; t: Dictionary["home"] }) {
  return (
    <section aria-labelledby="inicio-titulo">
      <Container className="grid gap-10 py-12 md:grid-cols-2 md:items-stretch md:gap-14 md:py-20">
        <div className="flex flex-col gap-6">
          <p className="text-title-sm">
            {t.greeting.before}
            {/* O amarelo é só fundo; o texto continua na cor padrão. */}
            <span className="rounded-sm bg-primary-subtle px-1">{t.greeting.name}</span>
            {t.greeting.after}
          </p>
          <p className="font-mono text-label-sm tracking-wider text-subtle uppercase">{t.role}</p>
          <h1 id="inicio-titulo" className="text-display">
            {t.title}
          </h1>
          <p className="max-w-xl text-body-lg text-subtle">{t.lead}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={pagePath(lang, "work")}>{t.seeWork}</Link>
            </Button>
            <Button asChild variant="secondary">
              <a href="#contato">{t.talk}</a>
            </Button>
          </div>
        </div>
        <Placeholder
          label={t.portrait}
          reservedLabel={t.reserved}
          className="aspect-square md:aspect-auto md:min-h-full"
        />
      </Container>
    </section>
  );
}

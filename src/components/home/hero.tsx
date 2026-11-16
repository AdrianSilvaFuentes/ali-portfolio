import { Button } from "@adriansilvafuentes/ui";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type Locale, pagePath } from "@/i18n/config";
import portrait from "../../../public/images/retrato.webp";
import { Container } from "../container";

/**
 * 1. Abertura: quem é, o que faz e o próximo passo. No celular o retrato vem depois do texto;
 * a partir do md, fica ao lado, centrado na altura do texto. É a única seção com h1.
 */
export function Hero({ lang, t }: { lang: Locale; t: Dictionary["home"] }) {
  return (
    <section aria-labelledby="inicio-titulo" className="bg-dots">
      <Container className="grid gap-10 py-12 md:grid-cols-2 md:items-center md:gap-14 md:py-20">
        <div className="flex flex-col gap-6">
          <p className="text-label-md text-subtle">{t.role}</p>
          <h1 id="inicio-titulo" className="text-title-lg">
            {t.title.first}
            <br />
            {t.title.before}
            {/* O amarelo é só fundo; o texto continua na cor padrão. */}
            <span className="rounded-sm bg-primary-subtle px-1">{t.title.name}</span>
            {t.title.after}
          </h1>
          <p className="max-w-xl text-body-lg text-subtle">{t.lead}</p>
          <div className="flex flex-wrap gap-3">
            <Button size="sm" asChild>
              <Link href={pagePath(lang, "work")}>{t.seeWork}</Link>
            </Button>
            <Button size="sm" asChild variant="secondary">
              <a href="#contato">{t.talk}</a>
            </Button>
          </div>
        </div>
        {/*
          O selo já traz moldura e sombra, e o fundo em volta é transparente: a foto entra sem
          caixa. Original em media/retrato (fora do Git); a versão leve está em public/images.
        */}
        <Image
          src={portrait}
          alt={t.portraitAlt}
          preload
          sizes="(min-width: 768px) 448px, 100vw"
          className="animate-portrait mx-auto h-auto w-full max-w-md"
        />
      </Container>
    </section>
  );
}

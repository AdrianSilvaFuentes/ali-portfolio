import { Button } from "@adriansilvafuentes/ui";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type Locale, pagePath } from "@/i18n/config";
import portrait from "../../../public/images/retrato.webp";
import { Container } from "../container";

/** As quatro alças da seleção, centradas nos cantos da moldura. */
const selectionHandles = [
  "top-0 left-0 -translate-1/2",
  "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-0 right-0 translate-1/2",
];

/**
 * 1. Abertura: quem é, o que faz e o próximo passo. No celular o retrato vem depois do texto;
 * a partir do md, fica ao lado, centrado na altura do texto. É a única seção com h1.
 */
export function Hero({ lang, t }: { lang: Locale; t: Dictionary["home"] }) {
  return (
    <section aria-labelledby="inicio-titulo" className="bg-dots overflow-x-clip">
      <Container className="grid gap-6 py-12 md:grid-cols-2 md:items-center md:gap-14 md:py-20">
        <div className="flex flex-col gap-4">
          <p className="text-label-md text-subtle">{t.role}</p>
          <h1 id="inicio-titulo" className="text-title-lg">
            {t.title.first}
            <br />
            {t.title.before}
            {/*
              Seleção em volta do nome, como no Figma (nó 53:987 do ali-ui): moldura de 2px e
              quatro alças de 12px, com border-primary e fundo surface. Ao carregar, um cursor
              (decorativo) desenha a seleção: veja hero-selection e hero-cursor no globals.css.
            */}
            <span className="relative inline-block px-1">
              {t.title.name}
              <span aria-hidden="true" className="hero-selection">
                <span className="absolute inset-0 border-2 border-primary" />
                {selectionHandles.map((position) => (
                  <span
                    key={position}
                    className={`absolute size-3 border-2 border-primary bg-surface ${position}`}
                  />
                ))}
              </span>
              <span aria-hidden="true" className="hero-cursor" />
            </span>
          </h1>
          <p className="max-w-xl text-body-lg text-subtle">{t.lead}</p>
          <div className="flex flex-wrap gap-3">
            <Button size="sm" asChild iconRight={<IconArrowRight />}>
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
          sizes="(min-width: 768px) 448px, 288px"
          className="animate-portrait mx-auto h-auto w-full max-w-2xs md:max-w-md"
        />
      </Container>
    </section>
  );
}

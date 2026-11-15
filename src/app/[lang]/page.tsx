import { Button } from "@adriansilvafuentes/ui";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { getDictionary } from "@/content";
import { isLocale, pagePath } from "@/i18n/config";

/** Início, por enquanto só com a abertura. As outras seções da Home entram no passo 3. */
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <section>
      <Container className="flex flex-col gap-6 py-12 md:py-20">
        <p className="text-title-sm">{t.home.greeting}</p>
        <p className="font-mono text-label-sm tracking-wider text-subtle uppercase">
          {t.home.role}
        </p>
        <h1 className="max-w-4xl text-display">{t.home.title}</h1>
        <p className="max-w-xl text-body-lg text-subtle">{t.home.lead}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href={pagePath(lang, "work")}>{t.home.seeWork}</Link>
          </Button>
          <Button asChild variant="secondary">
            <a href="#contato">{t.home.talk}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

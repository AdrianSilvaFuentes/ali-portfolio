import { Button } from "@adriansilvafuentes/ui";
import Link from "next/link";
import { Container } from "@/components/container";
import { pt } from "@/content/pt";

/** Início, por enquanto só com a abertura. As outras seções da Home entram no passo 3. */
export default function Home() {
  return (
    <section>
      <Container className="flex flex-col gap-6 py-12 md:py-20">
        <p className="text-title-sm">{pt.home.greeting}</p>
        <p className="font-mono text-label-sm tracking-wider text-subtle uppercase">
          {pt.home.role}
        </p>
        <h1 className="max-w-4xl text-display">{pt.home.title}</h1>
        <p className="max-w-xl text-body-lg text-subtle">{pt.home.lead}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/trabalho">{pt.home.seeWork}</Link>
          </Button>
          <Button asChild variant="secondary">
            <a href="#contato">{pt.home.talk}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

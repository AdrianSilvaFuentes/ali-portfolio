import type { ReactNode } from "react";
import { Container } from "./container";

/** Abertura das páginas internas: rótulo pequeno, título grande e, por enquanto, um aviso provisório. */
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section>
      <Container className="flex flex-col gap-5 py-12 md:py-16">
        <p className="text-label-md text-subtle">{eyebrow}</p>
        <h1 className="max-w-4xl text-title-lg">{title}</h1>
        {children}
      </Container>
    </section>
  );
}

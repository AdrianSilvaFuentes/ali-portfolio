import { cn } from "@adriansilvafuentes/ui";
import type { ComponentProps, ReactNode } from "react";
import { Container } from "../container";

/**
 * Uma seção da Home: respiro vertical e, quando `sunken`, o fundo afundado,
 * para as seções se alternarem. Com `dotted`, o fundo ganha o pontilhado da abertura (bg-dots). O título (h2) é ligado à seção pelo `aria-labelledby`.
 */
export function HomeSection({
  id,
  sunken = false,
  dotted = false,
  className,
  children,
}: {
  id: string;
  sunken?: boolean;
  dotted?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={cn("py-16 md:py-24", sunken && "bg-surface-sunken", dotted && "bg-dots")}
    >
      <Container className={className}>{children}</Container>
    </section>
  );
}

/** Rótulo acima dos títulos, com o token label-md do ali-ui. Pode virar o próprio h2 (`as="h2"`). */
export function Eyebrow({
  as: Tag = "p",
  className,
  ...props
}: ComponentProps<"p"> & { as?: "p" | "h2" | "h3" }) {
  return <Tag className={cn("text-label-md text-subtle", className)} {...props} />;
}

/** Link de texto sublinhado, com 44px de área de toque e foco visível. */
export const textLinkClass =
  "inline-flex min-h-11 items-center gap-1 rounded-sm text-body-md text-default underline underline-offset-4 outline-focus focus-visible:outline-2 focus-visible:outline-offset-2";

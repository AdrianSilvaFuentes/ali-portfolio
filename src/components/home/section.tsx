import { cn } from "@adriansilvafuentes/ui";
import type { ComponentProps, ReactNode } from "react";
import { Container } from "../container";

/**
 * Uma seção da Home: linha fina no topo, respiro vertical e, quando `sunken`, o fundo afundado,
 * para as seções se alternarem. O título (h2) é ligado à seção pelo `aria-labelledby`.
 */
export function HomeSection({
  id,
  sunken = false,
  className,
  children,
}: {
  id: string;
  sunken?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={cn("border-t border-subtle py-16 md:py-24", sunken && "bg-surface-sunken")}
    >
      <Container className={className}>{children}</Container>
    </section>
  );
}

/** Rótulo pequeno em mono, acima dos títulos. Pode virar o próprio h2 (`as="h2"`). */
export function Eyebrow({
  as: Tag = "p",
  className,
  ...props
}: ComponentProps<"p"> & { as?: "p" | "h2" | "h3" }) {
  return (
    <Tag
      className={cn("font-mono text-label-sm tracking-wider text-subtle uppercase", className)}
      {...props}
    />
  );
}

/** Link de texto sublinhado, com 44px de área de toque e foco visível. */
export const textLinkClass =
  "inline-flex min-h-11 items-center gap-1 rounded-sm text-body-md text-default underline underline-offset-4 outline-focus focus-visible:outline-2 focus-visible:outline-offset-2";

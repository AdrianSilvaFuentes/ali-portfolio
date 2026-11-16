import { cn } from "@adriansilvafuentes/ui";
import type { CSSProperties } from "react";

/**
 * Área reservada para uma imagem que ainda não existe, com o nome do que vai ali.
 * Com `reservedLabel`, o leitor de tela ouve "Espaço reservado: Retrato". Sem ele, a área é
 * decorativa e fica escondida (use quando o texto ao lado já diz do que se trata).
 */
export function Placeholder({
  label,
  reservedLabel,
  description,
  className,
  style,
}: {
  label: string;
  reservedLabel?: string;
  /** O que o leitor de tela ouve depois de "Espaço reservado:", no lugar do rótulo visível. */
  description?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const a11y = reservedLabel
    ? { role: "img", "aria-label": `${reservedLabel}: ${description ?? label}` }
    : { "aria-hidden": true };

  return (
    <div
      {...a11y}
      style={style}
      className={cn(
        "flex items-center justify-center rounded-md border border-dashed border-default bg-neutral-subtle p-4",
        className,
      )}
    >
      <span className="text-center font-mono text-label-sm tracking-wider text-subtle uppercase">
        {label}
      </span>
    </div>
  );
}

import { cn } from "@adriansilvafuentes/ui";
import type { ComponentProps } from "react";

/** Largura máxima e margens laterais do site: 20px no celular, 56px em telas grandes. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 md:px-14", className)} {...props} />;
}

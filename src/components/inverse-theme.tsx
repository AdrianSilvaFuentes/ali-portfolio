"use client";

import type { ComponentProps } from "react";
import { useSiteTheme } from "@/lib/use-site-theme";

/**
 * Um <footer> com o tema oposto ao da página (no tema claro, os tokens do escuro, e vice-versa).
 * Os tokens do ali-ui respondem a data-theme em qualquer elemento, então tudo dentro dele,
 * inclusive os componentes (Button ghost), usa as cores certas sem nada escrito à mão.
 */
export function InverseThemeFooter(props: ComponentProps<"footer">) {
  const theme = useSiteTheme();
  return <footer data-theme={theme === "dark" ? "light" : "dark"} {...props} />;
}

"use client";

import { Button } from "@adriansilvafuentes/ui";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { pt } from "@/content/pt";

type Theme = "light" | "dark";

/** O tema em uso: o escolhido pela pessoa ou, sem escolha, o do sistema. */
function currentTheme(): Theme {
  const chosen = document.documentElement.getAttribute("data-theme");
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Alterna entre claro e escuro e guarda a escolha neste navegador. */
export function ThemeToggle() {
  // Antes de montar no navegador não dá para saber o tema; o rótulo genérico evita divergência.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => setTheme(currentTheme()), []);

  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Sem acesso ao armazenamento (janela anônima, por exemplo): o tema vale só nesta visita.
    }
    setTheme(next);
  }

  const label = theme === "dark" ? pt.theme.toLight : pt.theme.toDark;

  return (
    <Button
      variant="secondary"
      aria-label={label}
      title={label}
      onClick={toggle}
      className="size-11 px-0"
    >
      {theme === "dark" ? <IconSun aria-hidden="true" /> : <IconMoon aria-hidden="true" />}
    </Button>
  );
}

"use client";

import { SegmentedControl, SegmentedControlItem } from "@adriansilvafuentes/ui";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content";

type Theme = "light" | "dark";

/**
 * Reaplica o tema guardado. Ao trocar de idioma, o Next monta um <html> novo, sem o data-theme
 * que o script do layout pôs na primeira carga; sem isso, o tema escolhido se perderia.
 */
function restoreSavedTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch {
    // Sem acesso ao armazenamento: segue o tema do sistema.
  }
}

/** O tema em uso: o escolhido pela pessoa ou, sem escolha, o do sistema. */
function currentTheme(): Theme {
  const chosen = document.documentElement.getAttribute("data-theme");
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Claro ou escuro, com o SegmentedControl do ali-ui (sm, só ícones, como na história "Com
 * ícones"). A escolha vale na hora e fica guardada neste navegador. Cada opção tem o nome
 * no aria-label, para o leitor de tela.
 */
export function ThemeToggle({ labels }: { labels: Dictionary["theme"] }) {
  // Antes de montar no navegador não dá para saber o tema: nenhuma opção marcada, sem divergência.
  const [theme, setTheme] = useState<Theme | "">("");

  useEffect(() => {
    restoreSavedTheme();
    setTheme(currentTheme());
  }, []);

  function choose(next: string) {
    if (next !== "light" && next !== "dark") return;
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Sem acesso ao armazenamento (janela anônima, por exemplo): o tema vale só nesta visita.
    }
    setTheme(next);
  }

  return (
    <SegmentedControl size="sm" aria-label={labels.label} value={theme} onValueChange={choose}>
      <SegmentedControlItem value="light" aria-label={labels.light} icon={<IconSun />} />
      <SegmentedControlItem value="dark" aria-label={labels.dark} icon={<IconMoon />} />
    </SegmentedControl>
  );
}

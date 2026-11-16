"use client";

import { useEffect } from "react";

/**
 * O cabeçalho fica fixo no topo e muda de altura conforme a tela (uma linha no computador,
 * duas no celular). Este componente mede o cabeçalho e guarda a altura em --header-height, que
 * a página usa como scroll-padding: ao pular para #contato ou #web-e-marca, o destino aparece
 * logo abaixo do cabeçalho, e não escondido atrás dele.
 */
export function HeaderOffset() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const root = document.documentElement;
    const update = () => root.style.setProperty("--header-height", `${header.offsetHeight}px`);
    update();
    // Ao abrir a página já com um destino (/pt/casos#web-e-marca), o navegador pula antes de a
    // altura existir; depois de medir, pula de novo, agora descontando o cabeçalho.
    const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return null;
}

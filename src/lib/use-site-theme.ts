"use client";

import { useEffect, useState } from "react";

/** O tema do site: o data-theme do <html> (escolha da pessoa) ou, sem ele, o do sistema. */
export function useSiteTheme(): "light" | "dark" {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const read = () => {
      const chosen = document.documentElement.getAttribute("data-theme");
      setTheme(chosen === "dark" || (chosen !== "light" && media.matches) ? "dark" : "light");
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    media.addEventListener("change", read);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", read);
    };
  }, []);
  return theme;
}

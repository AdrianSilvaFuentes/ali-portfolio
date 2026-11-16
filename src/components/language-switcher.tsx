"use client";

import { SegmentedControl, SegmentedControlItem } from "@adriansilvafuentes/ui";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  htmlLang,
  isLocale,
  type Locale,
  localeNames,
  locales,
  translatePath,
} from "@/i18n/config";

/** O tempo do deslize do SegmentedControl no ali-ui (duration-base). */
const SLIDE_MS = 200;

/**
 * Seletor PT · EN · ES, com o SegmentedControl do ali-ui (tamanho sm). Escolher um idioma leva
 * à mesma página nele (/pt/trabalho vira /en/work). Cada opção é lida no próprio idioma
 * ("EN, English"). Pelo teclado, Tab entra no idioma atual e as setas trocam de idioma.
 *
 * A página do outro idioma monta um cabeçalho novo. Para o fundo da opção deslizar como no
 * ali-ui, a escolha é marcada na hora e a troca de página espera o deslize (200ms). Para quem
 * pede menos movimento, a troca é imediata. As páginas dos outros idiomas ficam pré-carregadas.
 */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState<Locale>(current);

  useEffect(() => {
    setSelected(current);
    for (const locale of locales) {
      if (locale !== current) router.prefetch(translatePath(pathname, locale));
    }
  }, [current, pathname, router]);

  return (
    <SegmentedControl
      size="sm"
      aria-label={label}
      value={selected}
      onValueChange={(value) => {
        if (!isLocale(value) || value === current) return;
        setSelected(value);
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.setTimeout(
          () => router.push(translatePath(pathname, value)),
          reduceMotion ? 0 : SLIDE_MS,
        );
      }}
    >
      {locales.map((locale) => {
        const code = locale.toUpperCase();
        return (
          <SegmentedControlItem
            key={locale}
            value={locale}
            lang={htmlLang[locale]}
            aria-label={`${code}, ${localeNames[locale]}`}
          >
            {code}
          </SegmentedControlItem>
        );
      })}
    </SegmentedControl>
  );
}

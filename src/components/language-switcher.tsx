"use client";

import { SegmentedControl, SegmentedControlItem } from "@adriansilvafuentes/ui";
import { usePathname, useRouter } from "next/navigation";
import {
  htmlLang,
  isLocale,
  type Locale,
  localeNames,
  locales,
  translatePath,
} from "@/i18n/config";

/**
 * Seletor PT · EN · ES, com o SegmentedControl do ali-ui (tamanho sm). Escolher um idioma leva
 * à mesma página nele (/pt/trabalho vira /en/work). Cada opção é lida no próprio idioma
 * ("EN, English"). Pelo teclado, Tab entra no idioma atual e as setas trocam de idioma.
 */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SegmentedControl
      size="sm"
      aria-label={label}
      value={current}
      onValueChange={(value) => {
        if (isLocale(value) && value !== current) router.push(translatePath(pathname, value));
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

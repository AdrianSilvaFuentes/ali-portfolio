"use client";

import { Flag, Select, SelectItem } from "@adriansilvafuentes/ui";
import { BR, ES, US } from "country-flag-icons/react/3x2";
import { usePathname, useRouter } from "next/navigation";
import { type ReactElement, type SVGProps, useEffect } from "react";
import {
  htmlLang,
  isLocale,
  type Locale,
  localeNames,
  locales,
  translatePath,
} from "@/i18n/config";

/**
 * A bandeira de cada idioma, decidida pelo Adrián: português, Brasil; espanhol, Espanha;
 * inglês, EUA. Vai no `leading` da opção, como na história "Países" do Select do ali-ui, e
 * aparece também no gatilho depois de escolhida.
 */
const flags: Record<Locale, ReactElement<SVGProps<SVGSVGElement>>> = {
  pt: <BR />,
  es: <ES />,
  en: <US />,
};

/**
 * Seletor de idioma com o Select do ali-ui (tamanho sm). Escolher um idioma leva à mesma página
 * nele (/pt/casos vira /en/cases). Cada idioma aparece escrito nele mesmo. Pelo teclado, as
 * setas só andam pela lista: a troca acontece no Enter. As páginas nos outros idiomas ficam
 * pré-carregadas, para a troca ser rápida.
 */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    for (const locale of locales) {
      if (locale !== current) router.prefetch(translatePath(pathname, locale));
    }
  }, [current, pathname, router]);

  return (
    <Select
      size="sm"
      aria-label={label}
      value={current}
      onValueChange={(value) => {
        if (isLocale(value) && value !== current) router.push(translatePath(pathname, value));
      }}
    >
      {locales.map((locale) => (
        <SelectItem
          key={locale}
          value={locale}
          lang={htmlLang[locale]}
          leading={<Flag>{flags[locale]}</Flag>}
        >
          {localeNames[locale]}
        </SelectItem>
      ))}
    </Select>
  );
}

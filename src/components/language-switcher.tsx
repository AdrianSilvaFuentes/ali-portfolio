"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { htmlLang, type Locale, localeNames, locales, translatePath } from "@/i18n/config";

/**
 * Seletor PT · EN · ES. São links (trocar de idioma é navegar), que levam à mesma página
 * no outro idioma. O idioma atual fica preenchido e recebe aria-current. Cada link é lido
 * no próprio idioma ("EN, English") e tem 44px de área de toque.
 */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <ul aria-label={label} className="flex items-center">
      {locales.map((locale) => {
        const code = locale.toUpperCase();
        const active = locale === current;
        return (
          <li key={locale} className="-ml-px first:ml-0">
            <Link
              href={translatePath(pathname, locale)}
              hrefLang={htmlLang[locale]}
              lang={htmlLang[locale]}
              aria-label={`${code}, ${localeNames[locale]}`}
              aria-current={active ? "true" : undefined}
              className="relative inline-flex size-11 in-[li:first-child]:rounded-l-xl in-[li:last-child]:rounded-r-xl items-center justify-center border border-default font-mono text-label-sm text-default transition-interactive duration-fast outline-focus hover:bg-neutral-hovered focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 aria-[current=true]:border-transparent aria-[current=true]:bg-surface-inverse aria-[current=true]:text-inverse"
            >
              {code}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

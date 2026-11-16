import Link from "next/link";
import type { Dictionary } from "@/content";
import { type Locale, pagePath } from "@/i18n/config";
import { Container } from "./container";
import { HeaderOffset } from "./header-offset";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

/**
 * Cabeçalho. No celular: nome, idioma e tema na primeira linha, o menu inteiro na segunda.
 * A partir do md: nome à esquerda, menu, idioma e tema à direita, numa linha só.
 * A ordem no HTML (nome, menu, idioma, tema) é a do teclado e do leitor de tela.
 * Fica fixo no topo ao rolar, com o fundo surface para o conteúdo não aparecer por baixo.
 */
export function SiteHeader({ lang, t }: { lang: Locale; t: Dictionary }) {
  const links = [
    { href: pagePath(lang, "work"), label: t.nav.work },
    { href: pagePath(lang, "resume"), label: t.nav.resume },
    { href: "#contato", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-subtle bg-surface shadow-xs">
      <HeaderOffset />
      <Container className="flex flex-wrap items-center gap-x-7 gap-y-1 py-3">
        <Link
          href={pagePath(lang)}
          aria-label={t.site.name}
          className="mr-auto inline-flex min-h-11 items-center rounded-sm text-title-sm text-default outline-focus focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Logo className="h-10 w-auto" />
        </Link>
        <nav aria-label={t.nav.label} className="order-last w-full md:order-none md:w-auto">
          <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-7">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher current={lang} label={t.language.label} />
          <ThemeToggle labels={t.theme} />
        </div>
      </Container>
    </header>
  );
}

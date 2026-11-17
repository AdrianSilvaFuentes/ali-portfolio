import Link from "next/link";
import type { Dictionary } from "@/content";
import { type Locale, pagePath } from "@/i18n/config";
import { Container } from "./container";
import { HeaderOffset } from "./header-offset";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

/**
 * Cabeçalho. No celular: logo, idioma e o botão do menu numa linha; o menu abre abaixo, com as
 * páginas e o tema.
 * A partir do md: nome à esquerda, menu, idioma e tema à direita, numa linha só.
 * A ordem no HTML (nome, menu, idioma, tema) é a do teclado e do leitor de tela.
 * Fica fixo no topo ao rolar, como uma barra flutuante: o cabeçalho em si é transparente, e a
 * barra (cantos de 16px, rounded-2xl, com fundo surface, borda subtle e shadow-sm) fica afastada das bordas, com o
 * conteúdo passando por trás. O painel do menu do celular abre logo abaixo dela, também solto.
 */
export function SiteHeader({ lang, t }: { lang: Locale; t: Dictionary }) {
  const links = [
    { href: pagePath(lang, "work"), label: t.nav.work },
    { href: pagePath(lang, "resume"), label: t.nav.resume },
    { href: "#contato", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 pt-3 md:pt-4">
      <HeaderOffset />
      <Container>
        <div className="relative flex items-center gap-x-3 rounded-2xl border border-subtle bg-surface py-2 pr-2 pl-4 shadow-sm md:gap-x-7 md:pl-5">
          <Link
            href={pagePath(lang)}
            aria-label={t.site.name}
            className="mr-auto inline-flex min-h-11 items-center rounded-sm text-title-sm text-default outline-focus focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Logo className="h-9 w-auto" />
          </Link>
          <nav aria-label={t.nav.label} className="hidden md:block">
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
            {/* No celular, o tema vai para dentro do menu. */}
            <div className="hidden md:block">
              <ThemeToggle labels={t.theme} />
            </div>
          </div>
          <MobileMenu
            label={t.nav.label}
            openLabel={t.nav.openMenu}
            closeLabel={t.nav.closeMenu}
            links={links}
          >
            <ThemeToggle labels={t.theme} />
          </MobileMenu>
        </div>
      </Container>
    </header>
  );
}

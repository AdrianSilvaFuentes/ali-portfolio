import Link from "next/link";
import { pt } from "@/content/pt";
import { Container } from "./container";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/trabalho", label: pt.nav.work },
  { href: "/construido", label: pt.nav.built },
  { href: "/experiencia", label: pt.nav.resume },
  { href: "#contato", label: pt.nav.contact },
];

/**
 * Cabeçalho. No celular: nome e tema na primeira linha, o menu inteiro na segunda.
 * A partir do md: nome à esquerda, menu e tema à direita, numa linha só.
 * A ordem no HTML (nome, menu, tema) é a do teclado e do leitor de tela; só a visual muda.
 */
export function SiteHeader() {
  return (
    <header className="border-b border-subtle">
      <Container className="flex flex-wrap items-center gap-x-7 gap-y-1 py-3">
        <Link
          href="/"
          className="mr-auto inline-flex min-h-11 items-center rounded-sm text-title-sm text-default outline-focus focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {pt.site.name}
        </Link>
        <nav aria-label={pt.nav.label} className="order-last w-full md:order-none md:w-auto">
          <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-7">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </Container>
    </header>
  );
}

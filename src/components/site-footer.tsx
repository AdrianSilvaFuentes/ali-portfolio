import { Button } from "@adriansilvafuentes/ui";
import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import type { Dictionary } from "@/content";
import { Container } from "./container";
import { InverseThemeFooter } from "./inverse-theme";
import { Logo } from "./logo";

/** O ícone de cada perfil, à esquerda do texto do botão. */
const icons = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  behance: IconBrandBehance,
  cv: IconFileCv,
};

/** Link dentro da frase do rodapé: sublinhado e foco visível, no tamanho do texto ao redor. */
const inlineLinkClass =
  "rounded-sm underline underline-offset-4 outline-focus focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * Rodapé com o contato, no tema oposto ao da página (InverseThemeFooter): escuro no tema claro,
 * claro no escuro. Logo ASF (currentColor) e os perfis como Button ghost do ali-ui, com
 * o ícone à esquerda. É o destino do link "Contato" do menu (#contato). Sem telefone e sem e-mail
 * público: o contato é pelos perfis.
 */
export function SiteFooter({ t }: { t: Dictionary }) {
  return (
    <InverseThemeFooter id="contato" className="border-t border-subtle bg-surface text-default">
      <Container className="flex flex-col gap-10 pt-16 pb-10">
        <Logo aria-hidden className="h-9 w-auto self-start" />
        {/* Sem título visível: o h2 fica só para o leitor de tela, com o nome do link "Contato" do menu. */}
        <h2 className="sr-only">{t.nav.contact}</h2>
        {/* -ml-4 compensa o px-4 do Button md: o ícone do primeiro alinha com o logo e o título. */}
        <ul aria-label={t.footer.linksLabel} className="-ml-4 flex flex-wrap items-center gap-2">
          {t.footer.links.map((link) => {
            const Icon = icons[link.icon];
            return (
              <li key={link.label}>
                <Button size="md" variant="ghost" asChild iconLeft={<Icon />}>
                  <a href={link.href}>{link.label}</a>
                </Button>
              </li>
            );
          })}
        </ul>
        <p className="text-body-sm text-subtle">
          © 2026 {t.site.name} · {t.footer.madeWith.before}
          <a href={t.footer.madeWith.href} className={inlineLinkClass}>
            {t.footer.madeWith.label}
          </a>
        </p>
      </Container>
    </InverseThemeFooter>
  );
}

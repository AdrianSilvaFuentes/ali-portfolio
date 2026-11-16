import type { Dictionary } from "@/content";
import { Container } from "./container";

const linkClass =
  "inline-flex min-h-11 items-center rounded-sm text-body-lg text-inverse underline underline-offset-4 outline-focus focus-visible:outline-2 focus-visible:outline-offset-2";

/** Rodapé escuro com o contato. É o destino do link "Contato" do menu (#contato). Sem telefone. */
export function SiteFooter({ t }: { t: Dictionary }) {
  return (
    <footer id="contato" className="bg-surface-inverse text-inverse">
      <Container className="flex flex-col gap-10 pt-16 pb-10">
        <h2 className="text-title-md">{t.footer.title}</h2>
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-x-8">
          <p className="text-title-sm">{t.footer.email}</p>
          <ul aria-label={t.footer.linksLabel} className="flex flex-wrap items-center gap-x-6">
            {t.footer.links.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 items-center text-body-lg">
                    {link.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <p className="font-mono text-body-sm">
          © 2026 {t.site.name} · {t.footer.madeWith}
        </p>
      </Container>
    </footer>
  );
}

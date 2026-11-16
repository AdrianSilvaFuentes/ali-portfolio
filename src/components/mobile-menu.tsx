"use client";

import { Button, cn } from "@adriansilvafuentes/ui";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";
import { Container } from "./container";
import { NavLink } from "./nav-link";

/**
 * Menu do celular (abaixo do md). O botão é o Button do ali-ui, só com ícone (sm, w-8 px-0,
 * como na história "Só ícone"). Ao tocar, abre a lista de páginas por cima do conteúdo, logo
 * abaixo do cabeçalho. Fecha com o mesmo botão, com Esc (o foco volta ao botão) ou ao escolher
 * um item. Dentro dele também fica o tema, que não cabe na linha do celular. O painel é feito
 * aqui porque o ali-ui ainda não tem componente de menu que abre: está na lista de lacunas da
 * skill ali-ui-a-risca.
 */
export function MobileMenu({
  label,
  openLabel,
  closeLabel,
  links,
  children,
}: {
  label: string;
  openLabel: string;
  closeLabel: string;
  links: { href: string; label: string }[];
  /** O que mais vai dentro do menu, abaixo das páginas (no cabeçalho: o tema). */
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Mudou de página: fecha.
  useEffect(() => {
    if (pathname) setOpen(false);
  }, [pathname]);

  // Esc fecha e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <Button
        ref={buttonRef}
        size="sm"
        variant="secondary"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="w-8 px-0 md:hidden"
        iconLeft={open ? <IconX /> : <IconMenu2 />}
      />
      {/*
        O painel fica por cima do conteúdo, logo abaixo do cabeçalho (que é sticky, por isso o
        absolute se prende a ele). O movimento é o dos balões do ali-ui (animate-enter-exit):
        abre com fade e 4px de deslize em duration-base, ease-out; fecha em duration-fast,
        ease-in. Fechado, fica invisível: sai da ordem do teclado e do leitor de tela.
      */}
      <nav
        id={panelId}
        aria-label={label}
        className={cn(
          "absolute inset-x-0 top-full border-b border-subtle bg-surface shadow-overlay md:hidden",
          "transition-[opacity,translate,visibility] motion-reduce:transition-none",
          open
            ? "visible translate-y-0 opacity-100 duration-base ease-out"
            : "invisible -translate-y-1 opacity-0 duration-fast ease-in",
        )}
      >
        <Container className="flex flex-col py-2">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {children && <div className="border-t border-subtle py-3">{children}</div>}
        </Container>
      </nav>
    </>
  );
}

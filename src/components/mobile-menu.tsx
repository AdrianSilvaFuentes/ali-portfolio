"use client";

import { Button } from "@adriansilvafuentes/ui";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";
import { NavLink } from "./nav-link";

/**
 * Menu do celular (abaixo do md). O botão é o Button do ali-ui, só com ícone (sm, w-8 px-0,
 * como na história "Só ícone"). Ao tocar, abre a lista de páginas na largura toda, logo abaixo
 * da linha do cabeçalho. Fecha com o mesmo botão, com Esc (o foco volta ao botão) ou ao escolher
 * um item. Dentro dele também fica o tema, que não cabe na linha do celular. O painel é feito aqui porque o ali-ui ainda não tem componente de menu que abre: está
 * na lista de lacunas da skill ali-ui-a-risca.
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
      <nav
        id={panelId}
        aria-label={label}
        hidden={!open}
        className="order-last w-full border-t border-subtle pt-2 md:hidden"
      >
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
      </nav>
    </>
  );
}

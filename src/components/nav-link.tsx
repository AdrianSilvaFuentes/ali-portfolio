"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Link do menu. A página atual recebe aria-current="page" e fica sublinhada,
 * para não depender só de cor. Altura mínima de 44px para o toque.
 */
export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const current = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className="inline-flex min-h-11 items-center rounded-sm text-label-lg text-subtle underline-offset-4 transition-interactive duration-fast outline-focus hover:text-default focus-visible:outline-2 focus-visible:outline-offset-2 aria-[current=page]:text-default aria-[current=page]:underline"
    >
      {children}
    </Link>
  );
}

"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * Uma lista ordenada que ganha `data-in-view` na primeira vez que aparece na tela.
 * Os filhos animam com `group-data-in-view:` (a lista já tem a classe `group`).
 */
export function InViewList({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={ref} data-in-view={inView || undefined} className={`group ${className ?? ""}`}>
      {children}
    </ol>
  );
}

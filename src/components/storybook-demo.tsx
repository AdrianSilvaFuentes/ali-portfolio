"use client";

import { useEffect, useRef, useState } from "react";
import { useSiteTheme } from "@/lib/use-site-theme";

/** O painel da história "Showcase/Form" do Storybook: 1024 × 768, com 40 px de margem em volta. */
const PANEL = { width: 1024, height: 768, margin: 40 };
const STORY =
  "https://ali-ui-delta.vercel.app/iframe.html?id=showcase-form--inputs-and-selects&viewMode=story";

/**
 * O Ali Design System ao vivo: a história do Storybook num iframe, recortada no painel e
 * reduzida para caber na largura da coluna (a história tem tamanho fixo). Segue o tema do site.
 */
export function StorybookDemo({ title }: { title: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const theme = useSiteTheme();

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / PANEL.width));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frame}
      className="relative aspect-4/3 w-full max-w-5xl overflow-hidden rounded-2xl border border-subtle bg-surface-sunken"
    >
      {scale !== null && (
        <iframe
          key={theme}
          title={title}
          src={`${STORY}&globals=theme:${theme}`}
          loading="lazy"
          width={PANEL.width + PANEL.margin * 2}
          height={PANEL.height + PANEL.margin * 2}
          className="absolute top-0 left-0 origin-top-left border-0"
          style={{
            transform: `scale(${scale}) translate(-${PANEL.margin}px, -${PANEL.margin}px)`,
          }}
        />
      )}
    </div>
  );
}

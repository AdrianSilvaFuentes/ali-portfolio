import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/content";
import { htmlLang, isLocale, locales } from "@/i18n/config";
import { alternates } from "@/i18n/metadata";
import "../globals.css";

/** Gera o site inteiro para cada idioma na hora do build. Outros idiomas dão 404. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL("https://adriansilvafuentes.vercel.app"),
    title: t.site.title,
    description: t.site.description,
    alternates: alternates(lang),
  };
}

/*
 * Aplica o tema salvo antes da primeira pintura, para a página não piscar no tema errado.
 * Sem escolha salva, nada é aplicado e os tokens seguem o tema do sistema.
 */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]"> & { children: ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    // data-theme muda no navegador antes do React assumir; suppressHydrationWarning evita o aviso.
    <html lang={htmlLang[lang]} data-brand="yellow" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: script fixo, escrito aqui, sem dados de fora. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteHeader lang={lang} t={t} />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter t={t} />
      </body>
    </html>
  );
}

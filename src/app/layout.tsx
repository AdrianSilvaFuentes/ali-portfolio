import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pt } from "@/content/pt";
import "./globals.css";

export const metadata: Metadata = {
  title: pt.site.title,
  description: pt.site.description,
};

/*
 * Aplica o tema salvo antes da primeira pintura, para a página não piscar no tema errado.
 * Sem escolha salva, nada é aplicado e os tokens seguem o tema do sistema.
 */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // data-theme muda no navegador antes do React assumir; suppressHydrationWarning evita o aviso.
    <html lang="pt-BR" data-brand="yellow" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: script fixo, escrito aqui, sem dados de fora. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

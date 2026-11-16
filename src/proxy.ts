import { type NextRequest, NextResponse } from "next/server";
import { isLocale, pickLocale } from "@/i18n/config";

/**
 * Endereços sem idioma (como "/" ou "/casos") vão para o idioma do navegador:
 * português, espanhol ou, para todos os outros, inglês.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (isLocale(first)) return;

  const lang = pickLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Não passa por aqui: arquivos internos do Next.js e arquivos com extensão (ícone, imagens).
  matcher: ["/((?!_next|.*\\..*).*)"],
};

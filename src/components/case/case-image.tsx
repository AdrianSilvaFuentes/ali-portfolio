import fs from "node:fs";
import path from "node:path";
import { cn } from "@adriansilvafuentes/ui";
import Image from "next/image";
import type { CaseImage as CaseImageData } from "@/content/pt";
import { Placeholder } from "../placeholder";

const extensions = [".webp", ".png", ".jpg"];

/** Procura a imagem em public/ (.webp, .png ou .jpg), na hora do build. */
function findFile(src: string): string | null {
  for (const ext of extensions) {
    if (fs.existsSync(path.join(process.cwd(), "public", `${src}${ext}`))) return `${src}${ext}`;
  }
  return null;
}

/**
 * Uma imagem de caso. Se o arquivo ainda não existir em public/, mostra uma área reservada
 * do mesmo tamanho, com o tamanho escrito e o texto alternativo para o leitor de tela,
 * sem quebrar o build.
 */
export function CaseImage({
  image,
  label,
  reserved,
  sizes,
  preload,
  hideIfMissing,
  className,
}: {
  image: CaseImageData;
  /** "Imagem", no idioma da página, para a área reservada. */
  label: string;
  /** "Espaço reservado", no idioma da página. */
  reserved: string;
  sizes: string;
  preload?: boolean;
  /** Sem o arquivo, não mostra nada (em vez da área reservada). */
  hideIfMissing?: boolean;
  className?: string;
}) {
  const file = findFile(image.src);
  if (!file) {
    if (hideIfMissing) return null;
    return (
      <Placeholder
        label={`${label} · ${image.width} × ${image.height}`}
        reservedLabel={reserved}
        description={image.alt}
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
        className={cn("w-full", className)}
      />
    );
  }
  return (
    <Image
      src={file}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      preload={preload}
      className={cn("h-auto w-full rounded-md", className)}
    />
  );
}

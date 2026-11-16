import { Tag } from "@adriansilvafuentes/ui";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type CaseKey, casePath, type Locale } from "@/i18n/config";
import { CaseImage } from "./case/case-image";
import { Placeholder } from "./placeholder";

type CaseText = Dictionary["work"]["cases"][CaseKey];

/**
 * O card de um caso de produto, usado na Home e na página Trabalho: imagem 16:10, empresa,
 * ano e papel, tags de disciplina, título e resumo. O link fica no título e cobre o card
 * inteiro (after:inset-0), para o leitor de tela ouvir só o título. Com `readCase`, mostra
 * também "Ler o caso" no fim, que é só visual (o card inteiro já é o link).
 */
export function CaseCard({
  lang,
  caseKey,
  t,
  imageLabel,
  readCase,
}: {
  lang: Locale;
  caseKey: CaseKey;
  t: CaseText;
  imageLabel: string;
  readCase?: string;
}) {
  return (
    <article className="group relative flex h-full flex-col gap-3 rounded-md outline-focus outline-offset-4 has-focus-visible:outline-2">
      {t.cardImage ? (
        <CaseImage
          image={t.cardImage}
          label={imageLabel}
          reserved={imageLabel}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      ) : (
        <Placeholder label={imageLabel} className="aspect-16/10" />
      )}
      <p className="font-mono text-body-xs text-subtle">
        {t.company} · {t.years} · {t.role}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {t.tags.map((tag) => (
          <li key={tag}>
            <Tag color="gray" size="sm">
              {tag}
            </Tag>
          </li>
        ))}
      </ul>
      <h3 className="text-title-sm">
        <Link
          href={casePath(lang, caseKey)}
          className="underline-offset-4 outline-none group-hover:underline after:absolute after:inset-0"
        >
          {t.title}
        </Link>
      </h3>
      <p className="text-body-md text-subtle">{t.summary}</p>
      {readCase && (
        <span
          aria-hidden
          className="mt-auto inline-flex min-h-11 items-center gap-1 text-body-md underline underline-offset-4"
        >
          {readCase}
          <IconArrowRight className="size-4" />
        </span>
      )}
    </article>
  );
}

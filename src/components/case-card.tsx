import { Button } from "@adriansilvafuentes/ui";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type CaseKey, casePath, type Locale } from "@/i18n/config";
import { CaseImage } from "./case/case-image";
import { Placeholder } from "./placeholder";

type CaseText = Dictionary["work"]["cases"][CaseKey];

/**
 * O card de um caso de produto, usado na Home e na página de casos: imagem 16:10, empresa,
 * ano e papel, título, resumo e o botão "Ver caso". Só o botão é link; o card em si não é
 * clicável. O botão também é descrito pelo título (aria-describedby), para o leitor de tela
 * saber de qual caso é cada "Ver caso".
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
  readCase: string;
}) {
  const titleId = `caso-${caseKey}-titulo`;
  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-subtle bg-surface p-4 shadow-sm">
      {t.cardImage ? (
        <CaseImage
          image={t.cardImage}
          label={imageLabel}
          reserved={imageLabel}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="rounded-xl border border-subtle"
        />
      ) : (
        <Placeholder label={imageLabel} className="aspect-16/10 rounded-xl" />
      )}
      <p className="text-label-md text-subtle">
        {t.company} · {t.years} · {t.role}
      </p>
      <h3 id={titleId} className="text-title-sm">
        {t.title}
      </h3>
      {/* Com o caso pronto, o resumo é o texto do Resultado de dentro do caso. */}
      <p className="text-body-md text-subtle">{t.study?.result.lead ?? t.summary}</p>
      <Button
        asChild
        size="sm"
        variant="secondary"
        iconRight={<IconArrowRight />}
        className="mt-auto self-start"
      >
        <Link href={casePath(lang, caseKey)} aria-describedby={titleId}>
          {readCase}
        </Link>
      </Button>
    </article>
  );
}

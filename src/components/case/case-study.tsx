import { Button, Tag } from "@adriansilvafuentes/ui";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Dictionary } from "@/content";
import { type CaseKey, caseKeys, casePath, type Locale, pagePath } from "@/i18n/config";
import { Container } from "../container";
import { Eyebrow, HomeSection, textLinkClass } from "../home/section";
import { Placeholder } from "../placeholder";

type Template = Dictionary["work"]["caseTemplate"];

/**
 * A página de um caso, na ordem do wireframe: cabeçalho, 01 O problema, 02 O que aprendi,
 * 03 A decisão, 04 O que construí, 05 O resultado e o próximo caso. Enquanto o conteúdo
 * real não chega, as seções usam o modelo comum (caseTemplate), com o texto entre colchetes.
 */
export function CaseStudy({ lang, caseKey, t }: { lang: Locale; caseKey: CaseKey; t: Dictionary }) {
  const item = t.work.cases[caseKey];
  const tpl = t.work.caseTemplate;
  const reserved = t.home.reserved;

  return (
    <>
      <Header lang={lang} item={item} tpl={tpl} reserved={reserved} />
      <Problem tpl={tpl} />
      <Learned tpl={tpl} reserved={reserved} />
      <Decision tpl={tpl} />
      <Built tpl={tpl} reserved={reserved} />
      <Result tpl={tpl} />
      <NextCase lang={lang} caseKey={caseKey} t={t} />
    </>
  );
}

function Header({
  lang,
  item,
  tpl,
  reserved,
}: {
  lang: Locale;
  item: Dictionary["work"]["cases"][CaseKey];
  tpl: Template;
  reserved: string;
}) {
  const meta = [
    { label: tpl.meta.result, value: item.result, strong: true },
    { label: tpl.meta.role, value: tpl.meta.roleValue },
    { label: tpl.meta.duration, value: tpl.meta.durationValue },
    { label: tpl.meta.tools, value: tpl.meta.toolsValue },
  ];

  return (
    <section aria-labelledby="caso-titulo">
      <Container className="flex flex-col gap-6 py-10 md:py-14">
        <Link href={pagePath(lang, "work")} className={`${textLinkClass} self-start`}>
          <IconArrowLeft aria-hidden className="size-4" />
          {tpl.back}
        </Link>
        <Eyebrow>
          {item.company} · {item.years} · {item.role}
        </Eyebrow>
        <ul className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <li key={tag}>
              <Tag color="gray" size="sm">
                {tag}
              </Tag>
            </li>
          ))}
        </ul>
        <h1 id="caso-titulo" className="max-w-4xl text-title-lg">
          {item.title}
        </h1>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t-2 border-default pt-4 lg:grid-cols-4">
          {meta.map((entry) => (
            <div key={entry.label} className="flex flex-col gap-1">
              <dt className="font-mono text-body-xs text-subtle">{entry.label}</dt>
              <dd className={entry.strong ? "text-title-sm" : "text-body-md"}>{entry.value}</dd>
            </div>
          ))}
        </dl>
        <Placeholder label={tpl.mainImage} reservedLabel={reserved} className="aspect-16/9" />
      </Container>
    </section>
  );
}

/** Número pequeno e título de cada seção (01 O problema...). */
export function SectionTitle({
  id,
  number,
  children,
}: {
  id: string;
  number: number;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span aria-hidden className="font-mono text-body-xs text-subtle">
        {String(number).padStart(2, "0")}
      </span>
      <h2 id={id} className="text-title-md">
        {children}
      </h2>
    </div>
  );
}

function Problem({ tpl }: { tpl: Template }) {
  return (
    <HomeSection id="problema" className="grid gap-6 lg:grid-cols-5 lg:gap-14">
      <div className="lg:col-span-2">
        <SectionTitle id="problema" number={1}>
          {tpl.problem.title}
        </SectionTitle>
      </div>
      <div className="flex flex-col gap-5 lg:col-span-3">
        <p className="text-body-lg">{tpl.problem.text}</p>
        <blockquote className="border-l-2 border-default pl-4 text-title-sm">
          “{tpl.problem.quote}”
        </blockquote>
      </div>
    </HomeSection>
  );
}

function Learned({ tpl, reserved }: { tpl: Template; reserved: string }) {
  return (
    <HomeSection id="aprendizados" sunken className="grid gap-6 lg:grid-cols-3 lg:gap-14">
      <SectionTitle id="aprendizados" number={2}>
        {tpl.learned.title}
      </SectionTitle>
      <div className="flex flex-col gap-4 lg:col-span-2">
        <ul className="grid gap-3 sm:grid-cols-3">
          {tpl.learned.findings.map((finding) => (
            <li
              key={finding.label}
              className="flex flex-col gap-2 rounded-md border border-subtle bg-surface-raised p-4"
            >
              <h3 className="font-mono text-body-xs text-subtle">{finding.label}</h3>
              <p className="text-body-md">{finding.text}</p>
            </li>
          ))}
        </ul>
        <Placeholder label={tpl.learned.image} reservedLabel={reserved} className="aspect-16/7" />
      </div>
    </HomeSection>
  );
}

function Decision({ tpl }: { tpl: Template }) {
  const d = tpl.decision;
  return (
    <HomeSection id="decisao" className="grid gap-6 lg:grid-cols-5 lg:gap-14">
      <div className="lg:col-span-2">
        <SectionTitle id="decisao" number={3}>
          {d.title}
        </SectionTitle>
      </div>
      <div className="flex flex-col gap-5 lg:col-span-3">
        <p className="text-body-lg">{d.text}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-1 rounded-md border border-default p-4">
            <h3 className="font-mono text-body-xs text-subtle">{d.chose.label}</h3>
            <p className="text-body-md">{d.chose.text}</p>
          </div>
          <div className="flex flex-col gap-1 rounded-md border border-subtle p-4">
            <h3 className="font-mono text-body-xs text-subtle">{d.discarded.label}</h3>
            <p className="text-body-md text-subtle">{d.discarded.text}</p>
          </div>
        </div>
        <p className="text-body-sm text-subtle">
          {d.metricLabel} <strong className="font-semibold text-default">{d.metric}</strong>
        </p>
      </div>
    </HomeSection>
  );
}

function Built({ tpl, reserved }: { tpl: Template; reserved: string }) {
  return (
    <HomeSection id="construido" sunken className="flex flex-col gap-8">
      <SectionTitle id="construido" number={4}>
        {tpl.built.title}
      </SectionTitle>
      <div className="grid gap-6 md:grid-cols-2 md:gap-5">
        {tpl.built.items.map((item) => (
          <figure key={item.image} className="flex flex-col gap-3">
            <Placeholder label={item.image} reservedLabel={reserved} className="aspect-16/10" />
            <figcaption className="text-body-sm text-subtle">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </HomeSection>
  );
}

function Result({ tpl }: { tpl: Template }) {
  const r = tpl.result;
  return (
    <HomeSection id="resultado" className="flex flex-col gap-8">
      <SectionTitle id="resultado" number={5}>
        {r.title}
      </SectionTitle>
      <div className="grid gap-8 md:grid-cols-3 md:gap-5">
        {r.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-2 border-t-2 border-default pt-4">
            <p className="text-display">{metric.value}</p>
            <p className="text-body-sm text-subtle">{metric.label}</p>
          </div>
        ))}
        <figure className="flex flex-col gap-2 border-t-2 border-default pt-4">
          <blockquote className="text-title-sm">{r.quote}</blockquote>
          <figcaption className="text-body-sm text-subtle">{r.quoteAuthor}</figcaption>
        </figure>
      </div>
      {/* A cor da marca é só fundo, sem borda; o texto continua na cor padrão. */}
      <aside className="flex max-w-2xl flex-col gap-1 rounded-md bg-primary-subtle p-5">
        <h3 className="font-mono text-body-xs">{r.differentLabel}</h3>
        <p className="text-body-md">{r.different}</p>
      </aside>
    </HomeSection>
  );
}

/** O próximo caso, na ordem de src/i18n/config.ts. Depois do último, volta ao primeiro. */
export function NextCase({ lang, caseKey, t }: { lang: Locale; caseKey: CaseKey; t: Dictionary }) {
  const index = caseKeys.indexOf(caseKey);
  const nextKey = caseKeys[(index + 1) % caseKeys.length] ?? caseKey;
  const next = t.work.cases[nextKey];

  return (
    <HomeSection
      id="proximo-caso"
      sunken
      className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
    >
      <div className="flex flex-col gap-2">
        <Eyebrow as="h2" id="proximo-caso">
          {t.work.caseTemplate.next}
        </Eyebrow>
        <p className="text-title-lg">{next.title}</p>
      </div>
      <Button size="sm" asChild className="self-start md:self-auto">
        <Link href={casePath(lang, nextKey)}>
          {t.work.product.readCase}
          <IconArrowRight aria-hidden className="size-4" />
        </Link>
      </Button>
    </HomeSection>
  );
}

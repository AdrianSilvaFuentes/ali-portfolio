import { Button, Tag } from "@adriansilvafuentes/ui";
import { IconArrowDown, IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Dictionary } from "@/content";
import type { CaseStudyContent } from "@/content/pt";
import { type CaseKey, type Locale, pagePath } from "@/i18n/config";
import { Container } from "../container";
import { Eyebrow, HomeSection, textLinkClass } from "../home/section";
import { StorybookDemo } from "../storybook-demo";
import { CaseImage } from "./case-image";
import { NextCase, SectionTitle } from "./case-study";

/**
 * A página de um caso com conteúdo real, no molde de todo caso: cabeçalho (com Resultado,
 * Skills, Método e Ferramentas), 01 Problema, 02 Metodologia, 03 Análise, 04 Decisão,
 * 05 Entrega, 06 Resultado e o próximo caso. Os textos vêm de `study`, no arquivo de conteúdo.
 */
export function CaseFull({
  lang,
  caseKey,
  t,
  study,
}: {
  lang: Locale;
  caseKey: CaseKey;
  t: Dictionary;
  study: CaseStudyContent;
}) {
  const item = t.work.cases[caseKey];
  const labels = t.work.caseStudy;
  const img = { label: labels.image, reserved: t.home.reserved };

  return (
    <>
      <section aria-labelledby="caso-titulo">
        <Container className="flex flex-col gap-6 py-10 md:py-14">
          <Link href={pagePath(lang, "work")} className={`${textLinkClass} self-start`}>
            <IconArrowLeft aria-hidden className="size-4" />
            {t.work.caseTemplate.back}
          </Link>
          <Eyebrow>
            {item.company} · {item.years} · {item.role}
          </Eyebrow>
          <TagList tags={item.tags} />
          <h1 id="caso-titulo" className="max-w-4xl text-title-lg">
            {item.title}
          </h1>
          <dl className="grid gap-x-6 gap-y-5 border-t-2 border-default pt-4 sm:grid-cols-2 lg:grid-cols-4">
            <Meta label={labels.meta.result}>
              <span className="text-title-sm">{item.result}</span>
            </Meta>
            <Meta label={labels.meta.skills}>
              <TagList tags={study.skills} />
            </Meta>
            <Meta label={labels.meta.method}>
              <TagList tags={study.method} />
            </Meta>
            <Meta label={labels.meta.tools}>
              <TagList tags={study.tools} />
            </Meta>
          </dl>
          <CaseImage
            image={study.cover}
            {...img}
            sizes="(min-width: 1280px) 1168px, 100vw"
            preload
          />
        </Container>
      </section>

      <Section id="problema" number={1} title={labels.sections.problem}>
        {study.problem.paragraphs.map((paragraph) => (
          <p key={paragraph} className="max-w-2xl text-body-lg">
            {paragraph}
          </p>
        ))}
        {study.problem.points && (
          <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-body-md">
            {study.problem.points.map((point) => (
              <li key={point.label}>
                <strong className="font-medium">{point.label}:</strong> {point.text}
              </li>
            ))}
          </ul>
        )}
        {study.problem.goal && (
          <div className="rounded-md border border-subtle bg-surface-raised p-5">
            <CardText card={study.problem.goal} />
          </div>
        )}
        <CardGrid cards={study.problem.cards} />
      </Section>

      <Section id="metodologia" number={2} title={labels.sections.method} sunken>
        <p className="max-w-2xl text-body-lg">{study.methodology.lead}</p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {study.methodology.cards.map((card) => (
            <li
              key={card.label}
              className="flex flex-col overflow-hidden rounded-md border border-subtle bg-surface-raised"
            >
              <CaseImage
                image={card.image}
                {...img}
                sizes="(min-width: 1024px) 394px, 100vw"
                hideIfMissing
                className="rounded-none"
              />
              <CardText card={card} className="p-5" />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="analise" number={3} title={labels.sections.analysis}>
        <p className="max-w-2xl text-body-lg">{study.analysis.lead}</p>
        <AnalysisTable analysis={study.analysis} />
        <Flow flow={study.analysis.flow} />
        <h3 className="text-title-sm">{study.analysis.crossTitle}</h3>
        <ol className="grid gap-5 sm:grid-cols-2">
          {study.analysis.crossings.map((crossing, index) => (
            <li
              key={crossing.title}
              className="flex flex-col gap-1.5 border-t-2 border-default pt-3"
            >
              <span aria-hidden className="font-mono text-body-xs text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-label-lg">{crossing.title}</span>
              <span className="text-body-sm text-subtle">{crossing.text}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="decisao" number={4} title={labels.sections.decision} sunken>
        <p className="max-w-2xl text-body-lg">{study.decision.lead}</p>
        {study.decision.chart && <Chart chart={study.decision.chart} />}
        <CardGrid cards={study.decision.cards} />
      </Section>

      <Section id="entrega" number={5} title={labels.sections.delivery}>
        <p className="max-w-2xl text-body-lg">{study.delivery.lead}</p>
        <ul
          className={
            study.delivery.items.length > 1 ? "grid gap-6 sm:grid-cols-3 sm:gap-4" : "max-w-3xl"
          }
        >
          {study.delivery.items.map((item) => (
            <li key={item.image.src}>
              <figure className="flex flex-col gap-2">
                {item.demo ? (
                  <StorybookDemo title={item.demo} />
                ) : (
                  <CaseImage
                    image={item.image}
                    {...img}
                    sizes={
                      study.delivery.items.length > 1
                        ? "(min-width: 640px) 256px, 100vw"
                        : "(min-width: 1024px) 804px, 100vw"
                    }
                  />
                )}
                <figcaption className="text-body-sm text-subtle">{item.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        {study.delivery.links && (
          <div className="flex flex-wrap gap-3">
            {study.delivery.links.map((link, index) => (
              <Button
                key={link.href}
                size="sm"
                variant={index === 0 ? "primary" : "secondary"}
                asChild
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </div>
        )}
      </Section>

      <Section id="resultado" number={6} title={labels.sections.result} sunken>
        <p className="max-w-2xl text-body-lg">{study.result.lead}</p>
        <ul className="grid gap-6 sm:grid-cols-3 sm:gap-4">
          {study.result.metrics.map((metric) => (
            <li key={metric.label} className="flex flex-col gap-1.5 border-t-2 border-default pt-3">
              <span className="text-display">{metric.value}</span>
              <span className="text-body-sm text-subtle">{metric.label}</span>
            </li>
          ))}
        </ul>
        {study.result.note && (
          <p className="max-w-2xl text-body-sm text-subtle">{study.result.note}</p>
        )}
        {study.result.image && (
          <CaseImage
            image={study.result.image}
            {...img}
            sizes="(min-width: 1024px) 804px, 100vw"
            className="max-w-3xl"
          />
        )}
      </Section>

      <NextCase lang={lang} caseKey={caseKey} t={t} />
    </>
  );
}

/** Uma seção numerada: número e título à esquerda, conteúdo à direita a partir do lg. */
function Section({
  id,
  number,
  title,
  sunken = false,
  children,
}: {
  id: string;
  number: number;
  title: string;
  sunken?: boolean;
  children: ReactNode;
}) {
  return (
    <HomeSection id={id} sunken={sunken} className="grid gap-6 lg:grid-cols-4 lg:gap-14">
      <SectionTitle id={id} number={number}>
        {title}
      </SectionTitle>
      <div className="flex min-w-0 flex-col gap-6 lg:col-span-3">{children}</div>
    </HomeSection>
  );
}

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <dt className="font-mono text-body-xs text-subtle">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag color="gray" size="sm">
            {tag}
          </Tag>
        </li>
      ))}
    </ul>
  );
}

type Card = { label: string; title: string; note?: string };

/** Rótulo pequeno, título e, se houver, a nota em letra pequena. */
function CardText({ card, className }: { card: Card; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <h3 className="font-mono text-body-xs text-subtle">{card.label}</h3>
      <p className="text-body-md">{card.title}</p>
      {card.note && <p className="font-mono text-body-xs text-subtle">{card.note}</p>}
    </div>
  );
}

function CardGrid({ cards }: { cards: Card[] }) {
  // Com 4 cards, duas colunas (2 × 2); com 3, três colunas.
  return (
    <ul className={`grid gap-4 ${cards.length === 4 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
      {cards.map((card) => (
        <li key={card.label} className="rounded-md border border-subtle bg-surface-raised p-5">
          <CardText card={card} />
        </li>
      ))}
    </ul>
  );
}

/**
 * O diagrama da análise, em texto de verdade (não imagem): o leitor de tela lê as etapas;
 * as setas são decorativas. "merge": várias entradas levam a uma decisão. "chain": uma
 * sequência de etapas, a última em destaque. No celular, vira uma coluna.
 */
function Flow({ flow }: { flow: CaseStudyContent["analysis"]["flow"] }) {
  const arrow = (
    <span aria-hidden className="flex shrink-0 justify-center text-icon-default">
      <IconArrowDown className="size-6 md:hidden" />
      <IconArrowRight className="hidden size-6 md:block" />
    </span>
  );
  // O amarelo é só fundo; o texto continua na cor padrão.
  const highlight = "rounded-sm border border-default bg-primary-subtle px-5 py-4";

  if (flow.kind === "chips") {
    return (
      <figure aria-label={flow.label} className="flex flex-col gap-3">
        <figcaption className="font-mono text-body-xs text-subtle">{flow.title}</figcaption>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <ol className="flex flex-wrap items-center gap-2">
            {flow.chips.map((chip, index) => (
              <li key={chip} className="flex items-center gap-2">
                {index > 0 && <IconArrowRight aria-hidden className="size-4 text-icon-subtle" />}
                <Tag color="gray" size="sm">
                  {chip}
                </Tag>
              </li>
            ))}
          </ol>
          <span className="text-body-sm text-subtle">{flow.caption}</span>
        </div>
      </figure>
    );
  }

  if (flow.kind === "chain") {
    return (
      <figure aria-label={flow.label}>
        <ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          {flow.steps.map((step, index) => (
            <li key={step.title} className="contents">
              {index > 0 && arrow}
              <p
                className={`flex flex-col gap-1 md:flex-1 ${index === flow.steps.length - 1 ? highlight : "rounded-sm border border-default bg-surface-raised px-4 py-3"}`}
              >
                <span className="font-mono text-body-sm">{step.title}</span>
                <span className="font-mono text-body-xs text-subtle">{step.note}</span>
              </p>
            </li>
          ))}
        </ol>
      </figure>
    );
  }

  return (
    <figure
      aria-label={flow.label}
      className="flex flex-col items-stretch gap-3 md:flex-row md:items-center"
    >
      <ul className="flex flex-col gap-2 md:flex-1">
        {flow.inputs.map((input) => (
          <li
            key={input}
            className="rounded-sm border border-default bg-surface-raised px-4 py-2.5 font-mono text-body-xs"
          >
            {input}
          </li>
        ))}
      </ul>
      {arrow}
      <p className={`flex flex-col gap-1 md:flex-1 ${highlight}`}>
        <span className="text-label-lg">{flow.decisionLabel}</span>
        <span className="font-mono text-body-sm">{flow.decision}</span>
      </p>
    </figure>
  );
}

/**
 * A tabela da análise. Com `columns`, mostra o cabeçalho a partir do md; no celular, cada
 * célula leva o próprio rótulo, para não precisar rolar para o lado.
 */
function AnalysisTable({ analysis }: { analysis: CaseStudyContent["analysis"] }) {
  const columns = analysis.columns;
  // Tabela com cabeçalho e sem citações (ex.: Camada | Exemplo | Papel): o dado em código vem
  // na coluna do meio e o texto na última.
  const dataFirst = Boolean(columns) && analysis.rows.every((row) => !row.quote);
  const cell = (index: number) =>
    columns && (
      <span className="font-mono text-body-xs text-subtle md:sr-only">{columns[index]}</span>
    );

  return (
    <div>
      {columns && (
        <div
          aria-hidden
          className="hidden gap-6 pb-3 font-mono text-body-xs text-subtle md:grid md:grid-cols-[1fr_1fr_1.4fr]"
        >
          {columns.map((column) => (
            <span key={column}>{column}</span>
          ))}
        </div>
      )}
      <ul className="border-b border-subtle">
        {analysis.rows.map((row, index) => (
          <li
            key={row.title}
            className={`grid gap-3 border-t py-4 md:gap-6 ${columns ? "md:grid-cols-[1fr_1fr_1.4fr]" : "md:grid-cols-[1fr_2fr_2fr]"} ${index === 0 ? "border-default" : "border-subtle"}`}
          >
            <div className="flex flex-col gap-1">
              {cell(0)}
              <h3 className="text-label-lg">{row.title}</h3>
            </div>
            <div className="flex flex-col gap-1.5">
              {cell(1)}
              {dataFirst ? (
                <p className="font-mono text-body-xs">{row.data}</p>
              ) : (
                <p className="text-body-sm text-subtle">{row.text}</p>
              )}
              {row.quote && <p className="font-mono text-body-xs">{row.data}</p>}
            </div>
            <div className="flex flex-col gap-1">
              {cell(2)}
              {dataFirst ? (
                <p className="text-body-sm text-subtle">{row.text}</p>
              ) : row.quote ? (
                <blockquote className="text-body-md italic">
                  “{row.quote}”
                  {row.source && <span className="not-italic text-subtle"> ({row.source})</span>}
                </blockquote>
              ) : (
                <p className="font-mono text-body-xs">{row.data}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * As barras da preferência entre layouts. O número aparece escrito ao lado de cada barra,
 * então a cor e o comprimento nunca são a única informação.
 */
function Chart({ chart }: { chart: NonNullable<CaseStudyContent["decision"]["chart"]> }) {
  return (
    <figure className="flex max-w-2xl flex-col gap-3">
      <figcaption className="font-mono text-body-xs text-subtle">{chart.label}</figcaption>
      <ul className="flex flex-col gap-3">
        {chart.options.map((option, index) => (
          <li key={option.letter} className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="w-5 font-mono text-body-sm font-medium">{option.letter}</span>
              <div aria-hidden className="h-7 flex-1 bg-neutral-subtle">
                <div
                  className={`h-7 border border-default ${index === 0 ? "bg-primary-subtle" : "bg-[var(--ali-color-border-default)]"}`}
                  style={{ width: `${option.value}%` }}
                />
              </div>
              <span className="w-11 text-right font-mono text-body-sm">{option.value}%</span>
            </div>
            <span className="pl-8 text-body-sm text-subtle">{option.caption}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

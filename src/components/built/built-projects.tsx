import { Button } from "@adriansilvafuentes/ui";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import type { Dictionary } from "@/content";
import siteShot from "../../../public/images/construido-site.webp";
import storybookShot from "../../../public/images/construido-storybook.webp";
import { Eyebrow, HomeSection, textLinkClass } from "../home/section";
import { Placeholder } from "../placeholder";

type Built = Dictionary["built"];

/** Moldura das capturas: borda fina e canto pequeno, para a imagem não se perder no fundo. */
const shotClass = "h-auto w-full rounded-md border border-subtle";

/**
 * A página Construído: o ali-ui em destaque, depois este site e, só quando houver itens,
 * os experimentos. As capturas são reais: o Storybook do ali-ui e a primeira tela do site.
 */
export function BuiltProjects({ t }: { t: Built }) {
  return (
    <>
      <AliUi t={t.aliUi} />
      <ThisSite t={t.site} />
      {t.experiments.items.length > 0 && <Experiments t={t.experiments} />}
    </>
  );
}

function AliUi({ t }: { t: Built["aliUi"] }) {
  return (
    <HomeSection id="ali-ui" sunken className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="flex flex-col gap-5">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 id="ali-ui" className="text-display">
          {t.title}
        </h2>
        <p className="max-w-lg text-body-lg">{t.lead}</p>
        <dl className="border-b border-default">
          {t.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 border-t border-default py-3">
              <dt className="font-mono text-body-xs text-subtle">{fact.label}</dt>
              <dd className="text-body-md">{fact.text}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={t.storybook.href}>{t.storybook.label}</a>
          </Button>
          <Button asChild variant="secondary">
            <a href={t.github.href}>{t.github.label}</a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Image
          src={storybookShot}
          alt={t.imageAlt}
          sizes="(min-width: 1024px) 600px, 100vw"
          className={shotClass}
        />
        <ul aria-hidden className="grid grid-cols-3 gap-3">
          {t.thumbnails.map((label) => (
            <li key={label}>
              <Placeholder label={label} className="aspect-4/3 p-2" />
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  );
}

function ThisSite({ t }: { t: Built["site"] }) {
  return (
    <HomeSection id="este-site" className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div className="flex flex-col gap-4">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 id="este-site" className="text-title-lg">
          {t.title}
        </h2>
        <p className="max-w-lg text-body-lg text-subtle">{t.lead}</p>
        <a href={t.code.href} className={`${textLinkClass} self-start`}>
          {t.code.label}
          <IconArrowRight aria-hidden className="size-4" />
        </a>
      </div>
      <Image
        src={siteShot}
        alt={t.imageAlt}
        sizes="(min-width: 1024px) 600px, 100vw"
        className={shotClass}
      />
    </HomeSection>
  );
}

function Experiments({ t }: { t: Built["experiments"] }) {
  return (
    <HomeSection id="experimentos" sunken className="flex flex-col gap-6">
      <h2 id="experimentos" className="text-title-md">
        {t.title}
      </h2>
      <ul className="border-b border-subtle">
        {t.items.map((item) => (
          <li key={item.name} className="flex flex-col gap-1 border-t border-subtle py-4">
            <h3 className="text-label-lg">
              {item.href ? (
                <a href={item.href} className={textLinkClass}>
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </h3>
            <p className="text-body-sm text-subtle">{item.description}</p>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}

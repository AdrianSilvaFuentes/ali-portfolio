import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { Dictionary } from "@/content";
import { type Locale, pagePath } from "@/i18n/config";
import { HomeSection, textLinkClass } from "../home/section";

/**
 * A linha do tempo, do mais recente ao mais antigo. Cada papel mostra o resultado, não a lista
 * de tarefas; os cargos antigos de marketing ficam juntos num item só.
 */
export function ExperienceTimeline({
  lang,
  t,
}: {
  lang: Locale;
  t: Dictionary["resume"]["experience"];
}) {
  return (
    <HomeSection id="linha-do-tempo" sunken className="flex flex-col gap-8">
      <h2 id="linha-do-tempo" className="text-title-md">
        {t.title}
      </h2>
      <ol className="border-b border-default">
        {t.items.map((item) => (
          <li
            key={item.title}
            className="grid gap-3 border-t border-default py-6 md:grid-cols-3 md:gap-8"
          >
            <div className="flex flex-col gap-1">
              <p className="font-mono text-body-xs">{item.period}</p>
              <p className="text-body-sm text-subtle">{item.place}</p>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <h3 className="text-title-sm">{item.title}</h3>
              {item.text && <p className="text-body-md text-subtle">{item.text}</p>}
              {item.bullets && (
                <ul className="flex list-disc flex-col gap-1.5 pl-5 text-body-md text-subtle">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {item.link && (
                <Link
                  href={`${pagePath(lang, "work")}#web-e-marca`}
                  className={`${textLinkClass} self-start`}
                >
                  {item.link}
                  <IconArrowRight aria-hidden className="size-4" />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </HomeSection>
  );
}

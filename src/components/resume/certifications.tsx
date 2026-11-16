import { IconChevronDown } from "@tabler/icons-react";
import type { Dictionary } from "@/content";
import data from "@/content/certifications.json";
import type { Locale } from "@/i18n/config";
import { HomeSection } from "../home/section";

type Certification = {
  group: string;
  title: string;
  issuer: string;
  issued: string | null;
  credentialId?: string;
  url?: string | null;
  showOnSite?: boolean;
};

type Group = { id: string; title: Record<Locale, string>; open: boolean };

const groups = data.groups as Group[];
/** As que estão marcadas com showOnSite: false não aparecem no site. */
const certifications = (data.certifications as Certification[]).filter(
  (item) => item.showOnSite !== false,
);

/**
 * Certificações agrupadas por tema, de src/content/certifications.json. Os grupos com
 * open: true aparecem abertos; os outros começam recolhidos em "Ver todas" (details/summary,
 * que funciona pelo teclado e sem JavaScript). Cada item abre a credencial.
 */
export function Certifications({
  lang,
  t,
}: {
  lang: Locale;
  t: Dictionary["resume"]["certifications"];
}) {
  return (
    <HomeSection id="certificacoes" sunken className="flex flex-col gap-10">
      <h2 id="certificacoes" className="text-title-md">
        {t.title}
      </h2>
      <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
        {groups.map((group) => {
          const items = certifications.filter((item) => item.group === group.id);
          if (items.length === 0) return null;
          const issuers = [...new Set(items.map((item) => item.issuer))].join(" · ");
          const count = `${items.length} ${items.length === 1 ? t.courses.one : t.courses.many}`;
          const list = <CertificationList items={items} />;

          return (
            <section
              key={group.id}
              aria-labelledby={`cert-${group.id}`}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1">
                <h3 id={`cert-${group.id}`} className="text-label-md text-subtle">
                  {group.title[lang]}
                </h3>
                <p className="text-body-sm text-subtle">
                  {issuers} · {count}
                </p>
              </div>
              {group.open ? (
                list
              ) : (
                <details className="group">
                  <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-1 rounded-sm text-body-md underline underline-offset-4 outline-focus focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">{t.showAll}</span>
                    <span className="hidden group-open:inline">{t.showLess}</span>
                    <IconChevronDown
                      aria-hidden
                      className="size-4 transition-transform duration-fast group-open:rotate-180 motion-reduce:transition-none"
                    />
                  </summary>
                  <div className="pt-2">{list}</div>
                </details>
              )}
            </section>
          );
        })}
      </div>
    </HomeSection>
  );
}

function CertificationList({ items }: { items: Certification[] }) {
  return (
    <ul className="border-t border-default">
      {items.map((item) => {
        const year = item.issued?.slice(0, 4);
        const content = (
          <>
            <span className="text-label-lg">{item.title}</span>
            {year && <span className="shrink-0 font-mono text-body-xs text-subtle">{year}</span>}
          </>
        );
        const rowClass = "flex min-h-11 items-baseline justify-between gap-4 py-3";
        return (
          <li key={item.title} className="border-b border-default">
            {item.url ? (
              <a
                href={item.url}
                className={`${rowClass} rounded-sm underline-offset-4 outline-focus hover:underline focus-visible:outline-2 focus-visible:outline-offset-2`}
              >
                {content}
              </a>
            ) : (
              <div className={rowClass}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

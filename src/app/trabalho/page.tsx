import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { pt } from "@/content/pt";

export const metadata: Metadata = { title: `${pt.nav.work} · ${pt.site.name}` };

export default function WorkPage() {
  return (
    <PageIntro eyebrow={pt.work.eyebrow} title={pt.work.title}>
      <p className="text-body-lg text-subtle">{pt.placeholder}</p>
    </PageIntro>
  );
}

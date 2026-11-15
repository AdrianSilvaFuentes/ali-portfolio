import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { pt } from "@/content/pt";

export const metadata: Metadata = { title: `${pt.nav.built} · ${pt.site.name}` };

export default function BuiltPage() {
  return (
    <PageIntro eyebrow={pt.built.eyebrow} title={pt.built.title}>
      <p className="text-body-lg text-subtle">{pt.placeholder}</p>
    </PageIntro>
  );
}

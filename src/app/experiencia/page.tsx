import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { pt } from "@/content/pt";

export const metadata: Metadata = { title: `${pt.nav.resume} · ${pt.site.name}` };

export default function ResumePage() {
  return (
    <PageIntro eyebrow={pt.resume.eyebrow} title={pt.resume.title}>
      <p className="text-body-lg text-subtle">{pt.placeholder}</p>
    </PageIntro>
  );
}

import type { Dictionary } from "@/content";
import { Eyebrow, HomeSection } from "./section";

/** 2. Provas: três cartões, número grande primeiro, o resultado e uma observação pequena. */
export function Proofs({ t }: { t: Dictionary["home"]["proofs"] }) {
  return (
    <HomeSection id="provas-titulo" sunken className="flex flex-col gap-8">
      <Eyebrow as="h2" id="provas-titulo">
        {t.title}
      </Eyebrow>
      <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
        {t.items.map((item) => (
          <li
            key={item.project}
            className="flex flex-col gap-3 rounded-md border border-subtle bg-surface-raised p-6"
          >
            <h3 className="font-mono text-body-sm text-subtle">{item.project}</h3>
            <p className="text-display">{item.value}</p>
            <p className="text-body-md">{item.result}</p>
            <p className="mt-auto font-mono text-body-xs text-subtle">{item.note}</p>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}

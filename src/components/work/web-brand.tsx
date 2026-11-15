import type { Dictionary } from "@/content";
import { HomeSection } from "../home/section";
import { Placeholder } from "../placeholder";

/**
 * Web e marca: lista leve, com peso menor que os casos de produto (miniatura, nome, tipo).
 * Os links ainda não existem: ficam entre colchetes, como texto, até haver endereço e
 * autorização dos clientes. É o destino de "Ver sites" e "Ver marcas" da Home (#web-e-marca).
 */
export function WebBrand({ t }: { t: Dictionary["work"]["web"] }) {
  return (
    <HomeSection id="web-e-marca" className="flex flex-col gap-8">
      <h2 id="web-e-marca" className="scroll-mt-6 text-title-lg">
        {t.title}
      </h2>
      <ul className="border-b border-subtle">
        {t.items.map((item) => (
          <li
            key={item.name}
            className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 border-t border-subtle py-4 md:grid-cols-[auto_1fr_auto_auto] md:gap-x-8"
          >
            <Placeholder label={t.thumbnail} className="h-16 w-24 p-2 md:h-20 md:w-32" />
            <div className="flex flex-col gap-1">
              <h3 className="text-label-lg">{item.name}</h3>
              <p className="text-body-sm text-subtle">{item.description}</p>
            </div>
            <p className="col-start-2 font-mono text-body-xs text-subtle md:col-start-auto">
              {item.meta}
            </p>
            <span className="col-start-2 inline-flex min-h-11 items-center text-body-md md:col-start-auto">
              {item.link}
            </span>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}

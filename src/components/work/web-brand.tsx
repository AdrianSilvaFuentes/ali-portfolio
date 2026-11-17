import { Button } from "@adriansilvafuentes/ui";
import type { Dictionary } from "@/content";
import { CaseImage } from "../case/case-image";
import { HomeSection } from "../home/section";
import { Placeholder } from "../placeholder";

/**
 * Web e marca: lista leve, com peso menor que os casos de produto (miniatura, nome, tipo).
 * Só aparecem os trabalhos com `href` (link real, como botão do ali-ui). Os que ainda são
 * placeholders ficam ocultos até haver endereço e autorização dos clientes.
 * É o destino de "Ver sites" e "Ver marcas" da Home (#web-e-marca).
 */
export function WebBrand({ t }: { t: Dictionary["work"]["web"] }) {
  return (
    <HomeSection id="web-e-marca" className="flex flex-col gap-8">
      <h2 id="web-e-marca" className="scroll-mt-6 text-title-md">
        {t.title}
      </h2>
      <ul className="border-b border-subtle">
        {t.items
          .filter((item) => item.href)
          .map((item) => (
            <li
              key={item.name}
              className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 border-t border-subtle py-4 md:grid-cols-[auto_1fr_auto_auto] md:gap-x-8"
            >
              {item.image ? (
                <CaseImage
                  image={item.image}
                  label={t.thumbnail}
                  reserved={t.reserved}
                  sizes="128px"
                  className="h-16 w-24 object-cover object-top md:h-20 md:w-32"
                />
              ) : (
                <Placeholder label={t.thumbnail} className="h-16 w-24 p-2 md:h-20 md:w-32" />
              )}
              <div className="flex flex-col gap-1">
                <h3 className="text-label-lg">{item.name}</h3>
                <p className="text-body-sm text-subtle">{item.description}</p>
              </div>
              <p className="col-start-2 font-mono text-body-xs text-subtle md:col-start-auto">
                {item.meta}
              </p>
              {item.href ? (
                <Button
                  size="md"
                  variant="secondary"
                  asChild
                  className="col-start-2 justify-self-start md:col-start-auto"
                >
                  <a href={item.href}>{item.link}</a>
                </Button>
              ) : (
                <span className="col-start-2 inline-flex min-h-11 items-center text-body-md md:col-start-auto">
                  {item.link}
                </span>
              )}
            </li>
          ))}
      </ul>
    </HomeSection>
  );
}

"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@adriansilvafuentes/ui";
import type { ReactNode } from "react";
import type { Dictionary } from "@/content";
import { Container } from "../container";

/**
 * Filtro da página Trabalho: Tudo, Produto ou Web e marca. São as Tabs do ali-ui: pelo
 * teclado, as setas trocam de aba. As seções chegam prontas do servidor (`product` e `web`).
 *
 * As abas do ali-ui têm 32px de altura; aqui ganham 44px (h-11) para o toque. Ajuste a levar
 * para o ali-ui.
 */
export function WorkFilter({
  t,
  product,
  web,
}: {
  t: Dictionary["work"]["filters"];
  product: ReactNode;
  web: ReactNode;
}) {
  const tabs = [
    {
      value: "all",
      label: t.all,
      content: (
        <>
          {product}
          {web}
        </>
      ),
    },
    { value: "product", label: t.product, content: product },
    { value: "web", label: t.web, content: web },
  ];

  return (
    <Tabs defaultValue="all">
      <Container className="pb-10">
        <TabsList aria-label={t.label}>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="h-11 px-4">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Container>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} tabIndex={-1}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

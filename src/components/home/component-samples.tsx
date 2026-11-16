"use client";

import { Button, Input, Select, SelectItem } from "@adriansilvafuentes/ui";
import type { ReactNode } from "react";
import type { Dictionary } from "@/content";

type Samples = Dictionary["home"]["built"]["samples"];

/**
 * Três componentes reais do ali-ui, funcionando, cada um numa moldura com o nome dele.
 * É de cliente porque o Select usa o Radix.
 */
export function ComponentSamples({ t }: { t: Samples }) {
  return (
    <ul aria-label={t.label} className="grid gap-3 sm:grid-cols-3">
      <Sample name={t.button.name}>
        <Button size="sm" type="button">
          {t.button.label}
        </Button>
      </Sample>
      <Sample name={t.input.name}>
        <Input label={t.input.label} defaultValue={t.input.value} className="w-full" />
      </Sample>
      <Sample name={t.select.name}>
        <Select label={t.select.label} defaultValue="0" className="w-full">
          {t.select.options.map((option, index) => (
            <SelectItem key={option} value={String(index)}>
              {option}
            </SelectItem>
          ))}
        </Select>
      </Sample>
    </ul>
  );
}

function Sample({ name, children }: { name: string; children: ReactNode }) {
  return (
    <li className="flex flex-col gap-3 rounded-md border border-subtle bg-surface-sunken p-4">
      <p className="font-mono text-body-xs text-subtle">{name}</p>
      <div className="flex min-h-20 items-end">{children}</div>
    </li>
  );
}

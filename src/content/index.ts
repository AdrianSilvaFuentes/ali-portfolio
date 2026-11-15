import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { es } from "./es";
import { type Dictionary, pt, type StackIcon } from "./pt";

export type { Dictionary, StackIcon };

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

/** Os textos do site num idioma. */
export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

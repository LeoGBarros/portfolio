import { en } from "@/content/en";
import { pt } from "@/content/pt";

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Cookie gravado pelo proxy quando o visitante abre uma rota com idioma
export const LOCALE_COOKIE = "lang";

const dictionaries = { en, pt } satisfies Record<Locale, Dictionary>;

export type Dictionary = typeof en;

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

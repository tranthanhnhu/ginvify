import type { Locale } from "@/lib/i18n/config";
import { dictionaryFile } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const loaders = {
  en: () => import("@/locales/en.json").then((m) => m.default as Dictionary),
  ja: () => import("@/locales/ja.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const file = dictionaryFile(locale);
  return loaders[file]();
}

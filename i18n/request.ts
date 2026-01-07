// i18n/request.ts
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ja"] as const;
export const defaultLocale = "en";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';

function isValidLocale(locale: unknown): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!isValidLocale(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../languages/${locale}.json`)).default,
  };
});

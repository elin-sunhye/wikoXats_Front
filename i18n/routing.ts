export const LOCALE_LABEL = {
  ko: '한국어',
  en: 'ENGLISH',
  zh: '中文',
} as const;

export const locales = Object.keys(LOCALE_LABEL) as Array<
  keyof typeof LOCALE_LABEL
>;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ko';

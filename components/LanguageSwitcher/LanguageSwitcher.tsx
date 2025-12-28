'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALE_LABEL, locales, type Locale } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = (pathname?.split('/')[1] || 'ko') as Locale;

  const changeLocale = (nextLocale: Locale) => {
    if (!pathname) return;

    const segments = pathname.split('/');
    segments[1] = nextLocale;

    router.push(segments.join('/'));
    router.refresh();
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => changeLocale(e.target.value as Locale)}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {LOCALE_LABEL[locale]}
        </option>
      ))}
    </select>
  );
}

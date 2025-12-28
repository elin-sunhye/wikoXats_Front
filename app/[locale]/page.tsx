'use client';

import { useT } from '@/i18n/useT';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

export default function HomePage() {
  const t = useT();

  return (
    <div>
      <LanguageSwitcher />

      <h1>{t('title')}</h1>
    </div>
  );
}

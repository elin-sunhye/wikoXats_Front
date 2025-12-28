import localFont from 'next/font/local';
import '@/style/globals.scss';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import RecoilRootProvider from '@/providers/RecoilRootProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

import { NextIntlClientProvider } from 'next-intl';
import { locales, type Locale } from '@/i18n/routing';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const pretendard = localFont({
  src: [
    {
      path: '../../fonts/Pretendard/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/Pretendard/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Pretendard/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Pretendard/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--pretendard',
  display: 'fallback',
});

const gmarket = localFont({
  src: [
    {
      path: '../../fonts/Gmarket/GmarketSansLight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../fonts/Gmarket/GmarketSansMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Gmarket/GmarketSansBold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--gmarket',
  display: 'fallback',
});

async function loadMessages(locale: Locale) {
  switch (locale) {
    case 'en':
      return (await import('../../languages/en.json')).default;
    case 'zh':
      return (await import('../../languages/zh.json')).default;
    case 'ko':
    default:
      return (await import('../../languages/ko.json')).default;
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${pretendard.variable} ${gmarket.variable}`}>
        <NextIntlClientProvider
          key={locale}
          locale={locale}
          messages={messages}
        >
          <ErrorBoundary>
            <RecoilRootProvider>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </RecoilRootProvider>
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

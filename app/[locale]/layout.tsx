import '@/style/globals.scss';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import ReactQueryProvider from '@/components/provider/ReactQueryProvider';
import { NextIntlClientProvider } from 'next-intl';
import { pretendard, wantedSans } from './fonts';
import { getMessages } from 'next-intl/server';
import JotaiProvider from '@/components/provider/JotaiProvider';
import LenisProvider from '@/components/provider/LenisProvider';
import AOSProvider from '@/components/provider/AOSProvider';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import GSAPProvider from '@/components/provider/GSAPProvider';

// 메타 데이터 설정
export const metadata = {
  title: 'WIKO',
  description: 'WIKO',
  openGraph: {
    type: 'website',
    title: 'WIKO',
    description: 'WIKO',
    images: '',
    // url: "https://WIKO.com",
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: 'WIKO, wiko, ats, ATS, Wiko, Ats',
  viewport: { width: 'device-width', initialScale: 1.0 },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${pretendard.variable} ${wantedSans.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ErrorBoundary>
            <JotaiProvider>
              <ReactQueryProvider>
                <GSAPProvider />
                <LenisProvider />
                <AOSProvider />
                <Header />
                {children}
                <Footer />
              </ReactQueryProvider>
            </JotaiProvider>
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

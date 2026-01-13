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

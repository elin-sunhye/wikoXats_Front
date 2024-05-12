import AutoAlert from '@/component/common/AutoAlert/AutoAlert';
import { Footer } from '@/component/common/Footer/Footer';
import { Header } from '@/component/common/Header/Header';
import ReactQueryProvider from '@/component/common/ReactQueryProvider';
import RecoilRootProvider from '@/component/common/RecoilRootProvider';
import '@/style/globals.scss';
import localFont from 'next/font/local';

// font
const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--pretendard',
  display: 'fallback',
});
const Gmarket = localFont({
  src: [
    {
      path: '../fonts/Gmarket/GmarketSansLight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Gmarket/GmarketSansMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Gmarket/GmarketSansBold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--Gmarket',
  display: 'fallback',
});

// 메타 데이터 설정
export const metadata = {
  title: 'A.T.S.',
  description: 'A.T.S.',
  openGraph: {
    type: 'website',
    title: 'A.T.S.',
    description: 'A.T.S.',
    images: '',
    // url: "https://ats.com",
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: 'ats',
  viewport: { width: 'device-width', initialScale: 1.0 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // https://www.crosstarget.co.kr/main/
  return (
    // <html lang="en">
    //   <body>{children}</body>
    // </html>
    <html lang="ko">
      <body className={`${pretendard.variable} ${Gmarket.variable}`}>
        <RecoilRootProvider>
          {/* header */}
          <Header />

          {/* content */}
          <ReactQueryProvider>
            <div style={{ position: 'relative', zIndex: '999' }}>
              {children}
            </div>
            {/* <div className="wrap"></div> */}

            {/* autoAlert */}
            <AutoAlert />
          </ReactQueryProvider>
          {/* footer */}
          <Footer />
        </RecoilRootProvider>
      </body>
    </html>
  );
}

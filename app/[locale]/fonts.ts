import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '../../fonts/Pretendard/PretendardVariable.woff2',
      weight: '45 920',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const wantedSans = localFont({
  src: [
    {
      path: '../../fonts/WantedSans/WantedSansVariable.woff2',
      weight: '400 1000',
      style: 'normal',
    },
  ],
  variable: '--font-wanted-sans',
  display: 'swap',
});

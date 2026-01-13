'use client'

import { ParallaxProvider } from 'react-scroll-parallax';

export function ParallaxProviders({ children, locale }: { children: React.ReactNode, locale: string }) {
  return <ParallaxProvider key={locale}>{children}</ParallaxProvider>;
}
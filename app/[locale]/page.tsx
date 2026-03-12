'use client';

import MainVisual from '@/components/mainVisual/MainVisual';
import { useI18n } from '@/hooks/useI18n';
import { useLocale } from 'next-intl';
import History from '@/components/main/History';
import Products from '@/components/main/Business';
import styles from '@/components/main/page.module.scss';

export default function HomePage() {
  const locale = useLocale();
  const main = useI18n('main');

  return (
    <main>
      <section id={styles.mainVisualSection}>
        <MainVisual
          bgChildren={
            <source src="/video/video-main-visual.mp4" type="video/mp4" />
          }
          textChildren={
            <>
              <span>{main('desc')}</span>
              <p>{main('title1')}</p>
              <p className={styles.title2}>{main('title2')}</p>
            </>
          }
          videoSource="/free-video/male-worker-pouring-molten-metal-mold-workshop-4k_1876840#fromView=search&page=1&position=14&uuid=d93113d6-6b87-405d-8ac5-1ca5611a0ae4"
        />
      </section>

      <History lacale={locale} />

      <Products lacale={locale} />

      <section>4</section>
      <section>5</section>
      <section>6</section>
      <section>7</section>
    </main>
  );
}

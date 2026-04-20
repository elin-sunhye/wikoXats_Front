'use client';

import MainVisual from '@/components/mainVisual/MainVisual';
import { useLocale } from 'next-intl';
import { useI18n } from '@/hooks/useI18n';
import History from '@/components/main/History';
import Business from '@/components/main/Business';
import Partners from '@/components/main/Partners';
import { Locale } from '@/types/common';
import styles from '@/components/main/page.module.scss';

export default function HomePage() {
  const locale = useLocale() as Locale;
  const main = useI18n('main');

  return (
    <main>
      <MainVisual
        isMain={true}
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
        contentsSource="/free-video/male-worker-pouring-molten-metal-mold-workshop-4k_1876840#fromView=search&page=1&position=14&uuid=d93113d6-6b87-405d-8ac5-1ca5611a0ae4"
      />

      {/* <section>4</section> */}

      <History locale={locale} />

      <Business locale={locale} />

      <Partners locale={locale} />
    </main>
  );
}

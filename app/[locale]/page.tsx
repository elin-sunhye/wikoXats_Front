'use client';

import MainVisual from '@/components/common/mainVisual/MainVisual';
import { useI18n } from '@/hooks/useI18n';
import styles from '@/components/main/page.module.scss';
import History from '@/components/main/History';

export default function HomePage() {
  const main = useI18n('main');

  return (
    <main>
      <MainVisual
        mainChildren={
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

      <History />

      <section>2</section>
      <section>3</section>
      <section>4</section>
      <section>5</section>
      <section>6</section>
      <section>7</section>
    </main>
  );
}

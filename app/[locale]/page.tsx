'use client';

import MainVisual from '@/components/common/mainVisual/MainVisual';
import { useI18n } from '@/hooks/useI18n';
import styles from './page.module.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const main = useI18n('main');
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

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

      <section ref={sectionRef} className={styles.horizontalSection}>
        <div ref={trackRef} className={styles.horizontalTrack}>
          <div className={styles.panel}>111</div>
          <div className={styles.panel}>222</div>
          <div className={styles.panel}>333</div>
          <div className={styles.panel}>444</div>
        </div>
      </section>
      <section>2</section>
      <section>3</section>
      <section>4</section>
      <section>5</section>
      <section>6</section>
      <section>7</section>
    </main>
  );
}

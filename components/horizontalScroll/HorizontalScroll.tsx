'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './page.module.scss';

export default function HorizontalScroll({
  title,
  bgChildren,
  children,
  videoSource,
}: {
  title: string;
  bgChildren: React.ReactNode;
  children: React.ReactNode;
  videoSource: string;
}) {
  const sctionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sctionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    const horizGsap = gsap.to(track, {
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

    return () => {
      horizGsap.scrollTrigger?.kill();
      horizGsap.kill();
    };
  }, []);

  return (
    <section ref={sctionRef} id={styles.horizontalSection}>
      {title && (
        <h6 className={`section_title ${styles.section_title}`}>{title}</h6>
      )}

      {bgChildren && (
        <div className={styles.video_wrap}>
          <video autoPlay loop playsInline muted preload="auto">
            {bgChildren}
          </video>

          <a className="screen_out" href={videoSource}>
            Video by Wavebreak Media on Freepik
          </a>
        </div>
      )}

      <div
        ref={trackRef}
        className={`${styles.horizontal_track} ${
          title ? styles.with_title : ''
        }`}
      >
        {children}
      </div>
    </section>
  );
}

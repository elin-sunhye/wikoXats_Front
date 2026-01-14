'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './page.module.scss';

export default function HorizontalScroll({
  bgChildren,
  children,
}: {
  bgChildren: React.ReactNode;
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
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
    <section
      ref={sectionRef}
      id={styles.horizontalSection}
      className={styles.horizontal_section}
    >
      <div className={styles.horizon_bg_wrap}>{bgChildren}</div>
      <div ref={trackRef} className={styles.horizontal_track}>
        {children}
      </div>
    </section>
  );
}

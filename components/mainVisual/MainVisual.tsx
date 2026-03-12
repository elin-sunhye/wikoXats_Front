'use client';

import { useLayoutEffect, useRef } from 'react';
import styles from './page.module.scss';

export default function MainVisual({
  bgChildren,
  textChildren,
  videoSource,
}: {
  bgChildren: React.ReactNode;
  textChildren: React.ReactNode;
  videoSource?: string;
}) {
  return (
    <div className={styles.bg_wrap}>
      {/* <Parallax speed={-33} easing={"easeInOut"}> */}
      <video autoPlay muted loop playsInline>
        {bgChildren}
      </video>
      <a className="screen_out" href={videoSource}>
        Video by Wavebreak Media on Freepik
      </a>
      {/* </Parallax> */}

      {/* <Parallax speed={-15} className={styles.script} data-aos="fade-up"> */}
      <div className={styles.script}>{textChildren}</div>
      {/* </Parallax> */}
    </div>
  );
}

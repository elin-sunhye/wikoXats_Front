'use client';

import styles from './page.module.scss';

export default function MainVisual({
  isMain,
  isImg,
  bgChildren,
  textChildren,
  contentsSource,
}: {
  isMain?: boolean;
  isImg?: boolean;
  bgChildren: React.ReactNode;
  textChildren: React.ReactNode;
  contentsSource?: string;
}) {
  return (
    <section id={isMain ? styles.mainVisualSection : styles.subVisualSection}>
      <div className={styles.bg_wrap}>
        {/* <Parallax speed={-33} easing={"easeInOut"}> */}
        {isImg ? (
          <div>{bgChildren}</div>
        ) : (
          <video autoPlay muted loop playsInline>
            {bgChildren}
          </video>
        )}
        <a className="screen_out" href={contentsSource}></a>
        {/* </Parallax> */}

        {/* <Parallax speed={-15} className={styles.script} data-aos="fade-up"> */}
        <div className={styles.script}>{textChildren}</div>
        {/* </Parallax> */}
      </div>
    </section>
  );
}

// import { Parallax } from "react-scroll-parallax";
import styles from './page.module.scss';

export default function MainVisual({
  mainChildren,
  textChildren,
  videoSource,
}: {
  mainChildren: React.ReactNode;
  textChildren: React.ReactNode;
  videoSource?: string;
}) {
  return (
    <section id={styles.mainVisual}>
      {/* <Parallax speed={-33} easing={"easeInOut"}> */}
      <video autoPlay muted loop playsInline>
        {mainChildren}
      </video>
      <a className="screen_out" href={videoSource}>
        Video by Wavebreak Media on Freepik
      </a>
      {/* </Parallax> */}

      {/* <Parallax speed={-15} className={styles.script} data-aos="fade-up"> */}
      <div className={styles.script}>{textChildren}</div>
      {/* </Parallax> */}
    </section>
  );
}

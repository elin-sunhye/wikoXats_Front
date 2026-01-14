import { useLocale } from 'next-intl';
import HorizontalScroll from '../common/horizontalScroll/HorizontalScroll';
import styles from './page.module.scss';

// history JSON
import historyKo from '@/data/history.ko.json';
import historyEn from '@/data/history.en.json';
import historyZh from '@/data/history.zh.json';
import { historyGroup, historyItem } from '@/types/history';

export default function History() {
  const locale = useLocale();
  const historyData: historyGroup[] =
    locale === 'ko'
      ? historyKo.history
      : locale === 'en'
      ? historyEn.history
      : historyZh.history;

  return (
    <HorizontalScroll
      bgChildren={
        <div className={styles.horizon_bg_box}>
          <video className={styles.bg_history} autoPlay muted loop playsInline>
            {/* <source src="/video/video-earth.mp4" type="video/mp4" /> */}
          </video>
          <a
            className="screen_out"
            href="/free-video/earth-from-space-night-day_3544616#fromView=search&page=1&position=15&uuid=9e6c1f0a-1a17-4b9d-a348-41220977def8"
          >
            Image by BaldasaridStock on Freepik
          </a>
        </div>
      }
      children={historyData.map((year: historyGroup) => (
        <div key={year.label} className={styles.box}>
          <p>{year.label}</p>
          {year.history.length > 0 && (
            <ul>
              {year.history.map((history: historyItem, idx: number) => (
                <li key={`history_${idx}`}>{history.text}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    />
  );
}

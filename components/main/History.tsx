import HorizontalScroll from '../horizontalScroll/HorizontalScroll';
import { historyGroup, historyItem } from '@/types/history';
import { Locale } from '@/types/common';
import styles from './page.module.scss';

// business JSON
import history from '@/data/history.json';

export default function History({ locale }: { locale: Locale }) {
  const historyData: historyGroup[] = history.history;

  return (
    <HorizontalScroll
      title="HISTORY"
      bgChildren={<source src="/video/video-earth.mp4" type="video/mp4" />}
      contentsSource="/free-video/earth-from-space-night-day_3544616#fromView=search&page=1&position=15&uuid=9e6c1f0a-1a17-4b9d-a348-41220977def8"
      children={historyData.map((year: historyGroup) => (
        <div key={year.label} className={`${styles.history} ${styles.box}`}>
          <p className="section_sub_title">{year.label}</p>
          {year.history.length > 0 && (
            <ul>
              {year.history.map((detail: historyItem, idx: number) => (
                <li key={`history_${idx}`}>{detail.text[locale]}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    />
  );
}

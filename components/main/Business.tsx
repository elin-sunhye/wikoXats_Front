'use client';

import { useI18n } from '@/hooks/useI18n';
import VerticalScroll from '@/components/verticalScroll/VerticalScroll';
import Image from 'next/image';
import { BusinessItem } from '@/types/business';
import { Locale } from '@/types/common';
import styles from './page.module.scss';

// business JSON
import business from '@/data/business.json';

export default function Business({ locale }: { locale: Locale }) {
  const businessTxt = useI18n('business');
  const businessData: BusinessItem[] = business.business;

  return (
    <VerticalScroll
      bgStyle={{
        background:
          "url('/img/img-bg-factory-blur-1.png') no-repeat 0 center / cover",
      }}
      tab={[
        /* TODO: 추후 데이터 더미 생성 후 map */
        {
          item: 'OUR BUSINESS',
          desc: '대표 장비',
          img: <Image src={'/'} alt="img" width={0} height={0} />,
        },
        {
          item: 'OUR BUSINESS',
          desc: '대표 제품',
          img: <Image src={'/'} alt="img" width={0} height={0} />,
        },
        {
          item: 'OUR BUSINESS',
          desc: businessTxt('title'),
          img: <Image src={'/'} alt="img" width={0} height={0} />,
        },
      ]}
    >
      {/* TODO: 추후 데이터 더미 생성 후 map */}
      <div id="item-0">
        {businessData.map((business: BusinessItem, idx: number) => (
          <div key={`business_${idx}`} className={styles.card}>
            <p className="section_sub_title">{business.title[locale]}</p>
            <span>{business.description[locale]}</span>
          </div>
        ))}
      </div>
      <div id="item-1">
        {businessData.map((business: BusinessItem, idx: number) => (
          <div key={`business_${idx}`} className={styles.card}>
            <p className="section_sub_title">{business.title[locale]}</p>
            <span>{business.description[locale]}</span>
          </div>
        ))}
      </div>
      <div id="item-2">
        {businessData.map((business: BusinessItem, idx: number) => (
          <div key={`business_${idx}`} className={styles.card}>
            <p className="section_sub_title">{business.title[locale]}</p>
            <span>{business.description[locale]}</span>
          </div>
        ))}
      </div>
    </VerticalScroll>
  );
}

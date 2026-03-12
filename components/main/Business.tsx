'use client';

import { useI18n } from '@/hooks/useI18n';
import { getBusinessData } from '@/hooks/useGetLocaleData';
import { businessItem } from '@/types/business';
import styles from './page.module.scss';
import VerticalScroll from '../verticalScroll/VerticalScroll';
import Image from 'next/image';

export default function Products({ lacale }: { lacale: string }) {
  const business = useI18n('business');
  const businessData: businessItem[] = getBusinessData(lacale);

  return (
    <VerticalScroll
      tab={[
        {
          item: 'business',
          desc: business('title'),
          img: <Image src={'/'} alt="img" width={0} height={0} />,
          tab: 'first',
        },
      ]}
    >
      {businessData.map((business: businessItem, idx: number) => (
        <div key={`business_${idx}`} className={styles.card}>
          <p className="section_sub_title">{business.title}</p>
          <span>{business.description}</span>
        </div>
      ))}
    </VerticalScroll>
  );
}

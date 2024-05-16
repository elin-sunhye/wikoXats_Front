'use client';

import style from './sectionPartners.module.scss';
import { BtnLink } from '@/component/common/BtnLink/BtnLink';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import Image from 'next/image';

export default function SectionPartners() {
  const partnersArry: any[] = [
    {
      name: '회사 1',
      logo: '/partners/ico_logo_comp',
      site: 'hrrps://naver.com',
    },
    {
      name: '회사 2',
      logo: '/partners/ico_logo_comp',
      site: 'hrrps://naver.com',
    },
    {
      name: '회사 3',
      logo: '/partners/ico_logo_comp',
      site: 'hrrps://naver.com',
    },
    {
      name: '회사 4',
      logo: '/partners/ico_logo_comp',
      site: 'hrrps://naver.com',
    },
  ];
  return (
    <SectionCommonLayout
      sectionId={'contStrength'}
      title={`파트너스<br />풍부한 데이터로부터`}
      desc={`국내시장 전역을 커버할 수 있는 풍부한 데이터를 활용하여<br />정교한 오디언스 타겟팅으로 광고 효과를 상승 시킬 수 있습니다`}
      btnYn={false}
    >
      <div className={`flex_start ${style.partners_box}`}>
        {partnersArry.map((partner) => {
          return (
            <BtnLink
              href={partner.site}
              target="_blank"
              type={'button'}
              title={partner.name}
              id={'partners'}
              style={{
                backgroundColor: 'var(--gray-2)',
                color: 'var(--black)',
              }}
              size={'xlg'}
              ico={
                <Image
                  src={partner.logo}
                  alt={`${partner.name} 로고 아이콘`}
                  width={0}
                  height={0}
                />
              }
              icoPosition={'left'}
              hover={false}
            />
          );
        })}
      </div>
    </SectionCommonLayout>
  );
}

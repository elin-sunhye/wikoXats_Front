'use client';

import style from '@/app/(main)/SectionProducts/sectionProducts.module.scss';
import Card from '@/component/common/Card/Card';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';

export default function SectionServe() {
  const cardItems: {
    title: string;
    desc: string;
    imgSrc: string;
    imgAlt: string;
  }[] = [
    {
      title: '약 4,000만 오디언스<br />온 · 오프라인 데이터 활용',
      desc: '   빅데이터를 활용하여 핵심 타겟과<br />가장 유사한 사용자들을 찾아<br />맞춤형 오디언스 세그먼트를 생성합니다',
      imgSrc: `/`,
      imgAlt: `#`,
    },
    {
      title: '약 4,000만 오디언스<br />온 · 오프라인 데이터 활용',
      desc: '   빅데이터를 활용하여 핵심 타겟과<br />가장 유사한 사용자들을 찾아<br />맞춤형 오디언스 세그먼트를 생성합니다',
      imgSrc: `/`,
      imgAlt: `#`,
    },
    {
      title: '약 4,000만 오디언스<br />온 · 오프라인 데이터 활용',
      desc: '   빅데이터를 활용하여 핵심 타겟과<br />가장 유사한 사용자들을 찾아<br />맞춤형 오디언스 세그먼트를 생성합니다',
      imgSrc: `/`,
      imgAlt: `#`,
    },
  ];

  return (
    <SectionCommonLayout
      sectionId={'contStrength'}
      title={`서비스 설명<br />풍부한 데이터로부터`}
      desc={`국내시장 전역을 커버할 수 있는 풍부한 데이터를 활용하여<br />정교한 오디언스 타겟팅으로 광고 효과를 상승 시킬 수 있습니다`}
      btnYn={false}
    >
      <div className={`flex_between ${style.product_box}`}>
        {cardItems.map(
          (
            item: {
              title: string;
              desc: string;
              imgSrc: string;
              imgAlt: string;
            },
            index: number
          ) => {
            return (
              <Card
                key={index}
                title={item.title}
                desc={item.desc}
                imgYn="top"
                imgSrc=""
                imgAlt=""
                imgBg="var(--main-color)"
              />
            );
          }
        )}
      </div>
    </SectionCommonLayout>
  );
}

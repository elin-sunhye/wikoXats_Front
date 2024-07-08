'use client';

import CardIco from '@/component/common/CardIco/CardIco';
import style from './sectionPoint.module.scss';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';

interface SectionPointProps {}
export default function SectionPoint({}: SectionPointProps) {
  const icoCards: {
    seq: number;
    title: string;
    ico?: JSX.Element;
  }[] = [
    {
      seq: 1,
      title: '집행부터 분석까지<br />관리하는 전담 관리자 배정',
    },
    {
      seq: 2,
      title: '집행부터<br />분석까지 관리하는 전담 관리자 배정',
    },
    {
      seq: 3,
      title: '집행부터 분석까지 관리하는 전담<br />관리자 배정',
    },
    {
      seq: 4,
      title: '집행부터 분석까지 관리하는 전담<br />관리자 배정',
    },
  ];
  return (
    <SectionCommonLayout
      sectionId={`contPoint`}
      title={`특화된 차별점,<br />캠페인 효율 극대화`}
      desc={`전담 관리자 배정, 최적화된 마케팅 전략을 수립, A/B 테스트 지원등<br />캠페인의 효율을 극대화 할 수 있는 다양한 솔루션을 제공합니다`}
      btnYn={false}
      sectionBg={`var(--gray-1)`}
    >
      <div className={`flex_between ${style.cont_point}`}>
        {icoCards.map(
          (icoCard: { seq: number; title: string; ico?: JSX.Element }) => {
            return (
              <div key={icoCard.seq} className={style.card_ico}>
                <CardIco title={icoCard.title} ico={icoCard.ico} />
              </div>
            );
          }
        )}
      </div>
    </SectionCommonLayout>
  );
}

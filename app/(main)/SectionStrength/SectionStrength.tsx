'use client';

import style from '../sectionProducts/sectionProducts.module.scss';
import CardGradientProps from '@/component/common/CardGradient/CardGradient';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';

export default function SectionStrength() {
  return (
    <SectionCommonLayout
      sectionId={'contStrength'}
      title={`강점 설명<br />풍부한 데이터로부터`}
      desc={`국내시장 전역을 커버할 수 있는 풍부한 데이터를 활용하여<br />정교한 오디언스 타겟팅으로 광고 효과를 상승 시킬 수 있습니다`}
      btnYn={false}
    >
      <div className={`flex_between ${style.product_box}`}>
        <CardGradientProps
          title={`강점1`}
          desc={` 강점1 설명설명<br />강점1 설명설명`}
          cardBg={`linear-gradient(
            180deg,
            var(--success-blue) 0%,
            var(--black) 100%
          )`}
          textBg={`linear-gradient(
            360deg,
            var(--success-blue) 0%,
            var(--black) 100%
            )`}
          textColor={`var(--white)`}
        />
        <CardGradientProps
          title={`강점2`}
          desc={` 강점2 설명설명<br />강점2 설명설명`}
          cardBg={`linear-gradient(
            180deg,
            var(--error-red) 0%,
            var(--black) 100%
          )`}
          textBg={`linear-gradient(
            360deg,
            var(--error-red) 0%,
            var(--black) 100%
            )`}
          textColor={`var(--white)`}
        />
      </div>
    </SectionCommonLayout>
  );
}

'use client';

import style from './serviceTech.module.scss';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';

export default function ServiceTech() {
  return (
    <SectionCommonLayout
      sectionId={'serviceTech'}
      title={
        '개인화 맞춤 광고를 제공하는 <br />정교하고 정확한 디바이스 페어링 기술'
      }
      desc={''}
      btnYn={false}
      sectionBg={`var(--gray-1)`}
    >
      <div className={`flex_center ${style.tech_box}`}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </SectionCommonLayout>
  );
}

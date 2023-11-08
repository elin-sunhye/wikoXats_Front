'use client';

import style from './productCase.module.scss';
import CardIco from '@/component/common/CardIco/CardIco';
import FlextBox from '@/component/common/FlexBox/FlextBox';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import { FaFacebook } from 'react-icons/fa';

export default function ProductCase({}) {
  return (
    <SectionCommonLayout
      sectionId={'contPlan'}
      title={`웹 스크립트로 트래커들과의 연동,<br />효과적인 캠페인 성과 측정까지`}
      desc={`크로스타겟은 자체적으로 발급한 웹스크립트와 주요 트래커들을 연동하여<br />캠페인의 성과 측정을 지원하며 이를 통해 정확한 캠페인 성과 측정이 가능해집니다`}
      btnYn={false}
    >
      <div className={style.case_box}>asdasdas</div>
    </SectionCommonLayout>
  );
}

'use client';

import style from './productPlan.module.scss';
import CardIco from '@/component/common/CardIco/CardIco';
import FlextBox from '@/component/common/FlexBox/FlextBox';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import { FaFacebook } from 'react-icons/fa';

export default function ProductPlan({}) {
  return (
    <SectionCommonLayout
      sectionId={'contPlan'}
      title={`웹 스크립트로 트래커들과의 연동,<br />효과적인 캠페인 성과 측정까지`}
      desc={`크로스타겟은 자체적으로 발급한 웹스크립트와 주요 트래커들을 연동하여<br />캠페인의 성과 측정을 지원하며 이를 통해 정확한 캠페인 성과 측정이 가능해집니다`}
      btnYn={false}
      sectionBg={`var(--gray-1)`}
    >
      <div className={`flex_start ${style.plan_ico_card_box}`}>
        <div>
          <CardIco
            title={'asdasd'}
            desc="sdkfgsadlkfglsakdgf"
            ico={
              <FaFacebook
                role="img"
                aria-label="페이스북 아이콘"
                style={{ width: '50px', height: '50px' }}
              />
            }
          >
            dsjfh;sakdjfhdkjsh
          </CardIco>
        </div>
        <div>
          <CardIco
            title={'asdasd'}
            desc="sdkfgsadlkfglsakdgf"
            ico={
              <FaFacebook
                role="img"
                aria-label="페이스북 아이콘"
                style={{ width: '50px', height: '50px' }}
              />
            }
          >
            dsjfh;sakdjfhdkjsh
          </CardIco>
        </div>
        <div>
          <CardIco
            title={'asdasd'}
            desc="sdkfgsadlkfglsakdgf"
            ico={
              <FaFacebook
                role="img"
                aria-label="페이스북 아이콘"
                style={{ width: '50px', height: '50px' }}
              />
            }
          >
            dsjfh;sakdjfhdkjsh
          </CardIco>
        </div>
        <div>
          <CardIco
            title={'asdasd'}
            desc="sdkfgsadlkfglsakdgf"
            ico={
              <FaFacebook
                role="img"
                aria-label="페이스북 아이콘"
                style={{ width: '50px', height: '50px' }}
              />
            }
          >
            dsjfh;sakdjfhdkjsh
          </CardIco>
        </div>
      </div>
    </SectionCommonLayout>
  );
}

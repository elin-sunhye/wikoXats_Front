'use client';

import style from './serviceDiffer.module.scss';
import CardIco from '@/component/common/CardIco/CardIco';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import { FaFacebook } from 'react-icons/fa';

export default function ServiceDiffer() {
  return (
    <SectionCommonLayout
      sectionId={'serviceDiffer'}
      title={'ats만의 <br />특화된 차별점'}
      desc={''}
      btnYn={false}
    >
      <div className={`flex_start ${style.plan_ico_card_box}`}>
        <div>
          <CardIco
            title={''}
            desc="sdkfgsadlkfglsakdgf"
            cardBg={'var(--gray-1)'}
            ico={
              <FaFacebook
                role="img"
                aria-label="페이스북 아이콘"
                style={{ width: '50px', height: '50px' }}
              />
            }
          />
        </div>
        <div>
          <CardIco
            title={''}
            desc="sdkfgsadlkfglsakdgf"
            cardBg={'var(--gray-1)'}
            ico={
              <FaFacebook
                role="img"
                aria-label="페이스북 아이콘"
                style={{ width: '50px', height: '50px' }}
              />
            }
          />
        </div>
        <div>
          <CardIco
            title={''}
            desc="sdkfgsadlkfglsakdgf"
            cardBg={'var(--gray-1)'}
            ico={
              <FaFacebook
                role="img"
                aria-label="페이스북 아이콘"
                style={{ width: '50px', height: '50px' }}
              />
            }
          />
        </div>
        <div>
          <CardIco
            title={''}
            desc="sdkfgsadlkfglsakdgf"
            cardBg={'var(--gray-1)'}
            ico={
              <FaFacebook
                role="img"
                aria-label="페이스북 아이콘"
                style={{ width: '50px', height: '50px' }}
              />
            }
          />
        </div>
      </div>
    </SectionCommonLayout>
  );
}

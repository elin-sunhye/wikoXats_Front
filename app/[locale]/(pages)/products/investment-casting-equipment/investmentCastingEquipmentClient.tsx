'use client';

import MainVisual from '@/components/mainVisual/MainVisual';
import Image from 'next/image';
import styles from '@/app/[locale]/(pages)/products/investment-casting-equipment/investmentCastingEquipmentClient.module.scss';

export default function InvestmentCastingEquipmetClient() {
  return (
    <>
      <MainVisual
        isImg={true}
        bgChildren={
          <Image
            src={'/img/img-bg-investment-casting-equipment.svg'}
            alt="정밀주조 장비 이미지"
            width={0}
            height={0}
          />
        }
        textChildren={
          <>
            <span>investment casting equipment</span>
            <p>정밀주조 전용 장비</p>
          </>
        }
        contentsSource="https://pixabay.com/ko/photos/%ec%a3%bc%ec%a1%b0-%eb%b6%88-%ec%bd%9c%eb%a1%ac%eb%b9%84%ec%95%84-%ec%bb%a4%ed%94%bc-%ec%b6%95-1417198/"
      />
    </>
  );
}

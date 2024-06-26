"use client";
import SectionCommonLayout from "@/component/common/SectionCommonLayout/SectionCommonLayout";
import style from "./rawmaterials.module.scss";

export default function Rawmaterials() {
  return (
    <>
      <SectionCommonLayout
        sectionId={""}
        title={""}
        desc={
          "영국 셰필드에 위치한 'Ross&Catherall Ltd'는 60년 이상, 전 세계 정밀주조 산업에서 중요한 용도로 사용되는 니켈 및 코발트 기반 초합금 생산에서 품질과 기술적 우수성으로 세계적인 명성을 얻은 회사입니다. 이러한 명성은 항공우주, 산업용 가스 터빈(IGT), 적층 제조(AM), 자동차 등 다양한 분야에 서비스를 제공합니다."
        }
        btnYn={false}
      />
    </>
  );
}

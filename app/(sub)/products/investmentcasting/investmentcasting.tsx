"use client";
import SectionCommonLayout from "@/component/common/SectionCommonLayout/SectionCommonLayout";
import style from "./investmentcasting.module.scss";
import CardIco from "@/component/common/CardIco/CardIco";
import { FaFacebook } from "react-icons/fa";
import { Btn } from "@/component/common/Btn/Btn";

export default function Investmentcasting() {
  return (
    <>
      <SectionCommonLayout
        sectionId={""}
        title={""}
        desc={
          "정밀주조는 금속 제품을 제작하는 정밀한 주조 방법 중 하나이며, 복잡한 형상의 부품을 높은 정밀도로 생산하는 기술입니다. 이 공법은 주로 항 공, 자동차, 방산, 의료 기기 등 높은 품질과 정밀도가 요구되는 분야에서 사용됩니다."
        }
        btnYn={false}
      />

      <SectionCommonLayout
        sectionId={"contPlan"}
        title={`제품 정보`}
        desc={``}
        btnYn={false}
        sectionBg={`var(--gray-1)`}
      >
        <div className={`flex_start ${style.items}`}>
          <div>
            <CardIco
              title={"왁스"}
              desc="제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다."
              ico={
                <FaFacebook
                  role="img"
                  aria-label="페이스북 아이콘"
                  style={{ width: "50px", height: "50px" }}
                />
              }
            >
              <Btn
                type={"button"}
                title={"자세히 보기"}
                id={""}
                btnType={"text"}
                hover={false}
              />
            </CardIco>
          </div>
          <div>
            <CardIco
              title={"asdasd"}
              desc="sdkfgsadlkfglsakdgf"
              ico={
                <FaFacebook
                  role="img"
                  aria-label="페이스북 아이콘"
                  style={{ width: "50px", height: "50px" }}
                />
              }
            >
              <Btn
                type={"button"}
                title={"자세히 보기"}
                id={""}
                btnType={"text"}
                hover={false}
              />
            </CardIco>
          </div>
          <div>
            <CardIco
              title={"asdasd"}
              desc="sdkfgsadlkfglsakdgf"
              ico={
                <FaFacebook
                  role="img"
                  aria-label="페이스북 아이콘"
                  style={{ width: "50px", height: "50px" }}
                />
              }
            >
              <Btn
                type={"button"}
                title={"자세히 보기"}
                id={""}
                btnType={"text"}
                hover={false}
              />
            </CardIco>
          </div>
          <div>
            <CardIco
              title={"asdasd"}
              desc="sdkfgsadlkfglsakdgf"
              ico={
                <FaFacebook
                  role="img"
                  aria-label="페이스북 아이콘"
                  style={{ width: "50px", height: "50px" }}
                />
              }
            >
              <Btn
                type={"button"}
                title={"자세히 보기"}
                id={""}
                btnType={"text"}
                hover={false}
              />
            </CardIco>
          </div>
        </div>
      </SectionCommonLayout>
    </>
  );
}

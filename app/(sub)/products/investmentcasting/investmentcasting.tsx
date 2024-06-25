"use client";
import SectionCommonLayout from "@/component/common/SectionCommonLayout/SectionCommonLayout";
import style from "./investmentcasting.module.scss";
import CardIco from "@/component/common/CardIco/CardIco";
import { FaFacebook } from "react-icons/fa";
import { Btn } from "@/component/common/Btn/Btn";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionTitle } from "@/component/common/SectionTitle/SectionTitle";
import ScrollSection, {
  itemArrayType,
} from "@/component/common/ScrollSection/ScrollSection";

export default function Investmentcasting() {
  const itemArray: itemArrayType[] = [
    {
      item: "왁스",
      desc: "정밀 주조 공정에서 코팅 전, 금속 주조물의 원형을 만들 때 사용되는 부자재입니다. <br />주조 과정의 첫 단계로, 왁스를 사용해 주조하려는 부품의 정확한 모형을 제작합니다.",
      img: (
        <Image
          src={"/img/product/img_wax_tree.svg"}
          alt={"왁스 트리 이미지"}
          width={0}
          height={0}
        />
      ),
      tab: "first",
    },
    {
      item: "세척제 & 바인더",
      desc: "왁스 표면의 오염을 제거하는데 사용하며, <br />Ceramic Slurry를 만들 때 사용하여 고온에서 모형을 안정화 시키는 역할을 합니다.",
      img: (
        <Image
          src={"/img/product/img_ceramic_slurry.svg"}
          alt={"세척제 & 바인더 이미지"}
          width={0}
          height={0}
        />
      ),
      tab: "sec",
    },
    {
      item: "세라믹",
      desc: "일반적으로 비금속 소재로, 고온에서 안정성이 뛰어나며 화학적으로 내마모성이 높습니다. <br />이러한 특성 때문에 다양한 고급 기술적 요구를 충족시키는 중요한 재료로 사용됩니다.",
      img: (
        <Image
          src={"/img/product/img_ceramic.svg"}
          alt={"세라믹 이미지"}
          width={0}
          height={0}
        />
      ),
      tab: "thir",
    },
    {
      item: "첨가제",
      desc: "제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.",
      img: <Image src={"/"} alt={"첨가제 이미지"} width={0} height={0} />,
      tab: "fourth",
    },
    {
      item: "기타",
      desc: "제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.",
      img: <></>,
      // <Image src={"/"} alt={"기타 이미지"} width={0} height={0} />
      tab: "fifth",
    },
  ];

  // 탭 ------------------------------
  const [tab, setTab] = useState<string>("first");

  return (
    <>
      {/* 정밀주조 ------------------------------ */}
      <SectionCommonLayout
        sectionId={"descSection"}
        sectionClass={style.desc_section}
        title={"정밀주조"}
        desc={
          "매우 정교하고 복잡한 금속 부품을 제작하는 주조 공법입니다. 복잡한 형상의 고정밀 금속 부품을 생산하기 위해 사용되며, <br />주로 항공, 자동차, 방산, 의료 기기 등 높은 품질과 정밀도가 요구되는 분야에서 사용됩니다."
        }
        btnYn={false}
        sectionBg={"var(--gray-1)"}
      >
        <span className={style.img_process_box}>
          <Image
            src={"/img/product/img_investment_casting_process.svg"}
            alt={"정밀주조 공정 이미지"}
            width={0}
            height={0}
          />
        </span>
      </SectionCommonLayout>

      {/* 탭 버튼 ------------------------------ */}
      <SectionCommonLayout
        sectionId={"productSection"}
        sectionClass={style.product_section}
        title={``}
        desc={``}
        btnYn={false}
        sectionBg={"var(--gray-1)"}
      >
        <div className={`flex_start ${style.btn_tab_box}`}>
          {itemArray.map((item: itemArrayType) => {
            return (
              <Btn
                key={`${item.item}_${item.tab}`}
                type={"button"}
                title={item.item}
                id={`btn${item.tab}`}
                btnSize={"xlg"}
                btnClassNm={`${style.btn_tab} ${
                  tab === item.tab ? style.active : ""
                }`}
                btnBg={
                  // tab === item.tab ? "var(--sub-yellow-1)" : "var(--gray-3)"
                  tab === item.tab ? "var(--white)" : "var(--gray-2)"
                }
                btnColor={
                  // tab === item.tab ? "var(--white)" : "var(--main-green-1)"
                  tab === item.tab ? "var(--black)" : "var(--main-green-1)"
                }
                btnType={"text"}
                hover={false}
                onClick={() => {
                  setTab(item.tab);
                }}
              />
            );
          })}
        </div>
      </SectionCommonLayout>

      {/* 탭 내용 ------------------------------ */}
      <SectionCommonLayout
        sectionId={"productDetailSection"}
        sectionClass={style.product_detail_section}
        title={``}
        desc={``}
        btnYn={false}
      >
        <div className={`flex_start ${style.item_detail}`}>
          {/* 각 탭 제목 */}
          {itemArray.map((item) => {
            return (
              <div
                key={item.tab}
                className={`flex_between ${style.title_box} ${
                  item.tab === tab ? style.active : ""
                }`}
              >
                <SectionTitle title={item.item} desc={item.desc} />

                <span className={`flex_center ${style.img_wax_tree_box}`}>
                  {item.img}
                </span>
              </div>
            );
          })}

          {/* 탭 상세 */}
          <div className={style.list_box}>
            {tab === "first" ? (
              <div className={style.first_box}>
                <div className={`flex_start ${style.type_inner}`}>
                  <div className={style.important_item}>
                    <p className={style.title}>
                      패턴 왁스 &#40;Non- filled pattern Wax&#41;
                    </p>
                    <span className={style.desc}>
                      정밀 주조 공정에서 원형의 모형을 만드는 왁스 부자재 중
                      하나로, 첨가제가 거의 포함되지 않은 순수한 왁스입니다.
                      높은 유동성과 낮은 점도, 매끄러운 표면 마감, 그리고
                      최소한의 잔류물로, 복잡한 형상의 패턴을 정밀하게 제작할 수
                      있습니다.
                    </span>

                    <span className={style.used}>
                      사용처 : 비행기, 자동차 선박, 의료기기 등 정밀 기계 부품과
                      고도의 정밀성이 요구되는 부품 제조
                    </span>
                  </div>
                  <div>
                    <p className={style.title}>
                      패턴 왁스 &#40;Filled pattern Wax&#41;
                    </p>
                    <span className={style.desc}>
                      큰 구조물이나 단순한 형상의 패턴을 제작 할 때, 필수적인
                      재료입니다. 높은 점도와 강도, 열적 안정성등의 특성 덕분에
                      이 왁스는 대형 주조 작업 에서 중요한 역할을 합니다.
                    </span>
                    <span className={style.used}>
                      사용처 : 엔진 블록, 대형 기계 부품, 구조물 등 주로 대형
                      제품이나 외부 충격 • 압력에 견뎌야하는 경우
                    </span>
                  </div>
                  <div>
                    <p className={style.title}>
                      재생 왁스 &#40;Re-Claim wax&#41;
                    </p>
                    <span className={style.desc}>
                      사용 후 왁스를 회수하여 정제 및 재생 공정을 통해 불순물을
                      제거하고, 필요한 물리적 특성을 복원하여 사용 가능하게 재
                      생산한 왁스입니다. 주조 과정에서 발생하는 폐기물을 줄이고
                      비용을 절감하여 원가 절감의 효과를 보실 수 있습니다.
                    </span>
                    <span className={style.used}>
                      사용처 : Filled wax 및 Non-filled wax와 유사한 용도로도
                      사용 가능
                    </span>
                  </div>
                  <div>
                    <p className={style.title}>
                      솔루블 왁스 &#40;Soluble wax&#41;
                    </p>
                    <span className={style.desc}>
                      물 또는 특정 용제에 용해 되는 특성을 가진 주조용
                      왁스입니다. 정밀한 구조와 복잡한 형상을 제작 할 때,
                      중자로써 높은 정밀도와 매끄러운 표면 마감을 제공하고
                      용제로 용해되는 특성으로 쉽게 제거 할 수 있어 매우 중요한
                      역할을 합니다.
                    </span>
                    <span className={style.used}> 사용처 : 중자용 왁스</span>
                  </div>
                  <div>
                    <p className={style.title}>
                      런너 왁스 &#40;Runner wax&#41;
                    </p>
                    <span className={style.desc}>
                      정밀 주조의 트리&#40;Tree&#41;를 구성할 때, 통로 역할을
                      하는 런너&#40;Runner&#41;에 사용되는 왁스입니다. 일반 패턴
                      왁스&#40;Non Filled & Filled&#41;와 비교하여, 평균적으로
                      낮은 용해점을 가지고 있어 탈 왁스&#40;De-waxing&#41;공정
                      시, 패턴 왁스보다 먼저 녹아 빠져나가 몰드&#40;Mould&#41;
                      속 잔류 왁스를 줄여 불량률 • 불순물을 줄여 줍니다.
                    </span>
                    <span className={style.used}>사용처 :</span>
                  </div>
                </div>
              </div>
            ) : tab === "sec" ? (
              <div className={style.sec_box}>
                <div className={`flex_start ${style.type_inner}`}>
                  <div>
                    <p className={style.title}>세척제 &#40;Wash_N_Etch&#41;</p>
                    <span className={style.desc}>
                      세라믹 코팅 시, 불량 발생을 유발하는 불순물이나 실리콘
                      오일, 기타 이형제등을 청소하는데 사용되는 안전한 생분해성
                      세척제 제품으로, d-limonene과 같은 천연 유효 성분을
                      함유하고 있습니다. <br />
                      또한, 불순물을 제거하는 동시에 나노 입자를 통해, 매우
                      미세한 에칭&#40;Etching&#41; 작업으로, 1차 세라믹의
                      접착력을 향상시켜 쉘 버클링 또는 리프팅 과 관련된 주조
                      결함율을 감소시켜 줍니다.
                    </span>
                    <span className={style.used}>사용처 :</span>
                  </div>
                  <div className={style.important_item}>
                    <p className={style.title}>
                      바인더 &#40;Colloidal Silica&#41;
                    </p>
                    <span className={style.desc}>
                      세라믹 코팅의 점착성을 향상시키고 주형의 안정성을 제공하는
                      중요한 재료로 핵심적인 역할을 합니다. <br />
                      2-100 밀리마이크론 사이즈의 Silica 입자가 20~30% 함유된
                      서스펜션&#40;Suspension&#41;용액으로, 음전하의 밀어내는
                      성질을 이용해 용액 내부에 부유하고 있습니다.
                    </span>
                    <span className={style.used}>
                      사용처 : Ceramic Slurry에 사용되는 용액
                    </span>
                  </div>

                  <div>
                    <p className={style.title}>
                      Primcote &#40;Primay용 바인더&#41;
                    </p>
                    <span className={style.desc}>
                      Primary 전용 바인더로, 습윤 및 거품 방지 특성을 가지고
                      있어 따로 첨가제를 사용하지 않아도 되며, 좋은 접착성과 긴
                      Slurry 수명을 제공합니다. 가장 널리 사용되는
                      &#39;Primary용&#39; 바인더 입니다.
                    </span>
                    <span className={style.used}>
                      사용처 : 티타늄 주조를 제외한 모든 Primary slurry
                    </span>
                  </div>

                  <div>
                    <p className={style.title}>
                      Customcote &#40;Back-up용 바인더&#41;
                    </p>
                    <span className={style.desc}>
                      Polymer와 습윤제, 안티폼을 함유하고 있으며, 코팅의 빠른
                      건조와 쉘의 유성동과 강도를 개선하고, 얇은 Shell을 만들어
                      사용량을 감소하는데 도 움을 줍니다.
                    </span>
                    <span className={style.used}>
                      사용처 : 모든 Back-up slurry
                    </span>
                  </div>

                  <div>
                    <p className={style.title}>
                      EHT-Binder &#40;Back-up용 바인더&#41;
                    </p>
                    <span className={style.desc}>
                      Customcote의 특성에서 높은 내화도 특성을 강조한
                      제품입니다.
                    </span>
                    <span className={style.used}>
                      사용처 : 높은 내화도를 요구하는 주조
                    </span>
                  </div>

                  <div>
                    <p className={style.title}>
                      Matrixcote &#40;Back-up용 바인더&#41;
                    </p>
                    <span className={style.desc}>
                      Customcote의 특성에서 높은 내화도 특성을 강조한
                      제품입니다.
                    </span>
                    <span className={style.used}>
                      사용처 : 높은 내화도를 요구하는 주조
                    </span>
                  </div>
                </div>
              </div>
            ) : tab === "thir" ? (
              <div className={style.thir_box}>
                <div className={`flex_start ${style.type_inner}`}>
                  <div>
                    <p className={style.title}>재생 왁스 (Re-Claim wax)</p>
                    <span className={style.desc}>
                      사용 후 왁스를 회수하여 정제 및 재생 공정을 통해 불순물을
                      제거하고, 필요한 물리적 특성을 복원하여 사용 가능하게 재
                      생산한 왁스입니다. 주조 과정에서 발생하는 폐기물을 줄이고
                      비용을 절감하여 원가 절감의 효과를 보실 수 있습니다.
                    </span>
                    <span className={style.used}>
                      사용처 : Filled wax 및 Non-filled wax와 유사한 용도로도
                      사용 가능
                    </span>
                  </div>
                  <div>
                    <p className={style.title}>솔루블 왁스 (Soluble wax)</p>
                    <span className={style.desc}>
                      물 또는 특정 용제에 용해 되는 특성을 가진 주조용
                      왁스입니다. 정밀한 구조와 복잡한 형상을 제작 할 때,
                      중자로써 높은 정밀도와 매끄러운 표면 마감을 제공하고
                      용제로 용해되는 특성으로 쉽게 제거 할 수 있어 매우 중요한
                      역할을 합니다.
                    </span>
                    <span className={style.used}> 사용처 : 중자용 왁스</span>
                  </div>
                  <div className={style.important_item}>
                    <p className={style.title}>런너 왁스 (Runner wax)</p>
                    <span className={style.desc}>
                      물 또는 특정 용제에 용해 되는 특성을 가진 주조용
                      왁스입니다. 정밀한 구조와 복잡한 형상을 제작 할 때,
                      중자로써 높은 정밀도와 매끄러운 표면 마감을 제공하고
                      용제로 용해되는 특성으로 쉽게 제거 할 수 있어 매우 중요한
                      역할을 합니다.
                    </span>
                    <span className={style.used}>사용처 :</span>
                  </div>
                </div>
              </div>
            ) : tab === "fourth" ? (
              <div className={style.fourth_box}>
                <div className={`flex_start ${style.type_inner}`}>
                  <div className={style.important_item}>
                    <p className={style.title}>
                      패턴 왁스 (Filled pattern Wax)
                    </p>
                    <span className={style.desc}>
                      큰 구조물이나 단순한 형상의 패턴을 제작 할 때, 필수적인
                      재료입니다. 높은 점도와 강도, 열적 안정성등의 특성 덕분에
                      이 왁스는 대형 주조 작업 에서 중요한 역할을 합니다.
                    </span>
                    <span className={style.used}>
                      사용처 : 엔진 블록, 대형 기계 부품, 구조물 등 주로 대형
                      제품이나 외부 충격 • 압력에 견뎌야하는 경우
                    </span>
                  </div>
                  <div>
                    <p className={style.title}>재생 왁스 (Re-Claim wax)</p>
                    <span className={style.desc}>
                      사용 후 왁스를 회수하여 정제 및 재생 공정을 통해 불순물을
                      제거하고, 필요한 물리적 특성을 복원하여 사용 가능하게 재
                      생산한 왁스입니다. 주조 과정에서 발생하는 폐기물을 줄이고
                      비용을 절감하여 원가 절감의 효과를 보실 수 있습니다.
                    </span>
                    <span className={style.used}>
                      사용처 : Filled wax 및 Non-filled wax와 유사한 용도로도
                      사용 가능
                    </span>
                  </div>
                  <div>
                    <p className={style.title}>솔루블 왁스 (Soluble wax)</p>
                    <span className={style.desc}>
                      물 또는 특정 용제에 용해 되는 특성을 가진 주조용
                      왁스입니다. 정밀한 구조와 복잡한 형상을 제작 할 때,
                      중자로써 높은 정밀도와 매끄러운 표면 마감을 제공하고
                      용제로 용해되는 특성으로 쉽게 제거 할 수 있어 매우 중요한
                      역할을 합니다.
                    </span>
                    <span className={style.used}> 사용처 : 중자용 왁스</span>
                  </div>
                  <div>
                    <p className={style.title}>런너 왁스 (Runner wax)</p>
                    <span className={style.desc}>
                      물 또는 특정 용제에 용해 되는 특성을 가진 주조용
                      왁스입니다. 정밀한 구조와 복잡한 형상을 제작 할 때,
                      중자로써 높은 정밀도와 매끄러운 표면 마감을 제공하고
                      용제로 용해되는 특성으로 쉽게 제거 할 수 있어 매우 중요한
                      역할을 합니다.
                    </span>
                    <span className={style.used}>사용처 :</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className={style.fifth_box}>
                <div className={`flex_start ${style.type_inner}`}>
                  <div className={style.important_item}>
                    <p className={style.title}>
                      패턴 왁스 (Non- filled pattern Wax)
                    </p>
                    <span className={style.desc}>
                      정밀 주조 공정에서 원형의 모형을 만드는 왁스 부자재 중
                      하나로, 첨가제가 거의 포함되지 않은 순수한 왁스입니다.
                      높은 유동성과 낮은 점도, 매끄러운 표면 마감, 그리고
                      최소한의 잔류물로, 복잡한 형상의 패턴을 정밀하게 제작할 수
                      있습니다.
                    </span>

                    <span className={style.used}>
                      사용처 : 비행기, 자동차 선박, 의료기기 등 정밀 기계 부품과
                      고도의 정밀성이 요구되는 부품 제조
                    </span>
                  </div>
                  <div>
                    <p className={style.title}>패턴 왁스</p>
                    <span className={style.desc}>
                      큰 구조물이나 단순한 형상의 패턴을 제작 할 때, 필수적인
                      재료입니다. 높은 점도와 강도, 열적 안정성등의 특성 덕분에
                      이 왁스는 대형 주조 작업 에서 중요한 역할을 합니다.
                    </span>
                    <span className={style.used}>
                      사용처 : 엔진 블록, 대형 기계 부품, 구조물 등 주로 대형
                      제품이나 외부 충격 • 압력에 견뎌야하는 경우
                    </span>
                  </div>
                  <div>
                    <p className={style.title}>재생 왁스</p>
                    <span className={style.desc}>
                      사용 후 왁스를 회수하여 정제 및 재생 공정을 통해 불순물을
                      제거하고, 필요한 물리적 특성을 복원하여 사용 가능하게 재
                      생산한 왁스입니다. 주조 과정에서 발생하는 폐기물을 줄이고
                      비용을 절감하여 원가 절감의 효과를 보실 수 있습니다.
                    </span>
                    <span className={style.used}>
                      사용처 : Filled wax 및 Non-filled wax와 유사한 용도로도
                      사용 가능
                    </span>
                  </div>
                  <div>
                    <p className={style.title}>솔루블 왁스</p>
                    <span className={style.desc}>
                      물 또는 특정 용제에 용해 되는 특성을 가진 주조용
                      왁스입니다. 정밀한 구조와 복잡한 형상을 제작 할 때,
                      중자로써 높은 정밀도와 매끄러운 표면 마감을 제공하고
                      용제로 용해되는 특성으로 쉽게 제거 할 수 있어 매우 중요한
                      역할을 합니다.
                    </span>
                    <span className={style.used}> 사용처 : 중자용 왁스</span>
                  </div>
                  <div>
                    <p className={style.title}>런너 왁스 (Runner wax)</p>
                    <span className={style.desc}>
                      물 또는 특정 용제에 용해 되는 특성을 가진 주조용
                      왁스입니다. 정밀한 구조와 복잡한 형상을 제작 할 때,
                      중자로써 높은 정밀도와 매끄러운 표면 마감을 제공하고
                      용제로 용해되는 특성으로 쉽게 제거 할 수 있어 매우 중요한
                      역할을 합니다.
                    </span>
                    <span className={style.used}>사용처 :</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionCommonLayout>
    </>
  );
}

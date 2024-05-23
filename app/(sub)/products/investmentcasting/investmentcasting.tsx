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
      desc: "정밀 주조 공정에서 코팅 전,금속 주조물의 원형을 만들 때 사용되는 부자재.",
      img: <Image src={"/"} alt={"왁스 이미지"} width={0} height={0} />,
      tab: "first",
    },
    {
      item: "세척제 & 바인더",
      desc: "왁스의 세척과 Ceramic Slurry를 만들 때 사용되는 재료.",
      img: <Image src={"/"} alt={"왁스 이미지"} width={0} height={0} />,
      tab: "sec",
    },
    {
      item: "주물사",
      desc: "제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.",
      img: <Image src={"/"} alt={"왁스 이미지"} width={0} height={0} />,
      tab: "thir",
    },
    {
      item: "첨가제",
      desc: "제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.",
      img: <Image src={"/"} alt={"왁스 이미지"} width={0} height={0} />,
      tab: "fourth",
    },
    {
      item: "기타",
      desc: "제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.",
      img: <Image src={"/"} alt={"왁스 이미지"} width={0} height={0} />,
      tab: "fifth",
    },
  ];

  const [tab, setTab] = useState<string>("first");

  useEffect(() => {
    const location = document.querySelector(`#${tab}`) as HTMLElement;

    // if (location) {
    //   window.scrollTo({
    //     top: location.offsetTop,
    //     behavior: "smooth",
    //   });
    // }
  }, [tab]);

  return (
    <>
      <SectionCommonLayout
        sectionId={""}
        title={""}
        desc={
          "정밀주조는 금속 제품을 제작하는 정밀한 주조 방법 중 하나이며, 복잡한 형상의 부품을 높은 정밀도로 생산하는 기술입니다. <br />이 공법은 주로 항공, 자동차, 방산, 의료 기기 등 높은 품질과 정밀도가 요구되는 분야에서 사용됩니다."
        }
        btnYn={false}
      />

      <SectionCommonLayout
        sectionId={"contItems"}
        title={`제품 정보`}
        desc={``}
        btnYn={false}
        sectionBg={`var(--gray-1)`}
      >
        <div className={`flex_start ${style.items}`}>
          {itemArray.map((item: itemArrayType) => {
            return (
              <CardIco
                key={`product_${item.item}_${item.tab}`}
                title={item.item}
                desc={item.desc}
                ico={item.img}
              >
                <Btn
                  type={"button"}
                  title={`자세히 보기`}
                  id={`btn${item.tab}`}
                  btnType={"text"}
                  hover={false}
                  // btnSize={'sm'}
                  onClick={() => {
                    setTab(item.tab);
                  }}
                />
              </CardIco>
            );
          })}
        </div>
      </SectionCommonLayout>

      <SectionCommonLayout
        sectionId={"contItemDetail"}
        title={itemArray.find((item) => item.tab === tab)?.item || ""}
        desc={``}
        btnYn={false}
      >
        <div className={`flex_start ${style.item_detail}`}>
          {tab === "first" ? (
            <>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>왁스-1</p>
                  <span className={style.desc}>왁스-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>왁스-1</p>
                  <span className={style.desc}>왁스-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>왁스-1</p>
                  <span className={style.desc}>왁스-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>왁스-1</p>
                  <span className={style.desc}>왁스-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>왁스-1</p>
                  <span className={style.desc}>왁스-1 detail</span>
                </div>
              </div>
            </>
          ) : tab === "sec" ? (
            <>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>세척제 & 바인더 -1</p>
                  <span className={style.desc}>세척제 & 바인더 -1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>세척제 & 바인더 -1</p>
                  <span className={style.desc}>세척제 & 바인더 -1 detail</span>
                </div>
              </div>
            </>
          ) : tab === "thir" ? (
            <>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>주물사-1</p>
                  <span className={style.desc}>주물사-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>주물사-1</p>
                  <span className={style.desc}>주물사-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>주물사-1</p>
                  <span className={style.desc}>주물사-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>주물사-1</p>
                  <span className={style.desc}>주물사-1 detail</span>
                </div>
              </div>
            </>
          ) : tab === "fourth" ? (
            <>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>첨가제-1</p>
                  <span className={style.desc}>첨가제-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>첨가제-1</p>
                  <span className={style.desc}>첨가제-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>첨가제-1</p>
                  <span className={style.desc}>첨가제-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>첨가제-1</p>
                  <span className={style.desc}>첨가제-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>첨가제-1</p>
                  <span className={style.desc}>첨가제-1 detail</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>기타-1</p>
                  <span className={style.desc}>기타-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>기타-1</p>
                  <span className={style.desc}>기타-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>기타-1</p>
                  <span className={style.desc}>기타-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>기타-1</p>
                  <span className={style.desc}>기타-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>기타-1</p>
                  <span className={style.desc}>기타-1 detail</span>
                </div>
              </div>
              <div>
                <span className={style.img_box}>img</span>
                <div>
                  <p className={style.title}>기타-1</p>
                  <span className={style.desc}>기타-1 detail</span>
                </div>
              </div>
            </>
          )}

          <Btn
            type={"button"}
            title={`제품 정보로 돌아가기`}
            id={`itemBtn`}
            btnType={"text"}
            hover={false}
            // btnSize={'sm'}
            onClick={() => {
              const location = document.querySelector(
                "#contItems"
              ) as HTMLElement;

              if (location) {
                window.scrollTo({
                  top: location.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          />
        </div>
      </SectionCommonLayout>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <SectionCommonLayout
        sectionId={"contItems"}
        title={`제품 정보`}
        desc={``}
        btnYn={false}
        sectionBg={`var(--gray-1)`}
      >
        <div className={style.tab}>
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
                    tab === item.tab ? "var(--sub-yellow-1)" : "var(--gray-3)"
                  }
                  btnColor={
                    tab === item.tab ? "var(--white)" : "var(--main-green-1)"
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

          <div className={`flex_start ${style.item_detail}`}>
            <SectionTitle
              title={itemArray.find((item) => item.tab === tab)?.item || ""}
              desc={itemArray.find((item) => item.tab === tab)?.desc || ""}
            />
            {tab === "first" ? (
              <>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>왁스-1</p>
                    <span className={style.desc}>왁스-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>왁스-1</p>
                    <span className={style.desc}>왁스-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>왁스-1</p>
                    <span className={style.desc}>왁스-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>왁스-1</p>
                    <span className={style.desc}>왁스-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>왁스-1</p>
                    <span className={style.desc}>왁스-1 detail</span>
                  </div>
                </div>
              </>
            ) : tab === "sec" ? (
              <>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>세척제 & 바인더 -1</p>
                    <span className={style.desc}>
                      세척제 & 바인더 -1 detail
                    </span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>세척제 & 바인더 -1</p>
                    <span className={style.desc}>
                      세척제 & 바인더 -1 detail
                    </span>
                  </div>
                </div>
              </>
            ) : tab === "thir" ? (
              <>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>주물사-1</p>
                    <span className={style.desc}>주물사-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>주물사-1</p>
                    <span className={style.desc}>주물사-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>주물사-1</p>
                    <span className={style.desc}>주물사-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>주물사-1</p>
                    <span className={style.desc}>주물사-1 detail</span>
                  </div>
                </div>
              </>
            ) : tab === "fourth" ? (
              <>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>첨가제-1</p>
                    <span className={style.desc}>첨가제-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>첨가제-1</p>
                    <span className={style.desc}>첨가제-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>첨가제-1</p>
                    <span className={style.desc}>첨가제-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>첨가제-1</p>
                    <span className={style.desc}>첨가제-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>첨가제-1</p>
                    <span className={style.desc}>첨가제-1 detail</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>기타-1</p>
                    <span className={style.desc}>기타-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>기타-1</p>
                    <span className={style.desc}>기타-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>기타-1</p>
                    <span className={style.desc}>기타-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>기타-1</p>
                    <span className={style.desc}>기타-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>기타-1</p>
                    <span className={style.desc}>기타-1 detail</span>
                  </div>
                </div>
                <div>
                  <span className={style.img_box}>img</span>
                  <div>
                    <p className={style.title}>기타-1</p>
                    <span className={style.desc}>기타-1 detail</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </SectionCommonLayout>

      <ScrollSection tab={itemArray}>
        <div id="first">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
        </div>
        <div id="sec">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>세척제 & 바인더 -1</p>
              <span className={style.desc}>세척제 & 바인더 -1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>세척제 & 바인더 -1</p>
              <span className={style.desc}>세척제 & 바인더 -1 detail</span>
            </div>
          </div>
        </div>
        <div id="thir">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>주물사-1</p>
              <span className={style.desc}>주물사-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>주물사-1</p>
              <span className={style.desc}>주물사-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>주물사-1</p>
              <span className={style.desc}>주물사-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>주물사-1</p>
              <span className={style.desc}>주물사-1 detail</span>
            </div>
          </div>
        </div>
        <div id="fourth">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
        </div>
        <div id="fifth">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
        </div>
      </ScrollSection>
    </>
  );
}

'use client';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import style from './investmentcasting.module.scss';
import CardIco from '@/component/common/CardIco/CardIco';
import { FaFacebook } from 'react-icons/fa';
import { Btn } from '@/component/common/Btn/Btn';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SectionTitle } from '@/component/common/SectionTitle/SectionTitle';
import ScrollSection, {
  itemArrayType,
} from '@/component/common/ScrollSection/ScrollSection';
import SectionMoreInfo from '@/component/common/SectionMoreInfo/SectionMoreInfo';

export default function Investmentcasting() {
  const itemArray: itemArrayType[] = [
    {
      item: '왁스',
      desc: '정밀 주조 공정에서 코팅 전, 금속 주조물의 원형을 만들 때 사용되는 부자재입니다.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'first',
    },
    {
      item: '세척제 & 바인더',
      desc: '왁스의 세척과 Ceramic Slurry를 만들 때 사용되는 재료입니다.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'sec',
    },
    {
      item: '세라믹',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'thir',
    },
    {
      item: '첨가제',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'fourth',
    },
    {
      item: '기타',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'fifth',
    },
  ];

  const [tab, setTab] = useState<string>('first');

  // useEffect(() => {
  //   const location = document.querySelector(`#${tab}`) as HTMLElement;

  //   // if (location) {
  //   //   window.scrollTo({
  //   //     top: location.offsetTop,
  //   //     behavior: "smooth",
  //   //   });
  //   // }
  // }, [tab]);

  return (
    <>
      <SectionCommonLayout
        sectionId={'descSection'}
        sectionClass={style.desc_section}
        title={''}
        desc={
          '정밀주조는 금속 제품을 제작하는 정밀한 주조 방법 중 하나이며, 복잡한 형상의 부품을 높은 정밀도로 생산하는 기술입니다. <br />이 공법은 주로 항공, 자동차, 방산, 의료 기기 등 높은 품질과 정밀도가 요구되는 분야에서 사용됩니다.'
        }
        btnYn={false}
        sectionBg={'var(--gray-1)'}
      >
        <span className={style.img_box}>공정도</span>
      </SectionCommonLayout>

      <SectionCommonLayout
        sectionId={'productSection'}
        sectionClass={style.product_section}
        title={``}
        desc={``}
        btnYn={false}
        sectionBg={'var(--gray-1)'}
      >
        <div className={`flex_start ${style.btn_tab_box}`}>
          {itemArray.map((item: itemArrayType) => {
            return (
              <Btn
                key={`${item.item}_${item.tab}`}
                type={'button'}
                title={item.item}
                id={`btn${item.tab}`}
                btnSize={'xlg'}
                btnClassNm={`${style.btn_tab} ${
                  tab === item.tab ? style.active : ''
                }`}
                btnBg={
                  // tab === item.tab ? "var(--sub-yellow-1)" : "var(--gray-3)"
                  tab === item.tab ? 'var(--white)' : 'var(--gray-2)'
                }
                btnColor={
                  // tab === item.tab ? "var(--white)" : "var(--main-green-1)"
                  tab === item.tab ? 'var(--black)' : 'var(--main-green-1)'
                }
                btnType={'text'}
                hover={false}
                onClick={() => {
                  setTab(item.tab);
                }}
              />
            );
          })}
        </div>
      </SectionCommonLayout>

      <SectionCommonLayout
        sectionId={'productDetailSection'}
        sectionClass={style.product_detail_section}
        title={``}
        desc={``}
        btnYn={false}
      >
        <div className={`flex_start ${style.item_detail}`}>
          {/* <div className={style.title_box}> */}
          <SectionTitle
            title={itemArray.find((item) => item.tab === tab)?.item || ''}
            desc={itemArray.find((item) => item.tab === tab)?.desc || ''}
          />
          {/* </div> */}
          {tab === 'first' ? (
            <div className={`flex_start ${style.list_box}`}>
              <div>
                {/* <span className={style.img_box}>img</span> */}
                <div>
                  <p className={style.title}>
                    패턴 왁스 (Non- filled pattern Wax)
                  </p>
                  <span className={style.desc}>
                    정밀 주조 공정에서 원형의 모형을 만드는 왁스 부자재 중
                    하나로, 첨가제가 거의 포함되지 않은 순수한 왁스입니다. 높은
                    유동성과 낮은 점도, 매끄러운 표면 마감, 그리고 최소한의
                    잔류물로, 복잡한 형상의 패턴을 정밀하게 제작할 수 있습니다.
                  </span>

                  <span className={style.desc}>
                    사용처 : 비행기, 자동차 선박, 의료기기 등 정밀 기계 부품과
                    고도의 정밀성이 요구되는 부품 제조
                  </span>
                </div>
              </div>
              <div>
                {/* <span className={style.img_box}>img</span> */}
                <div>
                  <p className={style.title}>패턴 왁스 (Filled pattern Wax)</p>
                  <span className={style.desc}>
                    큰 구조물이나 단순한 형상의 패턴을 제작 할 때, 필수적인
                    재료입니다. 높은 점도와 강도, 열적 안정성등의 특성 덕분에 이
                    왁스는 대형 주조 작업 에서 중요한 역할을 합니다.
                  </span>
                  <span className={style.desc}>
                    {' '}
                    사용처 : 엔진 블록, 대형 기계 부품, 구조물 등 주로 대형
                    제품이나 외부 충격 • 압력에 견뎌야하는 경우
                  </span>
                </div>
              </div>
              <div>
                {/* <span className={style.img_box}>img</span> */}
                <div>
                  <p className={style.title}>재생 왁스 (Re-Claim wax)</p>
                  <span className={style.desc}>
                    사용 후 왁스를 회수하여 정제 및 재생 공정을 통해 불순물을
                    제거하고, 필요한 물리적 특성을 복원하여 사용 가능하게 재
                    생산한 왁스입니다. 주조 과정에서 발생하는 폐기물을 줄이고
                    비용을 절감하여 원가 절감의 효과를 보실 수 있습니다.
                  </span>
                  <span className={style.desc}>
                    사용처 : Filled wax 및 Non-filled wax와 유사한 용도로도 사용
                    가능
                  </span>
                </div>
              </div>
              <div>
                {/* <span className={style.img_box}>img</span> */}
                <div>
                  <p className={style.title}>솔루블 왁스 (Soluble wax)</p>
                  <span className={style.desc}>
                    물 또는 특정 용제에 용해 되는 특성을 가진 주조용 왁스입니다.
                    정밀한 구조와 복잡한 형상을 제작 할 때, 중자로써 높은
                    정밀도와 매끄러운 표면 마감을 제공하고 용제로 용해되는
                    특성으로 쉽게 제거 할 수 있어 매우 중요한 역할을 합니다.
                  </span>
                  <span className={style.desc}> 사용처 : 중자용 왁스</span>
                </div>
              </div>
              <div>
                {/* <span className={style.img_box}>img</span> */}
                <div>
                  <p className={style.title}>런너 왁스 (Runner wax)</p>
                  <span className={style.desc}>
                    정밀 주조의 트리(Tree)를 구성할 때, 통로 역할을 하는
                    런너(Runner)에 사용되는 왁스입니다. 일반 패턴 왁스(Non
                    Filled & Filled)와 비교하여, 평균적으로 낮은 용해점을 가지고
                    있어 탈 왁스(De-waxing)공정 시, 패턴 왁스보다 먼저 녹아
                    빠져나가 몰드(Mould) 속 잔류 왁스를 줄여 불량률 • 불순물을
                    줄여 줍니다.
                  </span>
                  <span className={style.desc}>사용처 :</span>
                </div>
              </div>
            </div>
          ) : tab === 'sec' ? (
            <></>
          ) : tab === 'thir' ? (
            <></>
          ) : tab === 'fourth' ? (
            <></>
          ) : (
            <></>
          )}
        </div>
      </SectionCommonLayout>
      <SectionMoreInfo sectionBg={'var(--gray-1)'} />
    </>
  );
}

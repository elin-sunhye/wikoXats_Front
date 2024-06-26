'use client';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import style from './investmentcasting.module.scss';
import { Btn } from '@/component/common/Btn/Btn';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SectionTitle } from '@/component/common/SectionTitle/SectionTitle';
import ScrollSection, {
  itemArrayType,
} from '@/component/common/ScrollSection/ScrollSection';

export default function Investmentcasting() {
  // 탭 ------------------------------
  const [tab, setTab] = useState<string>('first');

  const itemArray: itemArrayType[] = [
    {
      item: '왁스',
      desc: '정밀 주조 공정에서 코팅 전, 금속 주조물의 원형을 만들 때 사용되는 부자재입니다. <br />주조 과정의 첫 단계로, 왁스를 사용해 주조하려는 부품의 정확한 모형을 제작합니다.',
      img: (
        <Image
          src={'/img/product/img_wax_tree.svg'}
          alt={'왁스 트리 이미지'}
          width={0}
          height={0}
        />
      ),
      tab: 'first',
    },
    {
      item: '세척제 & 바인더',
      desc: '왁스 표면의 오염을 제거하는데 사용하며, <br />Ceramic Slurry를 만들 때 사용하여 고온에서 모형을 안정화 시키는 역할을 합니다.',
      img: (
        <Image
          src={'/img/product/img_ceramic_slurry.svg'}
          alt={'세척제 & 바인더 이미지'}
          width={0}
          height={0}
        />
      ),
      tab: 'sec',
    },
    {
      item: '세라믹',
      desc: 'Slurry 제조 및 Stucco용 Sand & Flour 입니다. <br />일반적으로 비금속 소재로, 고온에서 안정성이 뛰어나며 화학적으로 내마모성이 높습니다.',
      img: (
        <Image
          src={'/img/product/img_ceramic.svg'}
          alt={'세라믹 이미지'}
          width={0}
          height={0}
        />
      ),
      tab: 'thir',
    },
    {
      item: '첨가제',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={'/'} alt={'첨가제 이미지'} width={0} height={0} />,
      tab: 'fourth',
    },
    {
      item: '기타',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <></>,
      // <Image src={"/"} alt={"기타 이미지"} width={0} height={0} />
      tab: 'fifth',
    },
  ];

  // 스크롤 ------------------------------
  const scrollArray: itemArrayType[] = [
    {
      item: '안다실 (Kephalite / Andalusite)',
      desc: '정밀 주조 공정에서 코팅 전,금속 주조물의 원형을 만들 때 사용되는 부자재.',
      img: <></>,
      tab: 'first',
    },
    {
      item: '세척제 & 바인더',
      desc: '왁스의 세척과 Ceramic Slurry를 만들 때 사용되는 재료.',
      img: <></>,
      tab: 'sec',
    },
    {
      item: '주물사',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <></>,
      tab: 'thir',
    },
    {
      item: '첨가제',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <></>,
      tab: 'fourth',
    },
    {
      item: '기타',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <></>,
      tab: 'fifth',
    },
  ];

  return (
    <>
      {/* 정밀주조 ------------------------------ */}
      <SectionCommonLayout
        sectionId={'descSection'}
        sectionClass={style.desc_section}
        title={'정밀주조'}
        desc={
          '매우 정교하고 복잡한 금속 부품을 제작하는 주조 공법입니다. 복잡한 형상의 고정밀 금속 부품을 생산하기 위해 사용되며, <br />주로 항공, 자동차, 방산, 의료 기기 등 높은 품질과 정밀도가 요구되는 분야에서 사용됩니다.'
        }
        btnYn={false}
        sectionBg={'var(--gray-1)'}
      >
        <span className={style.img_process_box}>
          <Image
            src={'/img/product/img_investment_casting_process.svg'}
            alt={'정밀주조 공정 이미지'}
            width={0}
            height={0}
          />
        </span>
      </SectionCommonLayout>

      {/* 탭 버튼 ------------------------------ */}
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

      {/* 탭 내용 ------------------------------ */}
      <SectionCommonLayout
        sectionId={'productDetailSection'}
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
                  item.tab === tab ? style.active : ''
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
            {tab === 'first' ? (
              <div className={style.first_box}>
                <div className={`flex_start ${style.type_inner}`}>
                  <div className={style.important_item}>
                    <div>
                      <p className={style.title}>
                        패턴 왁스 &#40;Non- filled pattern Wax&#41;
                      </p>
                      <span className={style.desc}>
                        정밀 주조 공정에서 원형의 모형을 만드는 왁스 부자재 중
                        하나로, 첨가제가 거의 포함되지 않은 순수한 왁스입니다.
                        높은 유동성과 낮은 점도, 매끄러운 표면 마감, 그리고
                        최소한의 잔류물로, 복잡한 형상의 패턴을 정밀하게 제작할
                        수 있습니다.
                      </span>
                    </div>

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
            ) : tab === 'sec' ? (
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
            ) : tab === 'thir' ? (
              <div className={style.thir_box}>
                {/* <ScrollSection tab={scrollArray}> */}
                <div className={`flex_start ${style.type_inner}`}>
                  <></>
                  <div>
                    <p className={style.title}>
                      안다실 &#40;Kephalite / Andalusite&#41;
                    </p>
                    <span className={style.desc}>
                      안다실은 Andalusite의 특별 등급으로 정밀 주조용 세라믹
                      몰드를 생산을 위해 특별히 설계된 제품입니다.
                      안달루사이트&#40;Al2O3•SiO2&#41;는 자연적으로 발생하는
                      Alumino Silicate입니다. 이 광물은 철강 산업 내화물로 널리
                      사용되며, 열 충격 저항성과 관련된 내화성을 가지고
                      있습니다. 안다실은 고순도 소성 Andalusite로, 1차
                      코트용으로 Zircon Silicate의 경제적인 대안으로 추천합니다.
                    </span>
                    <span className={style.used}>
                      물리적 특징 : 변형에 대한 저항력이 우수. 매우 우수한 하중
                      내화도, 낮은 열 팽창과 열 전도율, 우수한 화학적 안정성,
                      탁월한 열역학적 안정성,열 충격에 대한 탁월한 저항성,
                      산화저항.
                    </span>
                    <table className={style.detail_prod}>
                      <caption className="screen_out">제품 종류</caption>
                      <thead>
                        <tr>
                          <th>제품명</th>
                          <th>Grade</th>
                          <th>Bulk Density</th>
                          <th>Application</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Kephalite 100/200</td>
                          <td>
                            <p>Al2O3 : 60.6%</p>
                            <p>SiO2 : 37.9%</p>
                          </td>
                          <td>1.7g/cm3</td>
                          <td>Stucco</td>
                        </tr>
                        <tr>
                          <td>Kephalite KF55</td>
                          <td>
                            <p>Al2O3 : 60.6%</p>
                            <p>SiO2 : 37.9%</p>
                          </td>
                          <td>1.2 - 1.55g/cm3</td>
                          <td>Flour</td>
                        </tr>
                        {/* <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr> */}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <p className={style.title}>White Fused Alumina</p>
                    <span className={style.desc}>
                      Bauxite에서 ‘Bayer 공법’을 통해 알루미늄을 추출하여
                      생산합니다. 전기 아크로에서 약 2,050°C의 온도를 통해 하소
                      된 Bauxite를 알루미나로 제련하여 생산되며, 생산된 용융
                      알루미늄 산화물은 a- 산화알루미늄을 기반으로 한 합성 경질
                      광물입니다. 이 광물은 Mohs 9의 값을 가질 정도로 매우
                      단단합니다.
                    </span>
                    <span className={style.used}>
                      물리적 특징 : 높은 수준의 열 충격 저항, 낮고 안정적인 열
                      팽창, 화학적으로 매우 안정적이고 부식에 강함, 우수한
                      내마모성, 고밀도 및 저다공성, 고온에서 뛰어난 특성.
                    </span>

                    <table className={style.detail_prod}>
                      <caption className="screen_out">제품 종류</caption>
                      <thead>
                        <tr>
                          <th>제품명</th>
                          <th>Grade</th>
                          <th>Bulk Density</th>
                          <th>Application</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>WRG IC-200</td>
                          <td>
                            <p>Al2O3 : 99.7%</p>
                            <p>Na2O : 0.3%</p>
                          </td>
                          <td>3.98g/cm3</td>
                          <td>Primary & Back-up Slurry</td>
                        </tr>
                        <tr>
                          <td>WRG IC-325</td>
                          <td>
                            <p>Al2O3 : 99.7%</p>
                            <p>Na2O : 0.3%</p>
                          </td>
                          <td>3.98g/cm3</td>
                          <td>Primary & Back-up Slurry</td>
                        </tr>
                        <tr>
                          <td>ZWSK F100, F90, F80</td>
                          <td>
                            <p>Al2O3 : 99.7%</p>
                            <p>Na2O : 0.2%</p>
                          </td>
                          <td>3.98g/cm3</td>
                          <td>Stucco - Primary</td>
                        </tr>
                        <tr>
                          <td>ZWSK F100, F90, F80</td>
                          <td>
                            <p>Al2O3 : 86.3%</p>
                            <p>Na2O : 11.8%</p>
                          </td>
                          <td>3.55g/cm3</td>
                          <td>Flour - Primary</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={style.important_item}>
                    <p className={style.title}>
                      White Fused Mulite &#40;3Al2O3•2SiO2&#41;
                    </p>
                    <span className={style.desc}>
                      천연 형태로는 매우 희귀한 멀라이트&#40;Mulite&#41;는
                      다양한 규산알루미늄을 녹이거나 소성하여, 인공적으로
                      산업용으로 생산됩니다. 생성된 합성 멀라
                      이트&#40;Mulite&#41;의 뛰어난 열-기계적 특성과 안정성으로
                      인해 많은 내화물 및 주조 응용 분야에서 사용합니다. 강철 및
                      티타늄 합금 주조에 많이 사용합니다.
                    </span>
                    <span className={style.used}>
                      물리적 특징 : 우수한 크리프 저항성, 낮은 열팽창 &
                      열전도율, 우수한 화학적 안정성, 우수한 열-기계적 안정성,
                      우수한 열충격 저항, 낮은 다공성, 비교적 가벼움, 산화 저항.
                    </span>
                    <table className={style.detail_prod}>
                      <caption className="screen_out">제품 종류</caption>
                      <thead>
                        <tr>
                          <th>제품명</th>
                          <th>Grade</th>
                          <th>Bulk Density</th>
                          <th>Application</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>WFM 16/30</td>
                          <td>
                            <p>Al2O3 : 76.0%</p>
                            <p>SiO2 : 23.5%</p>
                          </td>
                          <td>3.05g/cm3</td>
                          <td>Stucco - Back-up</td>
                        </tr>
                        <tr>
                          <td>WFM 120mesh</td>
                          <td>
                            <p>Al2O3 : 76.0%</p>
                            <p>SiO2 : 23.5%</p>
                          </td>
                          <td>3.05g/cm3</td>
                          <td>Primary & Back-up Slurry</td>
                        </tr>
                        <tr>
                          <td>WFM IC-200</td>
                          <td>
                            <p>Al2O3 : 76.0%</p>
                            <p>SiO2 : 23.5%</p>
                          </td>
                          <td>3.05g/cm3</td>
                          <td>Primary & Back-up Slurry</td>
                        </tr>
                        <tr>
                          <td>WFM IC-325</td>
                          <td>
                            <p>Al2O3 : 76.0%</p>
                            <p>SiO2 : 23.5%</p>
                          </td>
                          <td>3.05g/cm3</td>
                          <td>Primary & Back-up Slurry</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <p className={style.title}>Molochite</p>
                    <span className={style.desc}>
                      Molochite 알루미노규산염은 영국 콘월에서 채굴하고 정제해
                      특별히 선발된 카올린의 하소에 의해 생성됩니다. 소성 공정은
                      약 60시간 소요되며, 제품은 소성 구역에서 24시간 이상
                      머무릅니다. 1,500°C까지 가열하여, 제품의 안정성, 일관성,
                      및 균일성을 보장합니다. 하소는 카올린 광물을 결 정질
                      실리카가 없는 멀라이트&#40;Mulite&#41; 결정과 무정형
                      규산질 유리의 혼합물로 변홥합니다.
                    </span>
                    <span className={style.used}>
                      물리적 특징 : 우수한 기계적 안정성, 우수한 화학적 안정성,
                      매우 낮은 열팽창, 우수한 열충격 저항, 탁월한 키잉 특성을
                      제공하는 거친 표면.
                    </span>
                    <table className={style.detail_prod}>
                      <caption className="screen_out">제품 종류</caption>
                      <thead>
                        <tr>
                          <th>제품명</th>
                          <th>Grade</th>
                          <th>Specific Gravity</th>
                          <th>Application</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Molochite 16-30dd</td>
                          <td>
                            <p>Al2O3 : 42.0%</p>
                            <p>SiO2 : 54.0%</p>
                          </td>
                          <td>2.7g/cm3</td>
                          <td>Stucco - Back-up</td>
                        </tr>
                        <tr>
                          <td>Molochite 30-80dd</td>
                          <td>
                            <p>Al2O3 : 42.0%</p>
                            <p>SiO2 : 54.0%</p>
                          </td>
                          <td>2.7g/cm3</td>
                          <td>Stucco - Intermediate</td>
                        </tr>
                        <tr>
                          <td>Molochite 50-80dd</td>
                          <td>
                            <p>Al2O3 : 42.0%</p>
                            <p>SiO2 : 54.0%</p>
                          </td>
                          <td>2.7g/cm3</td>
                          <td>Stucco - Intermediate & Primary</td>
                        </tr>
                        <tr>
                          <td>Molochite -200</td>
                          <td>
                            <p>Al2O3 : 42.0%</p>
                            <p>SiO2 : 54.0%</p>
                          </td>
                          <td>2.7g/cm3</td>
                          <td>Flour - Slurry(Back-up)</td>
                        </tr>
                        <tr>
                          <td>Molochite -120</td>
                          <td>
                            <p>Al2O3 : 42.0%</p>
                            <p>SiO2 : 54.0%</p>
                          </td>
                          <td>2.7g/cm3</td>
                          <td>Flour - Slurry(Back-up)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <p className={style.title}>
                      Chamotte &#40;Clayrac F41 & F47&#41;
                    </p>
                    <span className={style.desc}>
                      Bauxite에서 ‘Bayer 공법’을 통해 알루미늄을 추출하여
                      생산합니다. 전기 아크로에서 약 2,050°C의 온도를 통해 하소
                      된 Bauxite를 알루미나로 제련하여 생산되며, 생산된 용융
                      알루미늄 산화물은 a- 산화알루미늄을 기반으로 한 합성 경질
                      광물입니다. 이 광물은 Mohs 9의 값을 가질 정도로 매우
                      단단합니다.
                    </span>
                    <span className={style.used}>
                      물리적 특징 : 큰 하중 지지력, 높은 수준의 충격 저항, 열적
                      및 화학적 안정성.
                    </span>
                  </div>
                </div>
                {/* </ScrollSection> */}
              </div>
            ) : tab === 'fourth' ? (
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

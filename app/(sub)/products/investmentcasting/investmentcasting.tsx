'use client';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import style from './investmentcasting.module.scss';
import CardIco from '@/component/common/CardIco/CardIco';
import { FaFacebook } from 'react-icons/fa';
import { Btn } from '@/component/common/Btn/Btn';
import Image from 'next/image';
import { useState } from 'react';

interface itemArrayType {
  item: string;
  desc: string;
  img: JSX.Element;
  tab: number;
}

export default function Investmentcasting() {
  const itemArray: itemArrayType[] = [
    {
      item: '왁스',
      desc: '정밀 주조 공정에서 코팅 전,금속 주조물의 원형을 만들 때 사용되는 부자재.',
      img: <Image src={''} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 1,
    },
    {
      item: '세척제 & 바인더',
      desc: '왁스의 세척과 Ceramic Slurry를 만들 때 사용되는 재료.',
      img: <Image src={''} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 2,
    },
    {
      item: '주물사',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={''} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 3,
    },
    {
      item: '첨가제',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={''} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 4,
    },
    {
      item: '기 타',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={''} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 5,
    },
  ];

  const [tab, setTab] = useState<number>(1);
  return (
    <>
      <SectionCommonLayout
        sectionId={''}
        title={''}
        desc={
          '정밀주조는 금속 제품을 제작하는 정밀한 주조 방법 중 하나이며, 복잡한 형상의 부품을 높은 정밀도로 생산하는 기술입니다. 이 공법은 주로 항 공, 자동차, 방산, 의료 기기 등 높은 품질과 정밀도가 요구되는 분야에서 사용됩니다.'
        }
        btnYn={false}
      />

      <SectionCommonLayout
        sectionId={'contItems'}
        title={`제품 정보`}
        desc={``}
        btnYn={false}
        sectionBg={`var(--gray-1)`}
      >
        <div className={`flex_start ${style.items}`}>
          {itemArray.map((item: itemArrayType) => {
            return (
              <CardIco
                key={`${item.item}_${item.tab}`}
                title={item.item}
                desc={item.desc}
                ico={item.img}
              >
                <Btn
                  type={'button'}
                  title={`자세히 보기`}
                  id={`btn${item.tab}`}
                  btnType={'text'}
                  hover={false}
                  // btnSize={'sm'}
                  onClick={() => {
                    const location = document.querySelector(
                      '#contItemDetail'
                    ) as HTMLElement;

                    if (location) {
                      setTab(item.tab);
                      window.scrollTo({
                        top: location.offsetTop,
                        behavior: 'smooth',
                      });
                    }
                  }}
                />
              </CardIco>
            );
          })}
        </div>
      </SectionCommonLayout>

      <SectionCommonLayout
        sectionId={'contItemDetail'}
        title={itemArray.find((item) => item.tab === tab)?.item || ''}
        desc={``}
        btnYn={false}
      >
        <div className={style.item_detail}>
          {tab === 1 ? (
            <>왁스</>
          ) : tab === 2 ? (
            <>세척제 & 바인더</>
          ) : tab === 3 ? (
            <>주물사</>
          ) : tab === 4 ? (
            <>첨가제</>
          ) : (
            <>기타</>
          )}

          <Btn
            type={'button'}
            title={`목록`}
            id={`itemBtn`}
            btnType={'text'}
            hover={false}
            // btnSize={'sm'}
            onClick={() => {
              const location = document.querySelector(
                '#contItems'
              ) as HTMLElement;

              if (location) {
                window.scrollTo({
                  top: location.offsetTop,
                  behavior: 'smooth',
                });
              }
            }}
          />
        </div>
      </SectionCommonLayout>
    </>
  );
}

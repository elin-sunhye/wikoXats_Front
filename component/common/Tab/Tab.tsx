import { useEffect, useState } from 'react';
import style from './tab.module.scss';
import { TabBtnType } from '@/types/tabBtn';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; // basic
import 'swiper/swiper-bundle.css'; // basic
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

interface TabSwiperProps {
  tabInfo: TabBtnType[];
  tabBtnPosition?: 'center' | 'right';
  swiperParam?: Function;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * @tabBtnName : 탭버튼 배열 TabBtnType[]
 *
 * @tabBtnPosition ?: 탭버튼 위치 - 기본 left 정렬
 *
 * @children : 탭 컨텐츠 - 기본탭 탭버튼 갯수 = <div> 갯수
 */

export default function TabSwiper({
  tabInfo,
  tabBtnPosition,
  children,
}: TabSwiperProps) {
  // 기본 탭 버튼 클릭 시 active
  const [tabBtnSeq, setTabBtnSeq] = useState<number>(tabInfo[0].seq);

  return (
    <>
      {/* tabBtn */}
      <div
        className={style.tab_btn}
        style={
          tabBtnPosition
            ? tabBtnPosition === 'center'
              ? { margin: '0 auto' }
              : { marginLeft: 'auto' }
            : {}
        }
      >
        {tabInfo?.map((tabBtn: TabBtnType) => {
          return (
            <>
              <button
                key={tabBtn.seq}
                type={'button'}
                title={tabBtn.title}
                id={tabBtn.id}
                onClick={() => {
                  setTabBtnSeq(tabBtn.seq);
                }}
                className={tabBtnSeq === tabBtn.seq ? style.active : ''}
              >
                {tabBtn.title}
              </button>
            </>
          );
        })}
      </div>

      {/* tabCont */}
      {/* 선택된 탭에 따라 전달한 컴포넌트가 출력되는 부분 */}
      {tabInfo?.map((tabCont: TabBtnType, index: number) => {
        return (
          <div
            key={index}
            className={`${style.tab_cont} ${
              tabBtnSeq === tabCont.seq ? style.on : style.off
            }`}
          >
            {/* @ts-ignore */}
            {children?.length === 0 || children?.length === undefined
              ? children
              : // @ts-ignore
                children![index]}
          </div>
        );
      })}
    </>
  );
}

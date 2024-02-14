'use client';

import style from './newsSubVisual.module.scss';
import './swiper.scss';
import SubTop from '@/component/common/Sub/SubTop/SubTop';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; //basic
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Controller,
} from 'swiper/modules';
import { TabBtnType } from '@/types/tabBtn';
import { useEffect, useState } from 'react';

interface NewsSubVisualProps {}

export default function NewsSubVisual({}: NewsSubVisualProps) {
  const tabInfos: TabBtnType[] = [
    {
      seq: 1,
      title: '1',
      id: 'strength1',
    },
    {
      seq: 2,
      title: '2',
      id: 'strength2',
    },
    {
      seq: 3,
      title: '3',
      id: 'strength3',
    },
    {
      seq: 4,
      title: '4',
      id: 'strength4',
    },
    {
      seq: 5,
      title: '5',
      id: 'strength5',
    },
  ];

  // swiper setting
  const [swiper, setSwiper] = useState<number>(0);
  const swiperParams: any = {
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y,
      Controller,
      Autoplay,
      Controller,
    ],
    slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
    slidesOffsetAfter: 0, // 슬라이드 끝 부분 여백
    spaceBetween: 0, // 슬라이드 사이 여백

    slidesPerView: 1, //  한 슬라이드에 보여줄 개수

    initialSlide: 0, // 시작 위치 값
    centeredSlides: true, // center 정렬
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      // 페이징 적용
      el: '.swiper-pagination', // 페이저 버튼 클래스명
      clickable: true, // 버튼 클릭 여부
      type: 'bullets', // 버튼 모양 결정, bullets, fraction
      renderBullet: function (index: number, className: string) {
        return (
          `<button type="button" title="` +
          tabInfos[index].title +
          `" id="` +
          tabInfos[index].id +
          `" class="` +
          className +
          `">` +
          tabInfos[index].title +
          '</button>'
        );
      },
    },
    allowTouchMove: false, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
  };

  return (
    <SubTop
      title={`위코가 제공하는<br />완전히 새로운 방식의 제품`}
      desc={`국내 유일하게 SKP와 롯데 두 대기업의 고객 행동 데이터를 포함한 풍부한 온·오프라인 통합 DMP를 활용,<br />5대 BIG 매체에서도 할 수 없었던 초정밀 타겟팅 광고가 가능합니다`}
    >
      <div className={style.sub_top_cont_box}>
        <div className={`swiper-progressbar ${style.swiper_progressbar}`}>
          <span className={style['width_' + swiper]}></span>
        </div>

        <div className={`flex_between ${style.swiper_box}`}>
          <div className={`swiper-pagination flex_between ${style.left}`}></div>

          <div className={style.right}>
            <Swiper
              {...swiperParams}
              onActiveIndexChange={(idx) => {
                setSwiper(idx.activeIndex);
              }}
            >
              <SwiperSlide className={style.count_box}>a1</SwiperSlide>
              <SwiperSlide className={style.count_box}>a2</SwiperSlide>
              <SwiperSlide className={style.count_box}>a3</SwiperSlide>
              <SwiperSlide className={style.count_box}>a4</SwiperSlide>
              <SwiperSlide className={style.count_box}>a5</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </SubTop>
  );
}

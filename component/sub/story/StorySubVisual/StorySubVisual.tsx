'use client';

import style from './storySubVisual.module.scss';
import SubTop from '@/component/common/Sub/SubTop/SubTop';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { Btn } from '@/component/common/Btn/Btn';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; // basic
import 'swiper/swiper-bundle.css'; // basic
import 'swiper/css/navigation';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

interface SubVisualProps {}

export default function StorySubVisual({}: SubVisualProps) {
  // swiper setting
  const swiperParams: any = {
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y,
      Autoplay,
      EffectCoverflow,
    ],
    slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
    slidesOffsetAfter: 0, // 슬라이드 끝 부분 여백
    spaceBetween: 10, // 슬라이드 사이 여백

    slidesPerView: 2, //  한 슬라이드에 보여줄 개수

    initialSlide: 0, // 시작 위치 값
    centeredSlides: true, // center 정렬

    loop: true, // 슬라이드 반복 여부
    loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정

    autoplay: {
      // 자동 슬라이드 설정 , 비 활성화 시 false
      delay: 5000, // 시간 설정
      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },

    // 슬라이드 효과에 따른 옵션
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      rotate: 0, // 양 옆 슬라이드 회전 각도
      depth: 0, // 양 옆 슬라이드가 얼마나 뒤에 있냐
      slideShadows: false, // 양 옆 슬라이드 위에 그림자
      stretch: 0,
      modifier: 0,
    },
  };

  return (
    <SubTop
    // title={`다양한 캠페인 집행부터<br />인사이트 분석까지`}
    // desc={`국내 최대 규모의 행동 데이터와 다양한 미디어로<br />개인 맞춤형 타겟팅 광고를 경험해보세요`}
    // mainPadding={false}
    >
      <Swiper {...swiperParams} className={style.swiper}>
        <SwiperSlide>
          <div className={`flex_center ${style.slide_box}`}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex_center ${style.slide_box}`}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex_center ${style.slide_box}`}>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex_center ${style.slide_box}`}>Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex_center ${style.slide_box}`}>Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex_center ${style.slide_box}`}>Slide 6</div>
        </SwiperSlide>
        <Btn
          type={`button`}
          title={`이전 슬라이드 버튼`}
          id={`swiperButtonPrev`}
          className={`swiper-button-prev ${style.swiper_button_prev}`}
          btnType={'ico'}
          ico={
            <HiOutlineChevronLeft
              role={`img`}
              aria-label={`왼쪽 화살표 아이콘`}
            />
          }
          hover={false}
        />

        <Btn
          type={`button`}
          title={`다음 슬라이드 버튼`}
          id={`swiperButtonNext`}
          className={`swiper-button-next ${style.swiper_button_next}`}
          btnType={'ico'}
          ico={
            <HiOutlineChevronRight
              role={`img`}
              aria-label={`오른쪽 화살표 아이콘`}
            />
          }
          hover={false}
        />
      </Swiper>
    </SubTop>
  );
}

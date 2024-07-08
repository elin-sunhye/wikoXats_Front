'use client';

import style from './sectionSimpleIntro.module.scss';
import { HiOutlineChevronRight } from 'react-icons/hi';
import SectionVarticalLayout from '@/component/common/SectionVarticalLayout/SectionVarticalLayout';

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

export default function SectionSimpleIntro({}) {
  // swiper setting
  const swiperParams2: any = {
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y,
      EffectCoverflow,
      Autoplay,
    ],
    direction: 'vertical', // 가로 세로 슬라이드
    slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
    slidesOffsetAfter: 0, // 슬라이드 끝 부분 여백
    spaceBetween: 0, // 슬라이드 사이 여백

    slidesPerView: 1, //  한 슬라이드에 보여줄 개수

    initialSlide: 0, // 시작 위치 값
    centeredSlides: true, // center 정렬

    loop: true, // 슬라이드 반복 여부
    loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정

    autoplay: {
      // 자동 슬라이드 설정 , 비 활성화 시 false
      delay: 2000, // 시간 설정
      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    allowTouchMove: false, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
  };

  return (
    <SectionVarticalLayout
      title={`빅데이터를 활용한<br />맞춤형 오디언스 세그먼트`}
      desc={`SK 플래닛부터 롯데 딥애드의 빅데이터를 활용, 자체 기술력으로 개발한<br />스마트 오디언스 플랫폼을 통해 캠페인 맞춤형 오디언스 세그먼트를 생성합니다`}
      btnYn={false}
      reverse={true}
      sectionBg={`var(--gray-1)`}
    >
      <div className={`flex_end ${style.right_cont}`}>
        <div className={`flex_start ${style.swiper_box}`}>
          <Swiper {...swiperParams2} className={`${style.swiper_vertical}`}>
            <SwiperSlide>
              <div className={`flex_center ${style.slide_box}`}>Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`flex_center ${style.slide_box} ${style.color}`}>
                Slide 2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`flex_center ${style.slide_box}`}>Slide 3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`flex_center ${style.slide_box} ${style.point}`}>
                Slide 4
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`flex_center ${style.slide_box} ${style.color}`}>
                Slide 5
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`flex_center ${style.slide_box}`}>Slide 6</div>
            </SwiperSlide>
          </Swiper>

          <Swiper {...swiperParams2} className={`${style.swiper_vertical}`}>
            <SwiperSlide>
              <div className={`flex_center ${style.slide_box} ${style.color}`}>
                Slide 1
              </div>
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
              <div className={`flex_center ${style.slide_box} ${style.point}`}>
                Slide 5
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`flex_center ${style.slide_box} ${style.color}`}>
                Slide 6
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <HiOutlineChevronRight
          role={`img`}
          aria-label={`오른쪽 화살표 아이콘`}
          className={style.ico_right}
        />
        <div className={`flex_center ${style.right_cont_result}`}>asdasd</div>
      </div>
    </SectionVarticalLayout>
  );
}

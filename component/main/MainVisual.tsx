'use client';

// import main_style from "../main.module.scss";
import style from './mainVisual.module.scss';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineCursorClick,
} from 'react-icons/hi';
import Image from 'next/image';
import { BtnLink } from '@/component/common/BtnLink/BtnLink';
import { FiArrowRight } from 'react-icons/fi';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; //basic
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Btn } from '../common/Btn/Btn';

export default function MainVisual() {
  // swiper setting
  const swiperParams = {
    // https://swiperjs.com/react
    modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
    slidesOffsetAfter: 0, // 슬라이드 끝 부분 여백
    spaceBetween: 10, // 슬라이드 사이 여백

    slidesPerView: 1, //  한 슬라이드에 보여줄 개수

    initialSlide: 0, // 시작 위치 값
    centeredSlides: true, // center 정렬

    loop: true, // 슬라이드 반복 여부
    loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정

    autoplay: {
      // 자동 슬라이드 설정 , 비 활성화 시 false, true 설정 시   import {Autoplay from "swiper/modules" 추가
      delay: 3000, // 시간 설정
      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },

    // direction: "horizontal", // 가로 세로 슬라이드 : height 설정 필수

    // pagination: {
    //   // 페이징 적용
    //   el: ".pagination", // 페이저 버튼 클래스명
    //   clickable: true, // 버튼 클릭 여부
    //   type: "bullets", // 버튼 모양 결정, bullets, fraction
    //   renderBullet: function (index: number, className: string) {
    //    return '<span class="' + className + '">' + (index + 1) + "</span>";
    //   },
    // },

    // scrollbar : { // 스크롤바 적용
    // el: '.swiper-scrollbar',
    // draggable: true,
    // },

    //allowTouchMove: true, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능

    // breakpoints: {
    //   // 반응형 설정
    //   1024: {
    //     slidesPerView: 3,
    //   },
    //   640: {
    //     slidesPerView: 2,
    //   },
    // },

    // onbeforeinput: (swiper: any) => {
    //   swiper.params.navigation.prevEl = "swiper-button-prev";
    //   swiper.params.navigation.nextEl = "swiper-button-next";
    //   swiper.navigation.update();
    // },
  };

  // mvArray
  const mvArray = ['/img/img_main_visual_1.svg'];

  return (
    <main id={style.mainVisual} className="flex_center">
      <Swiper className={style.swiper_box} {...swiperParams}>
        {mvArray.map((img: string, index: number) => {
          return (
            <SwiperSlide key={`mv_${index}`}>
              {/* <Image
                src={img}
                alt={`mv_${index}_이미지`}
                width={0}
                height={0}
                className={style.img}
              /> */}
              <span className={style.swiper_bg}></span>
            </SwiperSlide>
          );
        })}

        <Btn
          type={`button`}
          title={`이전 슬라이드 버튼`}
          id={`swiperButtonPrev`}
          className={`swiper-button-prev`}
          btnType={'ico'}
          btnBg={'transparent'}
          btnColor={'var(--black)'}
          btnSize={'xlg'}
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
          className={`swiper-button-next`}
          btnType={'ico'}
          btnBg={'transparent'}
          btnColor={'var(--black)'}
          btnSize={'xlg'}
          ico={
            <HiOutlineChevronRight
              role={`img`}
              aria-label={`오른쪽 화살표 아이콘`}
            />
          }
          hover={false}
        />
      </Swiper>
      <div className={`wrap flex_start ${style.main_visual_wrap}`}>
        <h2>
          {/* <h2 className={'pc_title'}> */}
          주물 • 주조 및 산업 부자재
          <p>
            {/* 주물 • 주조 및 산업 부자재
            <HiOutlineCursorClick
              role={`img`}
              aria-label={`포인트 커서 아이콘`}
              className={style.ico_cursor}
            /> */}
          </p>
          전문 기업
        </h2>

        {/* <h2 className={'mo_title'}>
          혁신적인 기술로 세상을 바꾸는 서비스, 함께 미래를 만들어가요!
        </h2> */}
        <p>
          세계적인 기술과 다양한 경험을 바탕으로 <br />
          귀사의 주조 환경에 알맞은 기술을 서비스 합니다.
        </p>
        <BtnLink
          title={`문의하기`}
          id={`contact`}
          href={`/contact`}
          icoPosition="right"
          ico={
            <FiArrowRight role={`img`} aria-label={`오른쪽 화살표 아이콘`} />
          }
          hover={true}
        />
      </div>
    </main>
  );
}

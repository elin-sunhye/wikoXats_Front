"use client";

import style from "./sectionService.module.scss";
import Card from "@/component/common/Card/Card";
import SectionCommonLayout from "@/component/common/SectionCommonLayout/SectionCommonLayout";
import { Btn } from "@/component/common/Btn/Btn";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

// react-swiper
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; //basic
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

export default function SectionProdect() {
  const cardItems: {
    title: string;
    desc: string;
    imgSrc: string;
    imgAlt: string;
  }[] = [
    {
      title: "Primary, Back-up 전용 바인더",
      desc: "각 공정에 전문적으로 맞춘 제품부터 강종 별로 Slurry의 품질을 향상 시킬 수 잇는 바인더까지 다양하게 구비되어 있습니다.",
      imgSrc: `/`,
      imgAlt: `#`,
    },
    {
      title: "다양한 광물의 코팅제",
      desc: "고온의 공정을 통해, 낮은 불순물과 분진, 높은 내화도를 자랑하며, 일정한 Particle size distribution을 제공합니다.",
      imgSrc: `/`,
      imgAlt: `#`,
    },
    {
      title: "산업용 패턴 왁스",
      desc: "고품질의 Filled & Unfilled Pattern wax와 Runner wax, 그리고 중자용 Soluble wax.",
      imgSrc: `/`,
      imgAlt: `#`,
    },
    {
      title: "2Primary, Back-up 전용 바인더",
      desc: "각 공정에 전문적으로 맞춘 제품부터 강종 별로 Slurry의 품질을 향상 시킬 수 잇는 바인더까지 다양하게 구비되어 있습니다.",
      imgSrc: `/`,
      imgAlt: `#`,
    },
    {
      title: "2다양한 광물의 코팅제",
      desc: "고온의 공정을 통해, 낮은 불순물과 분진, 높은 내화도를 자랑하며, 일정한 Particle size distribution을 제공합니다.",
      imgSrc: `/`,
      imgAlt: `#`,
    },
    {
      title: "2산업용 패턴 왁스",
      desc: "고품질의 Filled & Unfilled Pattern wax와 Runner wax, 그리고 중자용 Soluble wax.",
      imgSrc: `/`,
      imgAlt: `#`,
    },
  ];

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
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
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

    breakpoints: {
      // 반응형 설정
      1024: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
    },

    // onbeforeinput: (swiper: any) => {
    //   swiper.params.navigation.prevEl = "swiper-button-prev";
    //   swiper.params.navigation.nextEl = "swiper-button-next";
    //   swiper.navigation.update();
    // },
  };

  return (
    <SectionCommonLayout
      sectionId={"contStrength"}
      sectionBg={`var(--gray-1)`}
      title={`다양한 제품으로 <br />당신의 필요를 만족시키세요.`}
      desc={`코팅에 필요한 모래부터, 바인더, 소포제, 계면활성제, 왁스 등 다양한 고 품질의 제품들을 이용 해 보세요.`}
      btnYn={true}
      btnTitle={`제품 더 보기`}
      btnId={`viewMore`}
      btnHref={`/contact`}
      btnIcoPosition={`right`}
      btnIco={<FiArrowRight role={`img`} aria-label={`오른쪽 화살표 아이콘`} />}
      btnColorStyle={{
        backgroundColor: "transparent",
        border: "0.1rem solid var(--white)",
      }}
      btnHover={true}
    >
      <div className={`flex_between ${style.product_box}`}>
        <Swiper {...swiperParams}>
          {cardItems.map(
            (
              item: {
                title: string;
                desc: string;
                imgSrc: string;
                imgAlt: string;
              },
              index: number
            ) => {
              return (
                <SwiperSlide
                  key={`${item.title}_${index}`}
                  style={{ opacity: "1" }}
                >
                  <Card
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    cardBg="var(--white)"
                    imgYn="top"
                    imgSrc=""
                    imgAlt=""
                    imgBg="var(--main-green-1)"
                  />
                </SwiperSlide>
              );
            }
          )}
          <Btn
            type={`button`}
            title={`이전 슬라이드 버튼`}
            id={`swiperButtonPrev`}
            className={`swiper-button-prev`}
            btnType={"ico"}
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
            btnType={"ico"}
            ico={
              <HiOutlineChevronRight
                role={`img`}
                aria-label={`오른쪽 화살표 아이콘`}
              />
            }
            hover={false}
          />
        </Swiper>
      </div>
    </SectionCommonLayout>
  );
}

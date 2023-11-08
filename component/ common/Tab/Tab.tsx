import { useEffect, useState } from "react";
import style from "./tab.module.scss";
import { TabBtnType } from "@/types/tabBtn";

// react-swiper
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; // basic
import "swiper/swiper-bundle.css"; // basic
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

interface TabSwiperProps {
  tabInfo: TabBtnType[];
  tabBtnPosition?: "center" | "right";
  type?: "swiper";
  swiperParam?: Function;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * @tabBtnName : 탭버튼 배열 TabBtnType[]
 *
 * @tabBtnPosition ?: 탭버튼 위치 - 기본 left 정렬
 *
 * @type ?: 탭 종류 - 기본/swiper
 *
 * @swiperParam ?: 탭 종류가 swiper이면 swiperParams 전달
 *
 * @children : 탭 컨텐츠 - 기본탭 탭버튼 갯수 = <div> 갯수 / 스와이퍼탭 탭버튼 갯수 = <SwiperSlide> 갯수 (<div>는 하나 또는 없어도 됨)
 */

export default function TabSwiper({
  tabInfo,
  tabBtnPosition,
  type,
  swiperParam,
  children,
}: TabSwiperProps) {
  // swiper setting
  const swiperParams: any = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
    slidesOffsetAfter: 0, // 슬라이드 끝 부분 여백
    spaceBetween: 0, // 슬라이드 사이 여백

    slidesPerView: 1, //  한 슬라이드에 보여줄 개수

    initialSlide: 0, // 시작 위치 값
    centeredSlides: true, // center 정렬

    pagination: {
      // 페이징 적용
      el: ".swiper-pagination", // 페이저 버튼 클래스명
      clickable: true, // 버튼 클릭 여부
      type: "bullets", // 버튼 모양 결정, bullets, fraction
      renderBullet: function (index: number, className: string) {
        console.log("tabInfo[index]", tabInfo[index]);
        return (
          `<button type="button" title="` +
          tabInfo[index].title +
          `" id="` +
          tabInfo[index].id +
          `" class="` +
          className +
          `">` +
          tabInfo[index].title +
          "</button>"
        );
      },
    },

    allowTouchMove: false, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
  };

  // swiperParams
  useEffect(() => {
    if (swiperParam) {
      swiperParam(swiperParams);
    }
  }, []);

  // swiper 연동
  // swiperParams.controller.control = ;
  //  galleryThumbs.controller.control = galleryTop;

  // 기본 탭 버튼 클릭 시 active
  const [tabBtnSeq, setTabBtnSeq] = useState<number>(tabInfo[0].seq);

  return (
    <>
      {/* tabBtn */}
      {type && type === "swiper" ? (
        <div
          className={`swiper-pagination ${style.swiper_pagination}`}
          style={
            tabBtnPosition
              ? tabBtnPosition === "center"
                ? { margin: "0 auto" }
                : { marginLeft: "auto" }
              : {}
          }
        ></div>
      ) : (
        <div
          className={style.tab_btn}
          style={
            tabBtnPosition
              ? tabBtnPosition === "center"
                ? { margin: "0 auto" }
                : { marginLeft: "auto" }
              : {}
          }
        >
          {tabInfo?.map((tabBtn: TabBtnType) => {
            return (
              <>
                <button
                  key={tabBtn.seq}
                  type={"button"}
                  title={tabBtn.title}
                  id={tabBtn.id}
                  onClick={() => {
                    setTabBtnSeq(tabBtn.seq);
                  }}
                  className={tabBtnSeq === tabBtn.seq ? style.active : ""}
                >
                  {tabBtn.title}
                </button>
              </>
            );
          })}
        </div>
      )}

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

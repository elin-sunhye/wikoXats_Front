'use client';

import style from './sectionStrong.module.scss';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import { TabBtnType } from '@/types/tabBtn';
import { useEffect, useState } from 'react';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; // basic
import 'swiper/swiper-bundle.css'; // basic
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

interface SectionStrongProps {}
export default function SectionStrong({}: SectionStrongProps) {
  const tabInfos: TabBtnType[] = [
    {
      seq: 1,
      title: '강점 1',
      id: 'strength1',
    },
    {
      seq: 2,
      title: '강점 2',
      id: 'strength2',
    },
    {
      seq: 3,
      title: '강점 3',
      id: 'strength3',
    },
  ];

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
    <SectionCommonLayout
      sectionId={'contStrength'}
      title={`이미지와 비디오를 아우르는<br />폭넓고 다채로운 지면`}
      desc={`네이티브, 전면배너, 띠 · 중간 배너를 아우르는 이미지 광고와<br />인스트림과 아웃스트림 비디오 광고까지, 폭 넓고 다양한 광고 경험을 만나 보세요`}
      btnYn={false}
    >
      <div className={`flex_between ${style.strength_box}`}>
        <div className={`swiper-pagination ${style.swiper_pagination}`}></div>
        <Swiper {...swiperParams} className={style.left}>
          <SwiperSlide>asdasd</SwiperSlide>
          <SwiperSlide>asdasd</SwiperSlide>
          <SwiperSlide>asdasd</SwiperSlide>
        </Swiper>
        <div className={`flex_center ${style.right}`}>
          <Swiper {...swiperParams}>
            <SwiperSlide>123123</SwiperSlide>
            <SwiperSlide>123123</SwiperSlide>
            <SwiperSlide>123123</SwiperSlide>
          </Swiper>
          <Swiper {...swiperParams}>
            <SwiperSlide>ㅁㄴㅇㅁㄴㅇ</SwiperSlide>
            <SwiperSlide>ㅁㄴㅇㅁㄴㅇ</SwiperSlide>
            <SwiperSlide>ㅁㄴㅇㅁㄴㅇ</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </SectionCommonLayout>
  );
}

'use client';

import style from './sectionStrong.module.scss';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import Tab from '@/component/common/Tab/Tab';
import { TabBtnType } from '@/types/tabBtn';
import { useEffect, useState } from 'react';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; // basic
import 'swiper/swiper-bundle.css'; // basic
import 'swiper/css/navigation';

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

  // swiprtParams
  const [swiperParams, setSwiperParams] = useState<any>({});

  return (
    <SectionCommonLayout
      sectionId={'contStrength'}
      title={`이미지와 비디오를 아우르는<br />폭넓고 다채로운 지면`}
      desc={`네이티브, 전면배너, 띠 · 중간 배너를 아우르는 이미지 광고와<br />인스트림과 아웃스트림 비디오 광고까지, 폭 넓고 다양한 광고 경험을 만나 보세요`}
      btnYn={false}
    >
      <Tab
        tabInfo={tabInfos}
        tabBtnPosition={`center`}
        type={`swiper`}
        swiperParam={(params: any) => {
          // console.log("params", params);
          setSwiperParams(params);
        }}
      >
        <div className={`flex_between ${style.strength_tab_cont}`}>
          <Swiper {...swiperParams} className={style.strength_tab_cont_left}>
            <SwiperSlide>asdasd</SwiperSlide>
            <SwiperSlide>asdasd</SwiperSlide>
            <SwiperSlide>asdasd</SwiperSlide>
          </Swiper>
          <div className={`flex_center ${style.strength_tab_cont_right}`}>
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
      </Tab>

      {/* <Tab tabInfo={tabInfos} tabBtnPosition={`center`}>
        <div className={`flex_between ${style.strength_tab_cont}`}>
          <div className={style.strength_tab_cont_left}>ㅁㄴㅇㄴㅁㅇ</div>
          <div className={`flex_center ${style.strength_tab_cont_right}`}>
            123123
          </div>
        </div>

        <div className={`flex_between ${style.strength_tab_cont}`}>
          <div className={style.strength_tab_cont_left}>ㅁㄴㅇㄴㅁㅇ</div>
          <div className={`flex_center ${style.strength_tab_cont_right}`}>
            asd
          </div>
        </div>

        <div className={`flex_between ${style.strength_tab_cont}`}>
          <div className={style.strength_tab_cont_left}>ㅁㄴㅇㄴㅁㅇ</div>
          <div className={`flex_center ${style.strength_tab_cont_right}`}>
            xcvsdg
          </div>
        </div>
      </Tab> */}
    </SectionCommonLayout>
  );
}

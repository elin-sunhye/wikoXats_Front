"use client";

import React, { useEffect, useState } from "react";
import header_style from "./header.module.scss";
import { Gnb } from "./Gnb/Gnb";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

interface HeaderProps {}

/**
 * Primary UI component for user interaction
 */
export const Header = ({}: HeaderProps) => {
  //AOS 초기화
  useEffect(() => {
    AOS.init();
  });

  // 스크롤 이벤트
  // 스크롤이 5px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 5px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 5) {
      setScroll(true);
    } else {
      // 스크롤이 5px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };
  return (
    <header
      className={`${header_style.header_wrap} ${
        scroll ? header_style.scroll : ""
      }`}
    >
      <div className={`wrap flex_between ${header_style.header_box}`}>
        <h1 className={header_style.logo}>
          <a href={`/`} className={`flex_center`}>
            <Image
              src={scroll ? "/img/ico_logo.svg" : "/img/img_logo.svg"}
              alt="로고 이미지"
              width={"10"}
              height={"10"}
              className={`pc_logo ${header_style.pc_logo}`}
            />
            <Image
              src={`/img/ico_logo.svg`}
              alt="로고 아이콘"
              width={"10"}
              height={"10"}
              className={`mo_logo ${header_style.mo_logo}`}
            />
          </a>
        </h1>
        <Gnb scroll={scroll} />
      </div>
    </header>
  );
};

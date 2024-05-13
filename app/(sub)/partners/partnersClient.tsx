"use client";

import Link from "next/link";
import style from "./partners.module.scss";
import SectionCommonLayout from "@/component/common/SectionCommonLayout/SectionCommonLayout";

export default function PartnersClient() {
  return (
    <>
      <SectionCommonLayout
        sectionId={"partners"}
        title={"파트너와 함께 놀라운 성과를 실현하는 WIKO"}
        desc={
          "WIKO는 최고의 기술력을 바탕으로 캠페인을 지원하며 이로인한 성공적인 성과를 보장합니다."
        }
        btnYn={false}
      >
        <div className={`flex_between ${style.box_1}`}>
          <div className={style.left}>
            <p className={style.title}>정밀주조</p>
            <span>정밀주조 파트너스에 대한 설명이요요요</span>
          </div>
          <div className={style.right}>
            <ul className="flex_start">
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`flex_between ${style.box_2}`}>
          <div className={style.left}>
            <p className={style.title}>정밀주조</p>
            <span>정밀주조 파트너스에 대한 설명이요요요</span>
          </div>
          <div className={style.right}>
            <ul className="flex_start">
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`flex_between ${style.box_3}`}>
          <div className={style.left}>
            <p className={style.title}>정밀주조</p>
            <span>정밀주조 파트너스에 대한 설명이요요요</span>
          </div>
          <div className={style.right}>
            <ul className="flex_start">
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`flex_between ${style.box_4}`}>
          <div className={style.left}>
            <p className={style.title}>정밀주조</p>
            <span>정밀주조 파트너스에 대한 설명이요요요</span>
          </div>
          <div className={style.right}>
            <ul className="flex_start">
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`flex_between ${style.box_5}`}>
          <div className={style.left}>
            <p className={style.title}>정밀주조</p>
            <span>정밀주조 파트너스에 대한 설명이요요요</span>
          </div>
          <div className={style.right}>
            <ul className="flex_start">
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
              <li>
                <Link href={"/"}>정밀주조 파트너</Link>
              </li>
            </ul>
          </div>
        </div>
      </SectionCommonLayout>
    </>
  );
}

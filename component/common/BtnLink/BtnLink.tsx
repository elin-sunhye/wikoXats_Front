"use client";

import Link from "next/link";
import style from "./btnLink.module.scss";

interface BtnLinkProps {
  title: string;
  id: string;
  href: string;
  colorStyle?: React.CSSProperties;
  ico?: JSX.Element;
  icoPosition?: "left" | "right";
  hover: boolean;
}

/**
 * @href : 링크
 *
 * @colorStyle ?: 링크 버튼 색상 (배경, 텍스트)
 *
 * @ico ?: 링크 버튼 아이콘 태그
 *
 * @icoPosition ?: 링크 버튼 아이콘 위치
 *
 * @hover : 링크 버튼 호버 유무, 호버 시 아이콘 위치 변경
 *
 * * 접근성
 *
 * @title :  title, 링크 버튼 이름
 *
 * @id : id
 */
export const BtnLink = ({
  title,
  id,
  href,
  colorStyle,
  icoPosition,
  ico,
  hover,
}: BtnLinkProps) => {
  return (
    <Link
      href={href}
      title={title}
      id={id}
      className={`flex_center ${style.link_btn} ${hover ? style.hover : ""}`}
      style={{ ...colorStyle }}
    >
      {icoPosition === "left" ? (
        <>
          <span className={`${style.ico_link_btn} ${style.mg_right}`}>
            {ico}
          </span>
          {title}
        </>
      ) : icoPosition === "right" ? (
        <>
          {title}
          <span className={`${style.ico_link_btn}`}>{ico}</span>
        </>
      ) : (
        title
      )}
    </Link>
  );
};

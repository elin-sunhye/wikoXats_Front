"use client";

import style from "./btn.module.scss";

interface BtnProps {
  btnType: "all" | "text" | "ico";
  btnBg?: string;
  btnColor?: string;
  btnSize?: "small" | "large";
  type: "button" | "submit" | "reset";
  title: string;
  id: string;
  ico?: JSX.Element;
  icoPosition?: "left";
  hover: boolean;
}

/**
 * @btnType : 버튼 종류 - 텍스트 버튼, 아이콘 버튼, 텍스트 아이콘 버튼
 *
 * @btnBg ?: 버튼 배경 색 - 기본 sub-color-1
 *
 * @btnColor ?: 버튼 글자 색 - 기본 white
 *
 * @btnSize ? :버튼 사이즈 - 기본 regular
 *
 * @hover : 링크 버튼 호버 유무, 호버 시 아이콘 위치 변경
 *
 * * 텍스트 아이콘 버튼일 경우
 *
 * @type: "all"
 *
 * @ico ?: 링크 버튼 아이콘 태그
 *
 * @icoPosition ?: 링크 버튼 아이콘 위치 - 기본 right
 *
 * * 텍스트 버튼일 경우
 *
 * @type: "text"
 *
 * * 아이콘 버튼일 경우
 *
 * @type: "ico"
 *
 * @ico ?: 링크 버튼 아이콘 태그
 *
 * * 접근성
 *
 * @type : type, role
 *
 * @title : title, aria-label, 버튼이름
 *
 * @id : id
 *
 * * <Btn className={""}>을 지정하면 컴포넌트 css 다 초기화
 */
export const Btn = ({
  btnType,
  btnBg,
  btnColor,
  btnSize,
  type,
  title,
  id,
  ico,
  icoPosition,
  hover,
  ...props
}: BtnProps & React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      type={type}
      role={type}
      title={title}
      aria-label={title}
      id={id}
      className={`flex_center ${style.btn} ${
        btnSize === "small"
          ? style.small
          : btnSize === "large"
          ? style.large
          : ""
      } ${hover ? style.hover : ""}`}
      {...props}
      style={{
        background: btnBg ? btnBg : "var(--sub-color-1)",
        color: btnColor ? btnColor : "var(--white)",
      }}
    >
      {btnType === "all" ? (
        icoPosition && icoPosition === "left" ? (
          <>
            <span className={`${style.ico_btn} ${style.mg_right}`}>{ico}</span>
            {title}
          </>
        ) : (
          <>
            {title}
            <span className={`${style.ico_btn}`}>{ico}</span>
          </>
        )
      ) : btnType === "text" ? (
        title
      ) : (
        ico
      )}
    </button>
  );
};

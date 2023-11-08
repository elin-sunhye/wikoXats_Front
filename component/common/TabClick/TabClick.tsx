import { useState } from "react";
import style from "./tabClick.module.scss";
import { TabBtnType } from "@/types/tabBtn";

interface TabClickProps {
  tabInfo: TabBtnType[];
  tabBtnPosition?: "center" | "right";
  tabBtnColor?: "gray";
  children: React.ReactNode[];
}

/**
 *
 * @tabBtnName : 탭버튼 배열 TabBtnType[]
 *
 * @tabBtnPosition ?: 탭버튼 위치 - 기본 left 정렬
 *
 * @tabBtnColor ?: 탭버튼 컬러 - 기본 white
 *
 * @children : 탭 컨텐츠
 */

export default function TabClick({
  tabInfo,
  tabBtnPosition,
  tabBtnColor,
  children,
}: TabClickProps) {
  // 버튼 클릭 시 active
  const [tabBtnSeq, setTabBtnSeq] = useState<number>(tabInfo[0].seq);
  return (
    <>
      {/* tabBtn */}
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
            {children![index]}
          </div>
        );
      })}
    </>
  );
}

"use client";

import style from "./faqScroll.module.scss";
import SectionCommonLayout from "@/component/common/SectionCommonLayout/SectionCommonLayout";
import { useEffect, useState } from "react";
import { Btn } from "@/component/common/Btn/Btn";

// dummyData
import qnaList from "@/dummyData/faq/questions.json";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface NewsSubVisualProps {}

export default function FaqScroll({}: NewsSubVisualProps) {
  // 스크롤 시 fixed
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (mounted) {
        if (window.scrollY >= 158) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }
    });

    return () => {
      setScroll(false);
      mounted = false;
    };
  }, []);

  // type = scroll
  // btn click
  // TODO: 클릭 할떄마다 hook api 데이터 조회하기
  const [groupClick, setGroupClick] = useState<number>(qnaList[0].seq);
  const [qnaClick, setQnaClick] = useState<number>(0);

  return (
    <SectionCommonLayout
      sectionId={""}
      title={"자주하는 질문"}
      desc={""}
      btnYn={false}
    >
      <div className={`wrap flex_between ${style.wrap}`}>
        <ul className={`${style.left} ${scroll ? style.active : ""}`}>
          {qnaList.map((group) => {
            return (
              <li key={group.seq}>
                <Btn
                  type={"button"}
                  title={group.group}
                  id={`qnaGroup${group.seq}`}
                  btnType={"text"}
                  hover={false}
                  btnBg="transparent"
                  btnColor={
                    groupClick === group.seq ? "var(--black)" : "var(--gray-3)"
                  }
                  onClick={() => {
                    setGroupClick(group.seq);
                    setQnaClick(0);
                  }}
                />
              </li>
            );
          })}
        </ul>

        <div className={style.right}>
          {qnaList.map((group) => {
            if (group.seq === groupClick) {
              return group.qnas.map((qna) => {
                return (
                  <div key={qna.qna + qna.seq}>
                    <p
                      className="flex_between"
                      onClick={() => {
                        if (qnaClick === qna.seq) {
                          setQnaClick(0);
                        } else {
                          setQnaClick(qna.seq);
                        }
                      }}
                    >
                      {qna.qna}
                      <span>
                        <FiChevronDown
                          role={"img"}
                          aria-label={"다운 화살표"}
                          style={{
                            display: qnaClick === qna.seq ? "none" : "block",
                          }}
                        />
                        <FiChevronUp
                          role={"img"}
                          aria-label={"업 화살표"}
                          style={{
                            display: qnaClick === qna.seq ? "block" : "none",
                          }}
                        />
                      </span>
                    </p>
                    <span className={qnaClick === qna.seq ? style.open : ""}>
                      {qna.anw}
                    </span>
                  </div>
                );
              });
            }
          })}
        </div>
      </div>
    </SectionCommonLayout>
  );
}

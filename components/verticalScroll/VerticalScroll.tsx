'use client';

import React, { JSX, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-scroll';
import style from './page.module.scss';

interface ScrollSectionProps {
  bgStyle: React.CSSProperties;
  tab: itemArrayType[];
  /**
   * children 내부 요소들은 tabId와 동일한 id를 가져야 함
   * 고정 : <div id='item-0'>, <div id='item-1'>...
   */
  children: React.ReactNode;
}

export interface itemArrayType {
  item: string;
  desc: string;
  img: JSX.Element;
  tabId?: string;
}

export default function ScrollSection({
  bgStyle,
  tab,
  children,
}: ScrollSectionProps) {
  /**
   * 좌측 탭 영역 sticky 여부
   * 스크롤이 verticalSection 위치에 도달하면 true
   */
  const [scroll, setScroll] = useState(false);

  /**
   * 현재 활성화된 탭 id
   * 최초값은 첫 번째 탭 기준
   */
  const [linkClick, setLinkClick] = useState('item-0');

  /**
   * 렌더링마다 tabId를 새로 만들지 않도록 useMemo 사용
   * 기존 tab 배열에 item-0, item-1 형태의 tabId를 부여
   */
  const tabWithId = useMemo(() => {
    return tab.map((item: itemArrayType, idx: number) => ({
      ...item,
      tabId: `item-${idx}`,
    }));
  }, [tab]);

  useEffect(() => {
    /**
     * 스크롤 시 verticalSection의 시작 위치를 기준으로
     * 좌측 탭 영역에 sticky 클래스를 부여할지 결정
     */
    const handleScroll = () => {
      const section = document.querySelector(
        '#verticalSection',
      ) as HTMLElement | null;

      if (!section) return;

      if (window.scrollY >= section.offsetTop - 1) setScroll(true);
      else setScroll(false);
    };

    /**
     * 최초 마운트 시 한 번 실행해서
     * 새로고침 직후 현재 스크롤 위치도 바로 반영
     */
    handleScroll();

    /**
     * 스크롤 이벤트 등록
     */
    window.addEventListener('scroll', handleScroll);

    /**
     * 컴포넌트가 화면에서 사라질 때 이벤트 제거
     * 익명 함수가 아니라 handleScroll을 직접 등록해야
     * removeEventListener가 정상 동작함
     */
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    /**
     * tab 데이터가 비어 있으면 active tab도 비움
     */
    if (!tabWithId.length) {
      setLinkClick('');
      return;
    }

    /**
     * 현재 선택된 linkClick 값이
     * 새 tab 목록 안에 없으면 첫 번째 탭으로 초기화
     */
    const exists = tabWithId.some((item) => item.tabId === linkClick);

    if (!exists) setLinkClick(tabWithId[0].tabId as string);
  }, [tabWithId, linkClick]);

  return (
    <section
      id="verticalSection"
      className={`section_padding ${style.vertical_section}`}
      style={bgStyle}
    >
      <div className={`flex_between ${style.wrap}`}>
        <div className={`${style.left} ${scroll ? style.sticky : ''}`}>
          {tabWithId.map((item: itemArrayType) => {
            return (
              <Link
                key={`item_${item.tabId}`}
                to={item.tabId as string}
                activeClass={style.active}
                spy={true}
                className={linkClick === item.tabId ? style.active : ''}
                onSetActive={() => setLinkClick(item.tabId as string)}
              >
                <h6 className="section_title">{item.item}</h6>
                <p>{item.desc}</p>
              </Link>
            );
          })}
        </div>

        <div className={style.right}>{children}</div>
      </div>
    </section>
  );
}

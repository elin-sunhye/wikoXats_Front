'use client';

import { JSX, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import style from './page.module.scss';

interface ScrollSectionProps {
  tab: itemArrayType[];
  children: React.ReactNode;
}

export interface itemArrayType {
  item: string;
  desc: string;
  img: JSX.Element;
  /**
   * 첫번쨰 요소는 무조건 "first"여야한다
   */
  tab: string;
}

export default function ScrollSection({ tab, children }: ScrollSectionProps) {
  // 스크롤 시 fixed
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    let mounted = true;
    window.addEventListener('scroll', () => {
      const location = document.querySelector(
        '#verticalSection',
      ) as HTMLElement;

      if (mounted) {
        if (window.scrollY >= location.offsetTop - 1) {
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

  // link click
  const [linkClick, setLinkClick] = useState('first');

  return (
    <section
      id="verticalSection"
      className={`section_padding ${style.vertical_section}`}
    >
      <div className={`wrap flex_between ${style.wrap}`}>
        <div className={`${style.left} ${scroll ? style.active : ''}`}>
          {tab.map((item: itemArrayType) => {
            return (
              <Link
                key={`item_${item.item}`}
                to={item.tab}
                activeClass={style.active}
                spy={true}
                className={
                  linkClick === 'first' && item.tab === 'first'
                    ? style.active
                    : ''
                }
                onSetActive={() => {
                  setLinkClick(item.tab);
                }}
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

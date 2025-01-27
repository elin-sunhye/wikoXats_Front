'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import style from './gnb.module.scss';
import Link from 'next/link';
import { FaRegHandshake } from 'react-icons/fa';
import { MdOutlineContactSupport } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { MenusType } from '@/types/menus';
import { useBodyScrollLock } from '@/hook/noScroll';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useGetAllMenu } from '@/hook/useGetAllMenu';

interface GnbProps {
  scroll: boolean;
}

export const Gnb = ({ scroll }: GnbProps) => {
  //AOS 초기화
  useEffect(() => {
    AOS.init();
  });

  // 메뉴 데이터
  const { data, isLoading, error } = useGetAllMenu();

  // 모바일 gnb 열기
  /**
   * true: 열림
   * false : 닫힘
   */
  const [moGnbOpen, setMoGnbOpen] = useState<boolean>(false);

  // 모바일 메뉴 아코디언
  const [moMenuSeq, setMoMenuSeq] = useState<number>(0);

  // 모바일 메뉴 띄울 시 스크롤 막기
  const { lockScroll, openScroll } = useBodyScrollLock();
  useEffect(() => {
    if (moGnbOpen) {
      lockScroll();
    } else {
      openScroll();
      setMoMenuSeq(0);
    }
  }, [moGnbOpen]);

  // 동적으로 윈도우 사이즈 구하기
  const [innerWidth, setInnerWidth] = useState<number | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const resizeListener = () => {
        setInnerWidth(window.innerWidth);
      };
      window.addEventListener('resize', resizeListener);
    }
  }, []);

  // 모바일 메뉴 열고 반응형 시 모바일 메뉴 닫기
  useEffect(() => {
    if (innerWidth !== null && innerWidth < 1024) {
      setMoGnbOpen(false);
    }
  }, [innerWidth]);

  // url 가져오기
  const pathName = usePathname();

  useEffect(() => {
    // 모바일 링크 이동시 메뉴 닫기
    setMoGnbOpen(false);
    setMoMenuSeq(0);

    // 링크와 같은 메뉴 액티브
  }, [pathName]);

  return (
    <div className={`${style.gnb_wrap} ${scroll ? style.scroll : ''}`}>
      <div className={`pc_gnb flex_between ${style.pc_gnb} `}>
        <ul className={`flex_start ${style.left} ${style.depth_1}`}>
          {data?.body.map((menu: MenusType) => {
            if (menu.level === 1 && menu.type === 'main') {
              if (menu.hasChild) {
                return (
                  <li key={menu.menuId}>
                    <button
                      type={'button'}
                      // href={menu.url}
                      title={menu.title}
                      className={`${
                        pathName === menu.url || pathName?.includes(menu.url)
                          ? style.active
                          : ''
                      }`}
                    >
                      <p>{menu.menu}</p>
                    </button>

                    <div className={style.depth_2_box}>
                      <ul className={`flex_start ${style.depth_2}`}>
                        {data?.body
                          .filter(
                            (depth2Seq: MenusType) =>
                              depth2Seq.parentSeq === menu.menuId
                          )
                          .map((depth2) => {
                            return (
                              <li key={`depth2_${depth2.menuId}`}>
                                <a href={depth2.url} title={depth2.title}>
                                  {depth2.menu}
                                </a>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={menu.menuId}>
                    <a
                      href={menu.url}
                      title={menu.title}
                      className={`${pathName === menu.url ? style.active : ''}`}
                    >
                      <p>{menu.menu}</p>
                    </a>
                  </li>
                );
              }
            }
          })}
        </ul>

        <span
          className={style.separate_bar}
          data-aos={scroll ? '' : 'zoom-in'}
        ></span>

        <ul className={`flex_start ${style.right}`} data-aos="fade-left">
          {data?.body.map((menu: MenusType) => {
            if (menu.level === 1 && menu.type === 'sub') {
              return (
                <li key={menu.menuId}>
                  <a
                    href={menu.url}
                    title={menu.title}
                    className={`${pathName === menu.url ? style.active : ''}`}
                  >
                    <p>{menu.menu}</p>
                    {menu.menu === 'Partners' ? (
                      <FaRegHandshake
                        role={`img`}
                        aria-label={`악수 아이콘`}
                        className={style.scroll_ico}
                      />
                    ) : menu.menu === 'FAQ' ? (
                      <MdOutlineContactSupport
                        role={`img`}
                        aria-label={`말풍선 물음표 아이콘`}
                        className={style.scroll_ico}
                      />
                    ) : (
                      <FiMail
                        role={`img`}
                        aria-label={`문자 아이콘`}
                        className={style.scroll_ico}
                      />
                    )}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>

      {/* mobile */}
      <button
        type="button"
        title={`모바일 메뉴 ${moGnbOpen ? '열림' : '닫힘'}`}
        className={`mo_gnb_hamburger ${style.mo_gnb_hamburger} ${
          moGnbOpen ? style.mo_gnb_hamburger_open : style.mo_gnb_hamburger_close
        }`}
        onClick={() => {
          setMoGnbOpen(!moGnbOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`mo_gnb ${style.mo_gnb} ${
          moGnbOpen ? style.mo_gnb_open : style.mo_gnb_close
        }`}
      >
        <div className={`wrap ${style.mo_wrap}`}>
          <ul className={style.left}>
            {data?.body.map((menu: MenusType) => {
              if (menu.level === 1 && menu.menuId >= 1 && menu.menuId <= 4) {
                if (menu.hasChild) {
                  return (
                    <li key={menu.menuId}>
                      <button
                        type={'button'}
                        title={menu.title}
                        onClick={() => {
                          if (moMenuSeq === menu.menuId) {
                            setMoMenuSeq(0);
                          } else {
                            setMoMenuSeq(menu.menuId);
                          }
                        }}
                      >
                        <p>{menu.menu}</p>
                      </button>

                      <ul
                        className={`${style.depth_2} ${
                          moMenuSeq === menu.menuId ? style.active : ''
                        }`}
                      >
                        {data?.body
                          .filter(
                            (depth2Seq: MenusType) => depth2Seq.parentSeq === menu.menuId
                          )
                          .map((depth2) => {
                            return (
                              <li key={`mo_depth2_${depth2.menuId}`}>
                                <a href={depth2.url} title={depth2.title}>
                                  {depth2.menu}
                                </a>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li key={menu.menuId}>
                      <a href={menu.url} title={menu.title}>
                        <p>{menu.menu}</p>
                      </a>
                    </li>
                  );
                }
              }
            })}
          </ul>

          <span className={style.separate_bar} data-aos="fade-left"></span>

          <ul className={style.right} data-aos="fade-left">
            {data?.body.map((menu: MenusType) => {
              if (menu.level === 1 && menu.menuId >= 5 && menu.menuId <= 10) {
                return (
                  <li key={menu.menuId}>
                    <a href={menu.url} title={menu.title}>
                      <p>{menu.menu}</p>
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

'use client';

import { Link } from 'react-scroll';
import style from './newsScroll.module.scss';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import { useEffect, useState } from 'react';
import { SectionTitle } from '@/component/common/SectionTitle/SectionTitle';

interface NewsSubVisualProps {}

export default function NewsScroll({}: NewsSubVisualProps) {
  // 스크롤 시 fixed
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    let mounted = true;
    window.addEventListener('scroll', () => {
      if (mounted) {
        if (window.scrollY >= 430) {
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
  // link click
  const [linkClick, setLinkClick] = useState('first');

  return (
    <section
      id="newsScroll"
      className={`section_padding`}
      style={{ background: 'var(--white)' }}
    >
      <div className={`wrap flex_between ${style.wrap}`}>
        <div className={style.left}>
          <SectionTitle title={'sdasd'} desc={'asdasd'} />
          <ul>
            <li>
              <Link
                to={'first'}
                activeClass={style.active}
                spy={true}
                onSetActive={() => {
                  setLinkClick('first');
                }}
                // onClick 할 때마다 실행
                onClick={() => {
                  setLinkClick('frist');
                }}
              >
                1
              </Link>
            </li>
            <li>
              <Link
                to={'sec'}
                activeClass={style.active}
                spy={true}
                onSetActive={() => {
                  setLinkClick('sec');
                }}
                // onClick 할 때마다 실행
                onClick={() => {
                  setLinkClick('sec');
                }}
              >
                2
              </Link>
            </li>
            <li>
              <Link
                to={'thir'}
                activeClass={style.active}
                spy={true}
                onSetActive={() => {
                  setLinkClick('thir');
                }}
                // onClick 할 때마다 실행
                onClick={() => {
                  setLinkClick('thir');
                }}
              >
                3
              </Link>
            </li>
            <li>
              <Link
                to={'fourth'}
                activeClass={style.active}
                spy={true}
                onSetActive={() => {
                  setLinkClick('fourth');
                }}
                // onClick 할 때마다 실행
                onClick={() => {
                  setLinkClick('fourth');
                }}
              >
                4
              </Link>
            </li>
          </ul>
        </div>

        <div className={style.right}>
          <div id="first">123</div>
          <div id="sec">456</div>
          <div id="thir">789</div>
          <div id="fourth">000</div>
        </div>
      </div>
    </section>
  );
}

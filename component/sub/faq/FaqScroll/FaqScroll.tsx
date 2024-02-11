'use client';

import style from './faqScroll.module.scss';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';
import { useEffect, useState } from 'react';
import { Btn } from '@/component/common/Btn/Btn';

interface NewsSubVisualProps {}

export default function FaqScroll({}: NewsSubVisualProps) {
  // 스크롤 시 fixed
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    let mounted = true;
    window.addEventListener('scroll', () => {
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
  const [groupClick, setGroupClick] = useState('first');

  return (
    <SectionCommonLayout
      sectionId={''}
      title={'자주하는 질문'}
      desc={''}
      btnYn={false}
    >
      <div className={`wrap flex_between ${style.wrap}`}>
        <ul className={`${style.left} ${scroll ? style.active : ''}`}>
          <li>
            <Btn
              type={'button'}
              title={'그룹1'}
              id={''}
              btnType={'text'}
              hover={false}
              btnBg="transparent"
              btnColor={
                groupClick === 'first' ? 'var(--black)' : 'var(--gray-3)'
              }
              onClick={() => {
                setGroupClick('first');
              }}
            />
          </li>
          <li>
            <Btn
              type={'button'}
              title={'그룹2'}
              id={''}
              btnType={'text'}
              hover={false}
              btnBg="transparent"
              btnColor={groupClick === 'sec' ? 'var(--black)' : 'var(--gray-3)'}
              onClick={() => {
                setGroupClick('sec');
              }}
            />
          </li>
          <li>
            <Btn
              type={'button'}
              title={'그룹3'}
              id={''}
              btnType={'text'}
              hover={false}
              btnBg="transparent"
              btnColor={
                groupClick === 'third' ? 'var(--black)' : 'var(--gray-3)'
              }
              onClick={() => {
                setGroupClick('third');
              }}
            />
          </li>
          <li>
            <Btn
              type={'button'}
              title={'그룹4'}
              id={''}
              btnType={'text'}
              hover={false}
              btnBg="transparent"
              btnColor={
                groupClick === 'fourth' ? 'var(--black)' : 'var(--gray-3)'
              }
              onClick={() => {
                setGroupClick('fourth');
              }}
            />
          </li>
        </ul>

        <div className={style.right}>
          <div>
            <p>질문</p>
            <span>
              답답답 답답답답답답답답 답답답답답답 답답답답답 답답답 답 답 답
              답답답답답답답 답답답
            </span>
          </div>
          <div>
            <p>질문</p>
            <span>
              답답답 답답답답답답답답 답답답답답답 답답답답답 답답답 답 답 답
              답답답답답답답 답답답
            </span>
          </div>
          <div>
            <p>질문</p>
            <span>
              답답답 답답답답답답답답 답답답답답답 답답답답답 답답답 답 답 답
              답답답답답답답 답답답
            </span>
          </div>
          <div>
            <p>질문</p>
            <span>
              답답답 답답답답답답답답 답답답답답답 답답답답답 답답답 답 답 답
              답답답답답답답 답답답
            </span>
          </div>
          <div>
            <p>질문</p>
            <span>
              답답답 답답답답답답답답 답답답답답답 답답답답답 답답답 답 답 답
              답답답답답답답 답답답
            </span>
          </div>
        </div>
      </div>
    </SectionCommonLayout>
  );
}

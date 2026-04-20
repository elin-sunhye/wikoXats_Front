'use client';

import { FiArrowRight } from 'react-icons/fi';
import { Btn } from '../common/Btn/Btn';
import styles from './page.module.scss';

export default function Partners({ locale }: { locale: string }) {
  return (
    <section id={styles.latestNewsSection}>
      <h6 className="section_title">PARTNERS</h6>
      <div className={styles.wrap}>
        <div className={styles.box}>
          <div>
            <p className="section_sub_title">핫 뉴스</p>
            <p>ashgdhsgdhd sgd ㄴㅁㅇㄴㅇ ㅁㄴㅇ ㅂㅈㄷㅂㅈㄷ ㄴㄴㅇ</p>
            <span>2026.04.03</span>
          </div>
          <Btn
            title={'wiko 회사 소개서 보기'}
            type={'button'}
            id={'introduceBtn'}
            btnType={'all'}
            ico={
              <FiArrowRight role={`icon`} aria-label={`오른쪽 화살표 아이콘`} />
            }
            hover={true}
            onClick={() => {
              // TODO: 회사 소개서 열기
            }}
          />
        </div>
        <div className={styles.box}>이미지</div>
        <div className={styles.box}>
          <ul>
            <li>
              <a href="/">top 1</a>
            </li>
            <li>
              <a href="/">top 2</a>
            </li>
            <li>
              <a href="/">top 3</a>
            </li>
            <li>
              <a href="/">top 4</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

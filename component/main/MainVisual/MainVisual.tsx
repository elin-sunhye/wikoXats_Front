'use client';

// import main_style from "../main.module.scss";
import style from './mainVisual.module.scss';
import { HiOutlineCursorClick } from 'react-icons/hi';
import Image from 'next/image';
import { BtnLink } from '@/component/common/BtnLink/BtnLink';
import { FiArrowRight } from 'react-icons/fi';

export default function MainVisual() {
  return (
    <main id={style.mainVisual} className="flex_center">
      <div className={`wrap flex_between ${style.main_visual_wrap}`}>
        <div className={`flex_start ${style.left}`}>
          <h2>
            혁신적인 기술로
            <p>
              세상을 바꾸는 서비스,
              <HiOutlineCursorClick
                role={`img`}
                aria-label={`포인트 커서 아이콘`}
                className={style.ico_cursor}
              />
            </p>
            <br />
            함께 미래를 만들어가요!
          </h2>
          <p>
            세계적인 기술과 다양한 경험을 바탕으로 <br />
            귀사의 주조환 경에 알맞은 기술을 서비스 합니다.
          </p>
          <BtnLink
            title={`문의하기`}
            id={`contact`}
            href={`/contact`}
            icoPosition="right"
            ico={
              <FiArrowRight role={`img`} aria-label={`오른쪽 화살표 아이콘`} />
            }
            hover={true}
          />
        </div>
        <div className={style.right}>
          <Image
            src="/img/main/img_main_visual.svg"
            alt="메인 화면 수출 이미지"
            width={'10'}
            height={'10'}
            className={style.img_main_visual}
          />
        </div>
      </div>
    </main>
  );
}

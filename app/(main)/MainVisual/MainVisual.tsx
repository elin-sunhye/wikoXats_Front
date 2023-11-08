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
            채널의 경계가 없는 <br />
            데이터 마케팅{' '}
            <p>
              자동화를
              <HiOutlineCursorClick
                role={`img`}
                aria-label={`포인트 커서 아이콘`}
                className={style.ico_cursor}
              />
            </p>{' '}
            <br />
            제공합니다
          </h2>
          <p>
            국경, 크리에이티브, 디바이스 제약을 뛰어넘는 <br />
            광고 자동화를 통해 전세계 어디에나 <br />
            광고주가 원하는 고객에게 메시지를 전달할 수 있습니다
          </p>
          <BtnLink
            title={`문의하기`}
            id={`faq`}
            href={`#`}
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

'use client';

import { HiOutlineChevronRight, HiOutlinePlusSm } from 'react-icons/hi';
import style from './productsSubVisual.module.scss';
import SubTop from '@/component/common/Sub/SubTop/SubTop';
import { Btn } from '@/component/common/Btn/Btn';
import { useState } from 'react';

interface ProductsSubVisualProps {}

export default function ProductsSubVisual({}: ProductsSubVisualProps) {
  // 자세히 보기 버튼 클릭
  const [viweMoreClick, setViweMoreClick] = useState<boolean>(false);

  return (
    <SubTop
      title={`에이티에스가 제공하는<br />완전히 새로운 방식의 제품`}
      desc={`국내 유일하게 SKP와 롯데 두 대기업의 고객 행동 데이터를 포함한 풍부한 온·오프라인 통합 DMP를 활용,<br />5대 BIG 매체에서도 할 수 없었던 초정밀 타겟팅 광고가 가능합니다`}
    >
      <div className={`flex_center ${style.sub_top_cont_box}`}>
        <div className={`flex_center ${style.left}`}>
          <div className="flex_center">
            <div className={style.ico_box}></div>
            <div className={style.text_box}>
              <p>123213</p>
              <span>asdasd</span>
              <Btn
                type={`button`}
                title={`자세히`}
                id={`btnViewMore`}
                btnType={'all'}
                ico={
                  <HiOutlineChevronRight
                    role={`img`}
                    aria-label={`오른쪽 화살표 아이콘`}
                  />
                }
                btnBg={`#3333337c`}
                btnColor={`var(--gray-1-trans)`}
                btnSize={`sm`}
                hover={false}
                onClick={() => {
                  setViweMoreClick(true);
                }}
              />
            </div>

            <div
              className={`${style.left_cover} ${
                viweMoreClick ? style.open : ''
              }`}
            >
              <p>asdasd</p>

              <Btn
                type={`button`}
                title={`닫기`}
                id={`btnViewMoreClose`}
                btnType={'ico'}
                ico={
                  <HiOutlinePlusSm
                    role={`img`}
                    aria-label={`오른쪽 화살표 아이콘`}
                  />
                }
                btnBg={`#3333337c`}
                btnColor={`var(--gray-1-trans)`}
                btnSize={`sm`}
                hover={false}
                onClick={() => {
                  setViweMoreClick(false);
                }}
              />
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <HiOutlinePlusSm
          role={`img`}
          aria-label={`플러스 아이콘`}
          className={style.ico_plus}
        />
        <div className={style.right}></div>
      </div>
    </SubTop>
  );
}

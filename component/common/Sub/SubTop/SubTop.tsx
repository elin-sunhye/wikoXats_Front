'use client';

import { SectionTitle } from '@/component/common/SectionTitle/SectionTitle';
import style from './subTop.module.scss';

interface SubTopProps {
  maginBg?: string;
  mainPadding?: boolean;
  subTopColor?: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}

/**
 * @maginBg ?: 서브탑 배경 색 - 기본 - main color
 *
 * @mainPadding ?: 서브탑 배경 패딩 - 기본 5rem
 *
 * @subTopColor ?: 서브탑 배경색 - 기본 var(--main-green-1)
 *
 * @title : 섹션 제목 - 서비스 설명 `<br />`풍부한 데이터로부터
 *
 * @desc : 섹션 제목 밑 설명 - 국내시장 전역을 커버할 수 있는 풍부한 데이터를 활용하여 `<br />`정교한 오디언스 타겟팅으로 광고 효과를 상승 시킬 수 있습니다
 *
 * @children : 서브탑 컨텐츠
 */

export default function SubTop({
  maginBg,
  mainPadding,
  subTopColor,
  title,
  desc,
  children,
}: SubTopProps) {
  return (
    <main
      className={`section_padding`}
      style={{ background: maginBg ? maginBg : 'var(--white)' }}
    >
      <div
        className={`wrap flex_center ${style.sub_top} ${
          mainPadding || mainPadding === false ? style.no_padding : ''
        }`}
        style={{
          backgroundColor: subTopColor ? subTopColor : 'var(--main-green-1)',
        }}
      >
        <SectionTitle title={title} desc={desc} textAlign={`center`} />

        <div className={style.sub_top_cont}>{children}</div>
      </div>
    </main>
  );
}

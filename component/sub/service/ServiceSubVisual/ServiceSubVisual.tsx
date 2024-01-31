'use client';

import { HiOutlineChevronRight, HiOutlinePlusSm } from 'react-icons/hi';
import style from './ServiceSubVisual.module.scss';
import SubTop from '@/component/common/Sub/SubTop/SubTop';
import { Btn } from '@/component/common/Btn/Btn';
import { useState } from 'react';

interface ProductsSubVisualProps {}

export default function ServiceSubVisual({}: ProductsSubVisualProps) {
  // 자세히 보기 버튼 클릭
  const [viweMoreClick, setViweMoreClick] = useState<boolean>(false);

  return (
    <SubTop
      title={`프로그래머틱 광고 기술을 적용한 <br />국내 최초, 최대 CTV광고 플랫폼
`}
      desc={`크로스타겟 TV는 국내 최초 프로그래머틱과 어드레서블 기술을 적용하여 <br />데이터 기반으로 분석된 타겟에게 맞춤형 광고를 송출할 수 있는 커넥티드 TV 광고 플랫폼입니다`}
    >
      <div className={`flex_center ${style.sub_top_cont_box}`}>
        <p>
          <span>CTV란?</span> 인터넷 접속이 가능한 TV를 말하며, 스마트 TV용
          App을 설치하여 VOD 시청과 웹서핑 등 인터넷 서비스 이용이 가능한 스마트
          TV나, 게임콘솔 · TV스틱 · IPTV 콘솔 등이 연결되어 인터넷 서비스 사용
          가능한 일반 TV가 포함됩니다. 최근 CTV기기 보급 확대와 더불어 OTT나 VOD
          컨텐츠를 TV에서 시청하는 시청 행태가 확산되어 실시간 방송 외 TV시청
          오디언스가 증가되는 추세이며 CTV에 Ad Tech가 접목된 CTV광고는 실시간
          방송 외 TV시청 오디언스에 도달하기 위한 최적의 대안입니다.
        </p>

        <div className={style.img_box}></div>
      </div>
    </SubTop>
  );
}

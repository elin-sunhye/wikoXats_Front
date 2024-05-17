'use client';

// import main_style from "../main.module.scss";
import style from './sectionService.module.scss';
import { FiArrowRight } from 'react-icons/fi';
import Card from '@/component/common/Card/Card';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';

export default function SectionService() {
  const cardItems: {
    title: string;
    desc: string;
    imgSrc: string;
    imgAlt: string;
  }[] = [
    {
      title: 'Robot Coating System',
      desc: '세계 최고의 로봇 시스템 회사 "VA-Tech". 최첨단 로봇 & 공조 시스템과 효율적인 디자인을 통한 생산성 향상을 경험하실 수 있습니다.',
      imgSrc: `/`,
      imgAlt: `#`,
    },
    {
      title: '불량률 감소를 위한 분석 시스템',
      desc: '150년의 유서 깊은 미국 기업, “Ransom & Randolph”의 다양한 경험과 전문적인 지식을 바탕으로 한 Slurry의 분석 시스템을 활용하여, 불량 원인을 찾고 개선해 보세요.',
      imgSrc: `/`,
      imgAlt: `#`,
    },
    {
      title: '세계적인 광물 회사 IMERYS',
      desc: '각 국에 위치한 광산에서 채취한 광물을 고온의 공정을 통해 불순물을 제거하고 내화도를 높여, 높은 품질의 제품을 제공합니다.',
      imgSrc: `/`,
      imgAlt: `#`,
    },
  ];

  return (
    <SectionCommonLayout
      sectionId={'contProducts'}
      sectionBg={`var(--main-green-1)`}
      title={`세계적 경험과 기술력으로 <br />혁신의 길을 열어 나가다.`}
      desc={`코팅 장비부터 공조 시스템과 스마트 공장의 디자인. <br />현재의 공정상태를 면밀히 체크할 수 있는 분석 시스템.`}
      color={`var(--white)`}
      btnYn={true}
      btnTitle={`WIKO 기술 상담`}
      btnId={`viewMore`}
      btnHref={`/contact`}
      btnIcoPosition={`right`}
      btnIco={<FiArrowRight role={`img`} aria-label={`오른쪽 화살표 아이콘`} />}
      btnColorStyle={{
        backgroundColor: 'transparent',
        border: '0.1rem solid var(--white)',
      }}
      btnHover={true}
    >
      <div className={`flex_between ${style.product_box}`}>
        {cardItems.map(
          (
            item: {
              title: string;
              desc: string;
              imgSrc: string;
              imgAlt: string;
            },
            index: number
          ) => {
            return (
              <Card
                key={index}
                title={item.title}
                desc={item.desc}
                imgYn="bottom"
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            );
          }
        )}
      </div>
    </SectionCommonLayout>
  );
}

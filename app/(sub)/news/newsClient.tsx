'ues client';

import style from './newsClient.module.scss';
import NewsCard from '@/component/sub/news/NewsCard/NewsCard';
import NewsInfo from '@/component/sub/news/NewsInfo/NewsInfo';
import ScrollSection, {
  itemArrayType,
} from '@/component/common/ScrollSection/ScrollSection';
import NewsSubVisual from '@/component/sub/news/NewsSubVisual/NewsSubVisual';
import Image from 'next/image';

export default function NewsClient() {
  const itemArray: itemArrayType[] = [
    {
      item: '왁스',
      desc: '정밀 주조 공정에서 코팅 전,금속 주조물의 원형을 만들 때 사용되는 부자재.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'first',
    },
    {
      item: '세척제 & 바인더',
      desc: '왁스의 세척과 Ceramic Slurry를 만들 때 사용되는 재료.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'sec',
    },
    {
      item: '주물사',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'thir',
    },
    {
      item: '첨가제',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'fourth',
    },
    {
      item: '기타',
      desc: '제품의 원형을 만드는데 사용되는 정밀주조 전용 왁스입니다.',
      img: <Image src={'/'} alt={'왁스 이미지'} width={0} height={0} />,
      tab: 'fifth',
    },
  ];

  return (
    <>
      {/* 서브 비주얼 */}
      <NewsSubVisual />

      {/* 인포 */}
      <NewsInfo />

      {/* card */}
      <NewsCard />

      {/* NewsScroll */}
      <ScrollSection tab={itemArray}>
        <div id="first">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>왁스-1</p>
              <span className={style.desc}>왁스-1 detail</span>
            </div>
          </div>
        </div>
        <div id="sec">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>세척제 & 바인더 -1</p>
              <span className={style.desc}>세척제 & 바인더 -1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>세척제 & 바인더 -1</p>
              <span className={style.desc}>세척제 & 바인더 -1 detail</span>
            </div>
          </div>
        </div>
        <div id="thir">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>주물사-1</p>
              <span className={style.desc}>주물사-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>주물사-1</p>
              <span className={style.desc}>주물사-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>주물사-1</p>
              <span className={style.desc}>주물사-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>주물사-1</p>
              <span className={style.desc}>주물사-1 detail</span>
            </div>
          </div>
        </div>
        <div id="fourth">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>첨가제-1</p>
              <span className={style.desc}>첨가제-1 detail</span>
            </div>
          </div>
        </div>
        <div id="fifth">
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
          <div>
            <span className={style.img_box}>img</span>
            <div>
              <p className={style.title}>기타-1</p>
              <span className={style.desc}>기타-1 detail</span>
            </div>
          </div>
        </div>
      </ScrollSection>
    </>
  );
}

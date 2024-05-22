'use client';

import style from './subTop.module.scss';
import { SectionTitle } from '@/component/common/SectionTitle/SectionTitle';
import { usePathname } from 'next/navigation';

// dummyData
import menus from '@/dummyData/menus.json';
import { useEffect, useState } from 'react';

interface SubTopProps {
  children?: React.ReactNode;
}

/**
 * @children : 서브탑 컨텐츠
 */

export default function SubTop({ children }: SubTopProps) {
  //
  const pathNm = usePathname();
  const [menuNm, setMenuNm] = useState('');

  useEffect(() => {
    const array = menus.find((nm) => nm.url === pathNm);
    let idx = 0;

    if (array) {
      idx = array.url.split('/').length - 1;
    }

    setMenuNm(array ? array.url.split('/')[idx] : '');
  }, [pathNm]);

  return menus.find((nm) => nm.url === pathNm)?.menu ? (
    <section
      className={`flex_center ${style.sub_top} ${
        style[menuNm]
        // pathNm.includes("story")
        //   ? style.story
        //   : pathNm.includes("product")
        //   ? style.product
        //   : pathNm.includes("service")
        //   ? style.service
        //   : pathNm.includes("news")
        //   ? style.news
        //   : pathNm.includes("fap")
        //   ? style.fap
        //   : style.contact
      }`}
    >
      <div className={'wrap'}>
        <SectionTitle
          title={menus.find((nm) => nm.url === pathNm)?.menu || ''}
          desc={
            pathNm.includes('story')
              ? '위코 주식회사는 <br />고객의 품질과 생산성 향상을 위해 끊임 없이 발전하는 기술을 제공합니다.'
              : ''
          }
          textAlign={`center`}
        />

        {children ? (
          <div className={style.sub_top_cont}>{children}</div>
        ) : (
          <></>
        )}
      </div>
    </section>
  ) : (
    <></>
  );
}

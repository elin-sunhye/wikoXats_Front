'use client';

import style from './subTop.module.scss';
import { SectionTitle } from '@/component/common/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useGetAllMenu } from '@/hook/useGetAllMenu';
import { MenusType } from '@/types/menus';

interface SubTopProps {
  children?: React.ReactNode;
}

/**
 * @children : 서브탑 컨텐츠
 */

export default function SubTop({ children }: SubTopProps) {
  // aos
  useEffect(() => {
    AOS.init();
  });

  //
  const pathNm = usePathname();
  const [menuNm, setMenuNm] = useState('');

  // 메뉴 데이터
  const getAllMenu = useGetAllMenu();

  useEffect(() => {
    const array = getAllMenu.data?.data.find(
      (nm: MenusType) => nm.url === pathNm
    );
    let idx = 0;

    if (array) {
      idx = array.url.split('/').length - 1;
    }

    setMenuNm(array ? array.url.split('/')[idx] : '');
  }, [pathNm]);

  return getAllMenu.data?.data.find((nm: MenusType) => nm.url === pathNm)
    ?.menu ? (
    <section
      className={`flex_center ${style.sub_top_section} ${
        // pathNm?.includes("story")
        //   ? style.story
        //   : pathNm?.includes("product")
        //   ? style.product
        //   : pathNm?.includes("service")
        //   ? style.service
        //   : pathNm?.includes("news")
        //   ? style.news
        //   : pathNm?.includes("fap")
        //   ? style.fap
        //   : style.contact
        style[menuNm]
      }`}
    >
      <div
        className={`wrap ${style.sub_top}`}
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <SectionTitle
          title={
            getAllMenu.data?.data.find((nm: MenusType) => nm.url === pathNm)
              ?.menu || ''
          }
          desc={
            pathNm?.includes('story')
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

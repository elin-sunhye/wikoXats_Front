'use client';

import Link from 'next/link';
import footer_style from './footer.module.scss';
import { MenusType } from '@/types/menus';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
// dummyData
import menus from '@/dummyData/menus.json';
import { BtnLink } from '../BtnLink/BtnLink';
import { FiArrowRight } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  //
  const path = usePathname();

  return (
    <footer
      className={`${footer_style.footer_wrap} ${
        path.includes('/lg') ? '' : footer_style.sticky
      }`}
    >
      <div className={`wrap flex_between ${footer_style.footer_box}`}>
        <div className={`flex_start ${footer_style.left}`}>
          <p className={footer_style.title}>
            위코
            <BtnLink
              title={`CMS`}
              id={`cms`}
              // TODO: 로그인이 안되어있으면 /lg/login 로그인 되어있으면 /cms
              href={`/lg/login`}
              size="sm"
              icoPosition={'right'}
              ico={
                <FiArrowRight
                  role={`img`}
                  aria-label={`오른쪽 화살표 아이콘`}
                />
              }
              hover={true}
            />
          </p>
          <span className={footer_style.adress}>
            위코(WIKO) <br />
            경상남도 창녕군 영산면 영산월령로 370
            <br />
            Tel) 055-521-1255~6 | Fax) 055-521-1257 | wiko6561@hanmail.net
          </span>
          <ul className={`pc_legals flex_start ${footer_style.legals}`}>
            <li>
              <Link href={`#`} title={`서비스이용약관`}>
                <p>서비스이용약관</p>
              </Link>
            </li>
            <li>
              <Link href={`#`} title={`WIKO 계약`}>
                <p>WIKO 계약</p>
              </Link>
            </li>
            <li>
              <Link href={`#`} title={`개인보호정책`}>
                <p>개인보호정책</p>
              </Link>
            </li>
          </ul>
        </div>

        <ul className={`flex_start ${footer_style.middle}`}>
          <li>
            <Link href={`/`} title={`홈으로가기`}>
              <p>Home</p>
            </Link>
          </li>
          {menus.map((menu: MenusType) => {
            if (menu.level === 1) {
              return (
                <li key={menu.seq}>
                  <Link
                    href={
                      menu.hasChild
                        ? menus.find(
                            (child: MenusType) =>
                              child.parentSeq === menu.seq && child.level === 2
                          )?.url || ''
                        : menu.url
                    }
                    title={menu.title}
                  >
                    <p>{menu.menu}</p>
                  </Link>
                </li>
              );
            }
          })}
        </ul>

        <div className={`flex_start ${footer_style.right}`}>
          <div className={footer_style.sns_box}>
            <p>Keep in touch</p>
            <ul className={`flex_start`}>
              <li>
                <Link
                  href={`#`}
                  className={`flex_center ${footer_style.link_youtube}`}
                  title="유투브 바로가기"
                >
                  <AiFillYoutube
                    role={`img`}
                    aria-label={`유튜브 아이콘`}
                    className={`${footer_style.ico_sns} ${footer_style.ico_youtube}`}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`#`}
                  className={`flex_center ${footer_style.link_facebook}`}
                  title="유투브 바로가기"
                >
                  <FaFacebookF
                    role={`img`}
                    aria-label={`페이스북 아이콘`}
                    className={`${footer_style.ico_sns} ${footer_style.ico_facebook}`}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`#`}
                  className={`flex_center ${footer_style.link_blog}`}
                  title="유투브 바로가기"
                >
                  <SiNaver
                    role={`img`}
                    aria-label={`네이버 블로그 아이콘`}
                    className={`${footer_style.ico_sns} ${footer_style.ico_blog}`}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`#`}
                  className={`flex_center ${footer_style.link_linkedin}`}
                  title="유투브 바로가기"
                >
                  <FaLinkedinIn
                    className={`${footer_style.ico_sns} ${footer_style.ico_linkedin}`}
                    role={`img`}
                    aria-label={`링크드인 아이콘`}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className={footer_style.copy_right}>
            &#169; 2023.WIKO Co. All right reserved.
          </div>

          <ul className={`mo_legals flex_start ${footer_style.legals}`}>
            <li>
              <Link href={`#`} title={`서비스이용약관`}>
                <p>서비스이용약관</p>
              </Link>
            </li>
            <li>
              <Link href={`#`} title={`WIKO 계약`}>
                <p>WIKO 계약</p>
              </Link>
            </li>
            <li>
              <Link href={`#`} title={`개인보호정책`}>
                <p>개인보호정책</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import { useI18n } from '@/hooks/useI18n';
import { MenuGroup, MenuItem } from '@/types/menu';
import { Locale } from '@/types/common';
import styles from '@/components/header/page.module.scss';

// menu JSON
import menu from '@/data/menu.json';

export default function Header() {
  const router = useRouter();
  const header = useI18n('header');
  const locale = useLocale() as Locale;
  const menuData: MenuGroup[] = menu.menu;

  const [menuHover, setMenuHover] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [appearance, setAppearance] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      // 항상 최상단에서는 보이게
      if (currentY === 0) {
        setLastScrollY(0);
        setAppearance(false);
        return;
      }

      // hover시 보이게
      if (menuHover) {
        setHidden(false);
        setLastScrollY(currentY);
        return;
      }

      if (currentY > lastScrollY) {
        // 아래로 스크롤
        setHidden(true);
      } else if (currentY < lastScrollY) {
        // 위로 스크롤
        setHidden(false);
        setAppearance(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <header
      id={styles.header}
      className={`${menuHover ? styles.on : ''} ${hidden ? styles.hide : ''} ${
        appearance ? styles.appearance : ''
      }`}
    >
      <h1
        className={styles.header_logo}
        onClick={() => router.push(`/${locale}`)}
      ></h1>

      <nav
        className={styles.nav}
        onMouseEnter={() => setMenuHover(true)}
        onMouseLeave={() => setMenuHover(false)}
      >
        <ul className={styles.depth_1}>
          {menuData.map((depth1: MenuGroup) => (
            <li key={depth1.id} className={styles.item}>
              {depth1.items.length > 0 ? (
                <>
                  <p>{depth1.label[locale]}</p>
                  <ul className={styles.depth_2}>
                    {depth1.items.map((depth2: MenuItem) => (
                      <li key={depth2.id} className={styles.item}>
                        <a href={`/${locale}/${depth2.path}`}>
                          {depth2.label[locale]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={depth1.path}>{depth1.label[locale]}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.util_list}>
        <a href="#" className={styles.util_item}>
          {header('customer')}
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

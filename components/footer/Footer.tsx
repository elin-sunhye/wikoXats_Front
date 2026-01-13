'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import styles from './page.module.scss';

export default function Footer() {
  const router = useRouter();
  const locale = useLocale();

  return (
    <footer id={styles.footer}>
      <div>
        <p>
          WIKO(주) | 대표 : 안영도 | 주소 : 경상남도 창녕군 영산면 영상월령로
          370 | TEL : 055-521-1255~6 | FAX : 055-521-1257
        </p>
        <p>Copyright © 2026 WIKO Co,.Ltd All Rights Reserved.</p>
      </div>

      <div>
        <h1
          className={styles.footer_logo}
          onClick={() => router.push(`/${locale}`)}
        ></h1>
      </div>
    </footer>
  );
}

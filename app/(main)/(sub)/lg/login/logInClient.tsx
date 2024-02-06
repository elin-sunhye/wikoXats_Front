'use client';

import Input from '@/component/common/Input/Input';
import style from './login.module.scss';
import { SectionTitle } from '@/component/common/SectionTitle/SectionTitle';
import Link from 'next/link';
import { Btn } from '@/component/common/Btn/Btn';

export default function LogInClient() {
  return (
    <section className={`section_padding ${style.login_section}`}>
      <div className={`wrap ${style.login_wrap}`}>
        <SectionTitle title={'로그인'} desc={''} />
        <div className={style.login_box}>
          <p>아이디</p>
          <Input
            id={'id'}
            labelNm={'아이디'}
            type={'text'}
            style={{ border: '1px solid var(--gray-1)' }}
          />
          <p>비밀번호</p>
          <Input
            id={'pw'}
            labelNm={'비밀번호'}
            type={'text'}
            style={{ border: '1px solid var(--gray-1)' }}
          />
          <Btn
            btnType={'text'}
            type={'button'}
            title={'로그인'}
            id={'login'}
            btnSize={`xlg`}
            hover={false}
            style={{ width: '100%' }}
          />

          <ul className={`flex_center ${style.bottom}`}>
            <li>
              <Link href={'/lg/signup'}>회원가입</Link>
            </li>
            <li>
              <Link href={'/lg/findid'}>아이디 찾기</Link>
            </li>
            <li>
              <Link href={'/lg/findpw'}>비밀번호 찾기</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

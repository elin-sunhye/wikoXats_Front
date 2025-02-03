'use client';

import Input from '@/component/common/Input/Input';
import style from './login.module.scss';
import { SectionTitle } from '@/component/common/SectionTitle/SectionTitle';
import Link from 'next/link';
import { Btn } from '@/component/common/Btn/Btn';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAutoAlert } from '@/hook/useAutoAlert';
import { useForm } from 'react-hook-form';

interface logInForm {
  id: string;
  pw: string;
}

export default function LogInClient() {
  //
  const router = useRouter();
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const { setIsChange, setStatus, setText } = useAutoAlert();

  // useform ------------------------------
  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
    setValue,
    getValues,
    setError,
    setFocus,
    trigger,
  } = useForm<logInForm>({
    mode: 'all',
    defaultValues: {
      id: '',
      pw: '',
    },
  });

  // 로그인 ------------------------------
  // const login = async () => {
  //   const formResult = await trigger(['id', 'pw'], {
  //     shouldFocus: true,
  //   });

  //   if (!formResult) {
  //     if (errors.id) {
  //       setError(
  //         'id',
  //         { type: 'focus', message: '아이디를 입력해주세요.' },
  //         { shouldFocus: true }
  //       );
  //     } else {
  //       setError(
  //         'pw',
  //         {
  //           type: 'focus',
  //           message: '비밀번호를 입력해주세요.',
  //         },
  //         { shouldFocus: true }
  //       );
  //     }
  //   } else {
  //     const result = await signIn('credentials', {
  //       userId: watch('id'),
  //       userPw: watch('pw'),
  //       redirect: false,
  //     });

  //     if (result) {
  //       if (result.error) {
  //         setIsChange(true);
  //         setStatus('error');
  //         setText(result.error);
  //         if (idRef.current) {
  //           idRef.current.focus();
  //         }
  //       } else {
  //         router.replace('/cms');
  //         router.refresh();
  //       }
  //     }
  //   }
  // };

  return (
    <section className={`section_padding ${style.login_section}`}>
      <div className={`wrap`}>
        <div className={style.login_wrap}>
          <SectionTitle title={'로그인'} desc={''} />
          <div className={style.login_box}>
            <form>
              <p>아이디</p>
              <Input
                id={'id'}
                labelNm={'아이디'}
                type={'text'}
                value={watch('id')}
                // {...register("id", { required: "아이디를 입력해주세요." })}
                onChange={(e: FormEvent<HTMLInputElement>) => {
                  const value = e.currentTarget.value;
                  setValue('id', value);
                }}
                name={'id'}
                ref={idRef}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    if (pwRef.current) {
                      pwRef.current.focus();
                    }
                  }
                }}
              />

              <p className={style.message}>
                {errors.id ? (
                  <span className={style.error}>{errors.id.message}</span>
                ) : (
                  ''
                )}
              </p>

              <p>비밀번호</p>
              <Input
                id={'pw'}
                labelNm={'비밀번호'}
                type={'password'}
                value={watch('pw')}
                // {...register("pw", { required: "비밀번호를 입력해주세요." })}
                onChange={(e: FormEvent<HTMLInputElement>) => {
                  const value = e.currentTarget.value;
                  setValue('pw', value);
                }}
                name={'pw'}
                ref={pwRef}
                // onKeyUp={(e) => {
                //   if (e.key === 'Enter') {
                //     login().then(() => {
                //       if (idRef.current) {
                //         idRef.current.focus();
                //       }
                //     });
                //   }
                // }}
              />
              <p className={style.message}>
                {errors.pw ? (
                  <span className={style.error}>{errors.pw.message}</span>
                ) : (
                  ''
                )}
              </p>
            </form>

            <Btn
              btnType={'text'}
              type={'submit'}
              title={'로그인'}
              id={'login'}
              btnSize={`xlg`}
              hover={false}
              onClick={() => {
                // login().then(() => {
                //   if (idRef.current) {
                //     idRef.current.focus();
                //   }
                // });
              }}
              onKeyUp={(e) => {
                // login().then(() => {
                //   if (idRef.current) {
                //     idRef.current.focus();
                //   }
                // });
              }}
            />

            <ul className={`flex_center ${style.bottom}`}>
              <li>
                <a href={'/lg/signup'}>회원가입</a>
              </li>
              <li>
                <a href={'/lg/findid'}>아이디 찾기</a>
              </li>
              <li>
                <a href={'/lg/findpw'}>비밀번호 찾기</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

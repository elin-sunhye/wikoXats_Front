'use client';

import style from './signupClient.module.scss';
import inputStyle from '@/component/common/Input/input.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Btn } from '@/component/common/Btn/Btn';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { LiaUserSolid, LiaUsersSolid } from 'react-icons/lia';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { FaRegEye, FaRegEyeSlash, FaUserCheck } from 'react-icons/fa';

interface signupForm {
  type: string;
  id: string;
  pw: string;
  pwCheck: string;
  name: string;
  email: string;
  pn: string;
  bizFile?: FileList;
  rank?: string;
}

export default function SignupClient() {
  // ------------------------------
  const router = useRouter();
  const params = useSearchParams();
  const fileRef = useRef<HTMLInputElement>(null);

  // step, type ------------------------------
  const [step, setStep] = useState<number>(
    params.get('step') ? Number(params.get('step')) : 1
  );
  const [type, setType] = useState<string>(
    params.get('type') ? String(params.get('type')) : ''
  );

  useEffect(() => {
    setStep(params.get('step') ? Number(params.get('step')) : 1);
    setType(params.get('type') ? String(params.get('type')) : '');
    console.log('123');
  }, [params]);
  useEffect(() => {
    router.replace(`/lg/signup?step=${step}&type=${type}`);
    console.log('asd');
  }, [step, type]);

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
  } = useForm<signupForm>({
    mode: 'onChange',
    defaultValues: {
      type: type,
      id: '',
      pw: '',
      pwCheck: '',
      name: '',
      email: '',
      pn: '',
    },
  });

  // id 중복확인
  const [duplicateId, setDuplicateId] = useState<boolean>(false);

  useEffect(() => {
    watch((value, { name, type }) => {
      if (value.id === '') {
        setDuplicateId(false);
      }
    });
    // return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    setDuplicateId(false);
  }, [watch('id')]);

  // pw 보기 숨기기
  const [pwShow, setPwShow] = useState<boolean>(false);
  const [pwCheckShow, setPwCheckShow] = useState<boolean>(false);

  // 타입 변경 시 데이터 초기화
  useEffect(() => {
    reset();
  }, [type]);

  return (
    <section className="section_padding">
      <div className="wrap">
        <ul className={`flex_between ${style.step_box}`}>
          <li className={step === 1 ? style.active : ''}>
            <span>1</span>
            <p>회원선택</p>
          </li>
          <li className={step === 2 ? style.active : ''}>
            <span>2</span>
            <p>정보입력</p>
          </li>
          <li className={step === 3 ? style.active : ''}>
            <span>3</span>
            <p>가입완료</p>
          </li>
        </ul>

        {/* step1 */}
        {step === 1 ? (
          <div className={`flex_center ${style.step_1}`}>
            <button
              type={'button'}
              title={'대표'}
              id={'boss'}
              className={`flex_center ${type === 'boss' ? style.active : ''}`}
              onClick={() => {
                // TODO: 대표로 회원 가입되어있는 아이디가 있는지 체크 해야함 (대표 권한으로 회원가입은 한번밖에 안됨 / 대표 회원 탈퇴 시 재가입 가능)
                setType('boss');
              }}
            >
              <LiaUserSolid role={`img`} aria-label={`사람 아이콘`} />
              <span>대표</span>
            </button>
            <button
              type={'button'}
              title={'직원'}
              id={'employee'}
              className={`flex_center ${
                type === 'employee' ? style.active : ''
              }`}
              onClick={() => {
                setType('employee');
              }}
            >
              <LiaUsersSolid role={`img`} aria-label={`사람들 아이콘`} />
              <span>직원</span>
            </button>
          </div>
        ) : step === 2 ? (
          <form className={style.step_2}>
            <div className={`flex_start ${style.row}`}>
              <label htmlFor="id">아이디</label>
              <input
                id={'id'}
                className={`${inputStyle.input} ${inputStyle.lg}`}
                type={'text'}
                value={watch('id')}
                {...register('id', { required: '필수입력 사항입니다.' })}
                name={'id'}
              />
              <Btn
                type={'button'}
                title={'중복확인'}
                id={'idCheck'}
                btnType={'text'}
                hover={false}
                disabled={watch('id') === '' ? true : false}
                onClick={() => {
                  setDuplicateId(true);
                }}
              />

              <p className={style.message}>
                {errors.id ? (
                  <span className={style.error}>{errors.id.message}</span>
                ) : (
                  ''
                )}
                {duplicateId ? (
                  <span className={style.success}>
                    중복확인이 완료되었습니다.
                  </span>
                ) : watch('id') !== '' && !duplicateId ? (
                  <span className={style.caution}>중복확인을 해주세요.</span>
                ) : (
                  <></>
                )}
              </p>
            </div>
            <div className={`flex_start ${style.row}`}>
              <label htmlFor="pw">비밀번호</label>
              <input
                id={'pw'}
                className={`${inputStyle.input} ${inputStyle.lg}`}
                type={pwShow ? 'text' : 'password'}
                value={watch('pw')}
                {...register('pw', {
                  required: '필수입력 사항입니다.',
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[`~!@#$%^&*()_+=])(?=\S+$).{8,20}$/,
                    message:
                      '영문, 숫자, 특수문자( `~!@#$%^&*()_+= )를 포함하여 입력헤주세요.',
                  },
                })}
              />
              <Btn
                type={'button'}
                title={'비밀번호 보기'}
                id={''}
                btnType={'ico'}
                hover={false}
                ico={
                  pwShow ? (
                    <FaRegEye
                      role={'img'}
                      aria-label={'비밀번호 보기 아이콘'}
                    />
                  ) : (
                    <FaRegEyeSlash
                      role={'img'}
                      aria-label={'비밀번호 숨기기 아이콘'}
                    />
                  )
                }
                onClick={() => {
                  setPwShow(!pwShow);
                }}
              />

              <p className={style.message}>
                {errors.pw && errors.pw.type === 'required' ? (
                  <span className={style.error}>{errors.pw.message}</span>
                ) : errors.pw && errors.pw.type === 'pattern' ? (
                  <span className={style.caution}>{errors.pw.message}</span>
                ) : (
                  ''
                )}
              </p>
            </div>
            <div className={`flex_start ${style.row}`}>
              <label htmlFor="pwCheck">비밀번호 확인</label>
              <input
                id={'pwCheck'}
                className={`${inputStyle.input} ${inputStyle.lg}`}
                type={pwCheckShow ? 'text' : 'password'}
                value={watch('pwCheck')}
                {...register('pwCheck', {
                  required: '필수입력 사항입니다.',
                  validate: {
                    matchPw: (value) => {
                      const { pw } = getValues();
                      return pw === value || '비밀번호가 일치하지 않습니다';
                    },
                  },
                })}
              />
              <Btn
                type={'button'}
                title={'비밀번호 보기'}
                id={''}
                btnType={'ico'}
                hover={false}
                ico={
                  pwCheckShow ? (
                    <FaRegEye
                      role={'img'}
                      aria-label={'비밀번호 보기 아이콘'}
                    />
                  ) : (
                    <FaRegEyeSlash
                      role={'img'}
                      aria-label={'비밀번호 숨기기 아이콘'}
                    />
                  )
                }
                onClick={() => {
                  setPwCheckShow(!pwCheckShow);
                }}
              />

              <p className={style.message}>
                {errors.pwCheck ? (
                  <span className={style.error}>{errors.pwCheck.message}</span>
                ) : (
                  ''
                )}
              </p>
            </div>
            <div className={`flex_start ${style.row}`}>
              <label htmlFor="name">이름</label>
              <input
                id={'name'}
                className={`${inputStyle.input} ${inputStyle.lg}`}
                type={'text'}
                value={watch('name')}
                {...register('name', {
                  required: '필수입력 사항입니다.',
                  pattern: {
                    value: /^[ㄱ-ㅎ가-힣a-zA-Z]+$/,
                    message: '한글, 영문만 입력해주세요.',
                  },
                })}
              />

              <p className={style.message}>
                {errors.name && errors.name.type === 'required' ? (
                  <span className={style.error}>{errors.name.message}</span>
                ) : errors.name && errors.name.type === 'pattern' ? (
                  <span className={style.caution}>{errors.name.message}</span>
                ) : (
                  ''
                )}
              </p>
            </div>
            <div className={`flex_start ${style.row}`}>
              <label htmlFor="email">이메일</label>
              <input
                id={'email'}
                className={`${inputStyle.input} ${inputStyle.lg}`}
                type={'text'}
                value={watch('email')}
                {...register('email', {
                  required: '필수입력 사항입니다.',
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                    message: '올바른 이메일 형식을 입력해주세요.',
                  },
                })}
              />

              <p className={style.message}>
                {errors.email && errors.email.type === 'required' ? (
                  <span className={style.error}>{errors.email.message}</span>
                ) : errors.email && errors.email.type === 'pattern' ? (
                  <span className={style.caution}>{errors.email.message}</span>
                ) : (
                  ''
                )}
              </p>
            </div>

            <div className={`flex_start ${style.row}`}>
              <label htmlFor="pn">연락처</label>
              <input
                id={'pn'}
                className={`${inputStyle.input} ${inputStyle.lg}`}
                type={'text'}
                value={watch('pn').replace(
                  /^(\d{3})(\d{3,4})(\d{4})$/,
                  `$1-$2-$3`
                )}
                {...register('pn', {
                  required: '필수입력 사항입니다.',
                  pattern: {
                    value: /(01[016789])-(\d{3,4})-(\d{4})/,
                    message: '숫자만 입력해주세요.',
                  },
                })}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.currentTarget.value
                    .replace(/[^0-9]/g, '')
                    .replaceAll('-', '');

                  setValue('pn', value);
                }}
              />

              <p className={style.message}>
                {errors.pn && errors.pn.type === 'required' ? (
                  <span className={style.error}>{errors.pn.message}</span>
                ) : errors.pn && errors.pn.type === 'pattern' ? (
                  <span className={style.caution}>{errors.pn.message}</span>
                ) : (
                  ''
                )}
              </p>
            </div>

            {type === 'boss' ? (
              <div className={`flex_start ${style.row}`}>
                <label htmlFor="bizFile">사업자등록증</label>
                <input
                  id={'bizFile'}
                  className={`${inputStyle.input} ${inputStyle.lg}`}
                  type={'file'}
                  // value={watch('bizFile')}
                  {...register('bizFile', {
                    required: '필수입력 사항입니다.',
                  })}
                />

                <p className={style.message}>
                  {errors.bizFile ? (
                    <span className={style.error}>
                      {errors.bizFile.message}
                    </span>
                  ) : (
                    ''
                  )}
                </p>
              </div>
            ) : (
              <div className={`flex_start ${style.row}`}>
                <label htmlFor="rank">직급</label>
                <input
                  id={'rank'}
                  className={`${inputStyle.input} ${inputStyle.lg}`}
                  type={'text'}
                  value={watch('rank')}
                  {...register('rank', {
                    required: '필수입력 사항입니다.',
                  })}
                />

                <p className={style.message}>
                  {errors.rank ? (
                    <span className={style.error}>{errors.rank.message}</span>
                  ) : (
                    ''
                  )}
                </p>
              </div>
            )}
          </form>
        ) : (
          <div className={`flex_center ${style.step_3}`}>
            <FaUserCheck role={'img'} aria-label={'가입완료 아이콘'} />
            <p>가입완료</p>
          </div>
        )}

        {/* 이전 다음 버튼 */}
        <div className={`flex_center ${style.btn_box}`}>
          {step === 2 ? (
            <Btn
              type={'button'}
              title={'이전'}
              id={''}
              btnType={'all'}
              hover={true}
              ico={
                <FiArrowLeft role={`img`} aria-label={`왼쪽 화살표 아이콘`} />
              }
              icoPosition={'left'}
              onClick={() => {
                if (step === 2) {
                  setStep(1);
                } else if (step === 3) {
                  setStep(2);
                }
              }}
            />
          ) : (
            <></>
          )}

          <Btn
            type={'button'}
            title={step === 3 ? '로그인' : '다음'}
            id={''}
            btnType={'all'}
            hover={true}
            ico={
              <FiArrowRight role={`img`} aria-label={`오른쪽 화살표 아이콘`} />
            }
            disabled={
              step === 1
                ? type === ''
                  ? true
                  : false
                : step === 2
                ? watch('id') === '' ||
                  watch('pw') === '' ||
                  watch('pwCheck') === '' ||
                  watch('name') === '' ||
                  watch('email') === '' ||
                  watch('pn') === '' ||
                  (watch('bizFile') && watch('bizFile')?.length === 0) ||
                  (watch('rank') && watch('rank') === '') ||
                  (!errors && !duplicateId)
                  ? true
                  : false
                : false
            }
            onClick={() => {
              if (step === 1) {
                setStep(2);
              } else if (step === 2) {
                setStep(3);
              } else {
                router.replace(`/lg/login`);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}

'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import style from './signupClient.module.scss';
import { useEffect, useState } from 'react';
import { Btn } from '@/component/common/Btn/Btn';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { LiaUserSolid, LiaUsersSolid } from 'react-icons/lia';
import Input from '@/component/common/Input/Input';
import { useForm } from 'react-hook-form';

interface signupForm {
  id: string;
  pw: string;
  name: string;
  email: string;
  pn: string;
  bizFile?: string;
  link?: string;
}

export default function SignupClient() {
  //
  const router = useRouter();
  const params = useSearchParams();

  // useform
  const { register } = useForm();

  // step, type
  const [step, setStep] = useState<number>(
    params.get('step') ? Number(params.get('step')) : 1
  );
  const [type, setType] = useState<string>(
    params.get('type') ? String(params.get('type')) : ''
  );
  useEffect(() => {
    router.push(`/lg/signup?step=${step}&type=${type}`);
  }, [step, type]);

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
                // TODO: 대표로 회원가입되어있는 아이디가 있는지 체크 해야함 (대표 권한으로 회원가입은 한번밖에 안됨 / 대표 회원 탈퇴 시 재가입 가능)
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
          <form>
            <p>아이디</p>
            <Input
              type={'text'}
              id={''}
              labelNm={''}
              {...register('id', { required: true })}
            />

            <p>비번</p>
            <Input
              type={'password'}
              id={''}
              labelNm={''}
              {...register('pw', { required: true, maxLength: 10 })}
            />

            <p>이름</p>
            <Input
              type={'text'}
              id={''}
              labelNm={''}
              {...register('name', { required: true })}
            />
            <p>이메일</p>
            <Input
              type={'text'}
              id={''}
              labelNm={''}
              {...register('email', { required: true })}
            />
            <p>전화번호</p>
            <Input
              type={'text'}
              id={''}
              labelNm={''}
              {...register('pn', { required: true })}
            />
            {type === 'employee' ? (
              <>
                <p>직급</p>
                <Input
                  type={'text'}
                  id={''}
                  labelNm={''}
                  {...register('rank', { required: true })}
                />
              </>
            ) : (
              <>
                <p>시업자등록증</p>
                <Input
                  type={'text'}
                  id={''}
                  labelNm={''}
                  {...register('bizFile', { required: true })}
                />
              </>
            )}
          </form>
        ) : (
          <>가입완료</>
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
            disabled={type === '' ? true : false}
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

'use client';

import { useParams } from 'next/navigation';
import style from './signupClient.module.scss';
import { useState } from 'react';
import { Btn } from '@/component/common/Btn/Btn';

export default function SignupClient() {
  //
  const params = useParams();

  // step
  const [step, setStep] = useState<number>(1);

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
          <>회원 선택</>
        ) : step === 2 ? (
          <>정보입력</>
        ) : (
          <>가입완료</>
        )}

        {/* 이전 다음 버튼 */}
        <div className={`flex_between`}>
          <Btn
            btnType={'text'}
            type={'button'}
            title={'이전'}
            id={''}
            hover={false}
            onClick={() => {
              if (step === 2) {
                setStep(1);
              } else if (step === 3) {
                setStep(2);
              }
            }}
          />
          <Btn
            btnType={'text'}
            type={'button'}
            title={'다음'}
            id={''}
            hover={false}
            onClick={() => {
              if (step === 1) {
                setStep(2);
              } else if (step === 2) {
                setStep(3);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}

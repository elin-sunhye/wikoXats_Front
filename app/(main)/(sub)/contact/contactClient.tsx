'use client';

import { Btn } from '@/component/common/Btn/Btn';
import style from './contactClient.module.scss';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';

export default function ContactClient() {
  return (
    <SectionCommonLayout
      sectionId={'contact'}
      title={'위코에 대해 <br />궁금한것이 있으신가요?'}
      desc={'문의사항을 남겨주시면 <br />확인 후 연락드리겠습니다.'}
      btnYn={false}
    >
      <div className={''}>
        <div className={style.type}>
          <p className={style.title}>문의구분</p>
        </div>

        <div className={style.comp}>
          <p className={style.title}>회사명</p>
          <p className={style.title}>담당자명</p>
        </div>

        <div className={style.email}>
          <p className={style.title}>이메일</p>
        </div>

        <div className={style.content}>
          <p className={style.title}>문의내용</p>
        </div>

        <div className={style.agree}></div>

        <div className={style.btn_box}>
          <Btn
            type={'button'}
            title={'문의'}
            id={'summit'}
            btnType={'text'}
            hover={false}
          />
        </div>
      </div>
    </SectionCommonLayout>
  );
}

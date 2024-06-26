"use client";

import style from "./findIdClient.module.scss";
import inputStyle from "@/component/common/Input/input.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import { Btn } from "@/component/common/Btn/Btn";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { SectionTitle } from "@/component/common/SectionTitle/SectionTitle";
import Input from "@/component/common/Input/Input";
import Link from "next/link";
import { FaUserCheck } from "react-icons/fa";
import { useForm } from "react-hook-form";

interface findidForm {
  name: string;
  email: string;
}

export default function FindIdClient() {
  // ------------------------------
  const router = useRouter();
  const params = useSearchParams();
  const fileRef = useRef<HTMLInputElement>(null);

  // step ------------------------------
  const [step, setStep] = useState<number>(
    params?.get("step") ? Number(params?.get("step")) : 1
  );

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
  } = useForm<findidForm>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <section className="section_padding">
      <div className="wrap">
        {/* step1 */}
        {step === 1 ? (
          <div className={style.step_1}>
            <SectionTitle title={"ID 찾기"} desc={""} />
            <div className={style.find_id_box}>
              <label htmlFor="name">이름</label>
              <input
                id={"name"}
                className={`${inputStyle.input} ${inputStyle.lg}`}
                type={"text"}
                value={watch("name")}
                {...register("name", {
                  required: "필수입력 사항입니다.",
                  pattern: {
                    value: /^[ㄱ-ㅎ가-힣a-zA-Z]+$/,
                    message: "한글, 영문만 입력해주세요.",
                  },
                })}
              />
              <p className={style.message}>
                {errors.name && errors.name.type === "required" ? (
                  <span className={style.error}>{errors.name.message}</span>
                ) : errors.name && errors.name.type === "pattern" ? (
                  <span className={style.caution}>{errors.name.message}</span>
                ) : (
                  ""
                )}
              </p>

              <label htmlFor="email">이메일</label>
              <input
                id={"email"}
                className={`${inputStyle.input} ${inputStyle.lg}`}
                type={"text"}
                value={watch("email")}
                {...register("email", {
                  required: "필수입력 사항입니다.",
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                    message: "올바른 이메일 형식을 입력해주세요.",
                  },
                })}
              />
              <p className={style.message}>
                {errors.email && errors.email.type === "required" ? (
                  <span className={style.error}>{errors.email.message}</span>
                ) : errors.email && errors.email.type === "pattern" ? (
                  <span className={style.caution}>{errors.email.message}</span>
                ) : (
                  ""
                )}
              </p>

              <Btn
                btnType={"text"}
                type={"submit"}
                title={"ID 찾기"}
                id={"findId"}
                btnSize={`xlg`}
                hover={false}
                disabled={
                  watch("name") === "" || watch("email") === "" ? true : false
                }
                onClick={() => {
                  setStep(2);
                }}
              />
            </div>
          </div>
        ) : (
          <div className={`flex_center ${style.step_2}`}>
            <FaUserCheck role={"img"} aria-label={"가입완료 아이콘"} />
            <p>
              찾으신 아이디는 <span>***</span>입니다.
            </p>
            <Btn
              btnType={"text"}
              type={"submit"}
              title={"로그인"}
              id={"login"}
              btnSize={`xlg`}
              hover={false}
              onClick={() => {
                router.replace("/lg/login");
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

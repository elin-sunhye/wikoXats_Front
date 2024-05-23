"use client";

import { Btn } from "@/component/common/Btn/Btn";
import style from "./contactClient.module.scss";
import SectionCommonLayout from "@/component/common/SectionCommonLayout/SectionCommonLayout";
import Input from "@/component/common/Input/Input";
import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef } from "react";
import { useAutoAlert } from "@/hook/useAutoAlert";
import { useForm } from "react-hook-form";
import Textarea from "@/component/common/Textarea/Textarea";

interface contactForm {
  category: string;
  comp_nm: string;
  user_nm: string;
  reply_email: string;
  contents: string;
}

export default function ContactClient() {
  //
  const form = useRef<HTMLFormElement>(null);
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
  } = useForm<contactForm>({
    mode: "onChange",
    defaultValues: {
      category: "",
      comp_nm: "",
      user_nm: "",
      reply_email: "",
      contents: "",
    },
  });

  return (
    <SectionCommonLayout
      sectionId={"contact"}
      title={"위코에 대해 <br />궁금한것이 있으신가요?"}
      desc={"문의사항을 남겨주시면 <br />확인 후 연락드리겠습니다."}
      btnYn={false}
    >
      <form className={style.contact_box} ref={form}>
        <div className={style.type}>
          <p className={style.title}>문의구분</p>
          <div className={style.inp_box}>
            <Input
              id={"category"}
              labelNm={"category"}
              type={"text"}
              value={watch("category")}
              {...register("category", {
                required: "필수입력 사항입니다.",
              })}
            />

            <p className={style.message}>
              {errors.category ? (
                <span className={style.error}>{errors.category.message}</span>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>

        <div className={style.comp}>
          <p className={style.title}>회사명</p>
          <div className={style.inp_box}>
            <Input
              id={"comp_nm"}
              labelNm={"comp_nm"}
              type={"text"}
              value={watch("comp_nm")}
              {...register("comp_nm", {
                required: "필수입력 사항입니다.",
              })}
            />

            <p className={style.message}>
              {errors.comp_nm ? (
                <span className={style.error}>{errors.comp_nm.message}</span>
              ) : (
                ""
              )}
            </p>
          </div>
          <p className={style.title}>담당자명</p>
          <div className={style.inp_box}>
            <Input
              id={"user_nm"}
              labelNm={"user_nm"}
              type={"text"}
              value={watch("user_nm")}
              {...register("user_nm", {
                required: "필수입력 사항입니다.",
              })}
            />
            <p className={style.message}>
              {errors.user_nm ? (
                <span className={style.error}>{errors.user_nm.message}</span>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>

        <div className={style.email}>
          <p className={style.title}>이메일</p>
          <div className={style.inp_box}>
            <Input
              id={""}
              labelNm={""}
              type={"text"}
              value={watch("reply_email")}
              {...register("reply_email", {
                required: "필수입력 사항입니다.",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                  message: "올바른 이메일 형식을 입력해주세요.",
                },
              })}
            />

            <p className={style.message}>
              {errors.reply_email && errors.reply_email.type === "required" ? (
                <span className={style.error}>
                  {errors.reply_email.message}
                </span>
              ) : errors.reply_email &&
                errors.reply_email.type === "pattern" ? (
                <span className={style.caution}>
                  {errors.reply_email.message}
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>

        <div className={style.content}>
          <p className={style.title}>문의내용</p>
          <div className={style.inp_box}>
            {/* editor */}
            <Textarea
              title={"contents"}
              value={watch("contents")}
              {...register("contents", {
                required: "필수입력 사항입니다.",
              })}
              onChange={(e) => {
                const value = e.currentTarget.value;
                setValue("contents", value);
              }}
            />
            {/* <textarea
              title={"contents"}
              value={watch("contents")}
              {...register("contents", {
                required: "필수입력 사항입니다.",
              })}
            /> */}
            <p className={style.message}>
              {errors.contents ? (
                <span className={style.error}>{errors.contents.message}</span>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>

        {/* <div className={style.agree}></div> */}

        <div className={style.btn_box}>
          <Btn
            type={"button"}
            title={"문의"}
            id={"summit"}
            btnType={"text"}
            hover={false}
            onClick={async (e) => {
              const result = await trigger(
                ["category", "comp_nm", "user_nm", "reply_email", "contents"],
                { shouldFocus: true }
              );

              if (!result) {
                if (errors.category) {
                  setError(
                    "category",
                    { type: "focus", message: "필수입력 사항입니다." },
                    { shouldFocus: true }
                  );
                } else if (errors.comp_nm) {
                  setError(
                    "comp_nm",
                    { type: "focus", message: "필수입력 사항입니다." },
                    { shouldFocus: true }
                  );
                } else if (errors.user_nm) {
                  setError(
                    "user_nm",
                    { type: "focus", message: "필수입력 사항입니다." },
                    { shouldFocus: true }
                  );
                } else if (errors.reply_email) {
                  setError(
                    "reply_email",
                    {
                      type: "focus",
                      message:
                        errors.reply_email.type === "required"
                          ? "필수입력 사항입니다."
                          : "올바른 이메일 형식을 입력해주세요.",
                    },
                    { shouldFocus: true }
                  );
                } else if (errors.contents) {
                  setError(
                    "contents",
                    { type: "focus", message: "필수입력 사항입니다." },
                    { shouldFocus: true }
                  );
                }
              } else {
                if (form.current) {
                  e.preventDefault();
                  emailjs
                    .sendForm(
                      "service_2au6h99",
                      "template_meiaiun",
                      form.current,
                      "ZpeMXkqsMX992vcEG"
                    )
                    .then(
                      (result) => {
                        if (result.status === 200) {
                          setText("성공적으로 이메일이 전송되었습니다.");
                          setIsChange(true);
                          setStatus("success");
                          form.current?.reset();
                          reset();
                        } else {
                          setText(
                            `이메일 전송이 실패되었습니다. | ${result.text}`
                          );
                          setIsChange(true);
                          setStatus("success");
                        }
                      },
                      (error) => {
                        setText(
                          `이메일 전송이 실패되었습니다. | ${error.text}`
                        );
                        setIsChange(true);
                        setStatus("success");
                      }
                    );
                }
              }
            }}
          />
        </div>
      </form>
    </SectionCommonLayout>
  );
}

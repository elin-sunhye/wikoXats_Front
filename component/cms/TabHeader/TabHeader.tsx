"use client";

import style from "./TabHeader.module.scss";
import { Btn } from "@/component/common/Btn/Btn";

export default function TabHeader() {
  return (
    <>
      <ul className={style.btn_header}>
        <li>
          <Btn
            type={"button"}
            title={""}
            id={""}
            btnType={"text"}
            hover={false}
          >
            news
          </Btn>
        </li>
        <li>
          <Btn
            type={"button"}
            title={""}
            id={""}
            btnType={"text"}
            hover={false}
          >
            FAQ
          </Btn>
        </li>
        <li>
          <Btn
            type={"button"}
            title={""}
            id={""}
            btnType={"text"}
            hover={false}
          >
            menu
          </Btn>
        </li>
      </ul>
    </>
  );
}

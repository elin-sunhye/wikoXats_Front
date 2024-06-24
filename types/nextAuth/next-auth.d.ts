import NextAuth from "next-auth";
import { EnterpriseInfoResponse } from "../lg/RegisterType";

interface AuthListType {
  authrtSeq: number;
  authrtCd: string;
  authrtNm: string;
  authrtExpln: string;
}

// TODO : 타입 수정 (01.11)
declare module "next-auth" {
  interface User {
    /**
     * @userSeq: 사용자 시퀀스
     */
    userSeq: number;
    /**
     * @userNm: 성명
     */
    userNm: string;
    /**
     * @userBirth: 생년월일
     */
    userBirth: string | null;
    /**
     * @userTelno: 연락처
     */
    userTelno: string;
    /**
     * @userId: 아이디
     */
    userId: string;
    /**
     * @userEmail: 이메일
     */
    userEmail: string;
    /**
     * @authList: 권한리스트
     */
    auth: string;
    /**
     * @jwtAuthToken: Auth 토큰
     */
    jwtAuthToken?: string;
    /**
     * @jwtRefreshToken: Refresh 토큰
     */
    jwtRefreshToken?: string;

    // 오류메시지: 오류일때만 내용이 담겨서 옴
    code?: string;
    description?: string;
    detail?: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}

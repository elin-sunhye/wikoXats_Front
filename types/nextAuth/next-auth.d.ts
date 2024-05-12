import NextAuth from 'next-auth';
import { EnterpriseInfoResponse } from '../lg/RegisterType';

interface AuthListType {
  authrtSeq: number;
  authrtCd: string;
  authrtNm: string;
  authrtExpln: string;
}

// TODO : 타입 수정 (01.11)
declare module 'next-auth' {
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
     * @userSxdcEnu: 성별
     */
    userSxdcEnu: string | null;
    /**
     * @userId: 아이디
     */
    userId: string;
    /**
     * @userEmail: 이메일
     */
    userEmail: string;
    /**
     * @userTypeEnu: 유형
     */
    userTypeEnu: {
      type: 'NORMAL' | 'ADMIN';
      name: string;
    };
    /**
     * @authList: 권한리스트
     */
    authList: AuthListType[];
    /**
     * @jwtAuthToken: Auth 토큰
     */
    jwtAuthToken: string;
    /**
     * @jwtRefreshToken: Refresh 토큰
     */
    jwtRefreshToken: string;
    /**
     * @joinApprovalYn: 가입 승인 여부
     */
    joinApprovalYn: 'Y' | 'N';
    /**
     * @entInfoSeq: 기업정보 시퀀스
     */
    entInfoSeq: number;
    /**
     * 부서
     */
    userDept: string;
    /**
     * 직급
     */
    userJbgd: string;
    /**
     * 기업정보
     */
    enterpriseInfoResponse: EnterpriseInfoResponse;

    // 오류메시지: 오류일때만 내용이 담겨서 옴
    code?: string;
    description?: string;
    detail?: string;
  }

  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}

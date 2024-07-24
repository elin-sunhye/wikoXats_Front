import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const token = request.cookies.get("next-auth.session-token");

    // 관리자 페이지 접근 시 토큰 확인
    if (url.pathname.startsWith("/cms")) {
      if (!token) {
        const redirectUrl = new URL("/lg/login", request.url);
        redirectUrl.searchParams.set("callbackUrl", "/cms"); // 콜백 URL 설정
        return NextResponse.redirect(redirectUrl);
      }
    }

    // 로그인 페이지 접속 시 토큰 확인
    if (url.pathname === "/lg/login") {
      if (token) {
        url.pathname = "/cms";
        url.search = ""; // 기존 콜백 URL 제거
        return NextResponse.redirect(url);
      }
    }

    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // CMS 페이지에 대한 접근 권한 확인
        if (req.url.includes("/cms")) {
          return !!token;
        }
        return true;
      },
    },
  }
);

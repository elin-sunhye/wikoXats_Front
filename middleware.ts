import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authOptions } from "./app/api/auth/[...nextauth]/AuthOptions";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // 세션
  const accessToken = request.cookies.get("next-auth.session-token")?.value;
  const { pathname } = request.nextUrl;

  // 로그인 페이지 접근 시, 이미 로그인 되어 있다면 메인 페이지로 리다이렉트
  if (pathname.includes("/lg/login")) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      // 로그인 페이지는 보호되지 않은 경로이므로, accessToken이 없어도 접근 가능
      return NextResponse.next();
    }
  }

  // 관리자 페이지 접근 시, 로그인이 안되어 있다면 메인 페이지로 리다이렉트
  if (pathname.includes("/cms")) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/lg/login", request.url));
    } else {
      // 관리자 페이지 접근 허용
      return NextResponse.next();
    }
  }
  // 기타 경로 기본 동작 유지
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/cms",
    "/lg/login",
    // "/",
    // 인증이 필요한 경로 전체 작성
  ],
};

// import { NextRequest, NextResponse } from "next/server";
// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   function middleware(request: NextRequest) {
//     const requestHeaders = new Headers(request.headers);
//     requestHeaders.set("x-url", request.url);

//     return NextResponse.next({
//       request: {
//         headers: requestHeaders,
//       },
//     });
//   },
//   {
//     callbacks: {
//       authorized: ({ req, token }) => {
//         if (req.url.includes("/cms")) {
//           if (
//             !token ||
//             !token.user ||
//             !token.user.authList ||
//             !token.user.authList.length ||
//             !token.user.authList[0].authrtNm
//             // ||
//             // !token.user.authList[0].authrtCd.includes("ADMIN")
//           ) {
//             return false;
//           } else {
//             return true;
//           }
//         } else {
//           return true;
//         }
//       },
//     },
//   }
// );

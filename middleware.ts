import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);

    // Fetch headers
    // const referer = request.headers.get("referer") || "";
    // const userAgent = request.headers.get("user-agent") || "";
    // const xForwardedFor = request.headers.get("x-forwarded-for") || "";

    // 로그 기록을 위한 URL
    // const fullUrl = request.nextUrl.href;

    // if (!fullUrl.includes("/img/") && !fullUrl.includes("/api/")) {
    //   await fetch(
    //     `${process.env.NEXT_PUBLIC_HOST}/bapi/menu/registerMenuAccessLog`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         Referer: referer,
    //         "User-Agent": userAgent,
    //         "X-Forwarded-For": xForwardedFor,
    //       },
    //       body: JSON.stringify({
    //         serviceAccess: "VISIT",
    //         menuUrl: fullUrl,
    //       }),
    //     }
    //   );
    // }

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (req.url.includes("/cms")) {
          if (
            !token ||
            !token.user ||
            !token.user.authList ||
            !token.user.authList.length ||
            !token.user.authList[0].authrtNm ||
            !token.user.authList[0].authrtCd.includes("ADMIN")
          ) {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      },
    },
  }
);

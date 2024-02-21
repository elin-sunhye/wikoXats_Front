import { NextRequest, NextResponse } from 'next/server';
// import { getSession } from "next-auth/react";
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/AuthOptions';

export async function GET(req: NextRequest, res: NextResponse) {
  const nextUrl = req.nextUrl;
  const backendPathname = nextUrl.pathname.replace(/\/api\//g, '/bapi/');
  const reqUrl =
    process.env.NEXT_PUBLIC_HOST + backendPathname + nextUrl.search;

  const headers = await getHeaders(res, req);
  // const headers: any = await req.headers;

  try {
    const res = await fetch(reqUrl, {
      // @ts-ignore
      headers: {
        'X-AUTH-TOKEN': headers['X-AUTH-TOKEN'],
        Cookie: headers.Cookie,
        withCredentials: true,
      },
    });
    const data = await res.json();

    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const nextUrl = req.nextUrl;
  const backendPathname = nextUrl.pathname.replace(/\/api\//g, '/bapi/');
  const reqUrl =
    process.env.NEXT_PUBLIC_HOST + backendPathname + nextUrl.search;

  const headers = await getHeaders(res, req);
  //const headers = req.headers;
  const body = await req.json();
  try {
    const res = await fetch(reqUrl, {
      method: 'POST',
      // @ts-ignore
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        ...headers,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e });
  }
}

async function getHeaders(res: NextResponse, req: NextRequest) {
  const session = await getServerSession(authOptions);
  // console.log("session : ", session);

  return {
    'X-AUTH-TOKEN': session?.user.jwtAuthToken,
    Cookie: 'X-REFRESH_TOKEN=' + session?.user.jwtRefreshToken,
    withCredentials: true,
  };
}

// getIronSession
// async function getHeaders(req: NextRequest, res: NextResponse) {
//   const session = await getIronSession(req, res, {
//     cookieName: "deps",
//     password: process.env.NEXTAUTH_SECRET as string,
//     cookieOptions: {
//       secure: false, // process.env.NODE_ENV === "production",
//     },
//   });
//   return {
//     "X-AUTH-TOKEN": session.user?.jwtAuthToken,
//     Cookie: "X-REFRESH_TOKEN=" + session.user?.jwtRefreshToken,
//     withCredentials: true,
//   };
// }

import { AuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "NormalLogin",
      credentials: {
        userId: { label: "userId", type: "text" },
        userPswd: { label: "userPswd", type: "password" },
        loginType: { label: "loginType", type: "text" },
      },
      async authorize(
        credentials:
          | Record<"userId" | "userPswd" | "loginType", string>
          | undefined
      ) {
        // TODO : 로그인 api 만들어지면 수정 (01.11)
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/bapi/common/member/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: credentials?.userId,
              userPswd: credentials?.userPswd,
              loginType: credentials?.loginType,
            }),
          }
        );
        const json = await res.json();

        if (json.code === "200") {
          // console.log("로그인 성공", json.data);

          if (json.data.joinApprovalYn === "N") {
            throw new Error("가입 승인이 완료되지 않았습니다.");
          }
          return json.data;
        } else {
          // err메시지 전달 : 서버 컴포넌트에서 getServerSession으로 받을
          // return JSON.stringify(json);
          throw new Error(JSON.stringify(json));
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User | AdapterUser }) {
      // authorize 메서드에서 반환된 사용자 객체 (로그인 시에만 제공됩니다)

      if (user) {
        token.user = user;
      }
      return token;
    },
    // JWT (JSON Web Token)의 생성과 검증을 사용자 정의하고 조작할 수 있게 합니다.
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = token.user;
      return session;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      if (!url.includes("http")) {
        return "http://localhost:3000" + url;
      }
      return url;
    },
  },
  pages: {
    signIn: "/lg/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60,
  },
};

import { useSession } from "next-auth/react";
import Dashboard from "./dashboard";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/AuthOptions";
import { redirect } from "next/navigation";
import { use } from "react";

export default async function Cms() {
  // 세션
  const session = await getServerSession(authOptions);
  // const session = use(getServerSession(authOptions));

  if (!session) {
    redirect("/");
    // console.log("로그인안됨", session);
  }
  // else {
  //   console.log("로그인", session);
  // }

  return <Dashboard />;
}

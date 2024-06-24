"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  //
  const router = useRouter();

  // 세션
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.replace("/lg/login");
    }
  }, [session]);

  console.log("session", session);
  return <>대시보드</>;
}

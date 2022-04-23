import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      return () => {
        router.push("/main");
        alert("로그인 후 이용 가능합니다!!!");
      };
    }
  }, []);
}

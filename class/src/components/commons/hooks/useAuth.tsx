import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useAuth() {
  const router = useRouter();
  //   const [isLoading, setIsLoading] = useState(true);

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다!!!");
      router.push("/23-04-login-check");
    }
  }, []);

  //   return {
  //     isLoading,
  //   };
}

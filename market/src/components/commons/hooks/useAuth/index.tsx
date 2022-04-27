import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken";

export function useAuth() {
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  // 권한분기 로직 추가하기
  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          router.push("/login");
          alert("로그인 후 이용 가능합니다!!!");
        }
      }
    }
    Auth();
  }, []);
}

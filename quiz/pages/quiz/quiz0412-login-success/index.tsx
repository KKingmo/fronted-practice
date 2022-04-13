import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setLoading(true);
    }
    if (!accessToken) {
      alert("로그인을 먼저 해주세요");
      router.push("/quiz/quiz0412-login");
    }
  }, [data]);

  useEffect(() => {
    if (loading) {
      if (!data.fetchUserLoggedIn.name) {
        alert("로그인을 먼저 해주세요");
        router.push("/quiz/quiz0412-login");
      }
    }
  }, [loading]);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>;
}

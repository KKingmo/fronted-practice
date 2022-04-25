import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";

// loginUserExample : 만료시간 5초짜리 테스트용 토큰
const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;
export default function Quiz07RefreshToken() {
  // 안쓰면 지워도 된다. 하지만 콤마는 꼭있어야함
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    setAccessToken(accessToken);
    alert("로그인에 성공하였습니다.");
    router.push("/quiz/quiz07/refreshToken-success");
  };

  return (
    <div>
      이메일 : <input onChange={onChangeEmail} type="text" />
      <br />
      비밀번호 : <input onChange={onChangePassword} type="password" />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}

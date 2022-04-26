import { useRouter } from "next/router";
import UserLoginUI from "./Login.presenter";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./Login.queries";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useApolloClient, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(3, "비밀번호는 최소 3자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리까지만 입력가능 합니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function UserLogin() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const { moveToPage } = useMoveToPage();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data) => {
    // 로그인하기
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data.loginUserExample.accessToken;
      setAccessToken(accessToken);

      // 유저정보 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      setUserInfo(userInfo);
      // 문자열로 변환해서 로컬스토리지에 넣기
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      alert("로그인에 성공하였습니다.");
      router.push("/main");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <UserLoginUI
      onClickLogin={onClickLogin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      moveToPage={moveToPage}
    />
  );
}

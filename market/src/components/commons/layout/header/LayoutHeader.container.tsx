import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { LOGOUT_USER } from "./LayoutHeader.queries";
import { useMutation } from "@apollo/client";

export default function LayoutHeader() {
  // 유저정보 받아오기
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const { moveToPage } = useMoveToPage();
  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogout = () => {
    try {
      logoutUser();
      setAccessToken("");
      setUserInfo({
        email: "",
        name: "",
      });
      alert("로그아웃 하였습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <LayoutHeaderUI
      moveToPage={moveToPage}
      router={router}
      userInfo={userInfo}
      accessToken={accessToken}
      onClickLogout={onClickLogout}
    />
  );
}

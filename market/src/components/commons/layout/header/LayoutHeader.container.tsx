import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";

export default function LayoutHeader() {
  // 유저정보 받아오기
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const { moveToPage } = useMoveToPage();

  console.log(accessToken);
  const onClickLogout = () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
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

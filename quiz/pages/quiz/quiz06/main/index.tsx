import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../src/commons/store";
import { Modal } from "antd";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function MainPage() {
  // 안쓰면 지워도 된다. 하지만 콤마는 꼭있어야함
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const client = useApolloClient();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    // 1. 로그인하기
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 2. 유저정보 받아오기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);

    // 3. 글로벌 스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    if (basket.length > 0) {
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    router.push("/quiz/quiz06/basket");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        title="장바구니가 묵직하네유~"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="이동하기"
        cancelText="취소"
      >
        <div>비회원으로 담긴 게시물 장바구니가 존재합니다.</div>
        <div>이동하시겠습니까?</div>
      </Modal>
      <div>
        이메일 : <input onChange={onChangeEmail} type="text" />
        <br />
        비밀번호 : <input onChange={onChangePassword} type="password" />
        <br />
        <button onClick={onClickLogin}>로그인하기</button>
      </div>
    </div>
  );
}

import styled from "@emotion/styled";
import { rgbToHex } from "@material-ui/core";

const Header = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
`;

const Logo = styled.img`
  max-height: 50px;
`;

const HeaderButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Login = styled.button`
  background: #ffffff;
  font-size: 18px;
  font-weight: 700;
  padding: 5px 10px;
  border: none;
  margin-right: 20px;
`;

const SignUp = styled.button`
  background: rgb(245, 218, 79);
  font-size: 18px;
  font-weight: 700;
  padding: 5px 10px;
  border: none;
`;

const HeaderHr = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  & > div:first-of-type {
    width: 50%;
    height: 5px;
    background: rgb(52, 121, 77);
  }
  & > div:last-of-type {
    width: 50%;
    height: 5px;
    background: rgb(245, 218, 79);
  }
`;

export default function LayoutHeader() {
  return (
    <>
      <Header>
        <div>
          <Logo src="/images/layout/header01.png" />
        </div>
        <HeaderButton>
          <Login>로그인</Login>
          <SignUp>회원가입</SignUp>
        </HeaderButton>
      </Header>
      <HeaderHr>
        <div></div>
        <div></div>
      </HeaderHr>
    </>
  );
}

import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Top = styled.div`
  width: 100%;
  height: 20%;
  background: #ffffff;
`;
const Body = styled.div`
  width: 100%;
  height: 10%;
  background: #f5da4f;
`;
const Bottom = styled.div`
  width: 100%;
  height: 70%;
  background: #34794d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 200px;
  height: 200px;
  background: black;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: black;
  }
`;

export default function LandingPage() {
  const router = useRouter();

  // 게시판입장하기
  const onClickBoards = () => {
    router.push("/boards/");
  };

  return (
    <Wrapper>
      <Top></Top>
      <Body></Body>
      <Bottom>
        <Button onClick={onClickBoards}>자 드가자!</Button>
      </Bottom>
    </Wrapper>
  );
}

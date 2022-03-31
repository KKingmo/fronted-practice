import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0px;
  height: 64px;
  background-color: #ffd600;

  & > div {
    font-size: 18px;
    font-weight: 700;
    padding: 0px 40px;
    border-right: 2px solid #ffffff;
    color: #ab9000;
  }

  & > div:first-of-type {
    color: #514400;
  }

  & > div:last-of-type {
    border-right: 0;
  }
`;

export default function LayoutNavigation() {
  return (
    <Wrapper>
      <div>자유게시판</div>
      <div>중고마켓</div>
      <div>마이페이지</div>
    </Wrapper>
  );
}

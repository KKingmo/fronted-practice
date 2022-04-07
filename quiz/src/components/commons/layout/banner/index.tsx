import styled from "@emotion/styled";
const Wrapper = styled.div`
  height: 100px;
  background-color: #eda8a8;
  img {
    width: 50px;
  }
`;

export default function LayoutBanner() {
  return (
    <Wrapper>
      <div>Banner</div>
    </Wrapper>
  );
}

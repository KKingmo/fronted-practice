import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 800px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ImageWebPPage() {
  return (
    <Wrapper>
      <img src="/img/image-gom-gom.webp" />
    </Wrapper>
  );
}

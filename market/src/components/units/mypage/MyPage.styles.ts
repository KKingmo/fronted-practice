import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const PickedWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 800px;
  overflow: auto;
`;

export const PickedItem = styled.div`
  padding: 10px;
  border: 1px solid #bdbdbd;
  margin: 10px;
  cursor: pointer;
`;

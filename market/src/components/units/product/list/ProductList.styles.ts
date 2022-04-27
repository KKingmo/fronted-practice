import styled from "@emotion/styled";

export const Wrapper = styled.div`
  & > h1 {
    width: 100%;
    text-align: center;
    font-family: "Gompyo", sans-serif;
    font-size: 2rem;
    letter-spacing: 0.05rem;
  }
`;
export const BestWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BestProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  & > h3 {
    width: 100%;
  }
`;

export const BestImgWrapper = styled.div`
  width: 240px;
  height: 240px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BestContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BestText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > span:first-of-type {
    font-size: 0.8rem;
    color: #4f4f4f;
  }

  & > span:last-of-type {
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

export const BestPickedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OptionsWrapper = styled.div`
  padding: 3rem 1rem 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;

export const SoldOutOption = styled.div`
  display: flex;
  & > div {
    margin-left: 10px;
  }
`;

export const SearchOption = styled.div`
  display: flex;
  & > div {
    margin: 0 10px;
  }
`;

export const InfiniteScrollWrapper = styled.div`
  background: #ffffff;
  height: 800px;
  overflow: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductsWrapper = styled.div`
  &:first-of-type {
    border: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid #f6f4f4;
  padding: 1.5rem 1rem;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  margin-right: 40px;
  width: 160px;
  height: 160px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SellerWrapper = styled.div`
  display: flex;
`;

export const PriceWrapper = styled.div`
  white-space: nowrap;
  & > span {
    color: #ff2900;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 1rem;
`;

export const TodayViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  height: 800px;
  overflow: auto;
`;

export const TodayProductWrapper = styled.div`
  padding: 10px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const TodayImgWrapper = styled.div`
  width: 100px;
  height: 100px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & > span {
    font-size: 0.8rem;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
`;
export const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

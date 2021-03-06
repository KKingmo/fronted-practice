import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SellerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const DetailHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PickedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TagsWrapper = styled.div`
  color: #bdbdbd;
  padding-bottom: 40px;
  border-bottom: 1px solid #bdbdbd;
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  & > button {
    margin: 0 40px;
  }
`;

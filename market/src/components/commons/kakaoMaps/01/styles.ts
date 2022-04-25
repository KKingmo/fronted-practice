import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MapContainer = styled.div`
  width: 390px;
  height: 260px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContainerLeft = styled.div`
  margin-right: 20px;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > span {
    width: 100%;
  }

  & > input {
    width: 100%;
  }
`;

export const AddressHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const SearchAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background: #000000;
  color: #ffffff;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background: #ff2900;
  }
`;

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  background-color: #f5da4f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #000000;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: #34794d;
  }
`;

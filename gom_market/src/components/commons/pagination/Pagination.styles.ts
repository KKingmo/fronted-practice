import styled from "@emotion/styled";
export const MyRow = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  color: #4f4f4f;
`;

export const BoardsListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > ${MyRow}:first-of-type {
    color: #000000;
    font-weight: 700;
  }
`;

export const MyColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;

  & > span {
    padding: 0px 10px;
    cursor: pointer;
  }
`;

export const PageNumber = styled.span`
  color: ${(props) => (props.current ? "#ff2900" : "black")};
`;

export const Prev = styled.span`
  display: ${(props) => (props.isActivePrev ? "inline-block" : "none")};
`;

export const Next = styled.span`
  display: ${(props) => (props.isActiveNext ? "inline-block" : "none")};
`;

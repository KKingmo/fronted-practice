import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  /* width: 25%; */
`;

export default function PaginationPage() {
  // 기능 동작 순서
  // 페이지를 클릭
  // 클릭한 event.target.id를 가져와
  // refetch를 실시하면 데이터의 값이 바뀌면서 화면이 리렌더링 된다.

  // useQuery의 data도 state와 같이 값이 바뀌면 화면이 리렌더링 된다.
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    // 페이지 숫자를 클릭할 때마다 refetch
    refetch({ page: Number(event.target.id) });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </span>
      ))} */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}

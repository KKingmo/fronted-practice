import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

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

const Wrapper = styled.div`
  height: 500px;
  overflow: auto;
`;

const MyRow = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
`;

const MyColumn = styled.div`
  width: 33.33%;
  border-right: 1px solid #bdbdbd;
`;

export default function Quiz51Page() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  console.log(data);
  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        <MyRow>
          <MyColumn>번호</MyColumn>
          <MyColumn>작성자</MyColumn>
          <MyColumn>제목</MyColumn>
        </MyRow>
        {data?.fetchBoards.map((el, index) => (
          <MyRow key={el._id}>
            <MyColumn>{index + 1}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        )) || <div></div>}
      </InfiniteScroll>
    </Wrapper>
  );
}

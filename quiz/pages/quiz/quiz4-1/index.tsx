// 8. 이전("<") 버튼과 다음(">") 버튼을 클릭했을 때 더이상 이동할 수 있는 페이지가 없다면 무시하도록 만들어 주세요. 추가로, 버튼에 비활성화 표시를 적용해 주세요.
// 힌트) Emotion에 props로 isActive를 전달합니다.
import { useQuery, gql } from "@apollo/client";
import * as S from "../../../src/components/units/quiz4-1/quiz4-1.styles";
import { useState } from "react";

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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function Quiz41Page() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  const [current, setCurrent] = useState(1);
  const [isActivePrev, setIsActivePrev] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(true);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    setCurrent((prev) => Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsActivePrev((prev) => false);
    } else {
      setIsActivePrev((prev) => true);
    }

    if (startPage + 10 > lastPage) {
      setIsActiveNext((prev) => false);
    } else {
      setIsActiveNext((prev) => true);
    }
    if (startPage === 1) return;
    setIsActiveNext(true);
    setStartPage((prev) => prev - 10);
    refetch({ page: Number(startPage - 10) });
    setCurrent((prev) => Number(startPage - 10));
  };

  const onClickNextPage = () => {
    if (startPage === 1) {
      setIsActivePrev((prev) => true);
    }
    if (startPage + 10 > lastPage) {
      setIsActiveNext((prev) => false);
    } else {
      setIsActiveNext((prev) => true);
    }
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: Number(startPage + 10) });
    setCurrent((prev) => Number(startPage + 10));
  };
  console.log(startPage);
  return (
    <S.BoardsListWrapper>
      <S.MyRow>
        <S.MyColumn>작성자</S.MyColumn>
        <S.MyColumn>제목</S.MyColumn>
      </S.MyRow>
      {data?.fetchBoards.map((el) => (
        <S.MyRow key={el._id}>
          <S.MyColumn>{el.writer}</S.MyColumn>
          <S.MyColumn>{el.title}</S.MyColumn>
        </S.MyRow>
      ))}
      <S.PaginationWrapper>
        <S.Prev
          onClick={onClickPrevPage}
          isActivePrev={isActivePrev}
        >{`<`}</S.Prev>
        {new Array(Number(10)).fill(1).map(
          (_, index) =>
            index + startPage <= lastPage && (
              <S.PageNumber
                key={index}
                onClick={onClickPage}
                id={String(index + startPage)}
                current={index + startPage === current}
              >
                {index + startPage}
              </S.PageNumber>
            )
        )}
        <S.Next
          onClick={onClickNextPage}
          isActiveNext={isActiveNext}
        >{`>`}</S.Next>
      </S.PaginationWrapper>
    </S.BoardsListWrapper>
  );
}

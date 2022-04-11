import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import Pagination from "../../../commons/pagination/Pagination.container";
import { getDate } from "../../../../commons/libraries/utils";
import { useState } from "react";

export default function BoardListUI(props: IBoardListUIProps) {
  const [current, setCurrent] = useState(1);
  const lastPage = Math.ceil(props.dataBoardsCount?.fetchBoardsCount / 10);
  console.log(props.dataBoardsCount?.fetchBoardsCount);
  return (
    <S.Wrapper>
      <S.BoardsBestTitle>베스트 게시글</S.BoardsBestTitle>
      <S.BoardsBestList>
        {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el) => (
          <S.BoardsBestItem
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBestBoardDetail}
          >
            <S.BoardsBestItemTop>
              <img src={el.images[0]} alt="이미지가 없습니다." />
            </S.BoardsBestItemTop>
            <S.BoardsBestItemTitle>{el.title}</S.BoardsBestItemTitle>
            <S.BoardsBestItemBottom>
              <S.BoardsBestItemBottomContents>
                <div>
                  <S.BoardsBestItemUserIcon />
                  {el.writer}
                </div>
                <div>
                  <span>Date : {getDate(el.createdAt)}</span>
                </div>
              </S.BoardsBestItemBottomContents>
              <S.BoardsBestItemBottomContents>
                <div>
                  <S.LikeBoardIcon />
                </div>
                <div>{el.likeCount}</div>
              </S.BoardsBestItemBottomContents>
            </S.BoardsBestItemBottom>
          </S.BoardsBestItem>
        ))}
      </S.BoardsBestList>
      <div>
        검색어입력 : <input type="text" onChange={props.onChangeSearch} />
      </div>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {/* 수정필요 */}
            {Number(
              props.dataBoardsCount?.fetchBoardsCount -
                (current - 1) * props.data?.fetchBoards.length
            ) - index}
          </S.ColumnBasic>
          {/* <input type="text" id="bbb" onClick={props.onClickMoveToBoardDetail}/> */}
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Pagination
          refetch={props.refetch}
          lastPage={lastPage}
          current={current}
          setCurrent={setCurrent}
        />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}

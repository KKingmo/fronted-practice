import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";
import { debounce } from "lodash";

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  // 검색기능 debounce
  const getDebounce = debounce((data) => {
    refetch({ search: data, page: 1 });
    refetchA({ search: data });
    setKeyword(data);
  }, 200);

  // 입력할 때마다 getDebounce가 실행된다.
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // FetchBoards useQuery
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // BoardsCount useQuery
  const { data: dataBoardsCount, refetch: refetchA } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  // BoardsOfTheBest useQuery
  const { data: dataBoardsOfTheBest } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">
  >(FETCH_BOARDS_OF_THE_BEST);

  // 베스트 게시글 상세보기
  const onClickMoveToBestBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`/boards/${event.currentTarget.id}`);
  };

  // 게시글 생성하기
  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  // 게시글 상세보기
  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      dataBoardsOfTheBest={dataBoardsOfTheBest}
      refetch={refetch}
      refetchA={refetchA}
      dataBoardsCount={dataBoardsCount}
      onClickMoveToBestBoardDetail={onClickMoveToBestBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      keyword={keyword}
      onChangeSearch={onChangeSearch}
    />
  );
}

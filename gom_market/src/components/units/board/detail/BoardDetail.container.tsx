import BoardDetailUI from "./BoardDetail.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { success } from "../../../../commons/libraries/utils";

export default function BoardRead() {
  const router = useRouter();
  const [likeCount, setLikeCount] = useState();
  const [dislikeCount, setDislikeCount] = useState();

  // deleteBoard useMutation
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  // likeBoard useMutation
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  // likeBoard useMutation
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  // FetchBoard useQuery
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  // 게시쿨 목록 클릭
  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  // 수정하기 클릭
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  // 좋아요 클릭
  const onClickLike = async () => {
    const resultLikeCount = await likeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
    });
    setLikeCount(resultLikeCount.data.likeBoard);
  };

  // 싫어요 클릭
  const onClickDislike = async () => {
    const resultDislikeCount = await dislikeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
    });
    setDislikeCount(resultDislikeCount.data.dislikeBoard);
  };

  // 삭제하기 클릭
  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [{ query: FETCH_BOARD }],
    });
    success("게시물을 삭제하였습니다.");
    router.push("/boards");
  };

  return (
    <BoardDetailUI
      data={data}
      likeCount={likeCount}
      dislikeCount={dislikeCount}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}

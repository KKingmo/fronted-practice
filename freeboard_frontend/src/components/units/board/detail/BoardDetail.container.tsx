import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardRead() {
    const [likeCount, setLikeCount] = useState();
    const [dislikeCount, setDislikeCount] = useState();

    const router = useRouter();
    const [likeBoard] = useMutation(LIKE_BOARD);
    const [dislikeBoard] = useMutation(DISLIKE_BOARD);
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

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
                boardId: router.query.boardId,
            },
        });
        setLikeCount(resultLikeCount.data.likeBoard);
    };

    // 싫어요 클릭
    const onClickDislike = async () => {
        const resultDislikeCount = await dislikeBoard({
            variables: {
                boardId: router.query.boardId,
            },
        });
        setDislikeCount(resultDislikeCount.data.dislikeBoard);
    };

    // 삭제하기 클릭
    const onClickDelete = () => {
        deleteBoard({
            variables: { boardId: router.query.boardId },
            refetchQueries: [{ query: FETCH_BOARD }],
        });
        alert("게시물을 삭제하였습니다.");
        router.push("/boards");
    };
    return (
        <BoardDetailUI
            data={data}
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
            onClickMoveToBoardList={onClickMoveToBoardList}
            onClickMoveToBoardEdit={onClickMoveToBoardEdit}
            onClickDelete={onClickDelete}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
        />
    );
}

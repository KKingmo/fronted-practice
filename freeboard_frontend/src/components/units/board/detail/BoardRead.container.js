import BoardReadUI from "./BoardRead.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardRead.queries";

export default function BoardRead() {
    const [likeCount, setLikeCount] = useState();
    const [dislikeCount, setDislikeCount] = useState();

    const router = useRouter();
    const [likeBoard] = useMutation(LIKE_BOARD);
    const [dislikeBoard] = useMutation(DISLIKE_BOARD);
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    const onClickLike = async () => {
        const resultLikeCount = await likeBoard({
            variables: {
                boardId: router.query.boardId,
            },
        });
        setLikeCount(resultLikeCount.data.likeBoard);
    };

    const onClickDislike = async () => {
        const resultDislikeCount = await dislikeBoard({
            variables: {
                boardId: router.query.boardId,
            },
        });
        setDislikeCount(resultDislikeCount.data.dislikeBoard);
    };
    return (
        <BoardReadUI
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            data={data}
        />
    );
}

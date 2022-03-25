import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardList() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARDS);
    // 게시글 생성하기
    const onClickMoveToBoardNew = () => {
        router.push("/boards/new");
    };
    // 게시글 상세보기
    const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/boards/${event.target.id}`);
    };

    return (
        <BoardListUI
            data={data}
            onClickMoveToBoardNew={onClickMoveToBoardNew}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        />
    );
}

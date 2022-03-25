import { MouseEvent } from "react";

export interface IBoardListUIProps {
    onClickMoveToBoardNew: () => void;
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
    data?: any;
}

export interface IBoardDetailUIProps {
    data?: any;
    onClickMoveToList: () => void;
    onClickMoveToEdit: () => void;
    onClickLike: () => void;
    onClickDislike: () => void;
    onClickMoveToBoardList: () => void;
    onClickMoveToBoardEdit: () => void;
    onClickDelete: () => void;
    likeCount: number;
    dislikeCount: number;
}

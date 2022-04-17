import { ChangeEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  el?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
  isEdit?: boolean;
  el?: IBoardComment;
  contents: string;
  defaultValue?: any;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => void;
  onClickWrite: () => void;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}

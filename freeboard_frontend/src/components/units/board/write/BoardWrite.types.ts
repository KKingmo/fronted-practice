import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

// BoardWrite.container --- start ---
export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMyVariablesInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: string[];
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IMyBoardAddressInput {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}
// BoardWrite.container --- end ---

// BoardWrite.presenter --- start ---
export interface IBoardWriteUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  isEdit?: boolean;
  isActive: boolean;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeZipcode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => void;
  onClickSubmit: () => void;
}
// BoardWrite.presenter --- end ---

// BoardWrite.styles --- start ---
export interface IRegisterButtonProps {
  isActive: boolean;
}
// BoardWrite.styles --- end ---

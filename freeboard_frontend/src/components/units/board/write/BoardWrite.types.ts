import { ChangeEvent } from "react";

// BoardWrite.container --- start ---
export interface IBoardWriteProps {
    isEdit?: boolean;
    data?: any;
}

export interface IMyVariablesInput {
    title?: string;
    contents?: string;
    youtubeUrl?: string;
    images?: string[];
}

export interface IMyVariablesInput {
    title?: string;
    contents?: string;
    youtubeUrl?: string;
    images?: string[];
    boardAddress?: object;
}

export interface IMyBoardAddressInput {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
}
// BoardWrite.container --- end ---

// BoardWrite.presenter --- start ---
export interface IBoardWriteUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeZipcode: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeAddress: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;

    onClickUpdate: () => void;
    onClickSubmit: () => void;
    isEdit?: boolean;
    data?: any;
    isActive: boolean;
    writerError: string;
    passwordError: string;
    titleError: string;
    contentsError: string;
}
// BoardWrite.presenter --- end ---

// BoardWrite.styles --- start ---
export interface IRegisterButtonProps {
    isActive: boolean;
}
// BoardWrite.styles --- end ---

import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import {
  IBoardWriteProps,
  IMyVariablesInput,
  IMyBoardAddressInput,
} from "./BoardWrite.types";
import { success } from "../../../../commons/libraries/utils";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [isActive, setIsActive] = useState(false);

  // 게시글 입력(주소)
  const [inputsBoardAddress, setInputsBoardAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
  });

  // 게시글 입력
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
    images: [""],
  });

  // inputs 빈칸 에러 메세지
  const [errorInputs, setErrorInputs] = useState({
    writerError: "",
    passwordError: "",
    titleError: "",
    contentsError: "",
  });

  // inputs 입력
  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }));

    // 에러메세지
    if (event.target.value !== "") {
      setErrorInputs({
        ...errorInputs,
        [event.target.name]: "",
      });
    }

    // inputs 모두 입력되면 활성화 - 수정필요(의도보다 한 타이밍 늦음)
    if (inputs.writer && inputs.password && inputs.title && inputs.contents) {
      setIsActive((prev) => true);
    } else {
      setIsActive((prev) => false);
    }
  };

  // inputs 입력(주소)
  const onChangeInputsBoardAddress = (event) => {
    setInputsBoardAddress((prev) => ({
      ...inputsBoardAddress,
      [event.target.id]: event.target.value,
    }));
  };

  // 백엔드에 등록하기 요청
  const callRestApi = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            boardAddress: { ...inputsBoardAddress },
          },
        },
      });
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  // 등록하기 클릭 - 수정필요
  const onClickSubmit = () => {
    setErrorInputs((prev) => ({
      writerError: !inputs.writer ? "작성자를 입력해주세요." : "",
      passwordError: !inputs.password ? "비밀번호를 입력해주세요." : "",
      titleError: !inputs.title ? "제목을 입력해주세요." : "",
      contentsError: !inputs.contents ? "내용을 입력해주세요." : "",
    }));

    if (inputs.writer && inputs.password && inputs.title && inputs.contents) {
      callRestApi();
      success("게시물 등록에 성공하였습니다!");
    }
  };

  // 수정하기 클릭
  const onClickUpdate = async () => {
    const updateVariables: IMyVariablesInput = {
      title: inputs.title ? inputs.title : props.data?.fetchBoard.title,
      contents: inputs.contents
        ? inputs.contents
        : props.data?.fetchBoard.contents,
      youtubeUrl: inputs.youtubeUrl
        ? inputs.youtubeUrl
        : props.data?.fetchBoard.youtubeUrl,
      images: inputs.images ? inputs.images : props.data?.fetchBoard.images,
      boardAddress: {
        zipcode: inputsBoardAddress.zipcode
          ? inputsBoardAddress.zipcode
          : props.data?.fetchBoard.boardAddress?.zipcode,
        address: inputsBoardAddress.address
          ? inputsBoardAddress.address
          : props.data?.fetchBoard.boardAddress?.address,
        addressDetail: inputsBoardAddress.addressDetail
          ? inputsBoardAddress.addressDetail
          : props.data?.fetchBoard.boardAddress?.addressDetail,
      },
    };
    // 백엔드에 수정하기 요청
    try {
      await updateBoard({
        variables: {
          updateBoardInput: updateVariables,
          password: inputs.password,
          boardId: router.query.boardId,
        },
      });
      success("게시물 수정에 성공하였습니다!");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      data={props.data}
      isEdit={props.isEdit}
      isActive={isActive}
      errorInputs={errorInputs}
      inputsBoardAddress={inputsBoardAddress}
      setInputsBoardAddress={setInputsBoardAddress}
      onChangeInputs={onChangeInputs}
      onChangeInputsBoardAddress={onChangeInputsBoardAddress}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
}

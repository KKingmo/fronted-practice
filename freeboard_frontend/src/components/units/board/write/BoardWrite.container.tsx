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
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    // inputs 모두 입력되면 활성화 - 수정필요
    // if (inputs) {
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }
    // 에러메세지 - 수정필요
    if (event.target.value !== "") {
      setErrorInputs({
        ...errorInputs,
        [event.target.name]: "",
      });
    }
  };

  // inputs 입력(주소)
  const onChangeInputsBoardAddress = (event) => {
    setInputsBoardAddress((prev) => ({
      ...inputsBoardAddress,
      [event.target.id]: event.target.value,
    }));
    // Object.values(inputs).forEach((el) => {
    //   if (el !== "") {
    //     console.log(true);
    //   } else {
    //     console.log(false);
    //   }
    // });
  };

  // 백엔드에 요청하기
  const callRestApi = async () => {
    console.log({ ...inputs, boardAddress: { ...inputsBoardAddress } });
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
    if (!inputs.writer) {
      setErrorInputs((prev) => ({
        ...errorInputs,
        writerError: "작성자를 입력해주세요.",
      }));
    }

    if (!inputs.password) {
      setErrorInputs((prev) => ({
        ...errorInputs,
        passwordError: "비밀번호를 입력해주세요.",
      }));
    }

    if (!inputs.title) {
      setErrorInputs((prev) => ({
        ...errorInputs,
        titleError: "제목을 입력해주세요.",
      }));
    }

    if (!inputs.contents) {
      setErrorInputs((prev) => ({
        ...errorInputs,
        contentsError: "내용을 입력해주세요.",
      }));
    }

    if (
      inputs.writer !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      inputs.contents !== ""
    ) {
      callRestApi();
      success("게시물 등록에 성공하였습니다!");
    }
    console.log(errorInputs);
  };

  // 수정하기 클릭
  const onClickUpdate = async () => {
    const myBoardAddress: IMyBoardAddressInput = {};
    const myVariables: IMyVariablesInput = { boardAddress: myBoardAddress };

    if (inputs.title) myVariables.title = inputs.title;
    if (inputs.contents) myVariables.contents = inputs.contents;
    if (inputs.youtubeUrl) myVariables.youtubeUrl = inputs.youtubeUrl;
    if (inputs.images) myVariables.images = inputs.images;

    if (inputsBoardAddress.zipcode)
      myBoardAddress.zipcode = inputsBoardAddress.zipcode;
    if (inputsBoardAddress.address)
      myBoardAddress.address = inputsBoardAddress.address;
    if (inputsBoardAddress.addressDetail)
      myBoardAddress.addressDetail = inputsBoardAddress.addressDetail;

    try {
      await updateBoard({
        variables: {
          updateBoardInput: myVariables,
          password: inputs.password,
          boardId: router.query.boardId,
        },
      });
      success("게시물 수정에 성공하였습니다!");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
      console.log(myVariables);
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

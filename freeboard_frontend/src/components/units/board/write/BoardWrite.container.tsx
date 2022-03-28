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

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [isActive, setIsActive] = useState(false);

  // 게시글 입력 내용
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("yLZMeesKbJo");
  const [zipcode, setZipcode] = useState("07250");
  const [address, setAddress] = useState("서울특별시 영등포구 양산로 200");
  const [addressDetail, setAddressDetail] = useState(
    "(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층"
  );
  const [images, setImages] = useState([
    "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_1280.jpg",
  ]); // 이미지 첨부하는 기능 필요

  // 에러 메세지
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  // 작성자 입력
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    // 모두 입력되면 isActive true
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 비밀번호 입력
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    // 모두 입력되면 isActive true
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 제목 입력
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    // 모두 입력되면 isActive true
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 내용 입력
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    // 모두 입력되면 isActive true
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 우편번호 입력
  const onChangeZipcode = (event: ChangeEvent<HTMLInputElement>) => {
    setZipcode(event.target.value);
  };
  // 주소입력
  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  // 유튜브Url 입력
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };
  // 주소상세 입력
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // 백엔드에 요청하기
  const callRestApi = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            youtubeUrl: youtubeUrl,
            boardAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
            images: images,
          },
        },
      });
      console.log(result);
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  // 등록하기 클릭
  const onClickSubmit = () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      callRestApi();
      alert("게시물 등록에 성공하였습니다!");
    }
  };

  // 수정하기 클릭
  const onClickUpdate = async () => {
    const myBoardAddress: IMyBoardAddressInput = {};
    const myVariables: IMyVariablesInput = { boardAddress: myBoardAddress };

    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;
    if (youtubeUrl) myVariables.youtubeUrl = youtubeUrl;
    if (images) myVariables.images = images;

    if (zipcode) myBoardAddress.zipcode = zipcode;
    if (address) myBoardAddress.address = address;
    if (addressDetail) myBoardAddress.addressDetail = addressDetail;

    try {
      await updateBoard({
        variables: {
          updateBoardInput: myVariables,
          password: password,
          boardId: router.query.boardId,
        },
      });
      alert("게시물 수정에 성공하였습니다!");
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
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeZipcode={onChangeZipcode}
      onChangeAddress={onChangeAddress}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
}

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

// upload file mutation
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

// created Board mutation
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function ImageUploadPage() {
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onChangeFile = (number) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    // 파일을 불러와서 이미지Url형태로 만들어준다.
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    // 파일을 읽고 이미지Url로 만들고 나서 실행할 코드
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const tempUrls = [...imageUrls];
        tempUrls[number] = data.target?.result;
        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[number] = file;

        setFiles(tempFiles);
      }
    };
  };

  const onClickSubmit = async () => {
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resultUrls = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ""
    );

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          ...inputs,
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard);
  };

  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div>
      <div>
        <input type="file" onChange={onChangeFile(0)} />
      </div>
      <div>
        <input type="file" onChange={onChangeFile(1)} />
      </div>
      <div>
        <input type="file" onChange={onChangeFile(2)} />
      </div>
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <div>
        <input
          id="writer"
          type="text"
          placeholder="작성자"
          onChange={onChangeInputs}
        />
      </div>
      <div>
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChangeInputs}
        />
      </div>
      <div>
        <input
          id="title"
          type="text"
          placeholder="제목"
          onChange={onChangeInputs}
        />
      </div>
      <div>
        <input
          id="contents"
          type="text"
          placeholder="내용"
          onChange={onChangeInputs}
        />
      </div>
      <button onClick={onClickSubmit}>저장하기</button>
    </div>
  );
}

// 1. 게시물을 작성하기 위한 작성자, 비밀번호, 제목, 내용 4개의 입력창을 만들어 주세요.

// 2. 이미지를 올릴 file 태그를 만들어 주세요.

// 3. file 태그를 활용해 이미지가 변경되면 이미지가 화면에 나타나도록 만들어 보세요.
// ⇒ 단, 이미지는 빠르게 나타나야 합니다.(미리보기)
// ⇒ 힌트) FileReader() 객체를 사용해 주세요.

// 4. [저장하기] 버튼을 만들고, 해당 버튼을 클릭하면, createBoard API를 활용하여 작성자, 비밀번호, 제목, 내용, 이미지URL을 등록해 주세요.
// ⇒ 단, file이 존재하는 경우 file을 먼저 스토리지에 전송(uploadFile 활용)하고, 전송된 결과로 받은 url과 나머지 데이터들(작성자, 비밀번호, 제목, 내용)을 함께 등록합니다.

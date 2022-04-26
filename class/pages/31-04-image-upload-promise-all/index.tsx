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
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

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
      files.map(
        (el) => el && uploadFile({ variables: { file: el } })
        // el ? uploadFile({ variables: { file: el } }) : undefined;
      )
    );

    const resultUrls = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ""
    );

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "myWriter",
          password: "1234",
          title: "myTitle",
          contents: "이미지 업로드",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}

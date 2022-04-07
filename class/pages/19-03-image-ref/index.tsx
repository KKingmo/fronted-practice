import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { checkFileValidation } from "../../src/commons/libraries/validation";

// upload file mutation
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const [imageUrl, setImageUrl] = useState<String | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // 파일을 여러개 선택할 수 있기 때문에 files이다 또한 이를 이용하려면 input에 multiple옵션을 넣어줘야한다.
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: { file: file },
      });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div>이미지 업로드 연습하기</div>
      <div style={{ width: "50px", height: "50px", backgroundColor: "gray" }}>
        이미지 선택
      </div>
      <input style={{ display: "none" }} type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}

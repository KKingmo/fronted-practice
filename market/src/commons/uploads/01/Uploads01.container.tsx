import Uploads01UI from "./Uploads01.presenter";
import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { checkValidationImage } from "./Uploads01.validations";
import { Modal } from "antd";
import { UPLOAD_FILE } from "./Uploads01.queries";

export default function Uploads01(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}

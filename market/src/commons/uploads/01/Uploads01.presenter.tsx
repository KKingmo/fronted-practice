import * as S from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      <S.AttachPhoto>
        {props.fileUrl ? (
          <img
            src={`https://storage.googleapis.com/${props.fileUrl}`}
            onClick={props.onClickUpload}
          />
        ) : (
          <S.PlusIcon onClick={props.onClickUpload} />
        )}
      </S.AttachPhoto>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}

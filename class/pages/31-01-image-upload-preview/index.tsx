import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("");

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
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
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
    </div>
  );
}

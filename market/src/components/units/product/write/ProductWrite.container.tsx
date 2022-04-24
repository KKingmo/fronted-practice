import ProductWriteUI from "./ProductWrite.presenter";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM } from "./ProductWrite.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력 사항입니다."),
  contents: yup.string().required("상품 설명은 필수 입력 사항입니다."),
  price: yup.number().required("판매 가격은 필수 입력 사항입니다."),
});

export default function ProductWrite(props) {
  const router = useRouter();
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  // 상품 등록하기
  const onClickSubmit = async (data) => {
    if (data.tags) {
      data.tags = data.tags
        .toString()
        .replace(/(\s*)/g, "")
        .split("#")
        .filter((e) => e !== "");
    }

    console.log(data);
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: { ...data, images: imageUrls },
        },
      });
      console.log(result);
      alert("상품 등록에 성공하였습니다.");
      router.push("/shop");
    } catch (error) {
      alert(error.message);
    }
  };

  // 이미지 업로드
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...imageUrls];
    newFileUrls[index] = fileUrl;
    setImageUrls(newFileUrls);
  };

  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onChangeFileUrls={onChangeFileUrls}
      imageUrls={imageUrls}
    />
  );
}

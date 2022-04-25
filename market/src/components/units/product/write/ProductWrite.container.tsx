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
  price: yup.number().required("판매 가격은 필수 입력 사항입니다."),
  contents: yup
    .string()
    .min(5, "상품설명을 5자 이상 작성해주세요.")
    .required("상품설명은 필수 입력 사항입니다."),
});

export default function ProductWrite(props) {
  const router = useRouter();
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
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

    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            images: imageUrls,
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
              lat: parseFloat(data.lat),
              lng: parseFloat(data.lng),
            },
          },
        },
      });
      console.log(result);
      alert("상품 등록에 성공하였습니다.");
      router.push("/shop");
    } catch (error) {
      alert(error.message);
    }
  };

  // 에디터 입력 값 form으로 넘기기
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
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
      onChangeContents={onChangeContents}
      setValue={setValue}
    />
  );
}

import ProductWriteUI from "./ProductWrite.presenter";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력 사항입니다."),
  price: yup
    .number()
    .max(99999999, "금액이 너무 큽니다.")
    .required("판매 가격은 필수 입력 사항입니다."),
  contents: yup
    .string()
    .min(5, "상품설명을 5자 이상 작성해주세요.")
    .required("상품설명은 필수 입력 사항입니다."),
});

const nonSchema = yup.object({});

export default function ProductWrite(props) {
  const router = useRouter();
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);
  const [hashArr, setHashArr] = useState([]);

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(props.isEdit ? nonSchema : schema),
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
            price: parseInt(data.price),
            tags: hashArr,
            images: imageUrls,
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
              lat: data.lat,
              lng: data.lng,
            },
          },
        },
      });
      alert("상품 등록에 성공하였습니다.");
      router.push(`/shop/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  // 상품 수정하기
  const onClickUpdate = async (data) => {
    const updateVariables = {
      name: data.name ? data.name : props.data?.name,
      remarks: data.remarks ? data.remarks : props.data?.remarks,
      contents: data.contents ? data.contents : props.data?.contents,
      price: data.price ? parseInt(data.price) : parseInt(props.data?.price),
      tags: hashArr,
      images: imageUrls,
      useditemAddress: {
        zipcode: data.zipcode
          ? data.zipcode
          : props.data?.useditemAddress.zipcode,
        address: data.address
          ? data.address
          : props.data?.useditemAddress.address,
        addressDetail: data.addressDetail
          ? data.addressDetail
          : props.data?.useditemAddress.addressDetail,
        lat: data.lat ? data.lat : props.data?.useditemAddress.lat,
        lng: data.lng ? data.lng : props.data?.useditemAddress.lng,
      },
    };
    try {
      await updateUsedItem({
        variables: {
          updateUseditemInput: updateVariables,
          useditemId: String(router.query.productId),
        },
      });
      alert("상품 수정에 성공하였습니다.");
      router.push(`/shop/${router.query.productId}`);
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

  // 수정 진입시 초기값 설정
  useEffect(() => {
    // 상품설명
    reset({ contents: props.data?.contents });
    // 태그
    if (props.data?.tags?.length) {
      setHashArr([...props.data?.tags]);
    }
    // 이미지
    if (props.data?.images?.length) {
      setImageUrls([...props.data?.images]);
    }
  }, [props.data]);

  // 해쉬태그
  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  // 해쉬태그 삭제
  const onClickDeleteTag = (tag) => () => {
    setHashArr(hashArr.filter((el) => el !== `${tag}`));
  };

  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeFileUrls={onChangeFileUrls}
      imageUrls={imageUrls}
      onChangeContents={onChangeContents}
      setValue={setValue}
      getValues={getValues}
      onKeyUpHash={onKeyUpHash}
      onClickDeleteTag={onClickDeleteTag}
      hashArr={hashArr}
    />
  );
}

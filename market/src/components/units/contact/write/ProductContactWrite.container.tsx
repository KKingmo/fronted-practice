import ProductContactWriteUI from "./ProductContactWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductContactWrite.queries";
import { useForm } from "react-hook-form";

export default function ProductContactWrite(props) {
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  // 문의하기
  const onClickSubmit = async (data) => {
    if (!data.contents) return alert("댓글을 입력해주세요.");
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.productId),
          createUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: String(router.query.productId),
            },
          },
        ],
      });
      setValue("contents", "");
      alert("문의가 성공적으로 등록이 되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  // 수정하기
  const onClickUpdate = async (data) => {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: String(router.query.productId),
            },
          },
        ],
      });
      alert("문의가 성공적으로 수정 되었습니다.");
      props.setIsEdit(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProductContactWriteUI
      el={props.el}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
    />
  );
}

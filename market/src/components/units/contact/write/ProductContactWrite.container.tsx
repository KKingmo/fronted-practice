import ProductContactWriteUI from "./ProductContactWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./ProductContactWrite.queries";
import { useForm } from "react-hook-form";

export default function ProductContactWrite() {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onClickSubmit = async (data) => {
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
      alert("문의가 성공적으로 등록이 되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProductContactWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
    />
  );
}

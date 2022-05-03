import ProductContactAnswerWriteUI from "./ProductContactAnswerWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./ProductContactAnswerWrite.queries";
import { useForm } from "react-hook-form";

export default function ProductContactAnswerWrite(props) {
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  console.log(props.el._id);
  // 답글등록
  const onClickSubmit = async (data) => {
    if (!data.contents) return alert("답글을 입력해주세요.");
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: String(props.el._id),
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: String(props.el._id),
            },
          },
        ],
      });
      setValue("contents", "");
      alert("답글이 성공적으로 등록 되었습니다.");
      props.setIsAnswer(false);
    } catch (error) {
      alert(error.message);
    }
  };

  // 수정하기
  const onClickUpdate = async (data) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(props.answerUpdateId),
          updateUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: String(props.answerId),
            },
          },
        ],
      });
      alert("답글이 성공적으로 수정 되었습니다.");
      props.setIsAnswer(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProductContactAnswerWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      setIsAnswer={props.setIsAnswer}
      isEdit={props.isEdit}
      el={props.el}
      a={props.a}
    />
  );
}

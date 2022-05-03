import * as S from "./ProductContactAnswerList.styles";
import {
  FETCH_USER_LOGGED_IN,
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./ProductContactAnswerList.queries";
import { useMutation, useQuery } from "@apollo/client";
import ProductContactAnswerWrite from "../write/ProductContactAnswerWrite.container";
import { useState } from "react";

export default function ProductContactAnswerListUIItem(props) {
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );
  // 답변하기 클릭
  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
    setIsEdit(false);
  };

  // 수정하기 클릭
  const onClickUpdate = () => {
    setIsAnswer((prev) => !prev);
    setIsEdit(true);
  };

  const onClickDelete = (data) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: { useditemQuestionAnswerId: data },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: String(props.el2._id),
            },
          },
        ],
      });
      alert("문의 답변이 삭제되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  console.log(props.el);
  return (
    <>
      <S.AnswerWrapper>
        <S.AnswerIconWrapper>
          <S.AnswerIcon />
        </S.AnswerIconWrapper>
        <S.CommentWrapper1>
          <S.CommentWrapper2>
            <S.CommentLeft>
              <S.UserIcon />
            </S.CommentLeft>
            <S.CommentRight>
              <S.CommentRightHead>
                <S.CommentRightHeadLeft>
                  <S.Writer>{props.el?.user.name}</S.Writer>
                </S.CommentRightHeadLeft>
                <S.CommentRightHeadRight>
                  {userData?.fetchUserLoggedIn._id === props.el.user._id && (
                    <>
                      <S.EditIcon onClick={onClickUpdate} />
                      <S.CloseIcon onClick={onClickDelete(props.el._id)} />
                    </>
                  )}
                  <S.CommentIcon onClick={onClickAnswer} />
                </S.CommentRightHeadRight>
              </S.CommentRightHead>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.CommentRight>
          </S.CommentWrapper2>
          {isAnswer && (
            <ProductContactAnswerWrite
              answerId={props.answerId}
              answerUpdateId={props.el._id}
              setIsAnswer={setIsAnswer}
              isEdit={isEdit}
              el={props.el2}
              a={props.el}
            />
          )}
        </S.CommentWrapper1>
      </S.AnswerWrapper>
    </>
  );
}

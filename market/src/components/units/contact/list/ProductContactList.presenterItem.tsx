import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductContactList.styles";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
  FETCH_USER_LOGGED_IN,
} from "./ProductContactList.queries";
import { useState } from "react";
import ProductContactWrite from "../write/ProductContactWrite.container";
import ProductContactAnswerList from "../../contactAnswer/list/ProductContactAnswerList.container";
import ProductContactAnswerWrite from "../../contactAnswer/write/ProductContactAnswerWrite.container";

export default function ProductContactListUIItem(props) {
  const [deleteUsedItemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  // 삭제하기 클릭
  const onClickDelete = (id) => async () => {
    await deleteUsedItemQuestion({
      variables: {
        useditemQuestionId: String(id),
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
  };

  // 수정하기 클릭
  const onClickUpdate = () => {
    setIsEdit(true);
  };

  // 답변하기 클릭
  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <>
      {!isEdit && (
        <S.CommentWrapper>
          <S.CommentContainer>
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
              <S.CreatedAt>{getDate(props.el?.createdAt)}</S.CreatedAt>
            </S.CommentRight>
          </S.CommentContainer>
          {isAnswer && (
            <S.AnswerWrapper>
              <S.AnswerIconWrapper>
                <S.AnswerIcon />
              </S.AnswerIconWrapper>
              <ProductContactAnswerWrite
                el={props.el}
                setIsAnswer={setIsAnswer}
              />
            </S.AnswerWrapper>
          )}
          <ProductContactAnswerList el={props.el} />
        </S.CommentWrapper>
      )}
      {isEdit && (
        <ProductContactWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}

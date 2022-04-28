import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductContactList.styles";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./ProductContactList.queries";
import { useState } from "react";
import ProductContactWrite from "../write/ProductContactWrite.container";

export default function ProductContactListUIItem(props) {
  const [deleteUsedItemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

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

  return (
    <>
      {!isEdit && (
        <S.CommentWrapper>
          <S.CommentLeft>
            <S.UserIcon />
          </S.CommentLeft>
          <S.CommentRight>
            <S.CommentRightHead>
              <S.CommentRightHeadLeft>
                <S.Writer>{props.el?.user.name}</S.Writer>
              </S.CommentRightHeadLeft>
              <S.CommentRightHeadRight>
                <S.EditIcon onClick={onClickUpdate} />
                <S.CloseIcon onClick={onClickDelete(props.el._id)} />
              </S.CommentRightHeadRight>
            </S.CommentRightHead>
            <S.Contents>{props.el?.contents}</S.Contents>
            <S.CreatedAt>{getDate(props.el?.createdAt)}</S.CreatedAt>
          </S.CommentRight>
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

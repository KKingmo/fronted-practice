import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductContactList.styles";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./ProductContactList.queries";

export default function ProductContactListUIItem(props) {
  const [deleteUsedItemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const router = useRouter();

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

  return (
    <>
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
              <S.EditIcon />
              <S.CloseIcon onClick={onClickDelete(props.el._id)} />
            </S.CommentRightHeadRight>
          </S.CommentRightHead>
          <S.Contents>{props.el?.contents}</S.Contents>
          <S.CreatedAt>{getDate(props.el?.createdAt)}</S.CreatedAt>
        </S.CommentRight>
      </S.CommentWrapper>
    </>
  );
}

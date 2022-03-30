import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import { getDate } from "../../../../commons/libraries/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
// queries
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
// generic
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
// BoardCommentWrite
import BoardCommentWrite from "../write/BoardCommentWrite.container";
// antd
import { Rate, Modal } from "antd";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");

  // deleteBoardComment useMutation
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  // 수정하기 클릭
  const onClickUpdate = () => {
    setIsEdit(true);
  };

  // 삭제하기 클릭
  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: String(password),
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };
  console.log(props.el);
  // 모달 토글
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // 비밀번호 onChange
  const onChangePassword = (event) => {
    setPassword(event.target.value);
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
                <S.Writer>{props.el?.writer}</S.Writer>
                <Rate disabled defaultValue={props.el?.rating} />
              </S.CommentRightHeadLeft>
              <S.CommentRightHeadRight>
                <S.EditIcon onClick={onClickUpdate} />
                <S.CloseIcon onClick={onToggleModal} />
                {/* 비밀번호 모달 */}
                {isOpen && (
                  <Modal
                    visible={true}
                    onOk={onClickDelete}
                    onCancel={onToggleModal}
                  >
                    비밀번호 입력:{" "}
                    <input
                      type="password"
                      maxLength={20}
                      onChange={onChangePassword}
                    />
                  </Modal>
                )}
              </S.CommentRightHeadRight>
            </S.CommentRightHead>
            <S.Contents>{props.el?.contents}</S.Contents>
            <S.CreatedAt>{getDate(props.el?.createdAt)}</S.CreatedAt>
          </S.CommentRight>
        </S.CommentWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}

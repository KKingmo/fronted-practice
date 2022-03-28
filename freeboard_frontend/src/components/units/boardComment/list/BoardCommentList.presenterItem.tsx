import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import { getDate } from "../../../../commons/libraries/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [password, setPassword] = useState<String>("");

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
    openDeletePrompt();
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

  // 삭제하기 클릭 -> 모달창
  const openDeletePrompt = () => {
    const promptPassword = prompt("비밀번호를 입력하세요");
    alert(promptPassword);
    setPassword(String(promptPassword));
  };
  return (
    <>
      {!isEdit && (
        <div>
          <div>프로필사진</div>
          <div>
            <div>
              <div>
                <div>{props.el?.writer}</div>
                <div>{props.el?.rating}</div>
              </div>
              <div>
                <button onClick={onClickUpdate}>수정하기</button>
                <button onClick={onClickDelete}>삭제하기</button>
              </div>
            </div>
            <div>{props.el?.contents}</div>
            <div>{getDate(props.el?.createdAt)}</div>
          </div>
        </div>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}

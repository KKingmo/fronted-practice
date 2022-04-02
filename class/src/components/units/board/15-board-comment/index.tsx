import styled from "@emotion/styled";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 2;
`;

export default function BoardCommentItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (event) => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit === false && (
        <MyRow>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{props.el._id}</MyColumn>
          <MyColumn>{props.el.writer}</MyColumn>
          <MyColumn>{props.el.title}</MyColumn>
          <button onClick={onClickEdit}>수정</button>
        </MyRow>
      )}
      {isEdit === true && <div>수정하기화면입니다.</div>}
    </div>
  );
}

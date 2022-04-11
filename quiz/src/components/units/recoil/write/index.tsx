import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/store";

export default function BoardRecoilWrite() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}

// export default function BoardRecoilWrite(props) {
//   return <div>{props.isEdit ? "수정하기" : "등록하기"}</div>;
// }

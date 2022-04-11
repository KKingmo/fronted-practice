import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/store";

export default function GlobalStatePresenter() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}

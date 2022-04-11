import { atom } from "recoil";

// isEditState : 글로벌 스테이트
// recoil에서 atom을 import한후 아톰사용
// 글로벌 스테이트는 하나밖에 없기 때문에 key값으로 데이터를 구분한다.
// default는 초깃값을 의미한다.
export const isEditState = atom({
  key: "isEditState",
  default: false,
});

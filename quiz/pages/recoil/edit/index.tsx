import { useEffect } from "react";
import BoardRecoilWrite from "../../../src/components/units/recoil/write";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";

export default function RecoilEditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <BoardRecoilWrite />;
}

// import BoardRecoilWrite from "../../../src/components/units/recoil/write";
// export default function RecoilEditPage() {
//   return <BoardRecoilWrite isEdit={true} />;
// }

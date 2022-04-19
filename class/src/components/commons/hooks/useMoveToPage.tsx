import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function UseMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path) => () => {
    setVisitedPage(path);
    router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
}

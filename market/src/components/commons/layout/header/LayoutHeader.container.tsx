import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../hooks/useMoveToPage";

export default function LayoutHeader() {
  const router = useRouter();
  const { moveToPage } = useMoveToPage();
  return <LayoutHeaderUI moveToPage={moveToPage} router={router} />;
}

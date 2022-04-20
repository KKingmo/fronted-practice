import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMenu = (event) => {
    if (event.target) router.push(event.currentTarget.id);
  };
  return <LayoutHeaderUI onClickMenu={onClickMenu} />;
}

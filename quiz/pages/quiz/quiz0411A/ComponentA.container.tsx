import Presenter from "./ComponentA.presenter";

// container 부분
export default function ComponentA() {
  return <>{Presenter({ child: "철수" })}</>;
}

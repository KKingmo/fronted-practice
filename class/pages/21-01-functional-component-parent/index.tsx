import FunctionalComponentChildPage from "../21-02-functional-component-child";

export default function FunctionalComponentParentPage() {
  //   return <FunctionalComponentChildPage count={123} />;
  // 오차피 위는 함수를 실행하는 것이기 때문에 아래와 같은 함수형태로 바꿔줘도 문제없다.
  return <>{FunctionalComponentChildPage({ count: 1233 })}</>;
}

import ComponentBPresenter from "./ComponentB.presenter";

// container 부분
export default function ComponentB() {
  return (
    <>
      {ComponentBPresenter({
        child: "철수",
        age: 13,
      })}
    </>
  );
}

import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다!!!");

  // ❗️count변수를 let으로 선언
  let countLet = 0;

  // ❗️count변수를 state로 선언
  const [countState, setCountState] = useState(0);

  // ///////////////
  // ❗️count Let 증가시키는 버튼
  //   const onClickCountLet = () => {
  //     console.log(countLet + 1);
  //     countLet += 1;
  //   };

  // ❗️ count State 증가시키는 버튼
  //   const onClickCountState = () => {
  //     console.log(countState + 1);
  //     setCountState(countState + 1);
  //   };
  // ///////////////

  // ///////////////
  // useMemo
  // ❗️countLet 증가시키는 버튼 - useMemo
  //   const onClickCountLet = useMemo(() => {
  //     return () => {
  //       console.log(countLet + 1);
  //       countLet += 1;
  //     };
  //   }, []);
  // ///////////////

  // ///////////////
  // useCallback
  // ❗️ countLet 증가시키는 버튼 - useCallback
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // ❗️ countState 증가시키는 버튼 - useCallback
  //   const onClickCountState = useCallback(() => {
  //     console.log(countState + 1);
  //     setCountState(countState + 1);
  //   }, []);

  // ❗️ countState 증가시키는 버튼 - useCallback - prev
  //   const onClickCountState = useCallback(() => {
  //     console.log(countState + 1);
  //     setCountState((prev) => prev + 1);
  //   }, []);
  // ///////////////

  // ///////////////
  // ❗️ useMemo로 useCallback 변경하기
  const onClickCountState = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>=================</div>
      <h1>이것은 컨테이너 입니다!!!</h1>

      <div>카운트(let): {countLet}</div>
      {/* <button onClick={onClickCountLet}>카운트(let) + 1 올리기!!!</button> */}
      {/* ❗️ 함수 직접작성 */}
      <button
        onClick={() => {
          console.log(countLet);
          countLet += 1;
        }}
      >
        카운트(let) + 1 올리기!!!
      </button>

      <div>카운트(state): {countState}</div>
      {/* <button onClick={onClickCountState}>카운트(state) + 1 올리기!!!</button> */}
      {/* ❗️ 함수 직접작성 */}
      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(state) + 1 올리기!!!
      </button>
      <div>=================</div>
      <MemoizationPresenterPage />
    </div>
  );
}

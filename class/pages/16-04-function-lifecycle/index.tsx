import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function CounterPage() {
  const router = useRouter();
  // useRef자체가 초기값이 null 이다.
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(99);

  // 1. DidMount
  // 처음 화면에 렌더링하고나서 실행하는 부분 (한번만 실행)
  // componentDidMount() {
  //   console.log("마운트 됌!!!");
  //   this.inputRef.current?.focus();
  // 화면에 그림이 그려지고 나서 자동으로 포커스가 깜빡깜빡 거릴 때
  // }
  // useEffect(() => {
  //   console.log("마운트 됨")
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate
  // 리렌더링 할 때 마다 실행
  // componentDidUpdate() {
  //   console.log("수정되고 다시그려짐!!!");
  // }
  useEffect(() => {
    console.log("수정되고 다시그려짐!!!");
  }, [count]); // 처음 시작할 때도 한번 실행되기 대문에 DidUpdate와 완전히 동일하지는 않다.

  // 3. WillUnmount
  // 컴포넌트가 사라질 때마다 실행
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!");
  // 채팅방 나가기
  // api 요청!!! 채팅방나가기 버튼을 누르지않고 나가더라도 api요철 한다.
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!!!")
  //   }
  // }, []);

  // 4. DidMount와 WillUnmount를 합치기!!
  useEffect(() => {
    console.log("마운트 됨");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!!!");
    };
  }, []);
  // []대괄호 : 의존성 배열(Dependency Array)으로 함수가 실행되는지 안되는지에 의존한다.

  // 5. useEffect의 잘못된 사용 예(useEffect안에서 setState를 하면 처음 마운트 될시 한번 실행하고 시작한다.)
  // useEffect(() => {
  //   setCount(10);
  // }, []);

  // 6. useEffect의 잘못된 사용 예(무한 루프)
  // useEffect(() => {
  //   setCount(prev => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게?!!");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}

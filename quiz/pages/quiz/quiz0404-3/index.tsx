// 1-3. 클래스 컴포넌트를 함수형 컴포넌트로 변경하기
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

console.log("마운트 시작");

export default function Quiz04043() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  }, [count]);

  useEffect(() => {
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);

  const onClickButton = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickButton}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}

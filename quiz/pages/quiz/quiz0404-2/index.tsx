// 1-2. useRef로 포커스 맞추기
import { useRef, useEffect } from "react";

export default function Quiz04042Page() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
      </div>
    </div>
  );
}

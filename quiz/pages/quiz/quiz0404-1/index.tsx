// 1-1. 컴포넌트 생명주기
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Quiz04041Page() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  // 컴포넌트 렌더링 이후 경고메세지 표시
  useEffect(() => {
    alert("Rendered!");
    // 이동 버튼 클릭시 경고메세지 표시
    return () => {
      alert("Bye!!");
    };
  }, []);

  // 변경 버튼 클릭시 경고메세지 표시
  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  // 변경버튼 클릭
  const onClickChange = () => {
    setIsChange((prev) => true);
  };

  // 이동버튼 클릭
  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
      <div>
        <button onClick={onClickChange}>변경</button>
        <button onClick={onClickMove}>이동</button>
      </div>
    </div>
  );
}

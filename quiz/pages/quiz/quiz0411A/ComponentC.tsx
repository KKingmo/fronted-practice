export default function ComponentC() {
  return (
    <>
      {["철수", "영희", "훈이", "맹구"].map((el, index) => {
        if (el === "영희") {
          return `영희는 ${index}번째 칸에 들어있습니다.`;
        }
      })}
    </>
  );
}

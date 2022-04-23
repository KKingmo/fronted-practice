export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("======== 시작 ========");
    setTimeout(() => {
      console.log("1초 뒤에 실행");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 9000000000; i += 1) {
      sum = sum + 1;
    }

    console.log("======== 끝 ========");
  };

  return <button onClick={onClickTimer}>setTimeout 실행시키기</button>;
}

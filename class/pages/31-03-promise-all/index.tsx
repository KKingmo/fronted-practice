export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("Promise 시작!!");

    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("Promise 시작!!");
  };

  const onClickPromiseAll = async () => {
    // 1. 하나씩 확인하는 방법
    // console.time("Promise.all time");
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 3000);
    //   }),
    // ]);

    // 2. 한방에 확인하는 방법
    console.time("Promise.all time");
    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("Promise.all time");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기!!</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기!!</button>
    </div>
  );
}

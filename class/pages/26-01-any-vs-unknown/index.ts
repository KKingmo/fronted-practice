// 1. any타입 (그냥 자바스크립트랑 같음)
// args에는 어떤 타입이든 들어갈 수 있기 때문에 기존의 자바스크립트로 했던 것과 차이가 없다.
const getAny = (args: any) => {
  return args + 2;
};

// getAny()의 return 값을 모르기 때문에 result의 타입도 any이다.
const result1 = getAny("철수");

// 2. unknown 타입(개발자에게 안전하게 코딩하도록 유도!!!)
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 2;
  } else {
    return "숫자를 넣어주세요!!!";
  }
};

const result2 = getUnknown("철수");

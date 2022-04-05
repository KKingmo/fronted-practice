// https://programmers.co.kr/learn/courses/30/lessons/76501
// solution - me
function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => acc + (signs[idx] ? +cur : -cur),
    0
  );
}
// solution - site
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
// solution - mento
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}
// solution - mento
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    answer += signs[i] ? absolutes[i] : -absolutes[i];
  }
  return answer;
}
// solution - mneto - refactoring
function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, i) => {
    return acc + (signs[i] ? cur : -cur);
  }, 0);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12947
// solution - me
function solution(x) {
  let sum = x
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  return x % sum ? false : true;
}
// solution - site
function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
// solution - mento
function solution(x) {
  let answer = 0;
  x = x.toString();
  for (let i = 0; i < x.length; i++) {
    answer += Number(x[i]);
  }
  // 나머지 연산자는 타입을 숫자타입으로 변경하는 기능이 있다.
  return x % answer === 0;
}
// solution - mento - refactoring
function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return x % answer === 0;
}

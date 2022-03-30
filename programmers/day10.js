// https://programmers.co.kr/learn/courses/30/lessons/12932
String(1); // 그냥 소괄호에 넣으면 됨
num = 123;
toString(1); // 변수 감싸진 데이터만 사용가능하다 num.toString()
// solution - me
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((el) => Number(el));
}
// solution - mento - easy
function solution(n) {
  const answer = [];
  n = String(n);
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}
// solution - mento - refactoring
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => {
      return Number(str);
    });
}

// https://programmers.co.kr/learn/courses/30/lessons/12910
// solution - mento
function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
// solution - mento -refactoring
function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    return !(num % divisor);
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

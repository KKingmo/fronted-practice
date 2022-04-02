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

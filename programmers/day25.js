// https://programmers.co.kr/learn/courses/30/lessons/12945#
function solution(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] % 1234567) + (arr[i - 2] % 1234567);
  }
  return arr[n] % 1234567;
}

// https://programmers.co.kr/learn/courses/30/lessons/68935
// solution - me
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

// solution - mento
function solution(n) {
  // 3진법으로 변환
  n = n.toString(3);

  let answer = "";
  for (let i = n.length - 1; i >= 0; i--) {
    answer += n[i];
  }
  return parseInt(answer, 3);
}

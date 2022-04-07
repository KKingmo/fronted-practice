// https://programmers.co.kr/learn/courses/30/lessons/12901
// solution - me - fail
function solution(a, b) {
  const aaa = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const bbb = new Date(2016, a - 1, b + 1).getDay();
  return aaa[bbb - 1];
}
// solution - mento
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let answer = 0;

  for (let i = 1; i < a; i++) {
    answer += month[i];
  }
  answer += b - 1;
  return week[answer % 7];
}
// solution - mento - refactoring
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const bbb = new Date(2016, a - 1, b).getDay();
  return week[bbb];
}

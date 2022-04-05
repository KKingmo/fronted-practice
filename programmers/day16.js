// https://programmers.co.kr/learn/courses/30/lessons/70128
// solution - me
function solution(a, b) {
  return a.reduce((acc, cur, index) => acc + cur * b[index], 0);
}
// solution - mento
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
// solution - mento - refactoring
function solution(a, b) {
  const answer = a.reduce((acc, cur, i) => {
    return acc + cur * b[i];
  }, 0);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12935
// solution - me
function solution(arr) {
  const aaa = arr.filter((el) => el !== Math.min(...arr));
  return aaa.length ? aaa : [-1];
}
// solution - mento
function solution(arr) {
  const answer = [];
  // 1. 제일 작은 수를 찾기
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  // 2. 제일 작은 수를 제거
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  // 3. 빈 배열인지를 체크한다.
  // 빈 배열이라면 -1을 넣어서 리턴하고, 아니라면 배열 값 자체를 리턴
  return answer.length ? answer : [-1];
}
// solution - mento - refactoring
function solution(arr) {
  // 1. 제일 작은 수를 찾기
  const min = Math.min(...arr);
  // 2. 제일 작은 수를 제거
  const answer = arr.filter((num) => {
    return num !== min;
  });
  // 3. 빈 배열인지를 체크한다.
  // 빈 배열이라면 -1을 넣어서 리턴하고, 아니라면 배열 값 자체를 리턴
  return answer.length ? answer : [-1];
}

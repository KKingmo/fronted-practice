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

// solution - mento
function solution(n) {
  // 3진법으로 변환
  n = n.toString(3);

  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  // 3진법으로 변환된 데이터를 10진법으로 변환
  return parseInt(reverse, 3);
}

// solution - mento - reverse
function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}
// --------------------------------------------------------
// https://programmers.co.kr/learn/courses/30/lessons/70129
// solution - mento - while + for
function solution_for(s) {
  let count = 0;
  let remove = 0;

  while (s !== "1") {
    count++;

    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i];
    }

    s = temp.length;
    s = s.toString(2);
  }
  return [count, remove];
}

// solution - mento - recursion
function solution(s) {
  let [count, remove] = [0, 0];

  function recursion() {
    if (s === "1") {
      return [count, remove];
    }
    count++;

    // "0" 제거하고, 숫자 카운트
    remove += s.split("").filter((el) => el === "0").length;
    // "1" 만 남긴다.
    s = s.split("").filter((el) => el === "1").length;
    s = s.toString(2);

    return recursion();
  }

  return recursion();
}

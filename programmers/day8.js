// https://programmers.co.kr/learn/courses/30/lessons/12916
// solution - me
function solution(s) {
  let aa = s.split("").filter((el) => el == "p").length;
  let bb = s.split("").filter((el) => el == "y").length;
  if (aa === bb) {
    return true;
  } else if (aa === 0 && bb === 0) {
    return false;
  }
  return false;
}
// solution - site
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
// solution - mento
function solution(s) {
  // p 와 y 의 갯수를 저장하는 변수
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "p") {
      p++;
    } else if (s[i] == "y") {
      y++;
    }
  }
  return p == y;
}
// solution - mento
function solution(s) {
  // p 와 y 의 갯수를 저장하는 변수
  const check = {};
  s.toLowerCase() // 1. 소문자로 변환
    .split("") // 2. 배열로 변환
    .forEach((str) => {
      // 3. 배열 메소드인 forEach 사용
      console.log(str, check);
      // 객체에 해당 키값이 없는지 검증
      // 없다면 초기값 1로 지정
      // 있다면 기존 값에 1을 더한다.
      check[str] === undefined ? (check[str] = 1) : check[str]++;
    });
  return check.p === check.y;
}
// forEach() 와 map()의 차이 : return을 하고 안하고의 차이
// https://programmers.co.kr/learn/courses/30/lessons/12930
function solution(s) {
  return s
    .split(" ")
    .join(" ")
    .reduce((a, b, idx) =>
      (idx + 1) % 2 ? a + b.toUpperCase() : a + b.toLowerCase()
    );
}
// solution - mento
function solution(s) {
  let answer = "";
  // 단어별로 인덱스를 구분하기 위한 변수
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백을 만났을 경우
      answer += s[i];
      idx = 0;
    } else {
      answer += idx % 2 === 1 ? s[i].toLowerCase() : s[i].toUpperCase();
      idx++;
    }
  }
  return answer;
}
// solution - mento
function solution(s) {
  const answer = s
    .split(" ") // ["try", "hello", "world"]
    .map((str) => {
      return str
        .split("") // [["t","r","y"] ...]
        .map((letter, i) => {
          return !(i % 2) ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join(""); // ["TrY", "HeLlO", "WoRlD"]
    })
    .join(" "); // ["TrY HeLlO WoRlD"]
  console.log(answer);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/81301
// replaceAll은 프로그래머스에서 지원하지 않는 메서드이다.
// 하지만 while문을 사용해서 replaceAll을 사용한 것과 같은 효과를 낼 수 있다.
function solution(s) {
  const aaa = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < aaa.length; i++) {
    s = s.replace(aaa[i], i);
  }
  return Number(s);
}

// solution - mento
const aaa = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < aaa.length; i++) {
    while (s.includes(aaa[i])) {
      s = s.replace(aaa[i], i);
    }
  }
  return Number(s);
}

// solution - mento - split
const aaa = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  aaa.forEach((str, i) => {
    s = s.split(str).join(i);
  });
  return Number(s);
}

// solution - mento - 정규식
function solution(s) {
  // 정규표현식
  // /(슬래시) 열고 /(슬래시) 닫고 슬래시 안에 검증하는 문자열을 추가한다.
  // g 명령어는 전역 검색을 의미한다.

  s = s.replace(/zero/g, 0);
  s = s.replace(/one/g, 1);
  s = s.replace(/two/g, 2);
  s = s.replace(/three/g, 3);
  s = s.replace(/four/g, 4);
  s = s.replace(/five/g, 5);
  s = s.replace(/six/g, 6);
  s = s.replace(/seven/g, 7);
  s = s.replace(/eight/g, 8);
  s = s.replace(/nine/g, 9);
  return Number(s);
}

// solution - mento - 정규식 - refactoring
// RegExp는 정규식에 변수를 할당할 수 있다.
const aaa = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < aaa.length; i++) {
    const re = new RegExp(aaa[i], "g");
    s = s.replace(re, i);
  }
  return Number(s);
}

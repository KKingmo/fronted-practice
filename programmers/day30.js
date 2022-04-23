// https://programmers.co.kr/learn/courses/30/lessons/12926
// solution - me
const table1 = [];
const table2 = [];
for (let i = 65; i <= 90; i++) {
  table1.push(i);
}
for (let i = 97; i <= 122; i++) {
  table2.push(i);
}

function solution(s, n) {
  return s
    .split("")
    .map((e) => {
      if (table1.includes(e.charCodeAt())) {
        return String.fromCharCode(
          table1[(table1.indexOf(e.charCodeAt()) + n) % table1.length]
        );
      }

      if (table2.includes(e.charCodeAt())) {
        return String.fromCharCode(
          table2[(table2.indexOf(e.charCodeAt()) + n) % table2.length]
        );
      }
      return e;
    })
    .join("");
}

// solution - mento - for 1
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백일 경우
      answer += " ";
    } else {
      let index = alphabet.indexOf(s[i]);
      const word =
        index > 25
          ? alphabet.slice(26, alphabet.length)
          : alphabet.slice(0, 26);
      index = word.indexOf(s[i]) + n;

      if (index >= 26) {
        index -= 26;
      }

      answer += word[index];
    }
  }

  return answer;
}

// solution - mento - for 2
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백일 경우
      answer += " ";
    } else {
      // 소문자인지를 먼저 검증한 후
      // 소문자가 맞다면, 소문자 리스트를 저장
      // 소문자가 아니라면, 대문자 리스트를 저장
      const word = lower.includes(s[i]) ? lower : upper;
      let index = word.indexOf(s[i]) + n;

      if (index >= 26) {
        index -= 26;
      }

      answer += word[index];
    }
  }
  return answer;
}

// solution - mento - reduce
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자만 저장

function solution(s, n) {
  const answer = s.split("").reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;

    if (idx >= 26) {
      idx -= 26;
    }
    return acc + (cur === " " ? " " : word[idx]);
  }, "");
  return answer;
}

// soltuion - mento - charCode
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let index = s[i].charCodeAt() + n;
    if (index > 122 || (index > 90 && index - n < 97)) {
      // 소문자 z(122) 이상을 넘어가거나
      // 대문자 Z(90) 를 넘어가면서
      // 기존의 index 의 값이 소문자일 경우
      index = index - 26;
    }
    answer += String.fromCharCode(index);
  }
  return answer;
}

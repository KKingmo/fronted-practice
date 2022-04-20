// https://programmers.co.kr/learn/courses/30/lessons/12926
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

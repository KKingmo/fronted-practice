// https://programmers.co.kr/learn/courses/30/lessons/12917
// soilution
function solution(s) {
  // s.split('').sort( (a, b) => {
  //     // a가 b보다 클 때는 뒤로 보내고 , 작을 때는 앞으로 보낸다
  //     return a > b ? 1 : -1 // 오름차순
  //     return a > b ? -1 : 1 // 내림차순
  // } )

  let answer = s.split("");
  answer
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .join();

  let result = "";
  for (let i = 0; i < answer.length; i++) {
    result += answer[i];
  }

  return result;
}

// 아스키코드
// 1. 각각의 문자들이 대체되는 유니코드 번호를 가지게 된다.
// 2. 문자열끼리 비교할 때는 유니코드의 번호를 가지고 대소관계를 비교한다.

// https://programmers.co.kr/learn/courses/30/lessons/42748
// solution
function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];
    // console.log( commands[idx], i, j, k )
    const result = array.slice(i - 1, j).sort((a, b) => {
      return a - b;
      // return a > b ? 1 : 1
    });
    answer.push(result[k - 1]);
  }
  return answer;
}
// solution - mento
function solution(array, commands) {
  const answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b; // 오름차순
      // return a > b ? 1 : -1
    });
    return result[el[2] - 1];
  });
  return answer;
}

// 아스키코드
// 1. 각각의 문자들이 대체되는 유니코드 번호를 가지게 된다.
// 2. 문자열끼리 비교할 때는 유니코드의 번호를 가지고 대소관계를 비교한다.

console.log("a".charCodeAt());
console.log("z".charCodeAt());

console.log("A".charCodeAt());
console.log("Z".charCodeAt());

// a 와 b를 비교했을 때 유니코드 번호를 가져와서 비교한다.
// 알파벳 대문자의 유니코드 범위 : 65 ~ 90
// 알파벳 소문자의 유니코드 범위 : 97 ~ 122

// sort()

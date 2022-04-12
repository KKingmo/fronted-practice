// https://programmers.co.kr/learn/courses/30/lessons/42576
// solution - me
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// splice
// 1. 배열 메서드
// 2. 원하는 위치에 데이터를 제거하거나 추가할 수 있다.
// 3. 원본이 저장된다.
const arr = [1, 5, 5, 2, 3, 4, 5];
arr.splice(1, 1); // [ 1, 5, 2, 3, 4, 5 ]
arr.indexOf(5); // 1

// solution - mento - hash 방식
function solution(participant, completion) {
  const answer = {};
  // 1. 참가한 선수의 이름과 참가자 수를 정리
  for (let i = 0; i < participant.length; i++) {
    answer[participant[i]] === undefined
      ? (answer[participant[i]] = 1)
      : answer[participant[i]]++;
  }

  // 2. 완주한 명단에서 선수 이름을 제거
  for (let i = 0; i < completion.length; i++) {
    if (answer[completion[i]]) {
      answer[completion[i]]--;
    }
  }

  // 3. 완주하지 못한 선수의 이름을 리턴
  for (let key in answer) {
    if (answer[key] !== 0) {
      return key;
    }
  }
}

// solution - mento - refactoring
function solution(participant, completion) {
  // 문자열일 때는 sort만 해줘도 알아서 오름차순으로 정렬
  participant.sort((a, b) => (a > b ? 1 : -1)); // 참가자 명단 오름차순으로 정렬
  completion.sort(); // 완주자 명단을 오름차순으로 정렬
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// solution - mento - method
function solution(participant, completion) {
  // 문자열일 때는 sort만 해줘도 알아서 오름차순으로 정렬
  participant.sort((a, b) => (a > b ? 1 : -1)); // 참가자 명단 오름차순으로 정렬
  completion.sort(); // 완주자 명단을 오름차순으로 정렬

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}

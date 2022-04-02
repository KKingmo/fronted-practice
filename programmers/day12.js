// https://programmers.co.kr/learn/courses/30/lessons/12912
// solution - me
function solution(a, b) {
  let arr = [a, b].sort((a, b) => a - b);
  let result = 0;
  if (a === b) {
    return a;
  }
  for (let i = arr[0]; i <= arr[1]; i++) {
    result += i;
  }
  return result;
}

// solution - mento
function solution(a, b) {
  let answer = 0;

  if (a === b) {
    return b;
  } else {
    // 최소값 (반복문을 실행할 때 설정되는 초기값 : a와 b중 작은 값이 들어옵니다.);
    // const min = a > b ? b : a
    const min = Math.min(a, b);

    // 최대값 (반복문이 종료되는 조건을 설정 : a와 b중 큰 값이 들어옵니다.);
    // const max = a > b ? a : b;
    const max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}

// solution - mento - reduce
function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const answer = new Array(max - min).fill(1).reduce((acc, cur, i) => {
    const num = min + cur + i;
    return acc + num;
  }, min);
  return answer;
}

// solution - mento - shortest
function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const answer = new Array(max - min + 1).fill(1).reduce((acc, cur, i) => {
    const num = min + i;
    return acc + num;
  }, 0);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12934
// solution - me
function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
  }
  return -1;
}
// solution - me - refactoring
function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) return (Math.sqrt(n) + 1) ** 2;
  return -1;
}

// solution - me refactoring
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
// 2 ** 5
// Math.pow( 2, 5 )

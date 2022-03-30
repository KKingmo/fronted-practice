// https://programmers.co.kr/learn/courses/30/lessons/12943
// solution - mento
function solution(num) {
  // 1이 될떄까지 반복한 횟수
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      // 예외 처리는 최상단에 해야 테스트통과 잘된다!
      break;
    }
    answer++;
    // num이 짝수일 때 : 해당 수에 2를 곱한다.
    if (num % 2 === 0) {
      num /= 2;
      // num = num / 2;
      // num이 홀수일 때 : 해당 수에 3을 곱한 값에 1을 더한다.
    } else {
      num = num * 3 + 1;
    }
  }
  return num !== 1 ? -1 : answer;
}

// solution - mento
function solution(num) {
  // 1이 될떄까지 반복한 횟수
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return answer;
    }
    answer++;
    // num이 짝수일 때 : 해당 수에 2를 곱한다.
    if (num % 2 === 0) {
      num /= 2;
      // num = num / 2;
      // num이 홀수일 때 : 해당 수에 3을 곱한 값에 1을 더한다.
    } else {
      num = num * 3 + 1;
    }
  }
  return -1;
}

// solution - mento - shortest
function solution(num) {
  let answer = 0;

  // 조건식이 true 일 때만 반복 로직이 실행
  while (num !== 1) {
    // num 이 1일 될 때까지 무한으로 실행된다.
    if (answer >= 500) {
      return -1;
    }
    answer++;
    num =
      num % 2 === 0
        ? num / 2 // 짝수일 경우
        : num * 3 + 1; // 홀수일 경우
  }
  return answer;
}

// solution - mento - reduce사용하기
function solution(num) {
  let answer = 0;

  const result = new Array(500).fill(1).reduce((acc) => {
    if (acc !== 1) {
      answer++;
      return acc % 2 === 0
        ? acc / 2 // 짝수일 때
        : acc * 3 + 1; // 홀수일 때
    } else {
      return 1;
    }
  }, num);
  return result !== 1 ? -1 : answer;
}

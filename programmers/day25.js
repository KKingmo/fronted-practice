// https://programmers.co.kr/learn/courses/30/lessons/12945#
// solution - me
function solution(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] % 1234567) + (arr[i - 2] % 1234567);
  }
  return arr[n] % 1234567;
}

// solution - mento
// Number 타입의 최댓값 = 2 ** 53 - 1
// Number.MAX_SAFE_INTEGER
// Number.isSafeInteger(a)  : true
// Number.isSafeInteger(a + 1)  : false
function solution(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
}

// (12 % 10 )+ (11 % 10) % 10
// (12 + 11) % 10
// 두 식의 결과 값을 같다.
// 따라서 이를 이용해서 코드를 단축 시킬 수 있다.

// solution - mento - reduce
function solution(n) {
  let prev = 0; // 0번째 피보나치 수의 결과
  let next = 1; // 1번째 피보나치 수의 결과
  let sum = prev + next; // 2번째 피보나치 수의 결과

  const answer = new Array(n - 1).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567;
    prev = acc;
    next = sum;

    return sum;
  }, sum);
  return answer;
}

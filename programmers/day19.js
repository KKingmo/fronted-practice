// https://programmers.co.kr/learn/courses/30/lessons/12940
// solution - mento
function solution(n, m) {
  // 최대공약수 : 두 개의 수의 약수 중에서 (공통되는) 제일 큰 수
  // 최소공배수 : 두 개의 수의 배수 중에서 (공통되는) 제일 작은 수
  const biggest = Math.max(n, m);

  // 최대공약수 구하기
  let max = 0;
  for (let i = 1; i <= biggest; i++) {
    // 약수 : 해당수를 나누었을 때 나누어 떨어지는 수
    // 공약수 : n 과 m 을 i로 나누었을 때 둘 다 나머지가 0이다.
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }
  // 최소공배수 구하기
  let min = 0;
  // 큰 수의 배수 중 작은 수로 나눴을 떄 나누어 떨어지는 제일 작은 수찾기
  for (let i = biggest; i <= n * m; i += biggest) {
    if (i % Math.min(n, m) === 0) {
      min = i;
      break;
    }
  }
  return [max, min];
}

// solution - refactoring
function solution(n, m) {
  // 유클리드 호제법
  // - 최대공약수를 구하기 위한 알고리즘 (공식)

  // a를 b를 나눴을 때 (a가 b보다 클 경우) = 큰 수에서 작은 수를 나눴을 때
  // 나머지 값이 0이 되면, 작은 수 (b)가 최대공약수가 된다.
  // 나머지 값이 0이 되지 않으면, 작은 수가(b)가 큰 수(a)가 되고,
  // 나머지 값이 작은 수(b)가 된다.
  // 위의 방식을 반복했을 때 나머지 값이 0이 되면, 작은 수(b)가 최대공약수가 된다.
  let a = Math.max(n, m); // 큰 수
  let b = Math.min(n, m); // 작은 수
  let r = 0; // 나머지 값
  while (a % b > 0) {
    r = a % b; // 나머지 값 저장
    a = b; // 큰 수에 작은 수를 할당
    b = r; // 작은 수에 나머지 값 할당
  }
  // 최소공배수는 두 수(n, m) 곱한 값에 최대공약수를 나눈 값
  return [b, (n * m) / b];
}

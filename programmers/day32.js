// https://programmers.co.kr/learn/courses/30/lessons/12982
// solution - mento - for
function solution(d, budget) {
  const answer = [];

  // 모든 부서가 신청한 지원금에 따라 오름차순
  d.sort((a, b) => a - b);

  // 부서들이 신청한 금액의 총 합
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum <= budget) {
      answer.push(d[i]);
    }
  }
  return answer.length;
}

// solution - mento - while
function solution(d, budget) {
  // 모든 부서가 신청한 지원금에 따라 오름차순
  d.sort((a, b) => a - b);

  let answer = 0;
  while (budget - d[answer] >= 0) {
    budget -= d[answer];
    answer++;
  }
  return answer;
}

// solution - mento - filter
function solution(d, budget) {
  // 부서가 신청한 금액을 오름차순 형태로 정렬
  return d
    .sort((a, b) => a - b)
    .filter((money) => {
      // 총 예산에서 부서별 지원금을 삭감
      budget -= money;

      return budget >= 0;
    }).length;
}

// https://programmers.co.kr/learn/courses/30/lessons/42840
// solution - mento - for
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5], // 5개의 패턴
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5], // 8개의 패턴
  // 3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10개의 패턴
];

function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        score[l]++;
      }
    }
  }
  // 제일 많이 맞춘 문제의 수를 찾아온다.
  const biggest = Math.max(...score);

  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

// ---------------------------
// soluition - mento - method
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5], // 5개의 패턴
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5], // 8개의 패턴
  // 3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10개의 패턴
];

function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score }; // score : score
  });

  // 최대로 맞춘 문제의 수를 가져온다.
  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score; // 결과값 : [5, 0, 0]
    })
  );

  const answer = scoreList
    .filter((el) => {
      return biggest === el.score;
    })
    .map((el) => el.student);

  return answer;
}

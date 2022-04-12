// https://programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
  const mathHaters = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let answer = mathHaters.map(
    (e, i) =>
      answers.filter((f, j) => f === mathHaters[i][j % mathHaters[i].length])
        .length
  );
  answer.forEach((e, i) => {
    if (e) answer[i] = i + 1;
  });
  return answer.sort((a, b) => a - b).filter((e) => e);
}

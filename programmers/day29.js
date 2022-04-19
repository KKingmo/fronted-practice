// https://programmers.co.kr/learn/courses/30/lessons/42862#
// 전체 학생의 수 2 <= n <= 30
// 체육복을 도난당한 학생들의 번호가 담긴 배열 lost
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
// return : 체육수업을 들을 수 있는 학생의 최댓값
function solution(n, lost, reserve) {
  let received = [];
  lost.forEach((e) => {
    if (reserve.includes(e - 1)) {
      reserve.splice(reserve.indexOf(e - 1), 1);
      received.push(e);
    } else if (reserve.includes(e + 1)) {
      reserve.splice(reserve.indexOf(e + 1), 1);
      received.push(e);
    }
    console.log(reserve);
  });
  return n - lost.length + received.length;
}

// solution - mento
function solution(n, lost, reserve) {
  const losted = [...lost]; // lost 데이터가 filter 되기 전에 데이터를 저장
  lost = lost.filter((e) => !reserve.includes(e)).sort(); // 오름차순으로 정렬
  reserve = reserve.filter((e) => !losted.includes(e)).sort(); // 오름차순으로 정렬
  // 일단은 체육복 분실자 제외
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    // 내 앞 번호의 학생이 여벌 체육복을 가지고 있는지를 검사
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;

      // 내 뒷 번호의 학생이 여벌 체육복을 가지고 있는지를 검사
    } else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

// solution - mento - reduce
function solution(n, lost, reserve) {
  const losted = [...lost]; // lost 데이터가 filter 되기 전에 데이터를 저장
  lost = lost.filter((e) => !reserve.includes(e)).sort(); // 오름차순으로 정렬
  reserve = reserve.filter((e) => !losted.includes(e)).sort(); // 오름차순으로 정렬
  let answer = n - lost.length;
  return lost.reduce((acc, cur) => {
    // 앞에 있는 학생이 여벌 체육복을 가지고 있는지
    const prev = reserve.indexOf(cur - 1);
    // 뒤에 있는 학생이 여벌 체육복을 가지고 있는지
    const next = reserve.indexOf(cur + 1);

    if (prev !== -1) {
      // 앞에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(prev, 1);
      acc++;
    } else if (next !== -1) {
      // 뒤에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(next, 1);
      acc++;
    }
    return acc;
  }, answer);
}

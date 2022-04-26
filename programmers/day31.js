// https://programmers.co.kr/learn/courses/30/lessons/42889
// solution - me - for+map
function solution(N, stages) {
  // 모든 스테이지의 번호를 오름차순 형태로 정렬
  stages.sort((a, b) => a - b);

  const infos = [];
  for (let i = 1; i <= N; i++) {
    infos.push({
      stage: i, // 현재 스테이지의 번호
      users: 0, // 클리어하지 못한 (플레이중인) 유저의 수
      fail: 0, // 스테이지의 실패율을 저장
    });
  }

  let allUsers = stages.length; // 모든 유저의 수 (초기값)
  for (let i = 0; i < stages.length; i++) {
    if (infos[stages[i] - 1]) {
      infos[stages[i] - 1].users++;

      // 현재 스테이지의 번호와 다음 스테이지의 번호가 동일하지 않다면
      // === 현재 스테이지의 유저의 합산이 완료되는 시점
      if (stages[i] !== stages[i + 1]) {
        const fail = infos[stages[i] - 1].users / allUsers;
        allUsers -= infos[stages[i] - 1].users;

        infos[stages[i] - 1].fail = fail;
      }
    }
  }

  return infos
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
}

// solution - mento - map+lastIndexOf
function solution(N, stages) {
  stages.sort((a, b) => a - b);

  let allUsers = stages.length; // 총 유저의 수
  const answer = new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i;
      const arr = stages.slice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );
      const fail = arr.length / allUsers;
      allUsers -= arr.length;

      return { stage, fail };
    })
    .sort((a, b) => {
      return b.fail - a.fail; // 내림차순
    })
    .map((el) => el.stage);
  return answer;
}

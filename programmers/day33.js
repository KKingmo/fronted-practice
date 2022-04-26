// https://programmers.co.kr/learn/courses/30/lessons/64061
// solution - mento - for
function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  // 1. 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    // 2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
    for (let l = 0; l < board.length; l++) {
      const doll = board[l][moves[i] - 1];

      // 인형이 있는 칸이 빈칸이 아니라면
      if (doll !== 0) {
        // 방금 뽑은 인형의 위치를 빈칸으로 만들어준다.
        board[l][moves[i] - 1] = 0;

        // 버켓에 넣으려고 하는 인형과 버켓의 마지막(맨 위에 있는) 인형이 동일한지
        if (bucket[bucket.length - 1] === doll) {
          answer += 2;
          bucket.splice(bucket.length - 1, 1);
          // bucket.pop();
          break;
        }
        bucket.push(doll);
        break;
      }
    }
  }
  return answer;
}

// solution - mento - forEach
function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  moves.forEach((move) => {
    // 반복문을 실행하지 않게 하는 변수
    // ( check가 false 일 때만 forEach 실행 )
    let check = false;

    board.forEach((location) => {
      const doll = location[move - 1];

      if (check === false) {
        if (doll !== 0) {
          location[move - 1] = 0;

          if (bucket[bucket.length - 1] === doll) {
            answer += 2;
            bucket.splice(bucket.length - 1, 1);
          } else {
            bucket.push(doll);
          }
          check = true;
        }
      }
    });
  });
  return answer;
}

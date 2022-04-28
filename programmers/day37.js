// https://programmers.co.kr/learn/courses/30/lessons/17681
// solution - mento - for
function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = "";

    // 지도 1의 암호를 2진법으로 변환 후, n 길이 만큼 앞에서부터 "0"으로 채운다.
    const map1 = arr1[i].toString(2).padStart(n, "0");
    // 지도 2의 암호를 2진법으로 변환 후, n 길이 만큼 앞에서부터 "0"으로 채운다.
    const map2 = arr2[i].toString(2).padStart(n, "0");

    for (let l = 0; l < map1.length; l++) {
      if (map1[l] === "1" || map2[l] === "1") {
        // 둘 중 하나라도 벽일 때는 전체 지도에서 벽
        answer[i] += "#";
      } else {
        // 두개 모두 공백이라면 ("0"을 가진다면)
        answer[i] += " ";
      }
    }
  }
  return answer;
}

// solution - mento - map + reduce
function solution(n, arr1, arr2) {
  const answer = arr1.map((map1, i) => {
    // 지도 1의 암호를 2진법으로 환산
    map1 = map1.toString(2).padStart(n, "0");
    // 지도 2의 암호를 2진법으로 환산
    const map2 = arr2[i].toString(2).padStart(n, "0");

    return map1.split("").reduce((acc, cur, l) => {
      return acc + (cur === "1" || map2[l] === "1" ? "#" : " ");
    }, "");
  });
  return answer;
}

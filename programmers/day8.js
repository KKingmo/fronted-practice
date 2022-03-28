// https://programmers.co.kr/learn/courses/30/lessons/12916
// solution - me
function solution(s) {
  let aa = s
    .toLowerCase()
    .split("")
    .filter((el) => el === "p").length;
  let bb = s
    .toLowerCase()
    .split("")
    .filter((el) => el === "y").length;
  if (aa === bb) {
    return true;
  } else if (aa === 0 && bb === 0) {
    return false;
  }
  return false;
}

// solution - site
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// https://programmers.co.kr/learn/courses/30/lessons/12930
function solution(s) {
  return s
    .split(" ")
    .join(" ")
    .reduce((a, b, idx) =>
      (idx + 1) % 2 ? a + b.toUpperCase() : a + b.toLowerCase()
    );
}

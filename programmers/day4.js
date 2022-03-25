// https://programmers.co.kr/learn/courses/30/lessons/12931
// solution - me
function solution(n) {
    let a = String(n).split("");
    return a.reduce((acc, cur) => {
        return Number(acc) + Number(cur);
    });
}
// solution -mento
function solution(n) {
    let answer = 0;
    // 인덱스 값으로 접근하기 위해 문자열 타입으로 변환
    n = String(n);

    for (let i = 0; i < n.length; i++) {
        answer += Number(n[i]);
    }
    return answer;
}
// solution - shortest
function solution(n) {
    const answer = n
        .toString()
        .split("")
        .reduce((acc, cur) => {
            return acc + Number(cur);
        }, 0);
    // 초기값 0을 넣어서 acc를 Number타임으로 만듬
    // 초기값 안넣으면 String으로 됨
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12954
// solution -mento
function solution(x, n) {
    var answer = [];

    for (let i = 1; i <= n; i++) {
        answer.push(i * x);
    }
    return answer;
}
// soluteion -me
function solution(x, n) {
    const answer = new Array(n).fill(x).map((num, i) => {
        return (i + 1) * num;
    });
    return answer;
}

// ------start------
// https://programmers.co.kr/learn/courses/30/lessons/12937
// solution - me.
function solution(num) {
    var answer = "";
    if (num % 2 === 0) {
        answer = "Even";
    } else {
        answer = "Odd";
    }
    return answer;
}
// solution - mento
// 처음부터 코드가 위에서 아래로 읽어나가기 때문에
// 짝수일 때는 return "Even"을 하고 함수가 종료되고
// 홀수일 때는 if문을 실행하지 않기 때문에 자동으로
// "Odd"를 return한다.
function solution(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";
}
// solution - shortest
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
}
// ------end------

// ------start------
// https://programmers.co.kr/learn/courses/30/lessons/12944
// solution - me.
function solution(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer = answer + arr[i];
    }
    answer = answer / arr.length;
    return answer;
}
// solution - shortest.
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
// ------end------

// ------start------
// https://programmers.co.kr/learn/courses/30/lessons/12903
// solution - me
function solution(s) {
    return s.length % 2
        ? (answer = s[Math.floor(s.length / 2)])
        : (answer = s.slice(Math.floor(s.length / 2) - 1, Math.ceil(s.length / 2) + 1));
}
// solution -site
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
// ------end------

// ------start------
// https://programmers.co.kr/learn/courses/30/lessons/12918
// solution - me.
function solution(s) {
    if ((s.length === 4 || s.length === 6) && s % 1 === 0) {
        return true;
    }
    return false;
}
// ------end------

// ------start------
// ------end------

// ------start------
// ------end------

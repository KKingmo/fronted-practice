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
// solution.
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
}
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
// solution - site.
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
// ------end------

// ------start------
// https://programmers.co.kr/learn/courses/30/lessons/12903
// solution - me
function solution(s) {
    var answer = "";
    if (s.length % 2 === 0) {
        answer = s.slice(Math.floor(s.length / 2) - 1, Math.ceil(s.length / 2) + 1);
    } else {
        answer = s[Math.floor(s.length / 2)];
    }
    return answer;
}
// solution -site
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// ------end------

// ------start------
// ------end------

// ------start------
// ------end------

// ------start------
// ------end------

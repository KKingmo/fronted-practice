// ------start------
//https://programmers.co.kr/learn/courses/30/lessons/12925
// s의 타입 및 출력값 확인
function solution(s) {
    console.log(s, typeof s);
}
// s를 넘버로 변환하고 확인
function solution(s) {
    s = Number(s);
    console.log(s, typeof s);
}
// 매개변수를 직접 적으로 수정하기 보다는
function solution(s) {
    s = Number(s);
    return s;
}
// solution. <- 실무에서 가장 많이 사용하는 방법
// 협업을하기 때문에 가장 이해하기 쉬운 Number를 사용하는게 매너이다.
function solution(s) {
    // 직접 return 하는 것도 좋은 방법
    return Number(s);
}
// solution.
function solution(s) {
    return +s;
}
// solution.
function solution(s) {
    return s / 1;
}
// solution.
function solution(s) {
    return s * 1;
}
// ------end------

// ------start------
//https://programmers.co.kr/learn/courses/30/lessons/12906
// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수 -- 배열의 들어있는 데이터의 갯수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
// answer의 마지막데이터를 가져와서 비교하는 방식
function solution(arr) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], answer);
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }
}

//https://programmers.co.kr/learn/courses/30/lessons/12948
// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
function solution(phone_number) {
    let answer = "";

    for (let i = 0; i < phone_number.length; i++) {
        if (i < phone_number.length - 4) {
            answer += "*";
        } else {
            answer += phone_number[i];
        }
    }
    return answer;
}
// solution - mento.
function solution(phone_number) {
    let answer = "";
    answer = answer.padStart(phone_number.length - 4, "*");
    answer += phone_number.slice(phone_number.length - 4, phone_number.length);
    return answer;
}
// solution - me. 이것도 좋은 방법이라 하셨다.
function solution(phone_number) {
    let answer = "";
    answer = answer.padStart(phone_number.length - 4, "*") + phone_number.slice(-4);
    return answer;
}
// ------end------

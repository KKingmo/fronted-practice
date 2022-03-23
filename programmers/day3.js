// ------start------
// https://programmers.co.kr/learn/courses/30/lessons/12919
// solution - me.
// indexOf와 for문은 같은 반복문이기 때문에 작업량의 차이가 없다.
function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
// solution - site.
function findKim(seoul) {
    var idx = seoul.indexOf("Kim");
    return "김서방은 " + idx + "에 있다";
}
// solution - mento.
// seoul의 길이가 1~1000 이므로 for문으로 작성하면
// 최대 1000번 까지 반복문을 돌리기 때문에
// 찾자마자 종료시키는 break넣으면 작업량을 줄일 수 있다.
function solution(seoul) {
    let x = 0;
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            return `김서방은 ${i}에 있다`;
            break;
        }
    }
}
// ------end------

// ------start------
// https://programmers.co.kr/learn/courses/30/lessons/12918
// solution - me.
function solution(s) {
    if ((s.length === 4 || s.length === 6) && s == parseInt(s)) {
        return true;
    }
    return false;
}
// solution - mento.
// isNaN 과 Number.isNaN은 같은 기능을 하지만
// 다른 기능을한다. 숫자가 맞는지는 검증하는데
// 들어오는 인자가 숫자 타입이여야만 하고
// 결과가 NaN값이 맞는지를 검증한다.
// 즉, Number.isNaN은 isNaN보다 더 엄격하게 검증한다.
function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s)) {
            return false;
        }
    }
    return true;
}
// Tip.
function solution(s) {
    isNaN("0/0");
    Number.isNaN("0/0");

    isNaN(undefined);
    Number.isNaN(undefined);
    // isNaN은 이 데이터가 숫자인지 문자인지 검증 할때
    // Number.isNaN은 이 데이터가 NaN값이 맞는지 검증할 때
}
// solution - mento.
function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    const answer = s.split("").filter((num) => {
        return isNaN(num) === true;
    });
    return answer.length === 0;
}

// ------end------

// ------start------
//https://programmers.co.kr/learn/courses/30/lessons/12928
// solution - me.
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer = answer + i;
        }
    }
    return answer;
}
// solution - site.
function solution(n, a = 0, b = 0) {
    return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}
// solution - mento.
// n을 반으로 나눠서 약수를 구하면 효율성이 두 배!
function solution(n) {
    let answer = n;

    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            answer += n;
        }
    }
    return answer;
}
// n을 반으로 나눠서 약수를 구하면 효율성이 두 배!
function solution(n) {
    const answer = new Array(n).fill(1).reduce((acc, cur, i) => {
        return n % (cur + i) === 0
            ? // 약수가 맞다면, 약수를 더한 값을 다음으로 넘겨주고
              acc + (cur + i)
            : // 약수가 아니라면, 더하지 않고 그냥 다음으로 념겨준다.
              acc;
    }, 0);
    return answer;
}
// ------end------

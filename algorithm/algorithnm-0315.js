// 경과시간
let post = "2022년 03월 11일";

let postDate = post.split(" ");
postDate = new Date(
    Number(postDate[0].slice(0, 4)),
    Number(postDate[1].slice(0, 2)) - 1,
    Number(postDate[2].slice(0, 2))
);

let todayDate = new Date();
let diffTime = Math.abs(todayDate - postDate);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(diffDays + "일이 지났습니다.");

// 인증 번호 시간
let time = 60;
setInterval(function () {
    if (time >= 1) {
        time = time - 1;
        const min = String(Math.floor(time / 60));
        const sec = String(time % 60).padStart(2, "0");
        console.log(`${min}:${sec} 남았습니다.`);
    }
}, 1000);

// 회원가입 검증 기능
function validation(email, password, passwordCheck) {
    if (email.includes("@") === false) {
        console.log("이메일 주소를 다시 확인해주세요.");
    } else if (String(password).length < 8 || String(password).length > 16) {
        console.log("비밀번호는 8~16자리여야 합니다.");
    } else if (password !== passwordCheck) {
        console.log("비밀번호를 다시 확인해주세요.");
    } else {
        console.log("회원가입을 축하합니다.");
        console.log();
    }
}

// 진행률
const TodoList = [
    { work: "청소", finish: false },
    { work: "미적분 과제", finish: true },
    { work: "논문 해석", finish: false },
    { work: "알고리즘 풀기", finish: false },
    { work: "미니홈피 제작", finish: false },
    { work: "Blog 글 쓰기", finish: true },
];

let count = 0;
for (let i = 0; i < TodoList.length; i++) {
    if (TodoList[i].finish === true) {
        count++;
    }
}

let percent = Math.round((count / TodoList.length) * 100);
console.log(`총 ${percent}% 진행하셨습니다.`);

// 인증번호 생성
function random() {
    console.log(String(Math.floor(Math.random() * 10000)).padStart(4, "0"));
}
random();
random();
random();
random();

// 마이페이지
const myShopping = [
    { category: "과일", price: 12000 },
    { category: "의류", price: 10000 },
    { category: "의류", price: 20000 },
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000 },
    { category: "의류", price: 10000 },
    { category: "과일", price: 8000 },
    { category: "의류", price: 7000 },
    { category: "장난감", price: 5000 },
    { category: "의류", price: 10000 },
];

let count = 0;
let totPrice = 0;
for (let i = 0; i < myShopping.length; i++) {
    if (myShopping[i].category === "의류") {
        count++;
        totPrice = totPrice + myShopping[i].price;
    }
}

let tier = "";
if (count >= 5) {
    tier = "Gold";
} else if (count >= 3) {
    tier = "Silver";
} else if (count >= 0) {
    tier = "Bronze";
}

console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${totPrice}원이며 등급은 ${tier}입니다.`);

// 문구
const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];

for (let i = 0; i <= 2; i++) {
    console.log("현재 " + fruits[i].number + "위 과일은 " + fruits[i].title + "입니다.");
}

// 조건문 실전 적용 - 점수에 따른 등급
function grade(score) {
    if (score > 100 || score < 0) {
        console.log("잘못된 점수입니다.");
    } else if (score >= 90) {
        console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C");
    } else if (score >= 60) {
        console.log("D");
    } else if (score <= 59) {
        console.log("F");
    }
}

// 조건문 실전 적용 - 비밀번호 확인
function password(input1, input2) {
    input1 = String(input1).toLowerCase();
    input2 = String(input2).toLowerCase();

    if (input1 === input2) {
        console.log("회원가입을 축하합니다.");
    } else {
        console.log("비밀번호를 다시 확인해주세요.");
    }
}

password("1234", "1235"); // "비밀번호를 다시 확인해주세요."
password("1234", "1234"); // "회원가입을 축하합니다."
password("1234", 1234); // "회원가입을 축하합니다."
password("aaaa", "AAAA"); // "회원가입을 축하합니다."

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

// --------배열
const fruits = ["사과", "바나나", "파인애플"];

// fruits.push("사과")
// fruits.push("바나나")
// fruits.push("파인애플")

fruits[0];
fruits[1];
fruits[2];
const newFruits = [];
newFruits.push(fruits[fruits.length - 1]);

newFruits;

/////// 알고리즘 오후
const Obj = {
    name: "철수",
    age: 12,
    school: {
        name: "다람쥐 초등학교",
    },
    friends: ["영희", "훈이"],
    dog: "뼐이",
};
let a = "age";

Obj.name;
Obj[a];

Obj.age;
Obj["age"];

Obj.dog = "별이";
delete Obj.age;

Obj.school.teacher = "훈이";
delete Obj.school;

onst randomNum = Math.floor(Math.random()*10)
// 조건이 5일때 예외처리가 필요하다
const asdf = () => {
  ( randomNum > 5)
  ? console.log("Truthy 한 값을 입력하셨습니다.")
  : console.log("Falsy 한 값을 입력하였습니다.")
}
asdf()
asdf()

// case 예제
const day = "목요일";
let result = ""
switch(day) {
  case "월요일" :
    result = "오늘은 월요일입니다.";
  case "화요일" :
    result = "오늘은 화요일입니다.";
  case "수요일" :
  	result = "오늘은 수요일입니다.";
  default : // 무조건 switch문의 최하단에 위치해야 작동.
    result = "오늘은 " + day + "입니다.";
}
console.log(result)

// 18. 조건문 연습
// 둘 중에 하나라도 true라면 "true"
// 두 개 모두 false면 "false"
function boolean( input1, input2 ) {
  if( input1 === true || input2 === false ) {
    console.log("true")
  } else if( input1 === false && input2 === false ) {
    console.log("false")
  }
}
boolean( true, false )
boolean( false, true )
boolean( false, false )
1 === 1 && 1=== 2
1 === 1
1 === 2

// 19. 홀짝
function evenOdd(num) {
  if(num === 0) {
    console.log("Zero")
  } else if( (num % 2) === 0 ) {
    console.log("Even")
  } else if( (num % 2) === 1 ) {
    console.log("Odd")
  }
}
evenOdd( randomNum )
evenOdd( randomNum )

// 20. 온도
function temperature(num) {
  if( num >= 24 ) {
    console.log("조금 덥습니다")    
  } else if ( num >= 19 && num <= 23) {
    console.log("날씨가 좋네요")
  } else if ( num <= 18 ) {
    console.log("조금 춥네요")
  }
}
temperature( 27 )
temperature( 23 )
temperature( 13 )

// 21. 며칠
function days(month) {
  const obj = {
    1 : 31,
		2 : 28,
		3 : 31,
		4 : 30,
		5 : 31,
		6 : 30,
		7 : 31,
		8 : 31,
		9 : 30,
		10 : 31,
		11 : 30,
    12 : 31
  }
  console.log(obj[month])
}

days( 1 )
days( 2 )
days( 3 )
days( 4 )
days( 5 )
days( 6 )
days( 7 )
days( 8 )
days( 9 )
days( 10 )
days( 11 )
days( 12 )

// 022. 미니 계산기
function calculator( num1, num2, operator ) {
    if( operator === "+" ) {
             console.log( num1 + num2 )
      } else if ( operator === "/" ) {
        console.log( num1 / num2 )
      } else if ( operator === "-" ) {
        console.log( num1 - num2 )
      } else if ( operator === "*" ) {
        console.log( num1 * num2 )
      } else {
        console.log( "올바른 입력이 아닙니다." )
      }
  }
  
  calculator(10,5, '+')
  calculator(10,5, '-')
  calculator(10,5, '*')
  calculator(10,5, '/')
  calculator(10,5, 'a')
  
  // 023. 숫자 더하기
  function sum( num ) {
    let result = 0;
    for(let i=1; i <= num; i++) {
      result = result + i
    }
    console.log(result)
  }
  
  sum(5)
  sum(3)
  
  // 024. 특정 문자열 세기
  function countLetter(str) {
    let count = 0;
    for( let i = 0; i < str.length; i++) {
      if( str[i] === "a") {
        count ++;
      }
    }
    console.log(count)
  }
  countLetter("asddsddff2")
  countLetter("asdaaaqaff2")
  
  countLetter("asaaaaaaaaa2")
  
  // 025. 문자열 삽입
  function makerNumber( num ) {
    let str = 1
    for(let i = 2; i <= num; i++) {
      str = str + "-" + i
    }
    console.log(str)
  }
  
  makerNumber(5)
  makerNumber(7)
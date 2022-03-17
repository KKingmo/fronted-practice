1. 호이스팅 실습
===================
console.log(child)
var child = "철수" // 호이스팅 됨
===================
console.log(child2)
const child2 = "영희" // 호이스팅 되지만, TDZ에 들어가서 접근 불가
===================
console.log(child3)
let child3 = "훈이" // 호이스팅 되지만, TDZ에 들어가서 접근 불가
===================
hello()
function hello(){
    console.log("안녕하세요!!")
}
===================


2. 중복선언 실습
===================
var child = "철수"
var child = "영희"
console.log(child)
===================
const child2 = "철수"
const child2 = "영희"
console.log(child2)
===================
let child3 = "철수"
let child3 = "영희"
console.log(child3)
===================
function hello(){
    console.log("안녕하세요!!")
}
function hello(){
    console.log("반갑습니다@@")
}
hello()
===================


3. 함수 호이스팅+중복선언 실습
===================
hello()
function hello(){
    console.log("안녕하세요!!")
}
function hello(){
    console.log("반갑습니다@@")
}
===================
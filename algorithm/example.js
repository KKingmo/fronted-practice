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
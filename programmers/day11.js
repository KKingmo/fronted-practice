// https://programmers.co.kr/learn/courses/30/lessons/68644
// solution - mento
function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

// Set
// 1. 고유한 데이터만 받아올 수 있다.(중복되지 않는)
// 2. 겉은 배열 형태이지만, 타입음 객체 형태를 가진다.

// New
// 1. 뒤에 들어오는 데이터를 새로운 객체 형태로 리턴.

// 데이터 추가하기
// Array.isArray(obj) 배열인지 검사. boolean 반환
// arr.add(1); , add.add(2);

// 데이터 조회
// arr.has(1); boolean 반환

// 데이터 삭제
// arr.delete(1); 있는 값을 제거하면 true, 없는 값을 제거하면 false

// 데이터 초기화
// arr.clear();

// 데이터 반복
// Array.forEach( el => {console.log(el)})
// new Set에서 사용하는 forEach와 배열에서 사용하는 forEach와는 다르다.

// set => 배열로 변환
// 1. Array.from
// Array.from( arr )
// 2. spread 연산자 사용
// const answer = [...arr]
// answer

// solution - refactoring - from사용
function solution(numbers) {
  const answer = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];
      answer.add(sum);
    }
  }
  return Array.from(answer).sort((a, b) => a - b);
}

// solution - refactoring - 스프레드 연산자 사용
function solution(numbers) {
  const answer = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];
      answer.add(sum);
    }
  }
  return [...answer].sort((a, b) => a - b);
}

// solution - refactoring
function solution(numbers) {
  const temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}

// solution - forEach사용하기
function solution(numbers) {
  const answer = new Set();
  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      const sum = num1 + num2;
      answer.add(sum);
    });
  });
  return [...answer].sort((a, b) => a - b);
}

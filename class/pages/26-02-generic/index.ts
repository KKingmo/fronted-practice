// 1. 문자 타입

import { useState } from "react";

// const getString = (arg: 인자타입): 리턴타입 => {}
const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");

// 2. 숫자 타입
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber(8);

// 3. any 타입
const getAny2 = (arg: any): any => {
  return arg;
};
const result3_1 = getAny2("철수");
const result3_2 = getAny2(8);
const result3_3 = getAny2(true);
// any의 문제점은 결과값을 모른다는 것이다 그래서 generic이 탄생하였다.

// 4. any 타입2
// const getAnys = (...arg: ...인자타입): [...리턴타입] => {}
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};
const result4 = getAnys("철수", "다람쥐초등학교", 8);

// 5. generic 타입
// MyType : 뭔진 모르겠으나, 들어온 타입을 그대로 사용(숫자가 들어오면 전체가 숫자)
// <MyType> : (arg: MyType): MyType 들을 묶어준다는 의미
// 즉, 제네릭은 뭔지 몰라도 타입이 들어오면 그 타입으로 리턴타입, 인자타입을 설정하겠다는 의미이다.
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const result5_1 = getGeneric(aaa);
const result5_2 = getGeneric(bbb);
const result5_3 = getGeneric(ccc);

// 6. generic 타입2
// prettier-ignore
// 이렇게하면 이 아랫줄 부터 prettier 적용 안된다.
function getGenerics<MyType1, MyType2, MyType3>(arg1: MyType1,arg2: MyType2,arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result6 = getGenerics("철수", "다람쥐초등학교", 8);

// 7. generic - 축약1
// prettier-ignore
// 6번에서 단지 타입 이름만 줄였다.
function getGenericsT<T1, T2, T3>(arg1: T1,arg2: T2,arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg1];
  }

const result7 = getGenericsT("철수", "다람쥐초등학교", 8);

// 8. generic - 축약2
// prettier-ignore
// 7번에서 단지 타입 이름만 줄였다.
function getGenericsTUV<T, U, V>(arg1: T,arg2: U,arg3: V): [V, U, T] {
    return [arg3, arg2, arg1];
  }
// 이런식으로 인자로 들어가는 타입명시도 가능하다.
// prettier-ignore
const result8 = getGenericsTUV<string, string, number>("철수", "다람쥐초등학교", 8);

// 위 코드는 아래와 같이 ustState의 타입명시 할 때 사용했었다.
// const [school, setSchool] = useState<string>('청설모중학교')

// // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
// const apple: number = "철수"
// console.log(apple)

// 10. 화살표 함수에서의 generic!!
const getGenericsTUV2 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

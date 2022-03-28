export default function TypeScriptPage() {
  //     //타입 추론
  //     let aaa = "안녕하세요";
  //     aaa = 3;

  //     //타입 명시
  //     let bbb: string = "반갑습니다.";

  //     // 문자타입
  //     let ccc: string;
  //     ccc = "반가워요!!!";
  //     ccc = 3;

  //     // 숫자타입
  //     let ddd: number = 10;
  //     ddd = "asdfasdf";

  //     // 불린타입
  //     let eee: boolean = true;
  //     eee = false;
  //     eee = "false"; // 단어는 false 지만 문자열안에 내용이 있기 때문에 true로 작동한다.

  //     // 배열타입
  //     let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
  //     let ggg: string[] = ["철수", "영희", "훈이". 13];
  //     let hhh: (number | string)[] = [1, 2, 3, 4, 5, "안녕하세요"] // 타입스크립트에서는 || => |  , && => & 처럼 하나만 사용한다.

  //     // 객체타입 : 타입명시
  //     interface IProfile {
  //         name: string
  //         age: string | number
  //         school: string
  //         hobby?: string // 빠져도 상관 없는 것은 ?를 뒤에 붙여준다.
  //     }

  //     // 객체타입 : 타입추론
  //     let profile: IProfile = { // IProfile이라는 타입을 명시 하여서 profile뒤에 :IProfile를 써주면 명시한 IProfile로 타입을 추론한다.
  //         name: "철수",
  //         age: 8,
  //         school: "다람쥐초등학교" // 여기서 school을 빼면 에러가 나온다. 타입 명시에서 ?를 붙여주면 빼도 상관없다.
  //     }
  //     profile.age = "8" // 처음에 숫자형으로 타입이 추론되었기 때문에 다음에는 숫자만 입력 가능하다.
  //     profile.school = 123

  //     // 함수타입 // 타입을 명시할 때도 앞에 명시한 타입과 타입이 맞지 않으면 에러를 출력한다.
  //     const add = (money1: number, money2: number, unit: string): string => { // graphql 하듯 하면된다. (): string 은 리턴값을 string으로 받는다는 의미.
  //         return money1 + money2 + unit
  //     }
  //     const result = add(1000, 2000, "원")

  //     const identify = <T>

  return <div>타입스크립트 연습하기!!!</div>;
}

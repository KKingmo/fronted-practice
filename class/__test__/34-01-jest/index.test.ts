import { add } from "../../pages/34-01-jest/index";

// 테스트하고 싶은 내용은 it안에 입력
it("더하기 잘되는지 테스트해보기", () => {
  const result = add(3, 5);
  // expect : 예상한다 , toBe : 결과는 ()일꺼야~
  expect(result).toBe(8);
});

// describe("나만의 테스트 그룹만들기", () => {
//   it("내가 하고싶은 테스트-1", () => {});

//   it("내가 하고싶은 테스트-2", () => {});

//   it("내가 하고싶은 테스트-3", () => {});

//   it("내가 하고싶은 테스트-4", () => {});
// });

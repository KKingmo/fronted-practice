import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestPage from "../../pages/34-02-jest-unit-test";

// 컴포넌트를 가짜로 렌더링 시켜본다.
it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />);

  // 렌더링 된 화면의 스크린에서 텍스트를 가져올 수있다.
  const myText1 = screen.getByText("철수는 13살 입니다.");
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("철수의 취미 입력하기 :");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});

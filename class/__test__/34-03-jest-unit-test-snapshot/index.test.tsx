import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestSnapshotPage from "../../pages/34-03-jest-unit-test-snapshot";

// 컴포넌트를 가짜로 렌더링 시켜본다.
it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보자 - 스냅샷 테스트", () => {
  // 스냅샷을 찍게되면 스냅샨이라는 폴더가 있는데 여기에 스냅샷 복사본이 들어간다.
  // 이 복사본으로 비교를 한다.
  const result = render(<JestUnitTestSnapshotPage />);
  expect(result.container).toMatchSnapshot();
});

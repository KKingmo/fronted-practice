import { useState } from "react";
import styled from "@emotion/styled";

const Div = styled.div`
  width: 1000px;
  margin: 0 auto;
  border: 1px solid #bdbdbd;
  padding: 20px;
`;

export default function Quiz32APage() {
  const [state, setState] = useState(0);

  const sumAll = () => {
    setState((prev) => prev + 1);
    setState((prev) => prev + 2);
    setState((prev) => prev + 3);
    setState((prev) => prev + 4);
  };

  return (
    <>
      <Div>
        <div>2-4. State 세부 작동 방식</div>
        <div>결과는: {state}</div>
        <button onClick={sumAll}>실행!</button>
      </Div>
    </>
  );
}

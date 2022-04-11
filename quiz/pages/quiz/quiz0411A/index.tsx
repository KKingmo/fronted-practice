import { useState } from "react";
import ComponentA from "./ComponentA.container";
import ComponentB from "./ComponentB.container";
import ComponentC from "./ComponentC";

export default function Quiz0411APage() {
  const [state, setState] = useState(0);
  const onClickFunction = () => {
    setState((qwer) => qwer + 1);
  };

  // 1-2. 정규표현식 적용하기 - 1.
  const regaxA = /^\d{4}\.\d{2}\.\d{2}$/.test("2018.01.01");
  // 1-2. 정규표현식 적용하기 - 2.
  const regaxB = /^\d{3}-\d{4}-\d{4}$/.test("010-1234-5678");
  // 1-2. 정규표현식 적용하기 - 3.
  const regaxC = /^\w+@\w+\.\w+$/.test("aaa@bbb.com");
  return (
    <>
      <div>
        <div>1-1.props,data,prev의 실체 파악하기 - 1.</div>
        <ComponentA />
      </div>
      <div>
        <div>1-1.props,data,prev의 실체 파악하기 - 2.</div>
        <ComponentB />
      </div>
      <div>
        <div>1-1.props,data,prev의 실체 파악하기 - 3.</div>
        <ComponentC />
      </div>
      <div>
        <div>1-1.props,data,prev의 실체 파악하기 - 4.</div>
        <div>state : {state}</div>
        <button onClick={onClickFunction}>state + 1</button>
      </div>
      <div>
        <div>1-2. 정규표현식 적용하기 - 1.</div>
        <div>{`${regaxA}`}</div>
      </div>
      <div>
        <div>1-2. 정규표현식 적용하기 - 2.</div>
        <div>{`${regaxB}`}</div>
      </div>
      <div>
        <div>1-2. 정규표현식 적용하기 - 3.</div>
        <div>{`${regaxC}`}</div>
      </div>
    </>
  );
}

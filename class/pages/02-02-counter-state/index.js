import { useState } from "react";

export default function CounterStatePage() {
    const [count, setCount] = useState(0);

    function counter() {
        setCount(count + 1);
    }

    // --- let count 를 이용해 구현하면 count값을 반환하지 않아 재활용이 어렵다.
    // let count = 0
    // function counter(){
    //     count = count + 1
    //     console.log(count)
    // }

    // --- 변수를 찾을때 {}안에서 먼저 찾은 후에, 바깥쪽에 가장 가까운 중괄호 안에서 찾고, 또 없으면 포기!
    // -- 스코프체인(scope-chain) 사례 --1
    // const apple = 3
    // function aa () {const apple = 2}
    // let count = 0
    // const apple = 3
    // function counter(){
    //     console.log(apple)
    //     count = count + 1
    //     console.log(count)
    // }

    // -- 스코프체인(scope-chain) 사례 --2
    // useState 로 설정한 counter와
    // function 안에 counter있을때
    // {counter}를 호출하면
    // export default 의 {}가 더 가깝기 때문에
    // useState안의 것을 호출

    return (
        <>
            <div>{count}</div>
            <button onClick={counter}>카운트 올리기!!!</button>
        </>
    );
}

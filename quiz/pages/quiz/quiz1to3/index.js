import { useState } from "react";
export default function QuizA() {
    // Quiz 1. 1-1------start
    function onClickBtn11() {
        let hello1 = "반갑습니다";
        document.getElementById("result").innerText = hello1;
    }
    // Quiz 1. 1-1------end

    // Quiz 1. 1-2------start
    const [hello2, setHello2] = useState("안녕하세요");

    function onClickBtn12() {
        setHello2("반갑습니다.");
    }
    // Quiz 1. 1-2------end

    // Quiz 2. 1-1------start
    let count21 = 0;
    function onClickBtn21() {
        count21 = count21 + 1;
        document.getElementById("counter").innerText = count21;
    }
    // Quiz 2. 1-1------end

    // Quiz 2. 1-2------start
    const [count22, setCount22] = useState(0);

    function onClickBtn22() {
        setCount22(count22 + 1);
    }
    // Quiz 2. 1-2------end

    // Quiz 3. 1-1------start
    function onClickBtn31() {
        let token31 = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("authNumber").innerText = token31;
    }
    // Quiz 3. 1-1------end

    // Quiz 3. 1-2------start
    const [token31, setToken31] = useState("000000");

    function onClickBtn32() {
        setToken31(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
    }
    // Quiz 3. 1-2------end

    return (
        <div>
            <div>
                <div>
                    1. "안녕하세요"라는 버튼을 만들고, 버튼 클릭시 "반갑습니다" 로 변경해 보세요
                </div>
                {/* Quiz 1. 1-1------start */}
                <div>1-1) let과 document.getElementById()를 사용해 주세요.</div>
                <button id="result" onClick={onClickBtn11}>
                    안녕하세요
                </button>
                {/* Quiz 1. 1-1------end */}
            </div>
            <div>
                {/* Quiz 1. 1-2------start */}
                <div>1-2) state를 사용해 주세요.</div>
                <button onClick={onClickBtn12}>{hello2}</button>
                {/* Quiz 1. 1-2------end */}
            </div>

            <div>
                <div>
                    2. 0이라는 숫자와 "카운트올리기"라는 버튼을 만들고, 버튼 클릭시 숫자를 1씩
                    증가해 주세요.
                </div>
                {/* Quiz 2. 1-1------start */}
                <div>1-1) let과 document.getElementById()를 사용해 주세요.</div>
                <div id="counter">{count21}</div>
                <button onClick={onClickBtn21}>카운트증가</button>
                {/* Quiz 2. 1-1------end */}
            </div>
            <div>
                {/* Quiz 2. 1-2------start */}
                <div>1-2) state를 사용해 주세요.</div>
                <div>{count22}</div>
                <button onClick={onClickBtn22}>카운트증가</button>
                {/* Quiz 2. 1-2------end */}
            </div>

            <div>
                <div>
                    3. 인증번호 6자리 "000000"과 "인증번호전송"이라는 버튼을 만들고, 버튼 클릭시
                    인증번호를 만들어서 인증번호 6자리가 변경되도록 적용해 주세요.
                </div>
                {/* Quiz 3. 1-1------start */}
                <div>1-1) let과 document.getElementById()를 사용해 주세요.</div>
                <div id="authNumber">000000</div>
                <button onClick={onClickBtn31}>인증번호전송</button>
                {/* Quiz 3. 1-1------end */}
            </div>
            <div>
                {/* Quiz 3. 1-2------start */}
                <div>1-2) state를 사용해 주세요.</div>
                <div>{token31}</div>
                <button onClick={onClickBtn32}>인증번호전송</button>
                {/* Quiz 3. 1-2------end */}
            </div>
        </div>
    );
}

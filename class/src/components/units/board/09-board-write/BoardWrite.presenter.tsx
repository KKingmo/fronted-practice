// 여기는 프리젠터 컴포넌트

import { SubmitButton, WriterInput } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
    return (
        <div>
            {/* <div>{data}</div> */}
            <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
            작성자:{" "}
            <WriterInput
                type="text"
                onChange={props.onChangeWriter}
                defaultValue={props.data?.fetchBoard.writer}
            />
            <br />
            제목:{" "}
            <input
                type="text"
                onChange={props.onChangeTitle}
                defaultValue={props.data?.fetchBoard.title}
            />
            <br />
            내용:{" "}
            <input
                type="text"
                onChange={props.onChangeContents}
                defaultValue={props.data?.fetchBoard.contents}
            />
            <br />
            <SubmitButton
                onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi}
                isActive={props.isActive}
            >
                {props.isEdit ? "수정" : "등록"}하기
            </SubmitButton>
        </div>
    );
}

import {BrowserRouter as Router, Routes, Route} from "react-router-dom" export default function App() { <Router> // 일단 라우팅 된 부분을 첫번째로 감싸준다. 
<Routes> // Routes안에 있는 여러가지 Router중에서 조건에 만족한 첫번째 Router를 불러온다. 
<Route exact path = "/kimjungho"/> <Route exact path = "/" /> // 이렇게 / 를 하나만 사용하면 index.js 메인페이지를 불러온다. 
<Route exact path = "/kimjunghoom" /> <Route exact path = "" /> </Routes> </Router> }


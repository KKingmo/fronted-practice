// import axios from "axios";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_BOARD);

    const [mywriter, setMyWriter] = useState("");
    const [mytitle, setMyTitle] = useState("");
    const [mycontents, setMyContents] = useState("");

    const callRestApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1"); // res-API 방식
        const result = await callApi({
            variables: { writer: mywriter, title: mytitle, contents: mycontents },
        }); // graphql-API 방식
        console.log(result);
        console.log(result.data.createBoard.message);
        setData(result.data.createBoard.message);
    };

    // ()에 들어오는 함수를 이벤트 핸들러 함수라고 한다.
    const onChangeWriter = (event) => {
        setMyWriter(event.target.value);
    };
    const onChangeTitle = (event) => {
        setMyTitle(event.target.value);
    };
    const onChangeContents = (event) => {
        setMyContents(event.target.value);
    };

    return (
        <div>
            {/* <div>{data}</div> */}
            <div>
                작성자: <input type="text" onChange={onChangeWriter} />
            </div>
            <div>
                제목: <input type="text" onChange={onChangeTitle} />
            </div>
            <div>
                내용: <input type="text" onChange={onChangeContents} />
            </div>
            <button onClick={callRestApi}>Graphql-API 요청하기</button>
        </div>
    );
}

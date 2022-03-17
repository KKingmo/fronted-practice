// import axios from "axios";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
    mutation {
        createBoard(writer: "철수", title: "제목!!", contents: "내용!") {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_BOARD);

    const callRestApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1"); // res-API 방식
        const result = await callApi(); // graphql-API 방식
        console.log(result);
        console.log(result.data.createBoard.message);
        setData(result.data.createBoard.message);
    };

    return (
        <div>
            <div>{data}</div>
            <button onClick={callRestApi}>Graphql-API 요청하기</button>
        </div>
    );
}

// import axios from "axios";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

// 아래 variables에서 받은 인자를 mymutation에서 받는 이유 : 동일한 인자 값을 요청하는 것들에 한해
// 묶음어서 요청을 할 수 있다.
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        # createProduct(title: $title){}
        # fetchBoards(){}
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

    const callRestApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1"); // res-API 방식
        const result = await callApi({
            variables: { writer: "철수", title: "제목!!", contents: "내~용~~입니다" },
        }); // graphql-API 방식
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

// GraphQL-API - 장점
// 받고 싶은 것만 골라 받는다.
// axios를 사용했을 때는 한번에 하나의 요청만 가능해서 여러개를 요청할때는 여러번에 나눠서 요청하고 응답도 갯수만큼 기다려야한다.
// 그러나 GraphQL은 묶음 배송이 가능하다.
// 위의 mymutation 함수에 createProduct(){} , fetchBoards(){} 와 같은 것들을 추가하여 묶어서 한번에 요청할 수 있다.

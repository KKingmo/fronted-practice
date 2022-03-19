import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            number
            writer
            title
            contents
        }
    }
`;

const StaticRoutedBoardPage83012 = () => {
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: 83012 },
    });

    console.log(data);

    return (
        <div>
            {/* 조건부 렌더링 : data && data.fetchBoard.number
            데이터가 없으면 && 앞을 출력하고, 있으면 && 뒤를 출력
            Optional-Chaining: 조건부 렌더링의 문법을 data?.fetchBoard.number 와 같이 간추린 것
            */}
            <div>{data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다!</div>
            <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
        </div>
    );
};

export default StaticRoutedBoardPage83012;

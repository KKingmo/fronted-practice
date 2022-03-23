// 여기는 상세보기 페이지

import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.mynumber) }
    })

    console.log(data)

    const onClickMove = () => {
        router.push(`/08-05-boards/${router.query.mynumber}/edit`)
    }

    return (
        <div>
            <div>{data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다!!</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            <button onClick={onClickMove}>수정하러 이동하기</button>
        </div>
    )

}
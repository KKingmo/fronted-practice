import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { Fragment } from 'react'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 20%;
`

export default function MapBoardPage(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARDS)

    const onClickDelete = (event) => {
        deleteBoard({
            variables: { number: Number(event.target.id) },
            refetchQueries: [{ query: FETCH_BOARDS }]
        })
    }

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                    // <Fragment key={el.number}>
                    <Row key={el.number}>
                        <Column><input type="checkbox" /></Column>
                        <Column>{el.number}</Column>
                        <Column>{el.writer}</Column>
                        <Column>{el.title}</Column>
                        <Column>
                            <button id={el.number} onClick={onClickDelete}>삭제</button>
                        </Column>
                    </Row>
                ))}
        </div>
    )

}
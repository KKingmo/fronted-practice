import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            images
            boardAddress {
                zipcode
                address
                addressDetail
            }
            createdAt
        }
    }
`;

const BoardRoutedPage = () => {
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    console.log(data);

    return (
        <div>
            <div>{data ? data.fetchBoard.writer : "loading..."}</div>
            <div>{data ? data.fetchBoard.createdAt : "loading..."}</div>
            <div>{data ? data.fetchBoard.boardAddress.zipcode : "loading..."}</div>
            <div>{data ? data.fetchBoard.boardAddress.address : "loading..."}</div>
            <div>{data ? data.fetchBoard.boardAddress.addressDetail : "loading..."}</div>
            <div>{data ? data.fetchBoard.title : "loading..."}</div>
            <div>{data ? data.fetchBoard.images : "loading..."}</div>
            <div>{data ? data.fetchBoard.contents : "loading..."}</div>
            <div>{data ? data.fetchBoard.youtubeUrl : "loading..."}</div>
            <div>{data ? data.fetchBoard.likeCount : "loading..."}</div>
            <div>{data ? data.fetchBoard.dislikeCount : "loading..."}</div>
        </div>
    );
};

export default BoardRoutedPage;

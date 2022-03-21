import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
    FlexColumn,
    Wrapper,
    Container,
    BoardHead,
    BoardHeadLeft,
    Writer,
    CreatedAt,
    BoardHeadRight,
    LocationInfo,
    LocationToolTip,
    BoardBody,
    BoardBodyTitle,
    BoardBodyContents,
    VideoContainer,
    BoardBodyReaction,
    BoardFooter,
    BoardFooterButton,
} from "../../../styles/boardsBoardId";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LinkIcon from "@material-ui/icons/Link";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";

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

const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!) {
        likeBoard(boardId: $boardId)
    }
`;
const DISLIKE_BOARD = gql`
    mutation dislikeBoard($boardId: ID!) {
        dislikeBoard(boardId: $boardId)
    }
`;

const BoardRoutedPage = () => {
    const [likeCount, setLikeCount] = useState();
    const [dislikeCount, setDislikeCount] = useState();

    const router = useRouter();
    const [likeBoard] = useMutation(LIKE_BOARD);
    const [dislikeBoard] = useMutation(DISLIKE_BOARD);
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    const onClickLike = async () => {
        const resultLikeCount = await likeBoard({
            variables: {
                boardId: router.query.boardId,
            },
        });
        setLikeCount(resultLikeCount.data.likeBoard);
    };

    const onClickDislike = async () => {
        const resultDislikeCount = await dislikeBoard({
            variables: {
                boardId: router.query.boardId,
            },
        });
        setDislikeCount(resultDislikeCount.data.dislikeBoard);
    };

    return (
        <Wrapper>
            <Container>
                <BoardHead>
                    <BoardHeadLeft>
                        <div>
                            <AccountCircleIcon className="userIcon" />
                        </div>
                        <div>
                            <Writer>{data ? data.fetchBoard.writer : "loading..."}</Writer>
                            <CreatedAt>{data ? data.fetchBoard.createdAt : "loading..."}</CreatedAt>
                        </div>
                    </BoardHeadLeft>
                    <BoardHeadRight>
                        <div>
                            <LinkIcon className="yellowIcon cursorPointer" />
                        </div>
                        <div className="cursorPointer">
                            <LocationInfo>
                                <LocationOnOutlinedIcon className="yellowIcon" />
                                <LocationToolTip>
                                    <span>
                                        {data ? data.fetchBoard.boardAddress.address : "loading..."}
                                    </span>
                                    <span>
                                        {data
                                            ? data.fetchBoard.boardAddress.addressDetail
                                            : "loading..."}
                                    </span>
                                    <span></span>
                                </LocationToolTip>
                            </LocationInfo>
                        </div>
                    </BoardHeadRight>
                </BoardHead>

                <BoardBody>
                    <BoardBodyTitle>{data ? data.fetchBoard.title : "loading..."}</BoardBodyTitle>
                    <BoardBodyContents>
                        <img
                            src={data ? data.fetchBoard.images : "loading..."}
                            alt="사진을 불러오는데 실패했습니다."
                        />
                        <div>{data ? data.fetchBoard.contents : "loading..."}</div>
                        <div>
                            <VideoContainer>
                                <iframe
                                    className="youtubeVideo"
                                    title="Youtube player"
                                    src={`https://youtube.com/embed/${
                                        data ? data.fetchBoard.youtubeUrl : "loading..."
                                    }?autoplay=0`}
                                ></iframe>
                            </VideoContainer>
                        </div>
                    </BoardBodyContents>

                    <BoardBodyReaction>
                        <FlexColumn className="yellowIcon cursorPointer">
                            <ThumbUpAltOutlinedIcon onClick={onClickLike} />
                            {likeCount
                                ? likeCount
                                : data
                                ? data.fetchBoard.likeCount
                                : "loading..."}
                        </FlexColumn>
                        <FlexColumn>
                            <ThumbDownOutlinedIcon
                                className="cursorPointer"
                                onClick={onClickDislike}
                            />
                            {dislikeCount
                                ? dislikeCount
                                : data
                                ? data.fetchBoard.dislikeCount
                                : "loading..."}
                        </FlexColumn>
                    </BoardBodyReaction>
                </BoardBody>
            </Container>

            <BoardFooter>
                <BoardFooterButton>목록으로</BoardFooterButton>
                <BoardFooterButton>수정하기</BoardFooterButton>
                <BoardFooterButton>삭제하기</BoardFooterButton>
            </BoardFooter>
            {/* <div>{data ? data.fetchBoard.boardAddress.zipcode : "loading..."}</div>
            <div>{data ? data.fetchBoard.boardAddress.address : "loading..."}</div>
            <div>{data ? data.fetchBoard.boardAddress.addressDetail : "loading..."}</div> */}
        </Wrapper>
    );
};

export default BoardRoutedPage;

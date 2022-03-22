import * as S from "./BoardRead.styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LinkIcon from "@material-ui/icons/Link";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";

export default function BoardReadUI(props) {
    return (
        <>
            <S.Wrapper>
                <S.Container>
                    <S.BoardHead>
                        <S.BoardHeadLeft>
                            <div>
                                <AccountCircleIcon className="userIcon" />
                            </div>
                            <div>
                                <S.Writer>
                                    {props.data ? props.data.fetchBoard.writer : "loading..."}
                                </S.Writer>
                                <S.CreatedAt>
                                    {props.data ? props.data.fetchBoard.createdAt : "loading..."}
                                </S.CreatedAt>
                            </div>
                        </S.BoardHeadLeft>
                        <S.BoardHeadRight>
                            <div>
                                <LinkIcon className="yellowIcon cursorPointer" />
                            </div>
                            <div className="cursorPointer">
                                <S.LocationInfo>
                                    <LocationOnOutlinedIcon className="yellowIcon" />
                                    <S.LocationToolTip>
                                        <span>
                                            {props.data
                                                ? props.data.fetchBoard.boardAddress.address
                                                : "loading..."}
                                        </span>
                                        <span>
                                            {props.data
                                                ? props.data.fetchBoard.boardAddress.addressDetail
                                                : "loading..."}
                                        </span>
                                        <span></span>
                                    </S.LocationToolTip>
                                </S.LocationInfo>
                            </div>
                        </S.BoardHeadRight>
                    </S.BoardHead>

                    <S.BoardBody>
                        <S.BoardBodyTitle>
                            {props.data ? props.data.fetchBoard.title : "loading..."}
                        </S.BoardBodyTitle>
                        <S.BoardBodyContents>
                            <img
                                src={props.data ? props.data.fetchBoard.images : "loading..."}
                                alt="사진을 불러오는데 실패했습니다."
                            />
                            <div>{props.data ? props.data.fetchBoard.contents : "loading..."}</div>
                            <div>
                                <S.VideoContainer>
                                    <iframe
                                        className="youtubeVideo"
                                        title="Youtube player"
                                        src={`https://youtube.com/embed/${
                                            props.data
                                                ? props.data.fetchBoard.youtubeUrl
                                                : "loading..."
                                        }?autoplay=0`}
                                    ></iframe>
                                </S.VideoContainer>
                            </div>
                        </S.BoardBodyContents>

                        <S.BoardBodyReaction>
                            <S.FlexColumn className="yellowIcon cursorPointer">
                                <ThumbUpAltOutlinedIcon onClick={props.onClickLike} />
                                {props.likeCount
                                    ? props.likeCount
                                    : props.data
                                    ? props.data.fetchBoard.likeCount
                                    : "loading..."}
                            </S.FlexColumn>
                            <S.FlexColumn>
                                <ThumbDownOutlinedIcon
                                    className="cursorPointer"
                                    onClick={props.onClickDislike}
                                />
                                {props.dislikeCount
                                    ? props.dislikeCount
                                    : props.data
                                    ? props.data.fetchBoard.dislikeCount
                                    : "loading..."}
                            </S.FlexColumn>
                        </S.BoardBodyReaction>
                    </S.BoardBody>
                </S.Container>

                <S.BoardFooter>
                    <S.BoardFooterButton>목록으로</S.BoardFooterButton>
                    <S.BoardFooterButton>수정하기</S.BoardFooterButton>
                    <S.BoardFooterButton>삭제하기</S.BoardFooterButton>
                </S.BoardFooter>
                {/* <div>{data ? data.fetchBoard.boardAddress.zipcode : "loading..."}</div>
            <div>{data ? data.fetchBoard.boardAddress.address : "loading..."}</div>
            <div>{data ? data.fetchBoard.boardAddress.addressDetail : "loading..."}</div> */}
            </S.Wrapper>
        </>
    );
}

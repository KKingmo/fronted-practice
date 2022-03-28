import * as S from "./BoardDetail.styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LinkIcon from "@material-ui/icons/Link";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
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
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard?.createdAt)}
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
                    <span>{props.data?.fetchBoard.boardAddress?.address}</span>
                    <span>
                      {props.data?.fetchBoard.boardAddress?.addressDetail}
                    </span>
                    <span></span>
                  </S.LocationToolTip>
                </S.LocationInfo>
              </div>
            </S.BoardHeadRight>
          </S.BoardHead>

          <S.BoardBody>
            <S.BoardBodyTitle>{props.data?.fetchBoard.title}</S.BoardBodyTitle>
            <S.BoardBodyContents>
              <img
                src={String(props.data?.fetchBoard.images)}
                alt="사진을 불러오는데 실패했습니다."
              />
              <div>{props.data?.fetchBoard.contents}</div>
              <div>
                <S.VideoContainer>
                  <iframe
                    className="youtubeVideo"
                    title="Youtube player"
                    src={`https://youtube.com/embed/${props.data?.fetchBoard.youtubeUrl}?autoplay=0`}
                  ></iframe>
                </S.VideoContainer>
              </div>
            </S.BoardBodyContents>

            <S.BoardBodyReaction>
              <S.FlexColumn className="yellowIcon cursorPointer">
                <ThumbUpAltOutlinedIcon onClick={props.onClickLike} />
                {props.data?.fetchBoard.likeCount}
              </S.FlexColumn>
              <S.FlexColumn>
                <ThumbDownOutlinedIcon
                  className="cursorPointer"
                  onClick={props.onClickDislike}
                />
                {props.data?.fetchBoard.dislikeCount}
              </S.FlexColumn>
            </S.BoardBodyReaction>
          </S.BoardBody>
        </S.Container>

        <S.BoardFooter>
          <S.BoardFooterButton onClick={props.onClickMoveToBoardList}>
            목록으로
          </S.BoardFooterButton>
          <S.BoardFooterButton onClick={props.onClickMoveToBoardEdit}>
            수정하기
          </S.BoardFooterButton>
          <S.BoardFooterButton onClick={props.onClickDelete}>
            삭제하기
          </S.BoardFooterButton>
        </S.BoardFooter>
      </S.Wrapper>
    </>
  );
}

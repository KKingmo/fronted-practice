import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      {!props.el && (
        <S.Title>
          <S.CommentIcon />
          댓글
        </S.Title>
      )}
      <S.WriterInfoWrapper>
        <S.Input
          type="text"
          maxLength={10}
          placeholder="작성자"
          onChange={props.onChangeWriter}
          defaultValue={props.el?.writer}
          readOnly={props.el?.writer}
        ></S.Input>
        <S.Input
          type="password"
          maxLength={20}
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        ></S.Input>
        <Rate
          onChange={props.onChangeRating}
          defaultValue={props.isEdit ? props.el.rating : props.rating}
        ></Rate>
      </S.WriterInfoWrapper>
      <S.ContentsWrapper>
        <S.ContentsTextarea
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          defaultValue={props.el?.contents}
        ></S.ContentsTextarea>
        <S.ContentsBottom>
          <S.ContentsBottomLength>
            {props.contents.length}/100
          </S.ContentsBottomLength>
          <S.ContentsBottomButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.ContentsBottomButton>
        </S.ContentsBottom>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}

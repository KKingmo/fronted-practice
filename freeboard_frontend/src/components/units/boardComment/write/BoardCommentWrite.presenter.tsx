import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      <span>댓글</span>
      <S.WriterInfoWrapper>
        <input
          type="text"
          placeholder="작성자"
          onChange={props.onChangeWriter}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        ></input>
        <input
          type="number"
          max={5}
          placeholder="별점"
          onChange={props.onChangeRating}
        ></input>
      </S.WriterInfoWrapper>
      <S.ContentsWrapper>
        <S.ContentsTextarea
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
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

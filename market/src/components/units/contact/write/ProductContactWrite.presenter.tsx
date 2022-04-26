import * as S from "./ProductContactWrite.styles";

export default function ProductContactWriteUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Wrapper>
        <S.Title>
          <S.CommentIcon />
          문의하기
        </S.Title>
        <S.ContentsWrapper>
          <S.ContentsTextarea
            {...props.register("contents")}
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.ContentsTextarea>
          <S.ContentsBottom>
            <S.ContentsBottomLength>/100</S.ContentsBottomLength>
            <S.ContentsBottomButton type="submit">
              문의하기
            </S.ContentsBottomButton>
          </S.ContentsBottom>
        </S.ContentsWrapper>
      </S.Wrapper>
    </form>
  );
}

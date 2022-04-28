import * as S from "./ProductContactWrite.styles";

export default function ProductContactWriteUI(props) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickSubmit
      )}
    >
      <S.Wrapper>
        <S.Title>
          <S.CommentIcon />
          {props.isEdit ? "수정하기" : "문의하기"}
        </S.Title>
        <S.ContentsWrapper>
          <S.ContentsTextarea
            {...props.register("contents")}
            maxLength={100}
            defaultValue={props.el?.contents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.ContentsTextarea>
          <S.ContentsBottom>
            <S.ContentsBottomLength>0/100</S.ContentsBottomLength>
            <div>
              {props.isEdit && (
                <S.CancelButton
                  type="button"
                  onClick={() => {
                    props.setIsEdit(false);
                  }}
                >
                  취소하기
                </S.CancelButton>
              )}
              <S.ContentsBottomButton type="submit">
                {props.isEdit ? "수정하기" : "문의하기"}
              </S.ContentsBottomButton>
            </div>
          </S.ContentsBottom>
        </S.ContentsWrapper>
      </S.Wrapper>
    </form>
  );
}

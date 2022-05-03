import * as S from "./ProductContactAnswerWrite.styles";

export default function ProductContactAnswerWriteUI(props) {
  return (
    <S.Wrapper
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickSubmit
      )}
    >
      <S.ContentsWrapper>
        <S.ContentsTextarea
          {...props.register("contents")}
          maxLength={100}
          defaultValue={props.isEdit ? props.a?.contents : ""}
          placeholder="답글을 등록해주세요."
        ></S.ContentsTextarea>
        <S.ContentsBottom>
          <S.ContentsBottomLength>0/100</S.ContentsBottomLength>
          <div>
            {props.isEdit && (
              <S.CancelButton
                type="button"
                onClick={() => {
                  props.setIsAnswer(false);
                }}
              >
                취소하기
              </S.CancelButton>
            )}
            <S.ContentsBottomButton type="submit">
              {props.isEdit ? "수정하기" : "답글등록"}
            </S.ContentsBottomButton>
          </div>
        </S.ContentsBottom>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}

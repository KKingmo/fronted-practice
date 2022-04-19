import * as S from "./UserLogin.styles";

export default function UserLoginUI() {
  return (
    <>
      <S.Wrapper>
        <S.Background>
          <S.Shape></S.Shape>
          <S.Shape></S.Shape>
        </S.Background>
        <S.Form>
          <h3>곰곰마켓 로그인</h3>

          <S.Input
            type="text"
            placeholder="이메일을 입력해주세요."
            id="username"
          />

          <S.Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            id="password"
          />

          <S.Button>로그인</S.Button>
          <S.Option>
            <S.OptionItem>
              <span>이메일 찾기</span>
            </S.OptionItem>
            <S.OptionItem>
              <span>비밀번호 찾기</span>
            </S.OptionItem>
            <S.OptionItem>
              <span>회원가입</span>
            </S.OptionItem>
          </S.Option>
        </S.Form>
      </S.Wrapper>
    </>
  );
}

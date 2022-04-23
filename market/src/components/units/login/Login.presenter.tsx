import * as S from "./Login.styles";
import Input01 from "../../commons/inputs/01";
import Button01 from "../../commons/buttons/01";

export default function UserLoginUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.Background>
          <S.Shape></S.Shape>
          <S.Shape></S.Shape>
        </S.Background>
        <S.Form>
          <h3>로그인하기</h3>

          <Input01
            type="text"
            placeholder="이메일을 입력해주세요."
            register={props.register("email")}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>

          <Input01
            type="password"
            placeholder="비밀번호를 입력해주세요."
            register={props.register("password")}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>

          <Button01
            title="로그인"
            type="submit"
            isActive={props.formState.isValid}
          />
          <S.Option>
            <S.OptionItem>
              <span>이메일 찾기</span>
            </S.OptionItem>
            <S.OptionItem>
              <span>비밀번호 찾기</span>
            </S.OptionItem>
            <S.OptionItem onClick={props.moveToPage("/signUp")}>
              <span>회원가입</span>
            </S.OptionItem>
          </S.Option>
        </S.Form>
      </S.Wrapper>
    </form>
  );
}

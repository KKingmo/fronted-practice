import * as S from "./SignUp.styles";
import Input01 from "../../commons/inputs/01";
import Button01 from "../../commons/buttons/01";

export default function SignUpUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.Wrapper>
        <S.Background>
          <S.Shape></S.Shape>
          <S.Shape></S.Shape>
        </S.Background>
        <S.Form>
          <h3>가입하기</h3>
          <Input01
            type="text"
            placeholder="이메일을 입력해주세요."
            register={props.register("email")}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>

          <Input01
            type="text"
            placeholder="이름 입력해주세요."
            register={props.register("name")}
          />
          <S.Error>{props.formState.errors.name?.message}</S.Error>

          <Input01
            type="password"
            placeholder="비밀번호를 입력해주세요."
            register={props.register("password")}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>

          <Input01
            type="password"
            placeholder="비밀번호를 입력해주세요."
            register={props.register("confirmPassword")}
          />
          <S.Error>{props.formState.errors.confirmPassword?.message}</S.Error>

          <Button01
            title="회원가입"
            type="submit"
            isActive={props.formState.isValid}
          />
        </S.Form>
      </S.Wrapper>
    </form>
  );
}

import * as S from "./SignUp.styles";
import Input01 from "../../commons/inputs/01";

export default function SignUpUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.Wrapper>
        <h3>가입하기</h3>

        <Input01
          type="text"
          placeholder="이메일을 입력해주세요."
          register={props.register("email")}
        />
        <div>{props.formState.errors.email?.message}</div>

        <div>
          <input
            type="text"
            placeholder="이름 입력해주세요."
            {...props.register("name")}
          />
          <div>{props.formState.errors.name?.message}</div>
        </div>

        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...props.register("password")}
          />
          <div>{props.formState.errors.password?.message}</div>
        </div>

        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...props.register("confirmPassword")}
          />
          <div>{props.formState.errors.confirmPassword?.message}</div>
        </div>

        <button type="submit">가입하기</button>
      </S.Wrapper>
    </form>
  );
}

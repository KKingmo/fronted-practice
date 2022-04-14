import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

const Error = styled.div`
  color: red;
  font-size: 11px;
`;

const LoginButton = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

interface IFormValues {
  email?: string;
  password?: string;
}

const schema = yup.object({
  // email("에러 메세지") , required("에러 메세지")
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리까지만 입력가능 합니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function ReactHookFormPage() {
  // formstate 객체에 errors 메세지 있다.
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 전부 입력되면 formState.isValid 에 검증결과가 들어감
  // formState.isValid;

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <input type="text" {...register("email")} />
      <Error style={{ color: "red" }}>{formState.errors.email?.message}</Error>
      비밀번호: <input type="password" {...register("password")} />
      <Error style={{ color: "red" }}>
        {formState.errors.password?.message}
      </Error>
      <LoginButton isActive={formState.isValid}>로그인하기</LoginButton>
    </form>
  );
}

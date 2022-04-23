import { useRouter } from "next/router";
import { CREATE_USER } from "./SignUp.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SignUpUI from "./SignUp.presenter";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(3, "비밀번호는 최소 3자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리까지만 입력가능 합니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
  name: yup
    .string()
    .min(2, "이름은 2자리 이상 입력해 주세요.")
    .max(10, "이름이 너무 깁니다.")
    .required("이름은 필수 입력 사항입니다."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});

export default function SignUp() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (aaa) => {
    const { confirmPassword, ...data } = aaa;
    // 로그인하기
    try {
      const result = await createUser({
        variables: {
          createUserInput: { ...data },
        },
      });
      console.log(result);
      alert("회원가입에 성공하였습니다.");
      router.push("/main");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SignUpUI
      onClickSignUp={onClickSignUp}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}

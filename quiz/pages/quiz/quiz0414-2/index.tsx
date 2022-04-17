import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const schema = yup.object({
  writer: yup.string().max(5, "작성자는 5글자 이내 문자열입니다."),
  password: yup
    .string()
    .matches(
      /^[A-Za-z\d$@$!%*#?&]{0,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다."
    ),
  title: yup.string().max(100, "제목은 100자 이내 문자열입니다."),
  contents: yup.string().max(1000, "내용은 1000자 이내 문자열입니다."),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자: <input type="text" {...register("writer")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>

      <div>
        비밀번호: <input type="password" {...register("password")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>

      <div>
        제목: <input type="text" {...register("title")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>

      <div>
        내용: <input type="text" {...register("contents")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>

      <button>등록하기</button>
    </form>
  );
}

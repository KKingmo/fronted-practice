import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  const [errorMsg, setErrorMsg] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
    setErrorMsg({
      writer: !data.writer ? "작성자를 입력해주세요" : "",
      password: !data.password ? "비밀번호를 입력해주세요" : "",
      title: !data.title ? "제목을 입력해주세요" : "",
      contents: !data.contents ? "내용을 입력해주세요" : "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자: <input type="text" {...register("writer")} />
      </div>
      <div style={{ color: "red" }}>{errorMsg?.writer}</div>

      <div>
        비밀번호: <input type="password" {...register("password")} />
      </div>
      <div style={{ color: "red" }}>{errorMsg?.password}</div>

      <div>
        제목: <input type="text" {...register("title")} />
      </div>
      <div style={{ color: "red" }}>{errorMsg?.title}</div>

      <div>
        내용: <input type="text" {...register("contents")} />
      </div>
      <div style={{ color: "red" }}>{errorMsg?.contents}</div>

      <button>등록하기</button>
    </form>
  );
}

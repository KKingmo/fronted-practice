import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../src/commons/store";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function EditorWriterPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation(LOGIN_USER);
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모두 입력해 주세요!");
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/quiz/quiz06/editor/detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const getToken = async () => {
    const result = await loginUser({
      variables: {
        email: "",
        password: "",
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
  };
  return (
    // prettier-ignore
    <div>
      <button onClick={getToken} style={{ background: "#ff2900", color: "#ffffff", cursor: "pointer", margin: "10px", }}>
        !! [ 토큰 받아오기 ] 등록하기 버튼을 누르기전에 꼭 클릭해주세요 !!
      </button>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div style={{ margin: "10px" }}>작성자 <input type="text" {...register("writer")} />
        </div>
        <div style={{ margin: "10px" }}>비밀번호 <input type="password" {...register("password")} />
        </div>
        <div style={{ margin: "10px" }}>
          제목 <input type="text" {...register("title")} />
        </div>
        <div style={{ margin: "10px" }}>
          내용 <ReactQuill onChange={onChangeContents} />
        </div>
        <button style={{ background: "#ff2900", color: "#ffffff", cursor: "pointer", margin: "10px" }}>
          등록하기
        </button>
      </form>
    </div>
  );
}

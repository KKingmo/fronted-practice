import { gql, useMutation, useQuery } from "@apollo/client";
import { Wrapper, BoardList } from "./styles";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  // inputs 입력
  const onChangeInputs = (id) => (event) => {
    setInputs((prev) => ({
      ...inputs,
      [id]: event.target.value,
    }));
  };

  // 삭제하기
  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  // 등록하기
  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          ...inputs,
        },
      },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      <Wrapper>
        <div>
          <span>작성자</span>
          <input type="text" onChange={onChangeInputs("writer")} />
        </div>
        <div>
          <span>비밀번호</span>
          <input type="password" onChange={onChangeInputs("password")} />
        </div>
        <div>
          <span>제목</span>
          <input type="text" onChange={onChangeInputs("title")} />
        </div>
        <div>
          <span>내용</span>
          <input type="text" onChange={onChangeInputs("contents")} />
        </div>
        <button onClick={onClickSubmit}>게시글 등록하기</button>
      </Wrapper>
      <BoardList>
        <div>
          <span>작성자</span>
          <span>제목</span>
          <span>내용</span>
        </div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>{el.writer}</span>
            <span>{el.title}</span>
            <span>{el.contents}</span>
            <button onClick={onClickDelete(el._id)}>X</button>
          </div>
        ))}
      </BoardList>
    </>
  );
}

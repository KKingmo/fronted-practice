import { gql, useMutation, useQuery } from "@apollo/client";

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

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      // refetch와 비슷한 기능을 한다. 하지만 직접 cache에 접근해서 수정한다.
      update(cache, { data }) {
        // deleteBoard는 삭제된 게시글의 id를 리턴 받는다
        const deletedId = data.deleteBoard;
        // cahce를 직접 수정한다. 어떤 필드를 수정할 것인지 작성(fetchBoard, fetchProduct ...)
        cache.modify({
          // fetchBoards 수정할래~
          fields: {
            // prev에는 여러id가 배열에 들어 있기 때문에
            // 여기서 원하는 것만 지우고 나머지를 리턴해 주면된다.
            // 여기서 el._id가 안먹히므로 다음과 같이 readField에서 꺼내와야한다.
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

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        // cahce를 직접 수정한다. 어떤 필드를 수정할 것인지 작성(fetchBoard, fetchProduct ...)
        cache.modify({
          fields: {
            // prev에는 10개의 게시글들이 들어있다. [{writer: , title: , contents: ,...},{writer: , title: , contents: ,...},...]
            // 이를 return 값으로 조져서 수정할 것이다.
            fetchBoards: (prev) => {
              // 스프레드 연산자로 기존 값들은 유지하면서 내용을 추가한다.
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// 1. 구조분해 할당으로 함수 파라미터 받기
// function onClickAAA({ name, age, school }){
//   console.log(name)
// }

// const child = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// }
// onClickAAA(child)

// 2. 안좋은 옛날 방식
// function onClickAAA(name, age, school){
//   console.log(name)
// }

// const name: "철수"
// const age: 13
// const school: "다람쥐초등학교"
// onClickAAA(name, school)

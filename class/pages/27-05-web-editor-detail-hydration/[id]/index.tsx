import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  return (
    <div>
      <div style={{ color: "red" }}>작성자:{data?.fetchBoard.writer} </div>
      <div style={{ color: "green" }}>제목:{data?.fetchBoard.title} </div>
      {/* <div>내용: {data?.fetchBoard.contents} </div> */}
      {/* // 새로고침하면 div갯수가 안맞아서 의도한대로 나오지 않는다 그래서 삼항연산자를 사용해서 div갯수를 맞춰주는 작업을 하였다 */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        <div style={{ color: "blue" }}></div>
      )}
      <div style={{ color: "brown" }}>상품 가격: </div>
    </div>
  );
}

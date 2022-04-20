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
      <div
        style={{
          background: "#ff2900",
          color: "#ffffff",
          padding: "0px 10px",
          margin: "10px",
        }}
      >
        눈물을 흘리고 있는 작성자 : {data?.fetchBoard.writer}
      </div>
      <div
        style={{
          background: "#ff2900",
          color: "#ffffff",
          padding: "0px 10px",
          margin: "10px",
        }}
      >
        제목 : {data?.fetchBoard.title}
      </div>
      {typeof window !== "undefined" && (
        <div
          style={{ border: "1px solid #ff2900", margin: "10px" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}
    </div>
  );
}

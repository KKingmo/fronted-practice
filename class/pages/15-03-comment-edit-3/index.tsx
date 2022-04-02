import { useQuery, gql } from "@apollo/client";

import BoardCommentItem from "../../src/components/units/board/15-board-comment/index";
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
export default function CommentEditPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}

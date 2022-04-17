// import {getDate} from "../../../../commons/libraries/utils"
import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "../../../../components/units/boardComment/list/BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        // el을 자식컴포넌트로 전달.
        <BoardCommentListUIItem key={el._id} el={el} />
      )) || <div></div>}
    </InfiniteScroll>
  );
}

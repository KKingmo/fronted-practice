import ProductContactAnswerListUIItem from "./ProductContactAnswerList.presenterItem";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";

export default function ProductContactAnswerListUI(props) {
  return (
    <>
      <div style={{ height: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.map((a) => (
            <ProductContactAnswerListUIItem
              key={uuidv4()}
              el={a}
              el2={props.el}
              answerId={props.answerId}
            />
          )) || <div></div>}
        </InfiniteScroll>
      </div>
    </>
  );
}

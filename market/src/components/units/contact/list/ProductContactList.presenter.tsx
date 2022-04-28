import ProductContactListUIItem from "./ProductContactList.presenterItem";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";

export default function ProductContactListUI(props) {
  return (
    <>
      <div style={{ height: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.map((el) => (
            <ProductContactListUIItem key={uuidv4()} el={el} />
          )) || <div></div>}
        </InfiniteScroll>
      </div>
    </>
  );
}

import InfiniteScroll from "react-infinite-scroller";

export default function ProductContactListUI(props) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.map((el) => <div key={el._id} el={el} />) || <div></div>}
    </InfiniteScroll>
  );
}

import ProductListUI from "./ProductList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_USEDITEMS_OF_THE_BEST,
  FETCH_USEDITEMS,
} from "./ProductList.queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function ProductList() {
  // 상풍상세보기
  const { moveToPage } = useMoveToPage();
  // 상품목록
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS);

  // 베스트 상품
  const { data: dataUsedItemsBest } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);

  // 무한스크롤
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ProductListUI
      data={data}
      dataUsedItemsBest={dataUsedItemsBest}
      onLoadMore={onLoadMore}
      moveToPage={moveToPage}
    />
  );
}

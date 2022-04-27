import ProductListUI from "./ProductList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_USEDITEMS_OF_THE_BEST,
  FETCH_USEDITEMS,
} from "./ProductList.queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { getToday } from "../../../../commons/libraries/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();
  // 오늘본 상품
  const [todayView, setTodayView] = useState([]);
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

  // 상품클릭
  const onClickProduct = (item) => (event) => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    const temp = today.filter(
      (el) => el._id === item._id && el.date === getToday()
    );
    // 같은 글이 아니거나 같은 날짜가 아닐 경우에만 실행
    if (temp.length === 0) {
      const { __typename, ...rest } = item;
      const aaa = { ...rest, date: getToday() };
      today.push(aaa);
      localStorage.setItem("today", JSON.stringify(today));
    }
    router.push(`/shop/${event.currentTarget.id}`);
  };

  useEffect(() => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    const temp = today.filter((el) => el.date === getToday());
    setTodayView(temp);
  }, []);

  return (
    <ProductListUI
      data={data}
      dataUsedItemsBest={dataUsedItemsBest}
      onLoadMore={onLoadMore}
      moveToPage={moveToPage}
      onClickProduct={onClickProduct}
      todayView={todayView}
    />
  );
}

import ProductDetailUI from "./ProductDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  TOGGLE_USEDITEM_PICK,
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUsedItemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  console.log(data);

  // 상품 삭제하기
  const onClickDelete = (data) => async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: data,
        },
      });
      alert("상품 판매글이 삭제되었습니다.");
      const basket = JSON.parse(localStorage.getItem("basket") || "[]");
      const newBasket = basket.filter((el) => el._id !== data);
      localStorage.setItem("basket", JSON.stringify(newBasket));
      router.push("/shop");
    } catch (error) {
      alert(error.message);
    }
  };

  // 찜하기
  const onClickPick = async () => {
    try {
      await toggleUsedItemPick({
        variables: { useditemId: String(router.query.productId) },
      });
      refetch();
      alert("이 상품을 찜 했어요!");
    } catch (error) {
      alert(error.message);
    }
  };

  // 구매하기
  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.productId) },
      });
      alert("상품 구매 완료.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProductDetailUI
      data={data?.fetchUseditem}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      onClickBuy={onClickBuy}
      userData={userData}
    />
  );
}

import ProductDetailUI from "./ProductDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

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

  return (
    <ProductDetailUI data={data?.fetchUseditem} onClickDelete={onClickDelete} />
  );
}

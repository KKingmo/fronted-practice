import ProductDetailUI from "./ProductDetail.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  return <ProductDetailUI data={data?.fetchUseditem} />;
}

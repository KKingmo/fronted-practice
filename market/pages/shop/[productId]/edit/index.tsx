import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.container";
import { FETCH_USED_ITEM } from "../../../../src/components/units/product/detail/ProductDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function ShopEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  return <ProductWrite isEdit={true} data={data?.fetchUseditem} />;
}

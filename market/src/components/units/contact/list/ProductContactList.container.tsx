import ProductContactListUI from "./ProductContactList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTIONS } from "./ProductContactList.queries";
import { useRouter } from "next/router";

export default function ProductContactList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  return <ProductContactListUI data={data?.fetchUseditemQuestions} />;
}

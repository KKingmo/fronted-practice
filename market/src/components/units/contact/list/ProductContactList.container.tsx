import ProductContactListUI from "./ProductContactList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./ProductContactList.queries";
import { useRouter } from "next/router";

export default function ProductContactList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  // const [deleteUsedItemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  // const onClickDelete = (id) => async () => {
  //   await deleteUsedItemQuestion({
  //     variables: {
  //       useditemQuestionId: String(id),
  //     },
  //     refetchQueries: [
  //       {
  //         query: FETCH_USED_ITEM_QUESTIONS,
  //         variables: {
  //           useditemId: String(router.query.productId),
  //         },
  //       },
  //     ],
  //   });
  // };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditemQuestions.length / 10) },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <ProductContactListUI
      data={data.fetchUseditemQuestions}
      onLoadMore={onLoadMore}
    />
  );
}

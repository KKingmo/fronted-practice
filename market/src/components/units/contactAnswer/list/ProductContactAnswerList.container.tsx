import ProductContactAnswerListUI from "./ProductContactAnswerList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./ProductContactAnswerList.queries";

export default function ProductContactAnswerList(props) {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
    },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestionAnswers],
          };
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return (
    <ProductContactAnswerListUI
      data={data?.fetchUseditemQuestionAnswers}
      onLoadMore={onLoadMore}
      answerId={props.el._id}
      el={props.el}
    />
  );
}

import * as S from "./Pagination.styles";

export default function PaginationUI(props) {
  return (
    <S.PaginationWrapper>
      <S.Prev
        onClick={props.onClickPrevPage}
        isActivePrev={props.isActivePrev}
      >{`<`}</S.Prev>
      {new Array(Number(10)).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.PageNumber
              key={index}
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
              current={index + props.startPage === props.current}
            >
              {index + props.startPage}
            </S.PageNumber>
          )
      )}
      <S.Next
        onClick={props.onClickNextPage}
        isActiveNext={props.isActiveNext}
      >{`>`}</S.Next>
    </S.PaginationWrapper>
  );
}

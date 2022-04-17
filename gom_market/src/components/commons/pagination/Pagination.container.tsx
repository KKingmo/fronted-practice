import PaginationUI from "./Pagination.presenter";
import { useState } from "react";

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  const [isActivePrev, setIsActivePrev] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(true);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    props.setCurrent((prev) => Number(event.target.id));
    console.log(event.target.id);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsActivePrev((prev) => false);
    } else {
      setIsActivePrev((prev) => true);
    }

    if (startPage + 10 > props.lastPage) {
      setIsActiveNext((prev) => false);
    } else {
      setIsActiveNext((prev) => true);
    }
    if (startPage === 1) return;
    setIsActiveNext(true);
    setStartPage((prev) => prev - 10);
    props.refetch({ page: Number(startPage - 10) });
    props.setCurrent((prev) => Number(startPage - 10));
  };

  const onClickNextPage = () => {
    if (startPage === 1) {
      setIsActivePrev((prev) => true);
    }
    if (startPage + 10 > props.lastPage) {
      setIsActiveNext((prev) => false);
    } else {
      setIsActiveNext((prev) => true);
    }
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: Number(startPage + 10) });
    props.setCurrent((prev) => Number(startPage + 10));
  };

  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      isActivePrev={isActivePrev}
      isActiveNext={isActiveNext}
      current={props.current}
      startPage={startPage}
      lastPage={props.lastPage}
    />
  );
}

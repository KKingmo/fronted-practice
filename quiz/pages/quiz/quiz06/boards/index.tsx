import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BoardsPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [basketItems, setBasketItems] = useState([]);

  // 장바구니에 담기
  const onClickBasket = (data) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const temp1 = basket.filter((el) => el._id === data._id);
    if (temp1.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    const { __typename, ...newEl } = data;
    basket.push(newEl);
    localStorage.setItem("basket", JSON.stringify(basket));
    setBasketItems(basket.map((e) => e._id));
  };

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(basket.map((e) => e._id));
  }, []);

  // 담기 취소
  const onClickDropBasket = (data) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    // localStorage.setItem("basket", JSON.stringify(basket));
    const newBasket = [...basket].filter((e) => e._id !== data);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setBasketItems(newBasket.map((e) => e._id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          {basketItems.includes(el._id) ? (
            <button onClick={onClickDropBasket(el._id)}>담기 취소</button>
          ) : (
            <button onClick={onClickBasket(el)}>게시물 담기</button>
          )}
        </MyRow>
      ))}
    </div>
  );
}

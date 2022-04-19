import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(basket);
  }, []);

  return (
    <div>
      {basketItems.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}

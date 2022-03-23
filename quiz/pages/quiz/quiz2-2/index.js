import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_PRODUCTS = gql`
    query fetchProducts {
        fetchProducts {
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`;

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
        deleteProduct(productId: $productId) {
            message
        }
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    button {
        margin-left: 20px;
    }
`;

const Column = styled.div`
    width: max-content;
    min-width: 150px;
`;

export default function MapBoardPage() {
    const [deleteProduct] = useMutation(DELETE_PRODUCT);
    const { data } = useQuery(FETCH_PRODUCTS);
    const [checkedValue, setcheckedValue] = useState();

    // 체크박스 체크 시 value에 product.id 부여
    const onChangeCheckbox = (event) => {
        event.target.checked ? setcheckedValue(event.target.value) : setcheckedValue();
    };

    // 삭제 버튼 클릭시 checkbox의 value와 button의 id가 같다면 상품삭제
    const onClickDelete = (event) => {
        if (checkedValue === event.target.id) {
            deleteProduct({
                variables: { productId: event.target.id },
                refetchQueries: [{ query: FETCH_PRODUCTS }],
            });
        }
    };

    console.log;
    return (
        <div>
            {data?.fetchProducts.map((el) => (
                // <Fragment key={el.number}>
                <Row key={el._id}>
                    <Column>
                        <input type="checkbox" onChange={onChangeCheckbox} value={el._id} />
                    </Column>
                    <Column>{el.seller}</Column>
                    <Column>{el.name}</Column>
                    <Column>{el.detail}</Column>
                    <Column>{el.price}</Column>
                    <Column>{el.createdAt}</Column>
                    <button id={el._id} onClick={onClickDelete}>
                        삭제
                    </button>
                </Row>
            ))}
        </div>
    );
}

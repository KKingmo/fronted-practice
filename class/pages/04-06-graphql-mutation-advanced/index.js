import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationProduct() {
    const [data, setData] = useState("");
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const [productSeller, setProductSeller] = useState("");
    const [productName, setProductName] = useState("");
    const [productDetail, setProductDetail] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: productSeller,
                createProductInput: {
                    name: productName,
                    detail: productDetail,
                    price: productPrice,
                },
            },
        });
        setData(result.data.createProduct.variables);
    };

    const onChangeProductSeller = (event) => {
        setProductSeller(event.target.value);
    };
    const onChangeProductName = (event) => {
        setProductName(event.target.value);
    };
    const onChangeProductDetail = (event) => {
        setProductDetail(event.target.value);
    };
    const onCahngeProductPrice = (event) => {
        setProductPrice(parseInt(event.target.value));
    };

    return (
        <>
            판매자: <input type="text" onChange={onChangeProductSeller} />
            <br />
            상품명: <input type="text" onChange={onChangeProductName} />
            <br />
            상품내용: <input type="text" onChange={onChangeProductDetail} />
            <br />
            상품가격: <input type="text" onChange={onCahngeProductPrice} />
            <br />
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    );
}

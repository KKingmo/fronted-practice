// 상품 상세 페이지

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId) {
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`;

export default function ProductDetailPage() {
    const router = useRouter();

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.productId },
    });

    const onClickMove = () => {
        router.push(`/quiz/quiz2-3/${router.query.productId}/edit`);
    };

    return (
        <div>
            <div>상품 판매자 : {data?.fetchProduct.seller}</div>
            <div>상품 이름 : {data?.fetchProduct.name}</div>
            <div>상품설명 : {data?.fetchProduct.detail}</div>
            <div>상품가격 : {data?.fetchProduct.price}</div>
            <div>상품등록 날짜 : {data?.fetchProduct.createdAt}</div>
            <button onClick={onClickMove}>수정하기</button>
        </div>
    );
}

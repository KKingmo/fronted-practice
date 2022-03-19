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

const QuizDay5RoutedProductPage = () => {
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.productId },
    });

    console.log(data);

    return (
        <div>
            {/* 조건부 렌더링 : data && data.fetchBoard.number
            데이터가 없으면 && 앞을 출력하고, 있으면 && 뒤를 출력
            Optional-Chaining: 조건부 렌더링의 문법을 data?.fetchBoard.number 와 같이 간추린 것
            */}
            <div>상품 판매자 : {data ? data.fetchProduct.seller : "loading..."}</div>
            <div>상품이름 : {data?.fetchProduct.name}</div>
            <div>상품설명 : {data?.fetchProduct.detail}</div>
            <div>상품가격 : {data?.fetchProduct.price}</div>
            <div>상품등록 날짜 : {data?.fetchProduct.createdAt}</div>
        </div>
    );
};

export default QuizDay5RoutedProductPage;

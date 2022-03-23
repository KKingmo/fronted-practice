// --------------------start--------------------
// 4일차 Quiz : GRAPHQL-API 요청하기 - createBoard
// import { useMutation, gql } from "@apollo/client";
// import { useState } from "react";

// const CREATE_BOARD = gql`
//     mutation createBoard($writer: String, $title: String, $contents: String) {
//         createBoard(writer: $writer, title: $title, contents: $contents) {
//             _id
//             number
//             message
//         }
//     }
// `;

// const QuizDay4BPage = () => {
//     const [createBoard] = useMutation(CREATE_BOARD);

//     const [myWriter, setMyWriter] = useState("");
//     const [myTitle, setMyTitle] = useState("");
//     const [myContents, setMyContents] = useState("");

//     const callRestApi = async () => {
//         const result = await createBoard({
//             variables: {
//                 writer: myWriter,
//                 title: myTitle,
//                 contents: myContents,
//             },
//         });
//         console.log(result);
//     };

//     const onChangeMyWriter = (event) => {
//         setMyWriter(event.target.value);
//     };
//     const onChangeMyTitle = (event) => {
//         setMyTitle(event.target.value);
//     };
//     const onCahngeMyContentse = (event) => {
//         setMyContents(event.target.value);
//     };

//     const onClickSubmit = async () => {
//         if (myWriter === "") {
//             alert("작성자를 입력해주세요.");
//         }
//         if (myTitle === "") {
//             alert("제목을 입력해주세요.");
//         }
//         if (myContents === "") {
//             alert("내용을 입력해주세요.");
//         }
//         if (myWriter !== "" && myTitle !== "" && myContents !== "") {
//             callRestApi();
//             alert("게시물 등록에 성공하였습니다!");
//         }
//     };

//     return (
//         <div>
//             작성자: <input type="text" onChange={onChangeMyWriter} />
//             제목: <input type="text" onChange={onChangeMyTitle} />
//             내용: <input type="text" onChange={onCahngeMyContentse} />
//             <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
//         </div>
//     );
// };

// export default QuizDay4BPage;

// 4일차 Quiz : GRAPHQL-API 요청하기 - createBoard
// --------------------end--------------------

// --------------------start--------------------
// 4일차 Quiz : GRAPHQL-API 요청하기 - createProduct
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
        console.log(result);
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
    const onChangeProductPrice = (event) => {
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
            상품가격: <input type="text" onChange={onChangeProductPrice} />
            <br />
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    );
}
// 4일차 Quiz : GRAPHQL-API 요청하기 - createProduct
// --------------------end--------------------

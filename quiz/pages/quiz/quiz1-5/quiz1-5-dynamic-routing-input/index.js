import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

const QuizDay5 = () => {
    const router = useRouter();

    const [createProduct] = useMutation(CREATE_PRODUCT);

    const [productSeller, setProductSeller] = useState("");
    const [productName, setProductName] = useState("");
    const [productDetail, setProductDetail] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const callRestApi = async () => {
        try {
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
            console.log(result.data.createProduct._id);
            router.push(`/quiz/quiz1-5/${result.data.createProduct._id}`);
        } catch (error) {
            console.log(error.message);
        }
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
        <div>
            <div>
                판매자 <input type="text" onChange={onChangeProductSeller} />
            </div>
            <div>
                상품명 <input type="text" onChange={onChangeProductName} />
            </div>
            <div>
                상품내용 <input type="text" onChange={onChangeProductDetail} />
            </div>
            <div>
                상품가격 <input type="text" onChange={onChangeProductPrice} />
            </div>
            <div>
                <button onClick={callRestApi}>상품등록</button>
            </div>
        </div>
    );
};

export default QuizDay5;

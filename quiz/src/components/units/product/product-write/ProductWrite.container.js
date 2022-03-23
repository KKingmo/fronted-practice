// Product Write Container component

import { useState } from "react";
import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries";
import { useRouter } from "next/router";

export default function ProductWrite(props) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    const [mySeller, setMySeller] = useState("");
    const [myName, setMyName] = useState("");
    const [myDetail, setMyDetail] = useState("");
    const [myPrice, setMyPrice] = useState("");

    const [createProduct] = useMutation(CREATE_PRODUCT);
    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    const onClickUpdate = async () => {
        await updateProduct({
            variables: {
                productId: router.query.productId,
                updateProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: Number(myPrice),
                },
            },
        });
        alert("상품 수정에 성공하였습니다!!!");
        router.push(`/quiz/quiz2-3/${router.query.productId}`);
    };

    const callGraphqlApi = async () => {
        const result = await createProduct({
            variables: {
                seller: mySeller,
                createProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: Number(myPrice),
                },
            },
        });
        alert("상품 등록에 성공하였습니다!!!");
        router.push(`/quiz/quiz2-3/${result.data.createProduct._id}`);
    };

    const onChangeSeller = (event) => {
        setMySeller(event.target.value);

        if (event.target.value !== "" && myName !== "" && myDetail !== "" && myPrice !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeNme = (event) => {
        setMyName(event.target.value);

        if (mySeller !== "" && event.target.value !== "" && myDetail !== "" && myPrice !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeDetail = (event) => {
        setMyDetail(event.target.value);

        if (mySeller !== "" && myName !== "" && event.target.value !== "" && myPrice !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangePrice = (event) => {
        setMyPrice(event.target.value);

        if (mySeller !== "" && myName !== "" && myDetail !== "" && event.target.value !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    return (
        <ProductWriteUI
            onClickUpdate={onClickUpdate}
            callGraphqlApi={callGraphqlApi}
            onChangeSeller={onChangeSeller}
            onChangeNme={onChangeNme}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            isActive={isActive}
            isEdit={props.isEdit}
        />
    );
}

// Product Write presenter

import { SubmitButton, SellerInput } from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
    return (
        <div>
            <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
            판매자: <SellerInput type="text" onChange={props.onChangeSeller} />
            <br />
            이름: <input type="text" onChange={props.onChangeNme} />
            <br />
            내용: <input type="text" onChange={props.onChangeDetail} />
            <br />
            가격: <input type="text" onChange={props.onChangePrice} />
            <br />
            <SubmitButton
                onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi}
                isActive={props.isActive}
            >
                {props.isEdit ? "수정" : "등록"}하기
            </SubmitButton>
        </div>
    );
}

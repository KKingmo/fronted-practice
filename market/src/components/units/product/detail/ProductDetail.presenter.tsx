import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductDetail.styles";
import Slider01 from "../../../commons/sliders/01";

export default function ProductDetailUI(props) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.SellerWrapper>
        <S.UserWrapper>
          <div>{props.data?.seller?.picture ? "⭕️" : "👦"}</div>
          <div>
            <div>{props.data?.seller?.name}</div>
            <div>{getDate(props.data?.createdAt)}</div>
          </div>
        </S.UserWrapper>

        <div>
          <span>🤜</span>
          <span>✊</span>
        </div>
      </S.SellerWrapper>
      <S.DetailHeadWrapper>
        <div>
          <div>{props.data?.remarks}</div>
          <div>{props.data?.name}</div>
        </div>
        <S.PickedInfo>
          <div>💛</div>
          <div>{props.data?.pickedCount}</div>
        </S.PickedInfo>
      </S.DetailHeadWrapper>

      <h2>
        {props.data?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
      </h2>

      <S.SliderWrapper>
        <Slider01 images={props.data?.images} />
      </S.SliderWrapper>

      <S.TagsWrapper>
        {props.data?.tags?.map((e, i) => (
          <span key={`t${i}a${e}g`}>#{e} </span>
        ))}
      </S.TagsWrapper>
    </S.Wrapper>
  );
}

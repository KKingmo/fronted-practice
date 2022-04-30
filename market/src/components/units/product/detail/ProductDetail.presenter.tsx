import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductDetail.styles";
import Slider01 from "../../../commons/sliders/01";
import DOMPurify from "dompurify";
import KakaoMap02 from "../../../commons/kakaoMaps/02";
import { v4 as uuidv4 } from "uuid";
import Button02 from "../../../commons/buttons/02";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useRouter } from "next/router";

export default function ProductDetailUI(props) {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();

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
      {typeof window !== "undefined" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.data?.contents),
          }}
        ></div>
      ) : (
        <div></div>
      )}

      <S.TagsWrapper>
        {props.data?.tags?.map((e, i) => (
          <span key={uuidv4()}>{e} </span>
        ))}
      </S.TagsWrapper>

      <S.MapWrapper>
        <KakaoMap02
          tradeLat={props.data?.useditemAddress?.lat}
          tradeLng={props.data?.useditemAddress?.lng}
        />
      </S.MapWrapper>
      {props.userData?.fetchUserLoggedIn?._id === props.data?.seller._id && (
        <S.ButtonWrapper>
          <Button02 title="취소하기" onClick={moveToPage(`/shop`)} />
          <Button02
            title="수정하기"
            lightColor={true}
            onClick={moveToPage(`/shop/${router.query.productId}/edit`)}
          />
          <Button02
            title="삭제하기"
            onClick={props.onClickDelete(props.data?._id)}
          />
          <Button02
            title="찜하기"
            lightColor={true}
            onClick={props.onClickPick}
          />
        </S.ButtonWrapper>
      )}

      {props.userData?.fetchUserLoggedIn?._id !== props.data?.seller._id && (
        <S.ButtonWrapper>
          <Button02 title="목록으로" onClick={moveToPage(`/shop`)} />
          <Button02
            title="구매하기"
            lightColor={true}
            onClick={props.onClickBuy}
          />
          <Button02
            title="찜하기"
            lightColor={true}
            onClick={props.onClickPick}
          />
        </S.ButtonWrapper>
      )}
    </S.Wrapper>
  );
}

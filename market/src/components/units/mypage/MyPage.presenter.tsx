import { v4 as uuidv4 } from "uuid";
import { getPrice } from "../../../commons/libraries/utils";
import { useAuth } from "../../commons/hooks/useAuth";
import * as S from "./MyPage.styles";
import Payment from "../payment";

export default function MyPageUI(props) {
  useAuth();
  return (
    <S.Wrapper>
      <h3>포인트</h3>
      <Payment />
      <h3>내가 찜한 상품</h3>
      <S.PickedWrapper>
        {props.data?.map((el) => (
          <S.PickedItem
            key={uuidv4()}
            id={el._id}
            onClick={props.onClickPickedItem}
          >
            <S.ImgWrapper>
              {el.images[0] ? (
                <img src={`https://storage.googleapis.com/${el.images[0]}`} />
              ) : (
                <img src="/img/no-image.png" alt="이미지미등록" />
              )}
            </S.ImgWrapper>
            <div>
              <div>판매자 : {el.name}</div>
              <div>가격 : {getPrice(el.price)}</div>
              <div>한줄요약 : {el.remarks}</div>
            </div>
          </S.PickedItem>
        ))}
      </S.PickedWrapper>
    </S.Wrapper>
  );
}

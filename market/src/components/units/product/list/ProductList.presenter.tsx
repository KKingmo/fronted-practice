import InfiniteScroll from "react-infinite-scroller";
import Button02 from "../../../commons/buttons/02";
import * as S from "./ProductList.styles";
import { v4 as uuidv4 } from "uuid";
import { getPrice } from "../../../../commons/libraries/utils";

export default function ProductListUI(props) {
  return (
    <S.Wrapper>
      <h1>베스트 상품</h1>
      <S.BestWrapper>
        {props.dataUsedItemsBest?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestProduct
            key={`b${el._id}`}
            id={el._id}
            onClick={props.onClickProduct(el)}
          >
            <S.BestImgWrapper>
              {el.images[0] ? (
                <img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  alt="상품이미지"
                />
              ) : (
                <img src="/img/no-image.png" alt="이미지미등록" />
              )}
            </S.BestImgWrapper>
            <h3>{el.name}</h3>
            <S.BestContents>
              <S.BestText>
                <span>{el.remarks}</span>
                <span>{el.price}원</span>
              </S.BestText>

              <S.BestPickedInfo>
                <span>💛</span>
                <span>{el.pickedCount}</span>
              </S.BestPickedInfo>
            </S.BestContents>
          </S.BestProduct>
        ))}
      </S.BestWrapper>

      <S.OptionsWrapper>
        <S.SoldOutOption>
          <div>판매중상품</div>
          <div>판매된상품</div>
        </S.SoldOutOption>

        <S.SearchOption>
          <input type="text" placeholder="제품을 검색해주세요." />
          <div>2020.12.02</div>
          <div>2020.12.02</div>
          <button>검색</button>
        </S.SearchOption>
      </S.OptionsWrapper>

      {/* 컴포넌트 스크롤 : 무한스크롤 Wrapper에 height주고 overflow:auto로 스크롤생성 그리고 useWindow=false */}
      <S.BodyWrapper>
        <S.ListWrapper>
          <S.InfiniteScrollWrapper>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true}
              useWindow={false}
            >
              {props.data?.fetchUseditems.map((el) => (
                <S.ProductsWrapper
                  key={el._id}
                  id={el._id}
                  onClick={props.onClickProduct(el)}
                >
                  <S.ImgWrapper>
                    {el.images[0] ? (
                      <img
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                        alt="상품이미지"
                      />
                    ) : (
                      <img src="/img/no-image.png" alt="이미지미등록" />
                    )}
                  </S.ImgWrapper>

                  <S.ProductWrapper>
                    <div>{el.name}</div>
                    <div>{el.remarks}</div>
                    <div>
                      {el.tags?.map((e, i) => (
                        <span key={`t${i}a${el._id}g${e}`}>#{e} </span>
                      ))}
                    </div>
                    <S.SellerWrapper>
                      <div>{el.seller.picture ? "⭕️" : "👦"}</div>
                      <div>{el.seller.name}</div>
                      <div>💛</div>
                      <div>{el.pickedCount}</div>
                    </S.SellerWrapper>
                  </S.ProductWrapper>
                  <S.PriceWrapper>
                    <span>￦</span>
                    {getPrice(el.price)}
                  </S.PriceWrapper>
                </S.ProductsWrapper>
              )) || <div></div>}
            </InfiniteScroll>
          </S.InfiniteScrollWrapper>
          <S.ButtonWrapper>
            <Button02
              title="상품 등록하기"
              onClick={props.moveToPage("/shop/new")}
              lightColor={false}
            />
          </S.ButtonWrapper>
        </S.ListWrapper>

        <S.TodayViewWrapper>
          <h3>오늘 본 상품</h3>
          {props.todayView.map((el) => (
            <S.TodayProductWrapper
              key={uuidv4()}
              id={el._id}
              onClick={props.onClickProduct(el)}
            >
              {el.images[0] ? (
                <S.TodayImgWrapper>
                  <img src={`https://storage.googleapis.com/${el.images[0]}`} />
                </S.TodayImgWrapper>
              ) : (
                <S.TodayImgWrapper>
                  <img src="/img/no-image.png" alt="이미지미등록" />
                </S.TodayImgWrapper>
              )}
              <span>{el.name}</span>
            </S.TodayProductWrapper>
          ))}
        </S.TodayViewWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}

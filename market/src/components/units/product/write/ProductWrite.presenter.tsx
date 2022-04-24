import Input01 from "../../../commons/inputs/01";
import Button01 from "../../../commons/buttons/01";
import Uploads01 from "../../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <h1>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</h1>
      <div>
        <h3>상품명</h3>
        <Input01
          type="text"
          placeholder="상품명을 작성해주세요."
          register={props.register("name")}
        />
        <div>{props.formState.errors.name?.message}</div>
      </div>

      <div>
        <h3>한줄요약</h3>
        <Input01
          type="text"
          placeholder="한줄요약을 작성해주세요."
          register={props.register("remarks")}
        />
        <div>{props.formState.errors.remarks?.message}</div>
      </div>

      <div>
        <h3>상품설명</h3>
        <Input01
          type="text"
          placeholder="상품을 설명해주세요."
          register={props.register("contents")}
        />
        <div>{props.formState.errors.contents?.message}</div>
      </div>

      <div>
        <h3>판매가격</h3>
        <Input01
          type="number"
          placeholder="판매가격을 입력해주세요."
          register={props.register("price")}
        />
        <div>{props.formState.errors.price?.message}</div>
      </div>

      <div>
        <h3>태그입력</h3>
        <Input01
          type="text"
          placeholder="#태그 #태그 #태그"
          register={props.register("tags")}
        />
        <div>{props.formState.errors.tags?.message}</div>
      </div>

      <div>
        <h3>사진 첨부</h3>
        <S.ImagesWrapper>
          {props.imageUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImagesWrapper>
      </div>

      <Button01
        title="등록하기"
        type="submit"
        isActive={props.formState.isValid}
      />
    </form>
  );
}

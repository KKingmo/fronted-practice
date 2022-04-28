import Input01 from "../../../commons/inputs/01";
import Button01 from "../../../commons/buttons/01";
import Uploads01 from "../../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ProductWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import KakaoMap01 from "../../../commons/kakaoMaps/01";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props) {
  return (
    <S.Form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickSubmit
      )}
    >
      <h1>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</h1>
      <h3>상품명</h3>
      <Input01
        type="text"
        placeholder="상품명을 작성해주세요."
        register={props.register("name")}
        defaultValue={props.data?.name}
      />
      <div>{props.formState.errors.name?.message}</div>

      <h3>한줄요약</h3>
      <Input01
        type="text"
        placeholder="한줄요약을 작성해주세요."
        register={props.register("remarks")}
        defaultValue={props.data?.remarks}
      />
      <div>{props.formState.errors.remarks?.message}</div>

      <h3>상품설명</h3>
      <S.ReactQuillWrapper>
        <ReactQuill
          placeholder="상품을 소개해주세요"
          onChange={props.onChangeContents}
          theme="snow"
          value={props.getValues("contents") || ""}
        />
      </S.ReactQuillWrapper>
      <div>{props.formState.errors.contents?.message}</div>

      <h3>판매가격</h3>
      <Input01
        type="number"
        placeholder="판매가격을 입력해주세요."
        register={props.register("price")}
        defaultValue={props.data?.price}
      />
      <div>{props.formState.errors.price?.message}</div>

      <h3>태그입력</h3>
      <div style={{ display: "flex" }}>
        {props.hashArr.map((el, idx) => (
          <S.HashTag key={uuidv4()} onClick={props.onClickDeleteTag(el)}>
            {el}
          </S.HashTag>
        ))}
      </div>
      <Input01
        type="text"
        placeholder="태그를 입력하고 스페이스바를 눌러주세요, 태그를 클릭하면
        삭제됩니다."
        register={props.register("tags")}
        onKeyUp={props.onKeyUpHash}
      />

      <div>{props.formState.errors.tags?.message}</div>

      <KakaoMap01
        register={props.register}
        setValue={props.setValue}
        defaultValue={props.data?.useditemAddress}
        isEdit={props.isEdit}
      />

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

      <Button01
        title={props.isEdit ? "수정하기" : "등록하기"}
        type="submit"
        isActive={props.formState.isValid}
      />
    </S.Form>
  );
}

import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 우편번호검색 Toggle
  const onToggleModal = (data) => {
    setIsOpen((prev) => !prev);
    props.setInputsBoardAddress((prev) => ({
      ...props.inputsBoardAddress,
      address: data.address,
      zipcode: data.zonecode,
    }));
  };
  console.log(props.imageUrl);
  return (
    <>
      <S.Wrapper>
        {/* Address 모달창 */}
        {isOpen && (
          <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
            <DaumPostcode onComplete={onToggleModal} />
          </Modal>
        )}
        <S.Container>
          {/* isEdit = true(게시물 수정), false(게시물 등록) */}
          <S.Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Title>
          <S.ParentDiv>
            <S.ChildDiv1>
              <S.Span>
                작성자 <S.Yellow>*</S.Yellow>
              </S.Span>
              <S.Input
                id="writer"
                name="writerError"
                type="text"
                placeholder="이름을 적어주세요."
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchBoard.writer}
                readOnly={props.isEdit}
              />
              <S.Error>{props.errorInputs.writerError}</S.Error>
            </S.ChildDiv1>
            <S.ChildDiv1>
              <S.Span>비밀번호</S.Span>
              <S.Input
                id="password"
                name="passwordError"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangeInputs}
              />
              <S.Error>{props.errorInputs.passwordError}</S.Error>
            </S.ChildDiv1>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.ChildDiv2>
              <S.Span>제목</S.Span>
              <S.Input
                id="title"
                name="titleError"
                type="text"
                placeholder="제목을 작성해주세요."
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchBoard.title}
              />
              <S.Error>{props.errorInputs.titleError}</S.Error>
            </S.ChildDiv2>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.ChildDiv3>
              <S.Span>내용</S.Span>
              <textarea
                id="contents"
                name="contentsError"
                placeholder="내용을 작성해주세요."
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchBoard.contents}
              />
              <S.Error>{props.errorInputs.contentsError}</S.Error>
            </S.ChildDiv3>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.ChildDiv4>
              <S.Span>주소</S.Span>
              <div>
                <input
                  id="zipcode"
                  type="text"
                  placeholder="우편번호"
                  defaultValue={props.data?.fetchBoard.boardAddress?.zipcode}
                  defaultValue={
                    props.inputsBoardAddress.zipcode
                      ? props.inputsBoardAddress.zipcode
                      : props.data?.fetchBoard.boardAddress?.zipcode
                  }
                  readOnly={true}
                />
                <S.Search onClick={onToggleModal}>우편번호 검색</S.Search>
              </div>
              <S.Input
                id="address"
                type="text"
                defaultValue={props.data?.fetchBoard.boardAddress?.address}
                defaultValue={
                  props.inputsBoardAddress.address
                    ? props.inputsBoardAddress.address
                    : props.data?.fetchBoard.boardAddress?.address
                }
                readOnly={true}
              />
              <S.Input
                id="addressDetail"
                type="text"
                onChange={props.onChangeInputsBoardAddress}
                defaultValue={
                  props.data?.fetchBoard.boardAddress?.addressDetail
                }
              />
            </S.ChildDiv4>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.ChildDiv2>
              <S.Span>유튜브</S.Span>
              <S.Input
                id="youtubeUrl"
                type="text"
                placeholder="링크를 복사해주세요."
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchBoard.youtubeUrl}
              />
            </S.ChildDiv2>
          </S.ParentDiv>

          <S.ParentDiv>
            <S.AttachPhoto>
              <S.Span>사진첨부</S.Span>
            </S.AttachPhoto>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.AttachPhoto>
              <S.ChildDiv5 onClick={props.onClickImage}>
                <S.Span>+</S.Span>
                <S.Span>Upload</S.Span>
              </S.ChildDiv5>
              <input
                style={{ display: "none" }}
                type="file"
                onChange={props.onChangeFile}
                ref={props.fileRef}
              />
              <img style={{ height: "300px" }} src={`${props.imageUrl}`} />
            </S.AttachPhoto>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.ChildDiv2>
              <S.DivRadio>
                <S.Span>메인 설정</S.Span>
              </S.DivRadio>
              <S.DivRadio>
                <input type="radio" name="main__setting" id="radio__youtube" />
                유튜브
                <input type="radio" name="main__setting" id="radio__photo" />
                사진
              </S.DivRadio>
            </S.ChildDiv2>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.Register
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
              isActive={props.isEdit ? true : props.isActive}
            >
              <S.Span>{props.isEdit ? "수정하기" : "등록하기"}</S.Span>
            </S.Register>
          </S.ParentDiv>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

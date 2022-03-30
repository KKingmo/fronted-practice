import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 우편번호검색 Toggle
  const onToggleModal = (data) => {
    console.log(data);
    setIsOpen((prev) => !prev);
    props.setAddress((prev) => data.address);
    props.setZipcode((prev) => data.zonecode);
  };

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
                type="text"
                placeholder="이름을 적어주세요."
                onChange={props.onChangeWriter}
                defaultValue={props.data?.fetchBoard.writer}
                readOnly={props.isEdit}
              />
              <S.Error>{props.writerError}</S.Error>
            </S.ChildDiv1>
            <S.ChildDiv1>
              <S.Span>비밀번호</S.Span>
              <S.Input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangePassword}
              />
              <S.Error>{props.passwordError}</S.Error>
            </S.ChildDiv1>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.ChildDiv2>
              <S.Span>제목</S.Span>
              <S.Input
                type="text"
                placeholder="제목을 작성해주세요."
                onChange={props.onChangeTitle}
                defaultValue={props.data?.fetchBoard.title}
              />
              <S.Error>{props.titleError}</S.Error>
            </S.ChildDiv2>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.ChildDiv3>
              <S.Span>내용</S.Span>
              <textarea
                placeholder="내용을 작성해주세요."
                onChange={props.onChangeContents}
                defaultValue={props.data?.fetchBoard.contents}
              />
              <S.Error>{props.contentsError}</S.Error>
            </S.ChildDiv3>
          </S.ParentDiv>
          <S.ParentDiv>
            <S.ChildDiv4>
              <S.Span>주소</S.Span>
              <div>
                <input
                  type="text"
                  placeholder="우편번호"
                  defaultValue={
                    props.zipcode
                      ? props.zipcode
                      : props.data?.fetchBoard.boardAddress?.zipcode
                  }
                  readOnly={true}
                />
                <S.Search onClick={onToggleModal}>우편번호 검색</S.Search>
              </div>
              <S.Input
                type="text"
                defaultValue={
                  props.address
                    ? props.address
                    : props.data?.fetchBoard.boardAddress?.address
                }
                readOnly={true}
              />
              <S.Input
                type="text"
                onChange={props.onChangeAddressDetail}
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
                type="text"
                placeholder="링크를 복사해주세요."
                onChange={props.onChangeYoutubeUrl}
                defaultValue={
                  props.isEdit
                    ? props.data?.fetchBoard.youtubeUrl
                    : props.youtubeUrl
                }
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
              <S.ChildDiv5>
                <S.Span>+</S.Span>
                <S.Span>Upload</S.Span>
              </S.ChildDiv5>
              <S.ChildDiv5>
                <S.Span>+</S.Span>
                <S.Span>Upload</S.Span>
              </S.ChildDiv5>
              <S.ChildDiv5>
                <S.Span>+</S.Span>
                <S.Span>Upload</S.Span>
              </S.ChildDiv5>
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

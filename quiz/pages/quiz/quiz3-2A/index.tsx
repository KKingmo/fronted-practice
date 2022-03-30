import { useState } from "react";
import styled from "@emotion/styled";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const Div = styled.div`
  width: 1000px;
  margin: 0 auto;
  border: 1px solid #bdbdbd;
  padding: 20px;

  a {
    color: #ff2900;
  }
`;

export default function Quiz32APage() {
  // 2-1. 주소검색 라이브러리
  const [isOpen, setIsOpen] = useState(true);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Div>
        <div>2-1. 주소검색 라이브러리</div>
        <div>
          {isOpen && (
            <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
              <DaumPostcode onComplete={onToggleModal} />
            </Modal>
          )}
        </div>
        <div>
          <a href="http://localhost:3000/quiz/quiz3-2B">
            2-2. 모달 라이브러리 경고창 만들기! 주소는 여기입니다.
          </a>
        </div>
      </Div>
    </>
  );
}

import styled from "@emotion/styled";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");

  const onToggleModal = (data) => {
    setResult(data.address);
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Div>
        <div>2-3. 모달 라이브러리와 주소검색 라이브러리 연동하기</div>
        <div>
          <Button onClick={onToggleModal}>모달열기</Button>
          <span>{result ? result : "입력된 주소가 없습니다."}</span>
          {/* 모달 삭제하고 새로 만드는 방법 */}
          {isOpen && (
            <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
              <DaumPostcode onComplete={onToggleModal} />
            </Modal>
          )}
        </div>
        <div>
          <a href="http://localhost:3000/quiz/quiz3-2D">
            2-4. State 세부 작동 방식! 주소는 여기입니다.
          </a>
        </div>
      </Div>
    </>
  );
}

import styled from "@emotion/styled";
import { useState } from "react";
import { Modal, Button } from "antd";

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

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Div>
        <div>2-2. 모달 라이브러리 경고창 만들기</div>
        <div>
          <Button type="primary" onClick={onToggleModal}>
            모달열기
          </Button>
          <Modal
            title="게시글 등록"
            visible={isOpen}
            onOk={onToggleModal}
            onCancel={onToggleModal}
          >
            게시글이 등록되었습니다.
          </Modal>
        </div>
        <div>
          <a href="http://localhost:3000/quiz/quiz3-2C">
            2-3. 모달 라이브러리와 주소검색 라이브러리 연동하기! 주소는
            여기입니다.
          </a>
        </div>
      </Div>
    </>
  );
}

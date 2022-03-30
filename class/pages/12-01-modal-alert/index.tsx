import { Modal, Button, Space } from "antd";

export default function ModalAlertPage() {
  const onClickInfo = () => {
    Modal.info({
      title: "디스 이즈 모달창",
      content: (
        <div>
          <p>모달 모달모달 ㅁ돨모다뢈도라모다로</p>
          <p>
            모달 모달모달 ㅁ돨모다뢈도라모다로...모달 모달모달
            ㅁ돨모다뢈도라모다로...
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  const onClickSuccess = () => {
    Modal.success({
      content: "게시물 등록에 성공했습니다.",
    });
  };

  const onClickError = () => {
    Modal.error({
      title: "This is an error message",
      content: "게시물 등록에 실패했습니다..",
    });
  };

  const onClickWarning = () => {
    Modal.warning({
      title: "This is a warning message",
      content: "너.. 경고!",
    });
  };
  return (
    <div>
      <Space wrap>
        <Button onClick={onClickInfo}>정보</Button>
        <Button onClick={onClickSuccess}>성공!</Button>
        <Button onClick={onClickError}>실패!</Button>
        <Button onClick={onClickWarning}>경고!</Button>
      </Space>
    </div>
  );
}

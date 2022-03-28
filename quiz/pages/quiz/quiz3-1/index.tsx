import { Rate, DatePicker, Space } from "antd";
import { useState } from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

const Div = styled.div`
  width: 1000px;
  margin: 0 auto;
  border: 1px solid #bdbdbd;
  padding: 20px;
`;

export default function Quiz31Page() {
  const [value1, setValue1] = useState(3);
  const [value2, setValue2] = useState("");

  // 1-1. 별점 라이브러리
  const handleChange = (value: number) => {
    setValue1(value);
    alert(`${value}점`);
  };

  // 1-2. 달력 라이브러리
  const onChangeCalender = (date, dateString) => {
    setValue2(dateString);
  };
  return (
    <>
      <Div>
        <div>1-1. 별점 라이브러리</div>
        <Rate onChange={handleChange} value={value1} />
        <div>{value1}점</div>
      </Div>

      <Div>
        <div>1-2. 달력 라이브러리</div>
        <Space direction="vertical">
          <DatePicker onChange={onChangeCalender} />
        </Space>
        <div>{value2}</div>
      </Div>

      <Div>
        <div>1-3. 유튜브 라이브러리</div>
        <ReactPlayer
          url="https://youtu.be/OoMIAo0a2TA"
          width={800}
          height={600}
          muted={true}
          playing={true}
        />
      </Div>
    </>
  );
}

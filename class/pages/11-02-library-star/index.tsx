import { Rate } from "antd";
import { useState } from "react";

export default function LibararyStarPage() {
  const [value, setValue] = useState(3);

  // antd 개발자들이 만든 onChange이기 때문에 event대신 value가 들어오는데
  // 미리 클릭한 별점이 value에 들어가도록 세팅 되어 있다.
  const handleChange = (value: number) => {
    setValue(value);
  };

  return <Rate onChange={handleChange} value={value} />;
}

import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #bdbdbd;
`;
export const getDate = (date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDate();
  return `${yyyy}.${mm}.${dd}`;
};

export default function Quiz07Callback() {
  const [state, setState] = useState([]);
  // callback
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0];
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const UserId = JSON.parse(res.target.response).UserId;
        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${UserId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          setState(JSON.parse(res.currentTarget.response).map((e) => e));
        });
      });
    });
  };

  // promise
  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setState(res.data);
      });
  };

  // async/await
  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const UserId = res2.data.UserId;

    const res3 = await axios.get(
      `http://koreanjson.com/posts?userId=${UserId}`
    );
    setState(res3.data);
  };
  console.log(state);

  return (
    <div>
      <div>
        <button onClick={onClickCallback}>Callback</button>
        <button onClick={onClickPromise}>Promise</button>
        <button onClick={onClickAsyncAwait}>Async/Await</button>
      </div>
      {state?.map((e) => (
        <Wrapper key={uuidv4()}>
          <div>제목 : {e.title}</div>
          <div>내용 : {e.content}</div>
          <div>작성일 : {getDate(e.createdAt)}</div>
          <div>수정일 : {getDate(e.updatedAt)}</div>
        </Wrapper>
      ))}
    </div>
  );
}
// 1. 3개 버튼 각각 모두에 대해서,
// 다음 주소 http://numbersapi.com/random?min=1&max=200
// 를 사용하여 임의의 숫자를 하나 불러와 주세요.

// 2. 불러온 숫자를 가지고 다음 주소
// https://koreanjson.com/posts/숫자
// 에 해당하는 게시물을 불러와 주세요.

// 3. 불러온 게시물을 작성한 작성자(UserId)가 쓴 다른 게시물 목록을 다음 주소
// https://koreanjson.com/posts?userId=작성자ID
// 를 활용하여 불러와 주세요.

// 4. 위 4번의 게시글 목록을 위 버튼 을 클릭했을 때, 결과로 나타내 보세요.
// (state에 저장하고 map으로 출력해 보세요.)

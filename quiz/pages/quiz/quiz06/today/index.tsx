import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  cursor: pointer;
  border: 1px solid #bdbdbd;
  &:hover {
    background: #ff2900;
    color: #ffffff;
  }
  width: 100%;
`;

const MyColumn = styled.div`
  width: 50%;
  border-right: 1px solid #bdbdbd;
  padding: 0px 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  & > div {
    padding-right: 20px;
  }
`;

const realToday = new Date().toISOString().slice(0, 10);

export default function TodayPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [watchListItems, setWatchListItems] = useState([]);

  const onClickBoard = (data) => () => {
    const today = new Date().toISOString().slice(0, 10);
    const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
    const temp1 = watchList.filter((el) => el._id === data._id);
    if (temp1.length === 1) {
      return;
    }
    const { __typename, ...newEl } = data;
    watchList.push({ ...newEl, today });
    localStorage.setItem("watchList", JSON.stringify(watchList));
    setWatchListItems(watchList.filter((e) => e.today === realToday));
  };

  useEffect(() => {
    const watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
    setWatchListItems(watchList.filter((e) => e.today === realToday));
  }, []);

  return (
    <Wrapper>
      <div>
        <div>게시물 목록</div>
        {data?.fetchBoards.map((el) => (
          <MyRow key={el._id} onClick={onClickBoard(el)}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </div>
      <div>
        <div>오늘 본 게시물</div>
        {watchListItems.map((el) => (
          <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </div>
    </Wrapper>
  );
}

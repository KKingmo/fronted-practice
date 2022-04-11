import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function SearchPage() {
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // 0.2초가 지날 때까지 아무런 작업이 없으면 실행될 부분.
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);

  // 입력할 때마다 getDebounce가 실행된다.
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // 검색기능은 검색어를 포함해서 useQuery를 다시 날리면 된다.
  // 이는 search내용을 넣고 refetch하면 된다.
  // 검색하기 버튼을 눌렀을 때 검색결과의 1페이지에 해당하는 것을 먼저 보여주기
  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };

  // 페이지 숫자를 클릭할 때마다 refetch
  const onClickPage = (event: ChangeEvent<HTMLInputElement>) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      검색어입력 : <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyword === el}>
                  {el}
                </Word>
              ))}
          </MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Word key={index} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Word>
      ))}
    </div>
  );
}

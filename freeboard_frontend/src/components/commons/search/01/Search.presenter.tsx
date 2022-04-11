import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

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

export default function SearchUI(props) {
  return (
    <div>
      검색어입력 : <input type="text" onChange={props.onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {props.data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>
            {el.title
              .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </Word>
              ))}
          </MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Word key={index} onClick={props.onClickPage} id={String(index + 1)}>
          {index + 1}
        </Word>
      ))}
    </div>
  );
}

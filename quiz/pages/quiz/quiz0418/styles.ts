import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: yellow;

  & > div {
    padding: 10px;
  }

  & > div > span {
    display: inline-block;
    width: 130px;
  }

  & > button {
    margin: 10px 10px 20px 140px;
    width: 300px;
    background-color: #ff2900;
    color: white;
    cursor: pointer;
  }
`;

export const BoardList = styled.div`
  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & > div:nth-of-type(1) > span {
    background-color: crimson;
    color: #ffffff;
  }

  & > div > span {
    display: inline-block;
    padding: 10px;
    margin: 0px 10px;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid #bdbdbd;
  }

  & > div > span:nth-of-type(2) {
    width: 300px;
  }

  & > div > span:nth-of-type(3) {
    width: 500px;
  }

  & > div > button {
    background-color: #ff2900;
    color: white;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

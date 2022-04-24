import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const Background = styled.div`
  width: 680px;
  height: 700px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

export const Shape = styled.div`
  position: absolute;
  border-radius: 50%;

  &:first-of-type {
    width: 200px;
    height: 200px;
    background: #19783c;
    left: 0;
    top: 0;
    transform: translate(-50%, 0);
  }

  &:last-of-type {
    width: 300px;
    height: 300px;
    background: #f5da4f;
    transform: translate(50%, 0);
    right: 0;
    bottom: 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 680px;
  max-width: 95%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(8, 7, 16, 0.2);
  padding: 50px 35px;

  * {
    letter-spacing: 0.1rem;
    outline: none;
    border: none;
  }

  h3 {
    font-family: "Gompyo", sans-serif;
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
`;

export const Error = styled.div`
  height: 30px;
  color: #ff2900;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const OptionItem = styled.div`
  & > span {
    padding: 0px 10px;
    color: #8c8c8c;
    font-size: 0.8rem;
    cursor: pointer;
  }

  &:nth-of-type(n + 2) > span {
    border-left: 1px solid #e5e5e5;
  }

  & > span:hover {
    color: #000000;
  }
`;

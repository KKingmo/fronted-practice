import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080710;
`;

export const Background = styled.div`
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

export const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;

  &:first-of-type {
    background: #19783c;
    left: -80px;
    top: -80px;
  }

  &:last-of-type {
    background: #f5da4f;
    right: -30px;
    bottom: -80px;
  }
`;
export const Form = styled.div`
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;

  * {
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }

  h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }
`;
export const Label = styled.label`
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
`;
export const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;

  ::placeholder {
    color: #e5e5e5;
  }
`;

export const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
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
    color: #e5e5e5;
    font-size: 0.8rem;
  }

  &:nth-of-type(n + 2) > span {
    border-left: 1px solid #e5e5e5;
  }
`;

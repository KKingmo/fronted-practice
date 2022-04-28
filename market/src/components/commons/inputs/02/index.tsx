import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

export const Input = styled.input`
  display: block;
  padding: 0 10px;
  width: 100%;
  height: 80px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s;

  ::placeholder {
    color: #8c8c8c;
  }

  &:hover {
    border-color: #017045;
  }
`;

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input02(props: IProps) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue || ""}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
    />
  );
}

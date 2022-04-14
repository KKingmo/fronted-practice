import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input``;

interface IProps {
  type: "text" | "password";
  // react-hook-form에서 타입을 제곹한다.
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  return <Input type={props.type} {...props.register} />;
}

import styled from "@emotion/styled";

interface IProps {
  isActive: "boolean";
  title: "string";
}

const Button = styled.button``;

export default function Button01(props: IProps) {
  return <Button>{props.title}</Button>;
}

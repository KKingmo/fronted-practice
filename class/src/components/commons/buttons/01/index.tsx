import styled from "@emotion/styled";

interface IProps {
  isActive: "boolean";
  title: "string";
}

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props: IProps) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}

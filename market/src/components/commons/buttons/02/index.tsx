import styled from "@emotion/styled";

interface IProps {
  isActive: "boolean";
  title: "string";
}

const Button = styled.button`
  padding: 12px 14px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  border-radius: 15px;
  background: #000000;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  background: ${(props) => (props.lightColor ? "#fcd91f" : "#bdbdbd")};
  color: #000000;
  &:hover {
    background: #fcd91f;
  }
`;

export default function Button02(props: IProps) {
  return (
    <Button onClick={props.onClick} lightColor={props.lightColor}>
      {props.title}
    </Button>
  );
}
